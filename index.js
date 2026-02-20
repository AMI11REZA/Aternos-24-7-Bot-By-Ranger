'use strict';
const mc = require('minecraft-protocol');

const HOST = process.env.HOST;
const PORT = Number.parseInt(process.env.PORT, 10) || 25565;
const USERNAME = process.env.USERNAME || 'AFKBot_ByRanger';
const RECONNECT_DELAY = 5000;

const pos = Object.seal({ x: 0, y: 0, z: 0, yaw: 0, pitch: 0, onGround: true });

let client = null;
let moveTimer = null;
let gcTimer = null;
let forward = true;
let reconnecting = false;

function stopTimers() {
  if (moveTimer) { clearInterval(moveTimer); moveTimer = null; }
  if (gcTimer)   { clearInterval(gcTimer);   gcTimer   = null; }
}

function cleanup() {
  stopTimers();
  if (!client) return;
  try { client.removeAllListeners(); } catch {}
  try { (client.socket?.destroy ?? client.end?.bind(client) ?? (() => {}))(); } catch {}
  client = null;
}

function scheduleReconnect() {
  if (reconnecting) return;
  reconnecting = true;
  cleanup();
  setTimeout(() => { reconnecting = false; connect(); }, RECONNECT_DELAY);
}

function setPos(p) {
  pos.x = +p.x || 0;
  pos.y = +p.y || 0;
  pos.z = +p.z || 0;
}

function startMove() {
  if (moveTimer) return;
  moveTimer = setInterval(() => {
    pos.z += forward ? 0.25 : -0.25;
    forward = !forward;
    try { client?.write('position_look', pos); } catch {}
  }, 100);
}

function connect() {
  pos.x = pos.y = pos.z = pos.yaw = pos.pitch = 0;
  pos.onGround = true;
  forward = true;

  client = mc.createClient({
    host: HOST,
    port: PORT,
    username: USERNAME,
    version: '1.8.9',
    keepAlive: true,
    hideErrors: true,
    chatLengthLimit: 0,
  });

  client.once('position', p => { setPos(p); startMove(); });

  client.on('update_health', h => {
    if ((h?.health ?? 1) <= 0)
      try { client.write('client_command', { actionId: 0 }); } catch {}
  });

  client.on('respawn', () => {
    stopTimers();
    client.once('position', p => { setPos(p); startMove(); });
  });

  gcTimer = setInterval(() => { global.gc?.(); }, 60_000);

  client.once('end',   scheduleReconnect);
  client.once('error', scheduleReconnect);
}

process.on('uncaughtException',  scheduleReconnect);
process.on('unhandledRejection', scheduleReconnect);
process.on('SIGTERM', () => { cleanup(); process.exit(0); });
process.on('SIGINT',  () => { cleanup(); process.exit(0); });

connect();

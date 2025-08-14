const mc = require('minecraft-protocol');

function connectBot() {
  let client = mc.createClient({
    host: 'Enter Server IP Here',
    port: Enter Port Here,
    username: 'AFKBot_ByRanger',
    version: '1.21.1'    //Do Not Change The Version, Install Via Version Or Via Backward Depending On You'r Aternos Server Version.
  });

  let pos = { x: 0, y: 0, z: 0 }, yaw = 0, timer = null;

  client.once('position', p => {
    pos = { x: p.x, y: p.y, z: p.z };
    timer = setInterval(() => {
      try {
        client.write('position_look', { x: pos.x, y: pos.y, z: pos.z, yaw: (yaw = (yaw + 45) % 360), pitch: 0, onGround: true });
      } catch {}
    }, 1000);
  });

  client.on('update_health', h => {
    if (h.health <= 0) client.write('client_command', { actionId: 0 });
  });

  const cleanup = () => {
    if (timer) clearInterval(timer);
    if (client) {
      client.removeAllListeners();
      if (client.socket) client.socket.destroy();
    }
    pos = null;
    yaw = null;
    timer = null;
    client = null;
    global.gc?.();
  };

  client.on('end', () => { cleanup(); setTimeout(connectBot, 100); });
  client.on('error', () => { cleanup(); setTimeout(connectBot, 100); });
}

setInterval(() => { try { global.gc(); } catch {} }, 60000);

connectBot();

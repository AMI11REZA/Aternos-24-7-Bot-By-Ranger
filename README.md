<div align="center">

# 🎮 Aternos 24/7 Bot

### Keep Your Aternos Server Running Forever! ⚡

[![GitHub stars](https://img.shields.io/github/stars/AMI11REZA/Aternos-24-7-Bot-By-Ranger?style=social)](https://github.com/AMI11REZA/Aternos-24-7-Bot-By-Ranger/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/AMI11REZA/Aternos-24-7-Bot-By-Ranger?style=social)](https://github.com/AMI11REZA/Aternos-24-7-Bot-By-Ranger/network/members)
[![GitHub issues](https://img.shields.io/github/issues/AMI11REZA/Aternos-24-7-Bot-By-Ranger)](https://github.com/AMI11REZA/Aternos-24-7-Bot-By-Ranger/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)](https://hub.docker.com/)

<p align="center">
  <img src="https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif" width="400" alt="Minecraft Bot">
</p>

**The ONLY working method to keep your Aternos server online 24/7! 🚀**

[Features](#-features) • [Installation](#-installation) • [Configuration](#-configuration) • [License](#-license)

---

</div>

## 🌟 Features

- 🏃 **Anti-AFK System** - Keeps your bot active by moving automatically
- 🔄 **Auto Reconnect** - Reconnects automatically if connection drops
- 💀 **Auto Respawn** - Automatically respawns when the bot dies
- 🎯 **Lightweight** - Minimal resource usage, perfect for free hosting
- ⚡ **Fast & Reliable** - Built with minecraft-protocol for best performance
- 🐳 **Docker Ready** - Easy deployment with pre-built Docker image

## 📋 Prerequisites

Before you start, make sure you have:

- ✅ An Aternos account with a server
- ✅ A Claw Cloud account (free tier available)
- ✅ Your Aternos server address and port

## 🚀 Installation

### Step 1: Prepare Your Aternos Server

1. 🌐 Go to your Aternos server dashboard
2. 📦 **Install ViaRewind plugin** on your server
   - Go to **Plugins** section
   - Search for **ViaRewind**
   - Click **Install**
3. ⚙️ Configure server settings:
   - Go to **Options**
   - Enable **Cracked Mode**
   - Disable **Forced Gamemode**
4. ✅ Make sure your server is **online** before proceeding

### Step 2: Deploy to Claw Cloud

1. 🌐 Go to [https://eu-central-1.run.claw.cloud](https://eu-central-1.run.claw.cloud)

2. 🔐 **Sign In** to your account (or create one if you don't have it)

3. 🚀 Click on **App Launch Pad**

4. 📦 Click on **Deploy** button

5. ⚙️ **Configure Container Settings:**
   
   - **Container Name:** Choose any name you want (e.g., `aternos-bot`)
   - **Image Name:** `ranger11/24-7aternos`

6. 💻 **Resource Settings:**
   
   - **CPU:** Set to the lowest option
   - **Memory:** Set to the lowest option

7. 🔧 **Environment Variables:**
   
   Click on **Environment Variables** section and add:
   
   ```
   HOST=Your_Aternos_Server_Address
   PORT=Your_Aternos_Server_Port
   ```
   
   **Example:**
   ```
   HOST=example.aternos.me
   PORT=12345
   ```

8. 🚀 Click **Deploy** button

9. ✅ **Confirm** the deployment

### Step 3: Final Setup

1. 🎮 Go back to your Aternos server dashboard
2. 👥 Navigate to **Players** tab
3. 🔍 Find `AFKBot_ByRanger` in the list
4. 🎭 Set the bot's gamemode to **Spectator**

✅ **Done!** Your bot is now keeping your server online 24/7! 🎉

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `HOST` | Your Aternos server address | ✅ Yes | `example.aternos.me` |
| `PORT` | Your Aternos server port | ✅ Yes | `12345` |

### Finding Your Server Address and Port

1. Go to your Aternos server page
2. Look at the server address (e.g., `example.aternos.me:12345`)
3. The part before `:` is your **HOST**
4. The number after `:` is your **PORT**

## 🎯 How It Works

The bot connects to your Minecraft server and:

1. 🔄 Moves slightly every 100ms to prevent AFK detection
2. 💓 Maintains connection with keepalive packets
3. 💀 Auto-respawns when it dies
4. 🔁 Reconnects automatically if disconnected
5. 🧹 Performs periodic memory cleanup

## 🛠️ Technical Details

- **Protocol:** minecraft-protocol
- **Version:** 1.8.9 (Compatible with higher versions via ViaRewind)
- **Movement:** Forward/backward micro-movements (0.25 blocks)
- **Memory:** Auto garbage collection every 60 seconds
- **Reconnection:** Instant reconnect on errors or disconnects
- **Docker:** Lightweight Alpine-based image

## 🐳 Docker

The bot is available as a pre-built Docker image:

```bash
docker pull ranger11/24-7aternos
```

### Running with Docker

```bash
docker run -d \
  --name aternos-bot \
  -e HOST=your_server.aternos.me \
  -e PORT=12345 \
  ranger11/24-7aternos
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you keep your server online!

## 👨‍💻 Author

**Ranger_11**

- GitHub: [@AMI11REZA](https://github.com/AMI11REZA)

## 📢 Disclaimer

This bot is created for educational purposes. Use it responsibly and respect Aternos's terms of service.

## ❓ FAQ

<details>
<summary><b>Why do I need ViaRewind?</b></summary>

ViaRewind allows the bot (running on 1.8.9) to connect to servers with higher versions. It's a compatibility plugin.
</details>

<details>
<summary><b>Can I use this on other hosting platforms?</b></summary>

Yes! As long as the platform supports Docker containers, you can deploy this bot anywhere.
</details>

<details>
<summary><b>Is this against Aternos ToS?</b></summary>

Using bots might be against Aternos terms of service. Use at your own risk.
</details>

<details>
<summary><b>The bot keeps disconnecting, what should I do?</b></summary>

Make sure:
- Your server is online
- ViaRewind is installed
- The bot is in spectator mode
- Your HOST and PORT are correct
</details>

## 🔄 Updates

- **v1.0.0** - Initial release with basic AFK prevention
- **v1.1.0** - Added Docker support
- **v1.2.0** - Improved memory management and auto-reconnect

---

<div align="center">

**Made with ❤️ by Ranger_11**

*Keep your Minecraft server running, always!* 🎮✨

</div>

<div align="center">

# 🎮 Aternos 24/7 Bot

### Keep Your Aternos Server Running Forever! ⚡

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://www.javascript.com/)
[![Minecraft](https://img.shields.io/badge/Minecraft-1.8.9-green.svg)](https://www.minecraft.net/)
[![Made with ❤️](https://img.shields.io/badge/Made%20with-%E2%9D%A4%EF%B8%8F-red.svg)](https://github.com/AMI11REZA)

<p align="center">
  <img src="https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif" width="400" alt="Minecraft Bot">
</p>

**The ONLY working method to keep your Aternos server online 24/7! 🚀**

[Features](#-features) • [Installation](#-installation) • [Configuration](#-configuration) • [Deploy](#-deploy) • [License](#-license)

---

</div>

## 🌟 Features

- 🏃 **Anti-AFK System** - Keeps your bot active by moving automatically
- 🔄 **Auto Reconnect** - Reconnects automatically if connection drops
- 💀 **Auto Respawn** - Automatically respawns when the bot dies
- 🎯 **Lightweight** - Minimal resource usage, perfect for free hosting
- ⚡ **Fast & Reliable** - Built with minecraft-protocol for best performance
- 🔧 **Easy Setup** - Simple configuration with environment variables

## 📋 Prerequisites

Before you start, make sure you have:

- ✅ An Aternos account with a server
- ✅ A GitHub account (to fork this repo)
- ✅ A Zeabur account (for free hosting)

## 🚀 Installation

### Step 1: Prepare Your Aternos Server

1. 🌐 Go to your Aternos server dashboard
2. 📦 Install **ViaRewind** plugin *(Skip if your server version is 1.8.9)*
3. ⚙️ Go to **Options** → Enable **Cracked Mode**
4. 🎮 Make sure **Forced Gamemode** is disabled in server settings

### Step 2: Fork & Configure

1. 🍴 **Fork** this repository to your GitHub account
2. 📝 Open `index.js` in your forked repo
3. ✏️ Set your environment variables (see [Configuration](#-configuration))

### Step 3: Deploy to Zeabur

1. 🌐 Go to [zeabur.com](https://zeabur.com) and sign up
2. 📊 Click on **Dashboard** → **Create New Project**
3. 🌍 Select **Silicon Valley, United States** as region
4. 🔗 Choose **GitHub** for deployment
5. 📂 Select your forked repository
6. 🚀 Click **Deploy**

> ⚠️ **Important:** Your Aternos server must be online during deployment!

### Step 4: Final Setup

1. 🎮 Go to your Aternos server
2. 👥 Navigate to **Players** tab
3. 🔍 Find `AFKBot_ByRanger` in the list
4. 🎭 Set gamemode to **Spectator**

✅ Done! Your bot is now keeping your server online 24/7! 🎉

## ⚙️ Configuration

The bot uses environment variables for configuration. Set these in your deployment platform:

| Variable | Description | Example |
|----------|-------------|---------|
| `HOST` | Your Aternos server IP | `example.aternos.me` |
| `PORT` | Your Aternos server port | `12345` |

**Note:** The bot username is hardcoded as `AFKBot_ByRanger` and version is set to `1.8.9` for compatibility.

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

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check [issues page](../../issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you keep your server online!

## 👨‍💻 Author

**Ranger_11**

- GitHub: [@AMI11REZA](https://github.com/AMI11REZA)

## 📢 Disclaimer

This bot is created for educational purposes. Use it responsibly and respect Aternos's terms of service.

---

<div align="center">

**Made with ❤️ by Ranger_11**

*Keep your Minecraft server running, always!* 🎮✨

</div>

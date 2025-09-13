# Metascan Pinokio Installer

A [Pinokio](https://pinokio.computer/) installer for [Metascan](https://github.com/pakfur/metascan) - AI Media metadata scanner and viewer with Real-ESRGAN upscaling.

![Metascan Screenshot](https://github.com/pakfur/metascan/raw/main/screenshots/main_interface.png)

## 🚀 What is Metascan?

Metascan is a desktop application for browsing, organizing, and upscaling AI-generated images and videos. It automatically extracts metadata from AI generation tools like ComfyUI, SwarmUI, and Fooocus.

### ✨ Key Features
- **🖼️ Browse AI Media**: Organized thumbnail view of images and videos
- **📊 Metadata Extraction**: Extracts prompts, models, LoRAs from AI tools  
- **⬆️ AI Upscaling**: Real-ESRGAN powered 2x/4x/8x enhancement
- **🔍 Smart Filtering**: Filter by prompts, models, directories, file types
- **⭐ Favorites System**: Mark and organize preferred media
- **🎬 Video Support**: MP4, AVI, MOV with thumbnail generation
- **🎨 Theme Support**: Multiple material design themes

## 📦 Installation via Pinokio

### Method 1: Direct Install (Recommended)
1. Open Pinokio
2. Click **"Install via URL"**
3. Paste: `https://github.com/MLOTRAI/metascan-pinokio`
4. Click **"Install"**

### Method 2: Manual Install
1. Clone this repo to: `~/pinokio/api/metascan/`
2. Restart Pinokio
3. Find "Metascan" in your apps and click "Install"

## 🎯 Quick Start Guide

1. **📥 Install**: Click "Install" button (downloads ~915MB of AI models)
2. **🚀 Launch**: Click "Start" to open the desktop application
3. **⚙️ Configure**: Click "Config" to add your AI image/video folders
4. **🔍 Scan**: Click "Scan" to index your media and extract metadata
5. **📱 Browse**: Use the left panel filters to find specific content
6. **⬆️ Upscale**: Right-click any image/video → "Upscale" for AI enhancement

## 🛠️ System Requirements

- **Python 3.8+** (automatically handled by Pinokio)
- **Git** (for cloning repositories)
- **FFMPEG** (for video processing):
  - **macOS**: `brew install ffmpeg`
  - **Ubuntu**: `sudo apt install ffmpeg`
  - **Windows**: Download from [FFmpeg.org](https://ffmpeg.org/download.html)

## 🎨 Supported AI Tools

Metascan can extract metadata from:
- **ComfyUI** workflows and parameters
- **SwarmUI** generation settings
- **Fooocus** metadata and prompts
- **A1111** (Automatic1111) parameters
- **Custom formats** with extensible parser system

## 🔧 Troubleshooting

### Installation Issues
- **Black screen**: Check Pinokio console for error messages
- **Git errors**: Ensure Git is installed on your system
- **Python errors**: Make sure Python 3.8+ is available
- **Network timeouts**: Be patient during model downloads (~915MB)

### Runtime Issues
- **No thumbnails**: Install FFMPEG for video processing
- **Scanning slow**: Normal for large collections (uses SQLite indexing)
- **Upscaling fails**: Check GPU compatibility for Real-ESRGAN

## 📝 Usage Tips

- **Organize folders**: Create separate folders for different AI tools
- **Use keywords**: Filter by prompt keywords for quick finding
- **Batch operations**: Select multiple images for batch upscaling
- **Backup settings**: Your configuration is stored in `config.json`

## 🔗 Related Projects

- **Original Metascan**: [pakfur/metascan](https://github.com/pakfur/metascan)
- **Pinokio**: [pinokiocomputer/pinokio](https://github.com/pinokiocomputer/pinokio)
- **Real-ESRGAN**: [xinntao/Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN)

## 📄 License

Apache License 2.0 - same as the original Metascan project

## 🤝 Contributing

Issues and pull requests welcome! This installer helps make Metascan more accessible via Pinokio's one-click installation system.

### How to Contribute
1. Fork this repository
2. Test your changes with Pinokio
3. Submit a pull request with clear description
4. Report issues with detailed steps to reproduce

## ⭐ Star This Project

If this Pinokio installer helps you, please give it a star! It helps others discover this tool.

---

**Made with ❤️ for the AI community**

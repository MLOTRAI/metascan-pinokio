# Metascan Pinokio Installer

A [Pinokio](https://pinokio.computer/) installer for [Metascan](https://github.com/pakfur/metascan) - AI Media metadata scanner and viewer with Real-ESRGAN upscaling.

## 🚀 What is Metascan?

Metascan is a desktop application for browsing, organizing, and upscaling AI-generated images and videos. It automatically extracts metadata from AI generation tools like ComfyUI, SwarmUI, and Fooocus.

### Key Features
- **Browse AI Media**: Organized thumbnail view of images and videos
- **Metadata Extraction**: Extracts prompts, models, LoRAs from AI tools
- **AI Upscaling**: Real-ESRGAN powered 2x/4x/8x enhancement
- **Smart Filtering**: Filter by prompts, models, directories, file types
- **Favorites System**: Mark and organize preferred media
- **Video Support**: MP4, AVI, MOV with thumbnail generation

## 📦 Installation via Pinokio

### Method 1: Direct Install (Recommended)
1. Open Pinokio
2. Go to the "Discover" tab
3. Paste this URL: `https://github.com/YOUR_USERNAME/metascan-pinokio`
4. Click "Install"

### Method 2: Manual Install
1. Clone this repo to: `~/pinokio/api/metascan/`
2. Restart Pinokio
3. Find "Metascan" in your apps and click "Install"

## 🎯 Quick Start

1. **Install**: Click the "Install" button (downloads ~915MB of AI models)
2. **Launch**: Click "Start" to open the desktop app
3. **Configure**: Click "Config" to add your AI image/video folders
4. **Scan**: Click "Scan" to index your media and extract metadata
5. **Browse**: Use filters to find specific content
6. **Upscale**: Right-click any image/video → "Upscale" for AI enhancement

## 🛠️ Requirements

- **Python 3.8+**
- **FFMPEG** (for video processing)
  - macOS: `brew install ffmpeg`
  - Ubuntu: `sudo apt install ffmpeg`
  - Windows: Download from [FFmpeg.org](https://ffmpeg.org/)

## 🔗 Related Projects

- **Original Metascan**: [pakfur/metascan](https://github.com/pakfur/metascan)
- **Pinokio**: [pinokiocomputer/pinokio](https://github.com/pinokiocomputer/pinokio)

## 📄 License

Apache License 2.0 - same as the original Metascan project

## 🤝 Contributing

Issues and pull requests welcome! This installer helps make Metascan more accessible via Pinokio's one-click installation system.

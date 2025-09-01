# 📱 Automação de Testes Mobile - WebdriverIO

Projeto de automação de testes mobile para o aplicativo native-demo-app usando WebdriverIO, Appium e padrão Page Object.

## 🚀 Quick Start

### Pré-requisitos
- Node.js v16+
- Java JDK 11+
- Android Studio (para Android)
- Xcode (para iOS - apenas macOS)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/wdio-mobile-automation.git
cd wdio-mobile-automation

# Instale as dependências
npm install

# Instale o Appium globalmente
npm install -g appium

# Instale os drivers
appium driver install uiautomator2  # Android
appium driver install xcuitest      # iOS (apenas macOS)

# Baixe o app de teste
mkdir -p apps
wget https://github.com/webdriverio/native-demo-app/releases/download/v1.0.8/Android-NativeDemoApp-0.4.0.apk -P apps/
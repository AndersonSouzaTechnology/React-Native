# 📱 Configuração do Aplicativo (app.json)

## 🎯 Visão Geral
O arquivo `app.json` é o arquivo de configuração principal do Expo. Ele define como o aplicativo se comporta em diferentes plataformas e ambientes.

## 📋 Estrutura Completa Explicada

```json
{
  "expo": {
    "name": "instasujeito",              // Nome do aplicativo que aparece no dispositivo
    "slug": "instasujeito",              // Identificador único do projeto no Expo
    "version": "1.0.0",                  // Versão atual do aplicativo
    "orientation": "portrait",           // Orientação fixa em retrato (vertical)
    "icon": "./assets/icon.png",         // Ícone do aplicativo (arquivo PNG)
    "userInterfaceStyle": "light",       // Tema da interface (light/dark/automatic)
    "newArchEnabled": true,              // Habilita a nova arquitetura do React Native
    "splash": {
      "image": "./assets/splash-icon.png",  // Imagem da tela de carregamento
      "resizeMode": "contain",              // Como a imagem se ajusta na tela
      "backgroundColor": "#ffffff"          // Cor de fundo da tela de carregamento
    },
    "ios": {
      "supportsTablet": true              // Suporte para tablets iOS (iPad)
    },
    "android": {
      "adaptiveIcon": {                   // Ícone adaptativo para Android
        "foregroundImage": "./assets/adaptive-icon.png",  // Imagem principal do ícone
        "backgroundColor": "#ffffff"      // Cor de fundo do ícone adaptativo
      },
      "edgeToEdgeEnabled": true           // Habilita o modo edge-to-edge no Android
    },
    "web": {
      "favicon": "./assets/favicon.png"   // Ícone que aparece na aba do navegador
    }
  }
}
```

## 🔧 Configurações Principais

### **📱 Informações Básicas**
- **`name`**: Nome exibido no dispositivo do usuário
- **`slug`**: Identificador único usado pelo Expo (deve ser único globalmente)
- **`version`**: Versão do aplicativo (formato semântico: major.minor.patch)

### **🎨 Interface Visual**
- **`orientation`**: Orientação da tela
  - `portrait`: Apenas vertical
  - `landscape`: Apenas horizontal
  - `default`: Permite ambas
- **`userInterfaceStyle`**: Tema da interface
  - `light`: Tema claro
  - `dark`: Tema escuro
  - `automatic`: Segue o sistema

### **🏗️ Arquitetura**
- **`newArchEnabled`**: Habilita a nova arquitetura do React Native
  - Melhora performance e estabilidade
  - Recomendado para projetos novos

### **🎬 Tela de Carregamento (Splash Screen)**
- **`splash.image`**: Imagem exibida durante o carregamento
- **`splash.resizeMode`**: Como a imagem se ajusta
  - `contain`: Mantém proporção, pode ter espaços vazios
  - `cover`: Preenche toda a tela, pode cortar partes
  - `stretch`: Estica a imagem para preencher
- **`splash.backgroundColor`**: Cor de fundo da tela

### **🍎 Configurações iOS**
- **`ios.supportsTablet`**: Se o app funciona em iPads
- **`ios.bundleIdentifier`**: Identificador único da Apple Store
- **`ios.buildNumber`**: Número do build para a App Store

### **🤖 Configurações Android**
- **`android.adaptiveIcon`**: Ícone que se adapta aos temas do sistema
- **`android.package`**: Nome do pacote Android (ex: com.empresa.app)
- **`android.versionCode`**: Código da versão para Google Play
- **`android.edgeToEdgeEnabled`**: Aproveita toda a tela do dispositivo

### **🌐 Configurações Web**
- **`web.favicon`**: Ícone que aparece na aba do navegador
- **`web.bundler`**: Ferramenta de build (webpack/metro)

## 🖼️ Assets Necessários

### **Ícones do Aplicativo:**
- **`icon.png`**: Ícone principal (1024x1024px)
- **`adaptive-icon.png`**: Ícone adaptativo Android (1024x1024px)
- **`favicon.png`**: Ícone web (16x16px ou 32x32px)

### **Tela de Carregamento:**
- **`splash-icon.png`**: Imagem da splash screen (dimensões variadas)

## 🚀 Comandos Úteis

```bash
# Visualizar configurações
expo config

# Validar configurações
expo doctor

# Gerar ícones automaticamente
expo install expo-app-icon-utils

# Build para produção
expo build:android
expo build:ios
```

## 📝 Configurações Avançadas (Opcionais)

```json
{
  "expo": {
    "privacy": "public",                 // Visibilidade no Expo
    "sdkVersion": "53.0.0",             // Versão do SDK Expo
    "platforms": ["ios", "android"],     // Plataformas suportadas
    "githubUrl": "https://github.com/...", // URL do repositório
    "primaryColor": "#000000",           // Cor principal do app
    "backgroundColor": "#ffffff",        // Cor de fundo padrão
    "notification": {
      "icon": "./assets/notification-icon.png",
      "color": "#000000"
    },
    "updates": {
      "enabled": true,                   // Habilita atualizações OTA
      "checkAutomatically": "ON_LOAD"   // Quando verificar atualizações
    },
    "assetBundlePatterns": [
      "**/*"                            // Quais arquivos incluir no build
    ]
  }
}
```

## 🎯 Boas Práticas

1. **📝 Nomes descritivos**: Use nomes claros para `name` e `slug`
2. **🎨 Ícones consistentes**: Mantenha o mesmo design em todos os ícones
3. **🔢 Versionamento**: Siga o padrão semântico (1.0.0, 1.1.0, etc.)
4. **📱 Testes**: Teste em diferentes dispositivos e orientações
5. **🔐 Identificadores únicos**: Use `slug` e `bundleIdentifier` únicos

## 🆘 Problemas Comuns

### **❌ Slug já existe**
```bash
# Erro: Slug 'meuapp' já está em uso
# Solução: Use um slug único
"slug": "meuapp-seuusername"
```

### **❌ Ícones não carregam**
```bash
# Erro: Arquivo não encontrado
# Solução: Verifique se os arquivos existem em ./assets/
```

### **❌ Splash screen não aparece**
```bash
# Erro: Imagem não carrega
# Solução: Verifique o caminho e formato da imagem
```

## 📚 Referências

- [Documentação Oficial do Expo](https://docs.expo.dev/workflow/configuration/)
- [Guia de Ícones](https://docs.expo.dev/guides/app-icons/)
- [Configuração de Splash Screen](https://docs.expo.dev/guides/splash-screens/)

---

*Este arquivo documenta as configurações essenciais para o desenvolvimento com Expo.* 
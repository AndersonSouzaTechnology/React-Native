# 📱 InstaSujeito - Documentação do Código

## 🎯 Visão Geral
O InstaSujeito é um clone simplificado do Instagram desenvolvido em React Native. O aplicativo permite visualizar um feed de posts com funcionalidade de curtidas interativas.

## 🏗️ Estrutura do Projeto

```
instasujeito/
├── App.js                    # Componente principal do aplicativo
├── index.js                  # Ponto de entrada da aplicação
├── app.json                  # Configurações do Expo
├── package.json              # Dependências do projeto
├── src/
│   ├── Lista.js             # Componente do post (versão simplificada)
│   └── Lista/               # Estrutura alternativa modular
│       └── index.js         # Componente do post (versão estruturada)
├── assets/                  # Imagens e ícones
│   ├── icon.png
│   ├── splash-icon.png
│   └── favicon.png
├── README_CODIGO.md         # Esta documentação
└── CONFIGURACAO_APP.md      # Explicações do app.json
```

## 📂 Componentes Principais

### 1. **index.js** - Ponto de Entrada
```javascript
import { registerRootComponent } from 'expo';
import App from './App';

// Registra o componente App como raiz da aplicação
registerRootComponent(App);
```

**Responsabilidades:**
- 🚀 **Ponto de entrada** da aplicação
- 📱 **Registra o componente** principal no sistema
- 🔧 **Configura o ambiente** para Expo Go e builds nativos
- 🎯 **Equivale ao AppRegistry** do React Native tradicional

### 2. **App.js** - Componente Principal
```javascript
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [...]  // Array com dados dos posts
    };
  }
}
```

**Responsabilidades:**
- 🏠 **Container principal** da aplicação
- 📊 **Gerencia o estado** do feed de posts
- 🎨 **Renderiza o header** com logo e botões
- 📋 **Controla a FlatList** que exibe os posts

**Estrutura do Feed:**
```javascript
{
  id: '1',                    // ID único do post
  nome: 'Lucas Silva',        // Nome do usuário
  descricao: 'Texto do post', // Legenda/descrição
  imgperfil: 'url...',        // URL da foto de perfil
  imgPublicacao: 'url...',    // URL da imagem do post
  likeada: false,             // Se o usuário curtiu (true/false)
  likers: 0                   // Número total de curtidas
}
```

### 3. **Lista** - Componente do Post (Duas Versões)

#### **Versão A: src/Lista.js** (Arquivo único)
```javascript
// Estrutura simples em um arquivo único
import Lista from './src/Lista';
```

#### **Versão B: src/Lista/index.js** (Estrutura modular)
```javascript
// Estrutura modular em pasta própria
import Lista from './src/Lista';  // Importa automaticamente o index.js
```

**Diferenças entre as versões:**
- 📁 **Versão A**: Arquivo único, mais simples
- 📁 **Versão B**: Pasta própria, mais organizada e escalável
- 🔄 **Funcionamento**: Ambas são idênticas em funcionalidade
- 🎯 **Uso**: O App.js importa de `./src/Lista` (automático)

**Responsabilidades (ambas versões):**
- 🖼️ **Renderiza cada post** individual
- ❤️ **Gerencia o sistema de curtidas**
- 🎨 **Aplica layout** similar ao Instagram
- 📱 **Controla interações** do usuário

## 🏗️ Padrões de Organização

### **📁 Estrutura Modular (Recomendada)**
```
src/
├── Lista/
│   ├── index.js        # Componente principal
│   ├── styles.js       # Estilos (opcional)
│   └── utils.js        # Funções auxiliares (opcional)
├── Header/
│   └── index.js
└── Common/
    └── Button/
        └── index.js
```

**Vantagens:**
- 🎯 **Escalabilidade**: Fácil adicionar novos arquivos
- 🔧 **Manutenibilidade**: Código bem organizado
- 📦 **Reutilização**: Componentes independentes
- 🎨 **Separação**: Estilos e lógica separados

### **📄 Estrutura Simples (Atual)**
```
src/
├── Lista.js
├── Header.js
└── Button.js
```

**Vantagens:**
- 🚀 **Simplicidade**: Menos arquivos para gerenciar
- 📖 **Clareza**: Fácil localizar componentes
- ⚡ **Rapidez**: Desenvolvimento mais ágil
- 🎯 **Foco**: Ideal para projetos menores

## ⚙️ Arquivos de Configuração

### **app.json** - Configurações do Expo
```json
{
  "expo": {
    "name": "instasujeito",           // Nome do app
    "slug": "instasujeito",           // Identificador único
    "version": "1.0.0",               // Versão
    "orientation": "portrait",        // Orientação
    "icon": "./assets/icon.png",      // Ícone
    "splash": { ... },                // Tela de carregamento
    "ios": { ... },                   // Configurações iOS
    "android": { ... },               // Configurações Android
    "web": { ... }                    // Configurações Web
  }
}
```

**Principais configurações:**
- 📱 **Informações básicas** do aplicativo
- 🎨 **Interface visual** e temas
- 🏗️ **Arquitetura** e performance
- 🎬 **Tela de carregamento** (splash screen)
- 🍎 **Configurações iOS** específicas
- 🤖 **Configurações Android** específicas
- 🌐 **Configurações Web** para PWA

### **package.json** - Dependências
```json
{
  "dependencies": {
    "expo": "~53.0.17",           // Framework Expo
    "react": "19.0.0",            // React
    "react-native": "0.79.5"      // React Native
  }
}
```

## 🔄 Fluxo de Funcionamento

### **1. Inicialização da Aplicação**
```
index.js → registerRootComponent(App) → App.js → render()
```

### **2. Renderização do Feed**
```
App.js → FlatList → Lista.js (para cada post) → render()
```

### **3. Sistema de Curtidas**
```
Usuário toca → TouchableOpacity → like() → setState() → re-render
```

### **4. Importação de Componentes**
```javascript
// Ambas as formas funcionam:
import Lista from './src/Lista';           // Arquivo único
import Lista from './src/Lista/index';     // Pasta estruturada
import Lista from './src/Lista/';          // Pasta (automático)
```

## ⚙️ Funcionalidades

### 🔄 Sistema de Curtidas
```javascript
like() {
  let feed = this.state.feed;
  
  if (feed.likeada === true) {
    // Remove curtida
    this.setState({
      feed: {
        ...feed,
        likeada: false,
        likers: feed.likers - 1
      }
    });
  } else {
    // Adiciona curtida
    this.setState({
      feed: {
        ...feed,
        likeada: true,
        likers: feed.likers + 1
      }
    });
  }
}
```

**Como funciona:**
1. 👆 **Usuário toca** no botão de curtir
2. 🔍 **Verifica** se já foi curtido
3. ➕ **Adiciona** ou ➖ **remove** a curtida
4. 📊 **Atualiza** o contador de curtidas
5. 🎨 **Muda** o emoji visual (❤️ ↔ 🤍)

### 📱 Interface do Usuário

#### **Header do App:**
```javascript
<View style={styles.header}>
  <Text style={styles.logo}>📷</Text>         // Logo (câmera)
  <Text style={styles.logoText}>InstaSujeito</Text> // Nome do app
  <Text style={styles.send}>📤</Text>         // Botão de envio
</View>
```

#### **Estrutura de um Post:**
```javascript
<View style={styles.areaFeed}>
  {/* 1. Header do post */}
  <View style={styles.viewPerfil}>
    <Image source={{uri: imgperfil}} />  // Foto de perfil
    <Text>{nome}</Text>                  // Nome do usuário
  </View>
  
  {/* 2. Imagem principal */}
  <Image source={{uri: imgPublicacao}} />
  
  {/* 3. Botões de ação */}
  <View style={styles.areaBtn}>
    <TouchableOpacity onPress={this.like}>
      <Text>{likeada ? '❤️' : '🤍'}</Text>  // Curtir
    </TouchableOpacity>
    <Text>📤</Text>                       // Enviar
  </View>
  
  {/* 4. Informações do post */}
  <View style={styles.viewRodape}>
    <Text>{likers} curtidas</Text>        // Contador
    <Text>{nome}</Text>                   // Nome
    <Text>{descricao}</Text>              // Descrição
  </View>
</View>
```

## 🎨 Estilização

### **Cores Principais:**
- 🟢 **Fundo do app:** `#FAFAFA` (cinza claro)
- ⚪ **Fundo dos posts:** `#FFF` (branco)
- ❤️ **Curtida ativa:** `#FF3040` (vermelho)
- ⚫ **Texto geral:** `#000` (preto)

### **Componentes Visuais:**
- 🔲 **Fotos de perfil:** Circulares (50x50px)
- 📐 **Fotos de post:** Altura fixa (400px)
- 📱 **Header:** Altura 55px com sombra
- 🎯 **Emojis:** Tamanho 25px para ícones

## 🔧 Tecnologias Utilizadas

- ⚛️ **React Native:** Framework principal
- 📱 **Expo:** Plataforma de desenvolvimento
- 🎨 **StyleSheet:** Estilização nativa
- 📋 **FlatList:** Lista performática de posts
- 🖼️ **Image:** Componente para imagens
- 👆 **TouchableOpacity:** Botões interativos

## 🚀 Executar o Projeto

```bash
# Navegar para o diretório
cd "Seção_3/32.InstaSujeito Pt 1/instasujeito"

# Instalar dependências
npm install

# Executar o aplicativo
npm start
```

## 📝 Pontos de Melhoria

1. 🖼️ **Imagens reais:** Substituir emojis por ícones PNG
2. 🔗 **Navegação:** Adicionar telas de perfil e detalhes
3. 💾 **Persistência:** Salvar curtidas localmente
4. 🔄 **Refresh:** Implementar pull-to-refresh
5. 📊 **Estado global:** Usar Context API ou Redux
6. 🏗️ **Organização:** Migrar para estrutura modular completa

## 👨‍💻 Conceitos Aprendidos

### **🏗️ Arquitetura:**
- ✅ **Ponto de entrada** com `index.js`
- ✅ **Componentes de classe** em React Native
- ✅ **Configuração** com `app.json`
- ✅ **Estrutura de projeto** Expo
- ✅ **Organização modular** vs arquivo único

### **⚛️ React Native:**
- ✅ **Gerenciamento de estado** com `this.state`
- ✅ **Props** para passar dados entre componentes
- ✅ **FlatList** para listas performáticas
- ✅ **Estilização** com StyleSheet
- ✅ **Interações** com TouchableOpacity

### **🎨 Design:**
- ✅ **Renderização condicional** com operadores ternários
- ✅ **Spread operator** para atualizar estado
- ✅ **Binding** de métodos em classes
- ✅ **Layout flexível** com Flexbox

### **📁 Organização:**
- ✅ **Estrutura de pastas** modular
- ✅ **Separação de responsabilidades**
- ✅ **Importação automática** de index.js
- ✅ **Escalabilidade** do código

## 📚 Documentação Adicional

- 📖 **CONFIGURACAO_APP.md:** Explicações detalhadas do `app.json`
- 🎯 **Comentários no código:** Explicações linha por linha
- 🔧 **Comandos úteis:** Para desenvolvimento e build
- 📁 **Estruturas alternativas:** Diferentes formas de organizar o código

---

*Este código foi desenvolvido como parte do curso de React Native, demonstrando conceitos fundamentais de desenvolvimento mobile com Expo e diferentes padrões de organização de código.* 
// Importa a função registerRootComponent do Expo
// Esta função é responsável por registrar o componente principal da aplicação
import { registerRootComponent } from 'expo';

// Importa o componente App que contém toda a lógica da aplicação
import App from './App';

// registerRootComponent é equivalente a AppRegistry.registerComponent('main', () => App);
// Esta função faz o seguinte:
// 1. Registra o componente App como componente raiz da aplicação
// 2. Garante que o app funcione tanto no Expo Go quanto em builds nativos
// 3. Configura o ambiente adequadamente para ambos os casos
// 4. Define o ponto de entrada da aplicação React Native

// Registra o componente App como componente principal da aplicação
registerRootComponent(App);

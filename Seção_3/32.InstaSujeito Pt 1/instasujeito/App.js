import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

// Importando o componente Lista que renderiza cada post do feed
import Lista from './src/Lista';

class App extends Component {

  constructor(props){
    super(props);
    // Estado inicial do aplicativo contendo o feed de posts
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: false, // Indica se o post foi curtido pelo usuário
          likers: 0 // Número total de curtidas
         },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3 // Este post já tem 3 curtidas
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'Guilherme', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32 // Post mais popular com 32 curtidas
        }
      ]
     };
 
  }

  render() {
    return (
      <View style={styles.container}>
      
      {/* Header do aplicativo - Similar ao Instagram */}
      <View style={styles.header}>
        {/* Logo do aplicativo (usando emoji como placeholder) */}
        <TouchableOpacity>
          <Text style={styles.logo}>📷</Text>
        </TouchableOpacity>

        {/* Nome do aplicativo */}
        <Text style={styles.logoText}>InstaSujeito</Text>

        {/* Botão de envio/mensagem (usando emoji como placeholder) */}
        <TouchableOpacity>
          <Text style={styles.send}>📤</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de posts do feed */}
      <FlatList
      showsHorizontalScrollIndicator={false} // Remove indicador horizontal
      keyExtractor={(item) => item.id} // Usa o ID do post como chave única
      data={this.state.feed} // Dados do feed
      renderItem={ ({item}) => <Lista data={item} /> } // Renderiza cada post usando o componente Lista
      />

      </View>
    );
  }
}

// Estilos do componente principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', // Cor de fundo similar ao Instagram
  },
  header:{
    height: 55, // Altura padrão do header
    backgroundColor: '#FFF', // Fundo branco
    flexDirection: 'row', // Organiza elementos horizontalmente
    alignItems: 'center', // Centraliza verticalmente
    justifyContent: 'space-between', // Distribui espaço entre elementos
    padding: 5,
    borderBottomWidth: 0.2, // Borda sutil na parte inferior
    shadowColor: '#000', // Sombra para dar profundidade
    elevation: 1, // Elevação no Android
  },
  logo: {
    fontSize: 30, // Tamanho do emoji da câmera
    padding: 5,
  },
  logoText: {
    fontSize: 24, // Tamanho do texto do logo
    fontWeight: 'bold', // Texto em negrito
    color: '#000', // Cor preta
  },
  send:{
    fontSize: 24, // Tamanho do emoji de envio
    padding: 5,
  }
});

export default App;
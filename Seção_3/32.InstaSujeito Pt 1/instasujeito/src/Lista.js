import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

// Componente que representa cada post individual no feed
class Lista extends Component {

  constructor(props) {
    super(props);
    // Estado local do componente - cada post tem seu próprio estado
    this.state = {
      feed: this.props.data // Recebe os dados do post através das props
    };

    // Vincula o método 'like' ao contexto da classe
    this.like = this.like.bind(this);
  }

  // Método responsável por gerenciar as curtidas
  like() {
    let feed = this.state.feed;

    // Verifica se o post já foi curtido
    if (feed.likeada === true) {
      // Se já foi curtido, remove a curtida
      this.setState({
        feed: {
          ...feed, // Mantém todos os dados existentes
          likeada: false, // Marca como não curtido
          likers: feed.likers - 1 // Diminui o contador de curtidas
        }
      });
    } else {
      // Se não foi curtido, adiciona a curtida
      this.setState({
        feed: {
          ...feed, // Mantém todos os dados existentes
          likeada: true, // Marca como curtido
          likers: feed.likers + 1 // Aumenta o contador de curtidas
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.areaFeed}>
        {/* Header do post - Foto de perfil e nome do usuário */}
        <View style={styles.viewPerfil}>
          <Image
            source={{ uri: this.state.feed.imgperfil }} // Carrega foto de perfil da URL
            style={styles.fotoPerfil}
          />
          <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
        </View>

        {/* Imagem principal do post */}
        <Image
          resizeMode="cover" // Garante que a imagem cubra toda a área
          style={styles.fotoPublicacao}
          source={{ uri: this.state.feed.imgPublicacao }} // Carrega imagem do post da URL
        />

        {/* Área dos botões de ação (curtir e enviar) */}
        <View style={styles.areaBtn}>
          {/* Botão de curtir */}
          <TouchableOpacity onPress={this.like}>
            <Text style={[styles.iconeLike, { color: this.state.feed.likeada ? '#FF3040' : '#000' }]}>
              {/* Emoji muda dependendo se foi curtido ou não */}
              {this.state.feed.likeada ? '❤️' : '🤍'}
            </Text>
          </TouchableOpacity>
          {/* Botão de enviar/compartilhar */}
          <TouchableOpacity style={styles.btnSend}>
            <Text style={styles.iconeSend}>📤</Text>
          </TouchableOpacity>
        </View>

        {/* Área do rodapé com informações do post */}
        <View style={styles.viewRodape}>
          {/* Mostra o número de curtidas apenas se for maior que 0 */}
          {this.state.feed.likers > 0 && (
            <Text style={styles.likes}>
              {this.state.feed.likers} {this.state.feed.likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
          )}
          {/* Nome do autor do post */}
          <Text style={styles.nomeRodape}>
            {this.state.feed.nome}
          </Text>
          {/* Descrição/legenda do post */}
          <Text style={styles.descRodape}>
            {this.state.feed.descricao}
          </Text>
        </View>
      </View>
    );
  }
}

// Estilos do componente Lista
const styles = StyleSheet.create({
  areaFeed: {
    backgroundColor: '#FFF', // Fundo branco para cada post
    marginBottom: 10, // Espaçamento entre posts
  },
  viewPerfil: {
    flexDirection: 'row', // Organiza foto e nome horizontalmente
    flex: 1,
    alignItems: 'center', // Centraliza verticalmente
    padding: 8,
  },
  fotoPerfil: {
    width: 50, // Tamanho da foto de perfil
    height: 50,
    borderRadius: 25, // Torna a foto circular
  },
  nomeUsuario: {
    fontSize: 22, // Tamanho da fonte do nome
    textAlign: 'left',
    color: '#000000',
    marginLeft: 5, // Espaçamento entre foto e nome
  },
  fotoPublicacao: {
    flex: 1,
    height: 400, // Altura fixa para todas as fotos do post
    alignItems: 'center',
  },
  areaBtn: {
    flexDirection: 'row', // Organiza botões horizontalmente
    padding: 5,
  },
  iconeLike: {
    fontSize: 25, // Tamanho do emoji de curtir
    padding: 5,
  },
  btnSend: {
    paddingLeft: 5, // Espaçamento à esquerda do botão de enviar
  },
  iconeSend: {
    fontSize: 25, // Tamanho do emoji de enviar
    padding: 5,
  },
  viewRodape: {
    flexDirection: 'column', // Organiza elementos do rodapé verticalmente
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  likes: {
    fontWeight: 'bold', // Texto das curtidas em negrito
    marginLeft: 5,
  },
  nomeRodape: {
    fontSize: 18, // Tamanho da fonte do nome no rodapé
    fontWeight: 'bold', // Nome em negrito
    color: '#000000',
    paddingTop: 5,
  },
  descRodape: {
    paddingTop: 2,
    color: '#000000', // Cor da descrição
  },
});

export default Lista; 
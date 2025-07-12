// Importações necessárias do React Native
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

// Componente Lista - Versão estruturada em pasta própria
// Este arquivo representa uma organização mais modular do componente
// onde cada componente fica em sua própria pasta com um arquivo index.js
class Lista extends Component {

  constructor(props) {
    super(props);
    // Estado local do componente - cada post mantém seu próprio estado
    this.state = {
      feed: this.props.data // Recebe os dados do post através das props do componente pai
    };

    // Vincula o método 'like' ao contexto da classe (binding)
    // Necessário para que 'this' funcione corretamente dentro do método
    this.like = this.like.bind(this);
  }

  // Método responsável por gerenciar o sistema de curtidas
  like() {
    let feed = this.state.feed;

    // Verifica se o post já foi curtido pelo usuário
    if (feed.likeada === true) {
      // Se já foi curtido, remove a curtida
      this.setState({
        feed: {
          ...feed, // Spread operator - mantém todos os dados existentes
          likeada: false, // Marca como não curtido
          likers: feed.likers - 1 // Diminui o contador de curtidas
        }
      });
    } else {
      // Se não foi curtido, adiciona a curtida
      this.setState({
        feed: {
          ...feed, // Spread operator - mantém todos os dados existentes
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
          resizeMode="cover" // Garante que a imagem cubra toda a área sem distorção
          style={styles.fotoPublicacao}
          source={{ uri: this.state.feed.imgPublicacao }} // Carrega imagem do post da URL
        />

        {/* Área dos botões de ação (curtir e enviar) */}
        <View style={styles.areaBtn}>
          {/* Botão de curtir - Interativo */}
          <TouchableOpacity onPress={this.like}>
            <Text style={[styles.iconeLike, { color: this.state.feed.likeada ? '#FF3040' : '#000' }]}>
              {/* Emoji muda dependendo se foi curtido ou não */}
              {/* ❤️ = curtido (vermelho) | 🤍 = não curtido (preto) */}
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
          {/* Renderização condicional usando operador && */}
          {this.state.feed.likers > 0 && (
            <Text style={styles.likes}>
              {/* Pluralização automática: curtida (1) vs curtidas (2+) */}
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

// Estilos do componente Lista usando StyleSheet
const styles = StyleSheet.create({
  areaFeed: {
    backgroundColor: '#FFF', // Fundo branco para cada post
    marginBottom: 10, // Espaçamento entre posts no feed
  },
  viewPerfil: {
    flexDirection: 'row', // Organiza foto e nome horizontalmente
    flex: 1,
    alignItems: 'center', // Centraliza verticalmente
    padding: 8, // Espaçamento interno
  },
  fotoPerfil: {
    width: 50, // Largura da foto de perfil
    height: 50, // Altura da foto de perfil
    borderRadius: 25, // Metade da largura/altura para fazer um círculo perfeito
  },
  nomeUsuario: {
    fontSize: 22, // Tamanho da fonte do nome do usuário
    textAlign: 'left', // Alinhamento do texto à esquerda
    color: '#000000', // Cor preta para o texto
    marginLeft: 5, // Espaçamento entre foto e nome
  },
  fotoPublicacao: {
    flex: 1, // Ocupa todo o espaço horizontal disponível
    height: 400, // Altura fixa para todas as fotos do post
    alignItems: 'center', // Centraliza horizontalmente
  },
  areaBtn: {
    flexDirection: 'row', // Organiza botões horizontalmente
    padding: 5, // Espaçamento interno
  },
  iconeLike: {
    fontSize: 25, // Tamanho do emoji de curtir
    padding: 5, // Espaçamento interno do botão
  },
  btnSend: {
    paddingLeft: 5, // Espaçamento à esquerda do botão de enviar
  },
  iconeSend: {
    fontSize: 25, // Tamanho do emoji de enviar
    padding: 5, // Espaçamento interno do botão
  },
  viewRodape: {
    flexDirection: 'column', // Organiza elementos do rodapé verticalmente
    paddingLeft: 10, // Espaçamento à esquerda
    paddingRight: 10, // Espaçamento à direita
    paddingBottom: 10, // Espaçamento na parte inferior
  },
  likes: {
    fontWeight: 'bold', // Texto das curtidas em negrito
    marginLeft: 5, // Espaçamento à esquerda
  },
  nomeRodape: {
    fontSize: 18, // Tamanho da fonte do nome no rodapé
    fontWeight: 'bold', // Nome em negrito para destacar
    color: '#000000', // Cor preta
    paddingTop: 5, // Espaçamento na parte superior
  },
  descRodape: {
    paddingTop: 2, // Pequeno espaçamento acima da descrição
    color: '#000000', // Cor preta para a descrição
  },
});

// Exporta o componente para uso em outros arquivos
// Padrão ES6 modules para React Native
export default Lista; 
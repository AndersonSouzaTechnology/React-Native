// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Olá Mundo!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

// import React, { Component } from "react";
// import { View, Text, StyleSheet, Image } from "react-native";

// export default class App extends Component {
//   render() {

//     let nome = "Anderson";
//     let sobrenome = "Souza";
//     let immg = require('./assets/icon.png');

//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>Olá Mundo!</Text>
//         <Text style={styles.nome}>{nome} {sobrenome}</Text>
//         <Text style={styles.subText}>Utilizando classe</Text>
//         <Text style={styles.subText}>Sujeito Programador</Text>
//         <Text style={styles.debugText}>👇 Imagem deve aparecer aqui 👇</Text>
//         <Imagem source={immg} nomeDaImagem="EXPO" />
//       </View>
//     );
//   }
// }

// //Componente para exibir a imagem
// class Imagem extends Component {
//   render() {
//     return (
//       <View>
//         <Image source={this.props.source} style={styles.image} />
//         <Text style={styles.debugText}>{this.props.nomeDaImagem}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   nome: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   text: {
//     fontSize: 40,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   subText: {
//     fontSize: 18,
//     color: "#666",
//     marginTop: 10,
//   },
//   debugText: {
//     fontSize: 14,
//     color: "#999",
//     marginTop: 15,
//     fontStyle: 'italic',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginTop: 20,
//     borderRadius: 10,
//     backgroundColor: '#f0f0f0',
//     borderWidth: 2,
//     borderColor: '#ccc',
//   },
// });


import React, { Component } from "react";
import { View, Text, StyleSheet, Button} from "react-native";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: " ",
            sobrenome: " Henrique",
            idade: 52,
            profissao: "Programador",
        };
        this.entrar = this.entrar.bind(this);
    }

    entrar(nome) {
        this.setState({nome: nome});
    }

    render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.texto, {color: "red"}]}>NOME: {this.state.nome}</Text>
        <Text style={styles.texto}>SOBRENOME: {this.state.sobrenome}</Text>
        <Text style={styles.texto}>IDADE: {this.state.idade}</Text>
        <Text style={styles.texto}>PROFISSÃO: {this.state.profissao}</Text>
        <Text style={styles.destaque}>🔴 TELA PRETA 🔴</Text>
        <Button title="Clique aqui" onPress={() => this.entrar("João")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00ff00",
    marginBottom: 10,
    textAlign: "center",
  },
  destaque: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffff00",
    marginTop: 30,
    textAlign: "center",
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 5,
  },
});

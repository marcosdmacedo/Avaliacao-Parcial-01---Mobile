import  React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Questao01(props) {
  
  const lista = ["Desenho II", "Mobile", "Projeto IV"]

  return (
    <View style={styles.containe} title='Questao01'>
      {props.children}
      <View title='Questao01A'>
        <Text style={styles.paragraph}>Estudante</Text>
        <Text>Nome: {props.nome}</Text>
        <Text>Sobrenome: {props.sobrenome}</Text>
        <Text>Curso: {props.curso}</Text>
      </View>
  
      <View title='Questão01B'>
        <Text style={styles.paragraph}>Disciplinas</Text>
        {lista.map((disciplinas => <Text>{disciplinas}</Text>))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containe: {
    backgroundColor: 'green'
  },
  paragraph: {
    margin: 10,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  texto: {
    fontSize: 15,
    fontWeight: 'Medium',
    color: 'white'
   }
});

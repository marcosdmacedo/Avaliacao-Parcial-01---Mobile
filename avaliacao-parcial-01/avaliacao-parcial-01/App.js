import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import from local files
import Questao01 from './components/Questao01.jsx' 
// <Questao01 nome="Marcos" sobrenome="Macêdo" curso="DD"/>
// import Questao02 from "./components/Questao02.jsx"
// import Questao03 from './components/Questao03.jsx'
// import Questao04 from './components/Questao04.jsx'

export default function App() {
  return (
    <View style={styles.paragraph}>
      <Questao01 nome="Marcos" sobrenome="Macêdo" curso="DD"/>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

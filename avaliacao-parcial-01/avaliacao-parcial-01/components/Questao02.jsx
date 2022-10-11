import  React from 'react';
import { Text, View, StyleSheet, Button, TextInput} from 'react-native';
import { useState } from 'react'

export default function Questao02() {

  const [numero1,setNumero1] = useState(0)
  const [numero2,setNumero2] = useState(0)
  const [resultado,setResultado] = useState(0)
  
  function somar(){
    let n1 = parseInt(numero1)
    let n2 = parseInt(numero2)
    setResultado(n1+n2)
  }
   function subtrair(){
    let n1 = parseInt(numero1)
    let n2 = parseInt(numero2)
    setResultado(n1-n2)
  }
   function multiplicar(){
    let n1 = parseInt(numero1)
    let n2 = parseInt(numero2)
    setResultado(n1*n2)
  }
   function dividir(){
    let n1 = parseInt(numero1)
    let n2 = parseInt(numero2)
    setResultado(n1/n2)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escreva os Numeros</Text>
      <TextInput 
      style={styles.texto} 
      placeholder={"Numero 1"} 
      onChangeText={(texto)=>setNumero1(texto)}
      />
      <TextInput
      style={styles.texto} 
      placeholder={"Numero 2"} 
      onChangeText={(texto)=>setNumero2(texto)}
      />

      <View style={{padding: 10}} style={styles.botoes}>
        <Button title='somar' onPress={somar}/>
        <Button title='subtrair'  onPress={subtrair}/>
        <Button title= 'multiplicar'  onPress={multiplicar}/>
        <Button title='dividir'  onPress={dividir}/>
      </View>

      <Text style={styles.texto}>Resultado: {resultado}</Text>

    </View>
  );
}

const styles = StyleSheet.create ({
    botoes: {
      padding: 7,
      margin: 7,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 30,
    },
    texto: {
      margin: 1,
      borderWidth: 0.2,
      padding: 2.5,
      fontSize: 14,
      backgroundColor: 'green',
      color: 'white'
    },
    titulo: {
      fontSize: 18,
      fontWeight: 'bold'
    }
})
import { View, Text, Button, StyleSheet } from "react-native"
import { useState, useEffect } from "react"

export default function Questao03()  {

    const [id,setId] = useState(0)
    const [name,setName] = useState([])

    function acaoBotao(){
      setId(id+10)
    }
       useEffect(
        ()=>{

           fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${id}`)
           .then((res)=>res.json())
           .then(
              (resultado) =>{
                // console.log(resultado.results)
                setName(resultado.results)
              }
           )
        }
        
    )
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pokemons</Text>

            <View >
              {name.map((number) => <Text style={styles.texto}>{number.name}</Text>)}
             <Button title="Exibir" onPress={acaoBotao}/>
            </View>

        </View>
    )
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'green'
        },
        title: {
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 20,
            padding: 7,
            color: 'white'
        },
        texto: {
          fontSize: 15,
          fontWeight: 'Medium',
          color: 'white'
        },
        button: {
          padding: 10,
          width: 500,
          flexDirection: 'row',
          justifyContent: 'center'
        }
    }
)


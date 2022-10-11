import { View, Text, Button, StyleSheet } from "react-native"
import { useState, useEffect } from "react"

export default function Questao04()  {

    const [name,setName] = useState([])
    const [resultado,setResultado] = useState()

    function programaCalc(){
      let armazenar = 0

      for(let i=0;i<name.length;i++){
        if(armazenar < name[i].population){
          armazenar = name[i].population
          let posicao = i
          setResultado(name[posicao].name)
        }
      }
      console.log(armazenar)
      console.log(posicao)
    }

       useEffect(
        ()=>{

           fetch('https://restcountries.com/v2/region/africa?fields=name,population')
           .then((res)=>res.json())
           .then(
              (resultado) =>{
                console.log(resultado)
                setName(resultado)
              }
           )
        }
        
    )
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Paises da Africa</Text>

            {name.map((number) => <Text style={styles.texto}>{number.name} - {number.population}</Text>)}
            <View style={styles.botao0}>
              <Button title="mais Populosos" onPress={programaCalc}/>
            </View>
            <Text>Resultado: {resultado}</Text>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        title: {
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 20,
            padding: 7,
        },
        botao0: {
          padding: 10,
          width: 1000,
          flexDirection: 'row',
          justifyContent: 'center'
        },
        texto: {
          fontSize: 15,
          fontWeight: 'Medium'
        }
    }
)



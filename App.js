import React, { Component } from 'react';
import { View, Text, Button, Image ,StyleSheet} from 'react-native';

class App extends Component{



  render(){
    return(
      <View style={styles.area}>

        <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Eu sou texto 1</Text>
        <Text style={styles.alinhaTexto}>Eu sou texto 2</Text>
        <Text>Eu sou texto 3</Text>
        <Text style={styles.textoPrincipal}>Eu sou texto 4</Text>

      </View>
    );
  }

}


const styles = StyleSheet.create({
  area:{
    margin: 100
  },
  textoPrincipal:{
    fontSize:25,
    color: '#ff0000'
  },
  alinhaTexto:{
   textAlign: 'center', 
  },
})

export default App;






/*

class App extends Component{
  render(){
    let nome  = 'Steve Jobs';
    let texto = 'Steven Paul Jobs foi um inventor, empresário e magnata americano no setor da informática.'
    return (
      <View>
        
        <Text>Olá Mundo!</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{fontSize: 25,margin:15}} >
          {nome}
        </Text>
        <Jobs largura={500} altura={200} texto={texto} />
      </View>
    );
  }
}


class Jobs extends Component{
  render(){
    let img  = 'https://sujeitoprogramador.com/steve.png';

    return(
      <View>
        <Image 
          source={{uri: img}}
          style={{width: this.props.largura, height: this.props.altura}}
          />
        <Text style={{fontSize: 9.6}}> 
        {this.props.texto}
        </Text>
      </View>
    );
  }
}

export default App;


*/





/* function app(){
  return(
    <View>
      <Text>Olá Mundo!</Text>
    </View>
  );
}

export default app();
*/
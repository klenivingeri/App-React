import React, { Component } from 'react';
import { View, Text,Image} from 'react-native';


class App extends Component{
  render(){
    let nome  = 'Steve Jobs';
    let img  = 'https://sujeitoprogramador.com/steve.png';
    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{fontSize: 25,margin:15}} >
          {nome}
        </Text>
        <Image
          source={{uri: img }}
          style={{width: 300, height: 300}}
        />
      </View>
    );
  }
}

export default App;



/* function app(){
  return(
    <View>
      <Text>Olá Mundo!</Text>
    </View>
  );
}

export default app();
*/
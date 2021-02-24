import React, { Component } from 'react';
import { View, Text, Button, Image} from 'react-native';

class App extends Component{
  constructor(props){
      super(props);
      this.state = {
        nome: 'Erick'
      }
      this.entrar = this.entrar.bind(this);
  }
  entrar(nome){
    this.setState({
      nome: nome
    })
  }

  render(){
    return(
      <View style={{marginTop: 10}}>
        <Button title="Entrar " onPress={ () => this.entrar('Kleniving')} />
        <Text style={{fontSize: 23, color: 'blue', textAlign:'center'}} > 
          {this.state.nome}
        </Text>
      </View>
    );
  }

}

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
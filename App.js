import React, { Component } from 'react';
import { View, Text, Button, Image ,StyleSheet, TextInput} from 'react-native';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    };

    this.entrar = this.entrar.bind(this);
  }



  entrar(){
    if(this.state.input.length == 0){
      alert('Digite seu nome!')
      return;
    }
      this.setState({nome: 'Bem vindo: ' + this.state.input})
    
  }




  render(){
    return(
      <View style={styles.container}>

        <TextInput 
        style ={styles.input} 
        placeholder="Digite seu nome?"
        underlineColorAndroid="transparent"
        onChangeText= { (texto) => this.setState({input: texto})}/>


        <Button
        title="Entrar"
        type="button" 
        onPress={this.entrar}
         />
        <Text style={styles.texte}>{this.state.nome}</Text>
      </View>
    );
  }

}


export default App;


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  input:{
    height:45,
    borderWidth:1,
    borderColor:'#222',
    margin:10,
    fontSize:20,
    padding:10,
  },
  texte:{
    textAlign: 'center',
    fontSize:25,
  },

})

/**
 ***  justifyContent:
 * - flex-start
 * - center
 * - flex-end
 * - space-around
 * 
 *** alignItems:
 * - flex-start  
 * - center  
 * - flex-end
 * - stretch : quando não tem nada dentro pega toda linha
 * 
 */
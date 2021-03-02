import React, { Component } from 'react';
import { View, Text, Button, Image ,StyleSheet} from 'react-native';

class App extends Component{



  render(){
    return(
      <View style={{flex:1,backgroundColor:'#222'}}>

          <View style={ {height:65,  backgroundColor:'red'} } />
          <View style={ {flex:1,  backgroundColor:'green'} } />
          <View style={ {height:65,  backgroundColor:'yellow'} } />
  

      </View>
    );
  }

}


export default App;


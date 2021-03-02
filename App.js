import React, { Component } from 'react';
import { View, Text, Button, Image ,StyleSheet} from 'react-native';

class App extends Component{



  render(){
    return(
      <View style={{  flex:1,
                      flexDirection:'row',
                      alignItems:'flex-start',
                      justifyContent:'center'}}>

          <View style={ {height:50, width:50,  backgroundColor:'red'} } />
          <View style={ {height:50, width:50, backgroundColor:'green'} } />
          <View style={ {height:50, width:50, backgroundColor:'yellow'} } />
          <View style={ {height:50, width:50, backgroundColor:'blue'} } />
  

      </View>
    );
  }

}


export default App;

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
 * 
 */
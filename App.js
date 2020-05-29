import React from "react"
import {View, StyleSheet, Image, Vibration, TouchableHighlight} from 'react-native'

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      status: 'off',
    }
  }

  interruptor(){
    Vibration.vibrate(100)

    this.state.status == 'off' ? 
      this.setState({status: 'on'}) : 
        this.setState({  status: 'off' })
  }

  lampada(){
    if(this.state.status == 'off'){
      return require( './src/img/lampOff.png' )
    } else {
      return require( './src/img/lampOn.png' )
    }
  }

  imageButton(){
    if(this.state.status == 'off'){
      return require( './src/img/off.png' )
    } else {
      return require( './src/img/on.png' )
    }
  }

  render(){
    return(
      <View style={ this.state.status == 'off' ? styles.container : [styles.container, {backgroundColor: '#fbfbd9'}]}>
        
        <Image style={styles.imagem} source={ this.lampada() }/>
       
        <View> 
          <TouchableHighlight activeOpacity={0.1} onPress={ () => this.interruptor()}>
            <Image style={styles.imageButton} source={ this.imageButton() }/>
          </TouchableHighlight>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    paddingBottom: 100
  },
  imagem:{
    height: "70%",
    width: "60%"
  },
  imageButton:{
    height: 50,
    width: 200,
  }
})
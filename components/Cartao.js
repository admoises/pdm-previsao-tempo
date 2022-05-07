import React from 'react'
import { 
  ProgressViewIOSComponent,
    StyleSheet, 
    Text, 
    View 
} from 'react-native'

const Cartao = (props) => {
  return (
    <View
      style={{...styles.cartao, ...props.estilos}}>
        {props.children}
    </View>
  )
}

export default Cartao

const styles = StyleSheet.create({
  cartao:{
    alignItems: 'center',
    backgroundColor: 'white',
    elevantion: 4,
    padding: 12,
    borderRadius: 8
  }

})
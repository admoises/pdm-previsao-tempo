import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const previsaoItem = () => {
  return (
    <Cartao
        meusEstilos={styles.cartao}>
          <View style={styles.tela}>
            <Image
              style={styles.imagem}
              source={{
                uri: ''
              }}
            />
          </View>
    </Cartao>
  )
}

export default previsaoItem

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 4
    },
    tela: {
      flexDirection: 'row'
    },
    imagem: {
      width: 50,
      height: 50
    }
})
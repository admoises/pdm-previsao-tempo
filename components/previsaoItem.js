import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const previsaoItem = () => {
  return (
    <Cartao
        estilos={styles.cartao}>

    </Cartao>
  )
}

export default previsaoItem

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 4
    }
})
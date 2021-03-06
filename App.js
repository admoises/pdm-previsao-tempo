import { useState } from 'react'
import { 
  Button,
  FlatList,
  StyleSheet, 
  Text, 
  TextInput,
  View 
} from 'react-native'
import { 
  APP_ID,
  BASE_URL,
  CNT,
  LANGUAGE,
  PROTOCOL,
  UNITS
} from '@env'

export default function App() {
  const [cidade, setCidade] = useState('')
  const [previsoes, setPrevisoes] = useState([])
  const capturarCidade = (cidadeDigitada) =>{
    setCidade(cidadeDigitada)
  }
  const obterPrevisoes = () => {
    const url = encodeURI(`${PROTOCOL}://${BASE_URL}?units=${UNITS}&cnt=${CNT}&lang=${LANGUAGE}&appid=${APP_ID}&q=${cidade}`)
    console.log(url)
  }
  return (
    <View style={styles.container}>

      <View style={styles.cidadeView}>
        {/* View para entrada de dados */}
        <TextInput
          style={styles.cidadeTextInput}
          placeholder="Digite o nome da cidade"
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button
          title="OK"
          onPress={obterPrevisoes}
        />
      </View>
      {/* exibição das previsões */}
      <FlatList
        data={previsoes}
        renderItem={
          p => {
            <Text>{JSON.stringify(p)}</Text>
          }
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40,

  },
  cidadeView: {
    padding: 12,
    marginBottom: 8
  },
  cidadeTextInput: {
    padding: 12,
    borderBottomColor: '#FF9800', //React Material color palette
    borderBottomWidth: 2,
    marginBottom: 4,
    textAlign: 'center'
  },
  previsaoCard: {

  }
})

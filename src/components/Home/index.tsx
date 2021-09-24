import React from 'react'
import { View, Text} from 'react-native'


interface HomeProps {
  title:string
}

export function Home ({title}: HomeProps){
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}
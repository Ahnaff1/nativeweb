import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'

export default function Signup() {
  return (
    <View>
        <TextInput label={'Name'}/>
        <TextInput label={'Email'}/>
        <TextInput label={'Password'}/>
        <TextInput label={'Comfirm Password'}/>
        <Button>Signup</Button>
    </View>
  )
}

const styles = StyleSheet.create({})
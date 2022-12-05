import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { AuthContext } from '../Context/AuthContext'

export default function Login({navigation}) {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const {login}=useContext(AuthContext)
  return (
    <View>
       
      <TextInput label={'Email'} value={email} onChangeText={(t)=>setEmail(t)}/>
      <TextInput label={'Password'} value={password} onChangeText={(t)=>setPassword(t)}/>
      <Button onPress={()=>login(email,password)}>Login</Button>
      <Button onPress={()=>navigation.navigate("Signup")}>Signup</Button>
    </View>
  )
}

const styles = StyleSheet.create({})
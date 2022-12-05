import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import baseUrl from '../assets/baseUrl'

export default function Account() {
  const[details,setDetails]=useState()
useEffect(()=>{
  userDetails()
},[])
const userDetails=async()=>{
  await axios.get(baseUrl+'user/details/').then(r=>{
    console.log(r.data)
    setDetails(r.data[0])
  }).catch(e=>{
console.log(e.data)
  })
}

  return (
    <View>
     

      {details && <><Text>{details.username}</Text>
      <Text>{details.email}</Text></>}
      
    </View>
  )
}

const styles = StyleSheet.create({})
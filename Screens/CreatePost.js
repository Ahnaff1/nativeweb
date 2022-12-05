import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import baseUrl from '../assets/baseUrl';

export default function CreatePost() {
  const[title,setTitle]=useState('')
  const[content,setContent]=useState('')
  const[image,setImage]=useState()
  const selectImage=()=>{
    const options={
      nodata:true
    }
   launchImageLibrary(options,respose=>{
    console.log('res',respose)
    if(respose.assets){
      setImage(respose.assets[0])
    }
   })
    
  }

  const Post=async()=>{
await axios.post(baseUrl+'blog/',{
  title,
  content,
  image:image
}).then(r=>{console.log(r.data)}).catch(e=>{console.log(e.data)})
  }
  return (
    <View style={{padding:10}}>
     <TextInput mode="outlined" onChangeText={text=>setTitle(text)} label={'Title'}/>
     <TextInput mode="outlined" onChangeText={text=>setContent(text)}  label={'Content'}/>
    {image && <Image
      style={{height:150,width:"100%"}}
      source={{uri:image.uri}}
      />}
     <Button onPress={()=>selectImage()}>Select Image</Button>
     <Button onPress={()=>Post()}>Post</Button>
    </View>
  )
}

const styles = StyleSheet.create({})
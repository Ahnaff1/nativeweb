import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import baseUrl from '../assets/baseUrl'
import { FlatList } from 'react-native-gesture-handler'
import { IconButton } from 'react-native-paper'


export default function Home({navigation}) {
    const [post,setPost]=useState([])
    useEffect(()=>{
        getPost()
    },[])
    const getPost=async()=>{
        await axios.get(baseUrl+"blog/").then(r=>{
            console.log(r.data)
            setPost(r.data )
        }).catch(e=>{
            console.log(e)
        })
    }
  return (
    <View>
      <FlatList
      data={post}
      keyExtractor={item=>item.id}
      renderItem={({item})=>
      <View style={{marginVertical:5,backgroundColor:"white",borderRadius:10,marginHorizontal:10,padding:10}}>
      <Text>{item.author__username}</Text>
      <Text>{item.title}</Text>
      <Image
      style={{height:150,width:"100%"}}
      source={require("../assets/pics/ppp.jpg")}
      />
      <Text>{item.content}</Text>
      <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
        <IconButton
            icon='heart'/>
      
        <IconButton
            icon='chat'
            onPress={()=>navigation.navigate("PostDetails",{
                item:item
            })}
            
            />

      </View>
      </View>
    }
      />
    </View>
  )
}

const styles = StyleSheet.create({})
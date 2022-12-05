import { StyleSheet, Text, View,Image ,FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import baseUrl from '../assets/baseUrl'
// import { TextInput } from 'react-native-gesture-handler'
import { Button, TextInput } from 'react-native-paper'


export default function PostDetails({route}) {
    const[comment,setComment]=useState([])
    const[text,setText]=useState('')
    item=route.params.item
    useEffect(()=>{
        getdetails()
    },[])

    const postComment=async()=>{
        await axios.post(baseUrl+"blog/comment/",{
            post:parseInt(item.id),
            content:text
        }).then(r=>{
            console.log(">>",r.data)
            getdetails()
            setText('')
        })
        .catch(e=>{
            console.log(e.data)
        })
    }

    const getdetails=async()=>{
        await axios.post(baseUrl+'blog/details/',{id:item.id}).then(r=>{console.log(r.data)
        setComment(r.data)
        }).catch(e=>{
            console.log(e.data)
        })
    }
  return (<>
 
    <View style={{backgroundColor:"white",margin:10,borderRadius:10,padding:10}}>
      <Text>{item.author__username}</Text>
      <Text>{item.title}</Text>
      <Image
      style={{height:150,width:"100%"}}
      source={require("../assets/pics/ppp.jpg")}
      />
      <Text>{item.content}</Text>
    </View>
    <View style={{backgroundColor:"white",marginHorizontal:10,borderRadius:10,flex:1,padding:10}}>
        <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:15}}>Comments</Text>
        <FlatList
       data={comment} 
       keyExtractor={item=>item.id}
       renderItem={({item})=><View>
        <Text>{item.user__username}</Text>
        <Text>{item.content}</Text>
       </View>}
       />
<View style={{flexDirection:"row",justifyContent:"space-between"}}>
    <View style={{flex:1}}>
       <TextInput value={text} label={"Comment"} mode="outlined" onChangeText={text=>setText(text)}/>
       </View>
       <Button style={{alignSelf:"center"}} onPress={()=>postComment()}>Done</Button>
       </View>

    </View>
      </>
  )
}

const styles = StyleSheet.create({})
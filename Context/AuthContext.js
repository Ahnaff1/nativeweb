import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import Axios from 'react-native-axios/lib/core/Axios';
import baseUrl from '../assets/baseUrl';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [loggedin,setloggedin]=useState(false)

  useEffect(()=>{
    
checkloggedin()
  },[])

  const checkloggedin=async()=>{
    jwt=await AsyncStorage.getItem("jwt")
    if(jwt){
      setloggedin(true)
    }
  }

    const login=async(email,password)=>{
        console.log(email,password)
        await axios.post(baseUrl+"user/login/",{
            email,
            password
        }).then((r)=>{
            AsyncStorage.setItem('jwt',r.data.jwt)
            console.log(r.data)
            checkloggedin()
        }).catch(e=>{
            console.log(e)
        })
    }
  

  return (
    <AuthContext.Provider
      value={{login,loggedin}}>
      {children}
    </AuthContext.Provider>
  );
};
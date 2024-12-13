import { onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import {createContext, useContext, useState, useEffect} from 'react';


const BlogContext=createContext();

const Context = ({children}) => {
    const [currentUser, setCurrentUser]=useState(false);

    useEffect(() =>{
      const unsubscribe=onAuthStateChanged(auth, (user) =>{
        if(user){
          setCurrentUser(user);
        }
        else{
          setCurrentUser(null);
        }
      });
      return ()=>unsubscribe();
    },[currentUser]);

  return (
    <BlogContext.Provider value={{currentUser, setCurrentUser}}>{children}</BlogContext.Provider>
  )
}

export default Context;

export const Blog = () => useContext(BlogContext);

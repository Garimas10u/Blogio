import React from 'react'
import {createContext, useContext, useState} from 'react';

const BlogContext=createContext();

const Context = ({children}) => {
    const [currUser, setCurrUser]=useState(false);
  return (
    <BlogContext.Provider value={{currUser, setCurrUser}}>{children}</BlogContext.Provider>
  )
}

export default Context;

export const Blog = () => useContext(BlogContext);

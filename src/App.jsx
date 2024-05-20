import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const list = [
  
  {
    title: 'React',
    author: 'Jordan Walke',
    url: 'https:reactjs.org',
    objectID: 0
  },
  {
    title: 'Redux',
    author: 'Dan Abramov',
    url: 'https://reduxjs.org',
    objectID: 1
  },
  {
    title: 'TypeScript',
    author: 'John Smith',
    url: 'https://typescript.org',
    objectID: 4
  },
  {
    title: 'Flutter',
    author: 'Ian Mc Gregor',
    url: 'https://flutter.org',
    objectID: 2
  },
  {
    title: 'Next',
    author: 'unknown',
    url: 'https://nextjs.org',
    objectID: 3
  }
]






function App() {
 

  return ( 
    <div>
      <h1>My Hacker Stories</h1>
    
      <Search />
    <hr />

    
      <List />
    </div>
      
    );
}

function Search() {
 

  return ( 
    <div>
      <label htmlFor='search'>Search</label>
      <input id='search' type='text' />
    <hr />

    
      <List />
    </div>
      
    );
}

function List() {
 

  return ( 
    

    <ol>
      {list.map(function(item){
        return ( 
        <li key={item.objectID}>
          
         <span>  <a href={item.url}>{item.title}</a></span> <br />
          <span>{item.author}</span>
        <hr />
        </li>
        )       
      })}
    </ol>


      
    );
}

export default App

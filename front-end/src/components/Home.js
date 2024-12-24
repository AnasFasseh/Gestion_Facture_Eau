import axios from 'axios';
import React from 'react'

export default function Home() {
  return (
    <form onSubmit={()=>{
      try {
        axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
        .then(res=>console.log("logout"))
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }}>
        <button>Logout</button>
    </form>
  )
}

import React, { useState } from 'react'
import axios from 'axios'

const Login = ({token, setToken}) => {
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = () => {
      axios({
        url:'https://fakestoreapi.com/auth/login',
        method:'POST',
        
        data: {
          username: userName,
          password: passWord
        }
      }).then(res=>{
        console.log('data')
        setToken(res.data.token)
        localStorage.setItem("userToken", res.data.token)
      }).catch(error=>{
        console.log('err', error.response.data)
        setError(error)
      })
    }

  return (
    <div style={{marginTop:'100px'}}>
        <input 
        type='text'
        value={userName} 
        onChange={(e)=> {setUserName(e.target.value)} }
        required
        placeholder='Username'
        /> 

        <input 
        type='password'
        value={passWord} 
        onChange={(e)=>{setPassWord(e.target.value)}} 
        required
        placeholder='password'
        /> 

        {error ? <span>{error.response.data}</span>: ''} 
        <button type='submit' onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
import React, { useState } from 'react'

export default function Login() {

    const [usuario, guardarUsuario] = useState({
        email: "",
        password: "",
      });

    const { email, password } = usuario;

    const onChange = (e) => {
        guardarUsuario({
          ...usuario,
          [e.target.name]: e.target.value,
        });
      };

  return (
    <div>
        <form>
            <input 
                className=''
                type='text'
                name='email'
                value={email}
                placeholder='email'
                onChange={onChange}
            />
            
            <input 
                className=''
                type='password'
                name='password'
                value={password}
                placeholder='password'
                onChange={onChange}
            />

            <input 
                type='subit'
                value='Enviar'
            />
        </form>
    </div>
  )
}

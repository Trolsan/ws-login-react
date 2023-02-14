import React, { useState } from 'react';
import './Login.css';
import Title from './Components/Title/Title';
import Label from './Components/Label/Label';
import Input from './Components/Input/Input';

const Login = () => {

    const { user, setUser } = useState('')
    const { password, setPassword } = useState('')
    const { passwordError, setPasswordError } = useState(false)

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value)
        } else {
            if(value.length < 6) {
                setPasswordError(true)
            } else {
                setPasswordError(false)
                setPassword(value)
            }
        }
    }

    function handlesubmit() {
        let account = { user, password }
        if (account) {
            console.log('account: ', account);
        }
    }

    

    return (
        <div className='login-container'>
            <div className='login-content'>
                <Title  text='Iniciar sesion'/>
                <Label text='Usuario'/>


                <Input 
                attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    type: 'text',
                    placeholder: 'Ingrese su usuario'
                }}
                handleChange={handleChange}
                />
                <Label text={'Contraseña'} className='label-password'/>
                <Input 
                attribute={{
                    id: 'contraseña',
                    name: 'contraseña',
                    type: 'password',
                    placeholder: 'Ingrese su usuario'
                }}
                handleChange={handleChange}
                param={passwordError}
                />


                { passwordError &&
                    <label className='label-error'>
                        Contraseña invalida o incompleta
                    </label>
                }

                <div className='button-container'>
                    <button onClick={handlesubmit} className='submit-button'>
                        Ingresar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;
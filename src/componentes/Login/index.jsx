import React, { Component, PropTypes } from 'react'
import styles from './login.css'

const propTypes = {  
    onAuth: PropTypes.func.isRequired
}

class Login extends Component {
    render() {
        return (
             <div className={styles.root}>
                <p className={styles.text}>
                    Necesitamos que inices sesión con tu cuenta de GitHub 
                    para que puedas leer y escribir mensajes
                </p>
                <button className={styles.button} onClick={this.props.onAuth}>
                    <span className='fa fa-github'></span> Login con GitHub
                </button>
             </div>
        )
    }
}

Login.propTypes = propTypes

export default Login
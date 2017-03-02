import React, { Component } from 'react'
import { HashRouter, Match } from 'react-router'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'
import firebase from 'firebase'

class App extends Component {
    constructor() {
        super()
        this.state = {
            /*user: {
                photoURL: 'https://pbs.twimg.com/profile_images/1822772114/14231_170132729366_714034366_2686704_6073258_n.jpg',
                email: 'mario.r21@gmail.com',
                onOpenText: false,
                displayName: 'Mario Rivero',
                location: 'Santander, España'
            }*/
            //user: null
        }
        this.handleOnAuth = this.handleOnAuth.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({
                        user: user
                    })
                }
                else {
                    this.setState({
                        user: null
                    })
                }
            }
        )
    }

    handleOnAuth() {
        const provider = new firebase.auth.GithubAuthProvider()

        firebase.auth().signInWithPopup(provider).then(
            result => console.log(`${result.user.email} ha iniciado sesión`)
        ).catch(error => console.log(error.message))
    }

    handleLogout() {
        firebase.auth().signOut().then(
            () => console.log('Ha ha finalizado la sesión')
        ).catch(() => console.log('Un error ocurrió'))
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Header />

                    <Match exactly pattern='/' render={() => {
                        if (this.state.user) {
                            return (
                                <Main user={this.state.user} onLogout={this.handleLogout} />
                            )
                        }
                        else {
                            return (
                                <Login onAuth={this.handleOnAuth} />
                            )
                        }
                    } } />

                    <Match pattern='/profile' render={() => (
                        <Profile
                            picture={this.state.user.photoURL}
                            username={this.state.user.email.split('@')[0]}
                            displayName={this.state.user.displayName}
                            location={this.state.user.location}
                            emailAddress={this.state.user.email}
                            />
                    )} />

                    <Match pattern='/user/:username' render={({params}) => {
                        return (
                            <Profile
                                // picture={this.state.user.photoURL}
                                username={params.username}
                                displayName={params.username}
                                //location={this.state.user.location}
                                //emailAddress={this.state.user.email}

                                />
                        )
                    } } />
                </div>
            </HashRouter>
        )
    }
}


export default App;
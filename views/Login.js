// import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import logo from '../images/logobtc.png';
import login from '../services/UserService';
// import DATA from '../services/UserService';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        
        // this._displayLoading();
      }
    state = {
        email: "",
        password: ""
    }
    goToRegister() {
        this.props.navigation.navigate("Register")
        // this.props.navigation.push('Register')
    }
    goToHome() {
        this.props.navigation.navigate("Home")

    }
    authentification() {
        // console.log(this.state);
        this.state.email="daohamadou@gmail.com";
        this.state.password="123456";
        login(this.state.email, this.state.password).then(data => {
            console.log('Donnees => ', data);
            switch (data.error) {
                case 'Unauthorized':
                    alert('Connexion impossible')
                    break;

                default:
                    if (data.token) {
                        window && window.sessionStorage && sessionStorage.setItem('token',data.token);
                        // alert('Vous êtes connecté');
                        this.props.navigation.navigate("Home");
                    }
                    else{
                        alert('Connexion impossible')
                    }
                    break;
            }

        }).catch(err => {
            console.log(err); alert(err.message)
        })
    }
    render() {
        if(window && window.sessionStorage && sessionStorage.getItem('token')){
            // alert('Vous êtes connecté');
                        this.props.navigation.navigate("Home");
        }
        return (
            <View style={styles.container}>

                <Image
                    style={styles.logoImg}
                    source={logo}
                />

                {/* <Text style={styles.logo}>Club Paongo</Text> */}
                <View style={styles.inputView} >
                    <TextInput
                        autoCapitalize="none"
                        style={styles.inputText}
                        placeholder="Nom d'utilisateur ou E-mail ..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Mot de passe ..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ password: text })} />
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={() => this.authentification()}>
                    <Text style={styles.loginText}>SE CONNECTER</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.goToRegister()}>
                    <Text style={styles.registerText}>Je n'ai pas de compte</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Mot de passe oublié?</Text>
                </TouchableOpacity>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5e8e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImg: {
        flex: 0.5,
        width: '50%',
        height: '50%',
        resizeMode: 'stretch',
        alignContent: 'center',
        marginBottom: 20,
        marginTop: -20
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#f44336",
        marginBottom: 40
    },
    inputView: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "black"
    },
    forgot: {
        color: "black",
        fontSize: 11,
        marginTop: 20,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#f44336",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 10
    },
    loginText: {
        color: "black"
    },
    registerText: {
        color: "black",
        marginTop: 20,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        fontSize: 16,
        fontWeight: "bold",
    }
});
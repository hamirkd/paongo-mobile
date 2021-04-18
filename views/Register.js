import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import logo from '../images/logobtc.png';

export default class Register extends React.Component {
    state = {
        email: "",
        password: ""
    }
    render() {
        return (
            <View style={styles.container}>
                
                <Image
                    style={styles.logoImg}
                    source={logo}
                />
                
                {/* <Text style={styles.logo}>Club Paongo</Text> */}
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Nom *"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Prénom(s) *"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Téléphone *"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="E-mail *"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Mot de passe *"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ password: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Confirmer votre mot de passe *"
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ password: text })} />
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>SE CONNECTER</Text>
                </TouchableOpacity>
                <TouchableOpacity>
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
          alignContent:'center',
        marginBottom:20,
        marginTop:-20
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
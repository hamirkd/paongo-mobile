import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import logo from '../images/logobtc.png';

export default class Home extends React.Component {

    onPress() {

    }
    state = {
        email: "",
        password: ""
    }
    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>

                <Image
                    style={styles.logoImg}
                    source={logo}
                />
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
        width: '100%',
        height: '100%',
        // resizeMode: 'stretch',
        alignContent: 'center',
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
        marginBottom: 10,
        justifyContent: "center",
        padding: 10
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
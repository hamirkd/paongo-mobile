import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import logo from '../images/logobtc.png';
import { SafeAreaView, SectionList, FlatList } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
    {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
    },
    {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
    },
];

function Item({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}
export default class Home extends React.Component {

    onPress() {

    }
    state = {
        email: "",
        password: ""
    }
    render() {
        console.log(this.props)
        // return (
        //     <View style={styles.container}>

        //         <Image
        //             style={styles.logoImg}
        //             source={logo}
        //         />

        //     </View>
        // );
        // return (
        //     <SafeAreaView style={styles.container}>
        //       <SectionList
        //         sections={DATA}
        //         keyExtractor={(item, index) => item + index}
        //         renderItem={({ item }) => <Item title={item} />}
        //         renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
        //       />
        //     </SafeAreaView>
        //   );
        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Image
                        style={styles.logoImg}
                        source={logo}
                    />

                </View>
                <SectionList style={styles.SectionList}
                    sections={DATA}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    )}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#f5e8e8',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // // },
    logoImg: {
        flex: 0.5,
        width: '50%',
        height: '50%',
        resizeMode: 'stretch',
        alignContent: 'center',
        marginTop: -20
    },
    SectionList: {
        flex: 0.5,
        marginHorizontal: 16,
    },
    container2: {
        flex: 0.2,
        backgroundColor: '#f5e8e8',
        alignItems: 'center',
        justifyContent: 'center',
        height:1
    },
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#f5e8e8',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
    },
});
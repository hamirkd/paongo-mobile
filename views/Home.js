import React from 'react';
import { StyleSheet, View, Image, Button, Text } from 'react-native';
import logo from '../images/logobtc.png';
import { SectionList } from 'react-native';
import Constants from 'expo-constants';
import findAllTitreOfUser from '../services/TitreService';
import getMyBalance from '../services/titres-service/BinanceBalance';
import nombre_titre_acheter from '../services/titres-service/NombreTitreAchat';
import findAllTitres from '../services/titres-service/GetAllTitres';
import Moment from 'moment';



function Item({ titre }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>Ordre : {titre.id}</Text>
            <Text style={styles.title}>Valeur achat : {titre.montant}</Text>
            <Text style={styles.title}>Paiement : {titre.etat_paiement}</Text>
            <Text style={styles.title}>Date Paiement :{Moment(titre.updated_at).format('d MMM YYYY')}</Text>
            <Text style={styles.title}>Valeur : {titre.valeur_titre_achete?titre.valeur_titre_achete.toFixed(2):0}</Text>
            <Text style={styles.title}>Dividente : {titre.dividante_titre_achete?titre.dividante_titre_achete.toFixed(2):0}</Text>
        </View>
    );
}
export default class Home extends React.Component {

    constructor(props) {
        super(props)

        this.init();
        findAllTitres().then(d => {
            this.titreModels = d;
            console.log(d)
        })
    }
    init() {
        this._displayLoading();
    }
    titreModels
    i = 0;
    state = {
        titres: [],
        isLoading: false,
        nombre: 0
    }
    liste = [];
    /*
    Format data = {titre,data}
    */
    addOrCreate(data) {
        const index = this.liste.findIndex(l => l.titre == data.titre);

        if (index != -1) {
            this.liste[index].data.push(data.data);
        }
        else {
            this.liste.push({ titre: data.titre, data: [data.data] });
            console.log(data.data)
            this.getBinanceAccount(data.data);
        }
        console.log(this.liste)
    }
    titres = [];
    _displayLoading() {
        findAllTitreOfUser().then(data => {
            this.setState({ isLoading: true });
            let titres_ = Object.keys(data).map(function (personNamedIndex) {
                let items = data[personNamedIndex];
                return items;
            })

            this.liste = [];
            for (let data of titres_) {
                this.addOrCreate({ titre: data.titre, data: data });
            }
            this.forceUpdate();
        }).catch(err => {
            this.liste = [];
        })
    }

    getBinanceAccount(titre) {
        console.log(titre.emailadresse != 'daohamadou@gmail.com',titre.emailadresse)
        if (titre.emailadresse&&titre.emailadresse != 'daohamadou@gmail.com')
            if (titre.etat_paiement.toLocaleLowerCase() == 'non_paye') {
                // this.toastrService.warning("Vous devez payé ce titre");
                return;
            }
        const titreModel = this.titreModels.find(t => t.nom == titre.titre);
        getMyBalance(titreModel.id).then(data => {
            this.selectTitre = { titre: titre.titre, balance: data && data.balance ? data.balance : 0, balance_usd: data && data.balance_usd ? data.balance_usd : 0 };
            this.valeur_titre_achete = this.selectTitre.balance_usd / this.nombre_titre_achete + 250;
            this.dividante_titre_achete = (this.selectTitre.balance_usd - this.nombre_titre_achete * this.montant_titre_achete) / (2 * this.nombre_titre_achete)
            const index = this.liste.findIndex(l => l.titre == titre.titre);
            console.log("ici===>",index,this.dividante_titre_achete)

            if (index != -1) {
                // this.liste[index].dividante_titre_achete=this.dividante_titre_achete;
                for(let titre of this.liste[index].data){
                    titre.dividante_titre_achete = this.dividante_titre_achete;
                    titre.valeur_titre_achete = this.valeur_titre_achete;
                }
                console.log(this.liste)
                this.forceUpdate();
            }
        }).catch(err => {

            this.selectTitre = { titre: titre.titre, balance: 0, balance_usd: 0 };
            this.valeur_titre_achete = 0;
            
        });
        nombre_titre_acheter(titre.titre).then(data => {
            let data2 = data;
            this.nombre_titre_achete = data2.nombre;
            this.montant_titre_achete = data2.montant;
            this.limit_titre_achete = data2.limit;
            console.log(data)

        }).catch(err => {
            this.nombre_titre_achete = 0;
            this.valeur_titre_achete = 0;
            this.dividante_titre_achete = 0;
            this.montant_titre_achete = 0;
            this.limit_titre_achete = 0;
        })
    }

    render() {
        // titres=[]

        // return (
        //     <View style={styles.container}>

        //         <Image
        //             style={styles.logoImg}
        //             source={logo}
        //         />

        //     </View>
        // // );
        // return (
        //     <SafeAreaView style={styles.container}>
        //         <Button title='Rechercher' onPress={() => this.init()}/>
        //       <SectionList
        //         sections={this.liste}
        //         keyExtractor={(item, index) => item.id + index}
        //         renderItem={({ item }) => <Item title={item} />}
        //         renderSectionHeader={({ section: { titre } }) => <Text style={styles.header}>{titre}</Text>}
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
                <Button title='Actualiser' onPress={() => this.init()} />
                <SectionList style={styles.SectionList}
                    sections={this.liste}
                    renderItem={({ item }) => <Item titre={item}/>}
                    renderSectionHeader={({ section: { titre } }) => <Text style={styles.header}>{titre}</Text>}
                />
            </View>
        );
        // return (
        //     <View style={styles.container}>
        //         <Text style={styles.item}>{this.i}{this.titres.length}</Text>
        //         <Button title='Rechercher' onPress={() => this.init()}/>
        //       <FlatList
        //         data={this.titres}
        //         keyExtractor={(item) => item.id.toString()}
        //         renderItem={({ item }) => <Text style={styles.item}>{item.nomprenom}</Text>}
        //       />
        //     </View>

        //   );
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
        height: 1
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
        flex: 0.5,
        fontSize: 24,
        alignContent: 'center'
    },
});



import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Button,Image , ScrollView} from 'react-native'

export class services extends Component {
    render() {
        return (
            <View >

             <View style={styles.header}>
                    <TouchableOpacity style={styles.hamburger} onPress={() => this.props.navigation.toggleDrawer()}>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEvenMid} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                        <View style={styles.hamburgerEven} ></View>
                        <View style={styles.hamburgerOdd} ></View>
                    </TouchableOpacity >

                    <View style={styles.logoMain}>
                    <Text style={{color:'#fff',fontFamily:'"Times New Roman", Times, serif',fontSize:20,paddingLeft:50}}>Services</Text>

                        
                        
                    </View>
                </View>
                <ScrollView>
                    
                <View>
                <Image style={styles.imagedeta} source={require('../assets/service/itbp.png')}/>
                <View style={{height:20}}></View>
                <Image style={styles.imagedeta} source={require('../assets/service/BSF.png')}/>
                <View style={{height:20}}></View>
                <Image style={styles.imagedeta} source={require('../assets/service/crpf.png')}/>
                <View style={{height:20}}></View>
                <Image style={styles.imagedeta} source={require('../assets/service/cisf.png')}/>
                <View style={{height:20}}></View>
                <Image style={styles.imagedeta} source={require('../assets/service/Indian_Coast_Guard_Logo.svg.png')}/>
                <View style={{height:20}}></View>
                <Image style={styles.imagedeta} source={require('../assets/service/Sashastra_Seema_Bal.png')}/>
                <View style={{height:20}}></View>
                <Image style={styles.imagedeta} source={require('../assets/service/Railway_Protection_Force_Logo.png')}/>
                <View style={{height:20}}></View>
                <Image style={styles.imagedeta} source={require('../assets/service/SPG_Emblem.png')}/>
                <View style={{height:20}}></View>
                <Image style={styles.imagedeta} source={require('../assets/service/assamrifles.png')}/>
                <View style={{height:20}}></View>
                <Image style={styles.imagedeta} source={require('../assets/service/DEFENCE.jpg')}/>
                <View style={{height:20}}></View>
                <Image style={styles.imagedeta} source={require('../assets/service/IAF_Crest.svg.png')}/>
                <View style={{height:20}}></View>
                <Image style={styles.imagedeta} source={require('../assets/service/para-sf.png')}/>
                <View style={{height:20}}></View>
                </View>
              
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoText: {
        marginRight: 10,
        //   width:"75%",
        color: "#FFF",
        textAlign: 'right',
        flex: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
    },
    header: {
        height: 40,
        marginBottom: 5,
        marginTop: 10,
        // backgroundColor:"#FFF",
        flexDirection: 'row',
        alignItems: 'center',

         
borderWidth: 1,
borderRadius: 4,
borderColor: '#ddd',
borderBottomWidth: 3,
shadowColor: 'rgb(99, 97, 97)',
shadowOffset: { width: 20, height: 20 },
shadowOpacity: 1,
shadowRadius: 50,
elevation: 10,
marginLeft: 10,
marginRight: 10,
marginTop: 10,
    },
    logoMain: {
        flexDirection: 'row',
        flex: 12,
        marginRight: 15,
        // backgroundColor:'#FFF'
    },
    hamburger: {
        // width:"25%",
        width:"25%",
      
        flex: 1,
        color: '#FFF',
        margin: 5,
        marginLeft: 15,
        marginRight: 10,
        flexDirection: 'column',
        justifyContent: 'center'
        // right:10
    },
    hamburgerOdd: {
        flex: 8
    },
    hamburgerEven: {
        flex: 8,
        backgroundColor:  '#fff'
    },
    hamburgerEvenMid: {
     
        flex: 5,
        // marginLeft: '',
        backgroundColor:  '#fff'
    },
 
    a2:{
        fontFamily:"../assets/fonts/dream_unicorn",
        fontSize:15,
        color: "white",
        padding:10,
       textAlign:"justify",
       
  },
    a3:{
        fontFamily:"../assets/fonts/short_baby",
        fontSize:20,
        color: "white",
        paddingLeft:10,
    },
    imagedeta:{
        height:450,
        width:420
    },
})

export default services
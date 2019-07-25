import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Button,Image,ScrollView} from 'react-native'



export class gallery extends Component {

    


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
                <Text style={{color:'#fff',fontFamily:'"Times New Roman", Times, serif',fontSize:20,paddingLeft:50}}>Gallery</Text>

                    
                    
                </View>
            </View>
            <ScrollView>
                
            <View>
                
            <Image style={styles.imagedeta} source={require('../assets/photos/_68427257_68427252.jpg')}/>
            <View style={{height:10}}></View>
                <Image style={styles.imagedeta} source={require('../assets/photos/01.jpg')}/>
                <View style={{height:10}}></View>
                <Image style={styles.imagedeta} source={require('../assets/photos/1-indian-air-force-contingent.jpg')}/>
                <View style={{height:10}}></View>
                <Image style={styles.imagedeta} source={require('../assets/photos/2-5-770x435.jpg')}/>
                <View style={{height:10}}></View>
                <Image style={styles.imagedeta} source={require('../assets/photos/5boydomcom_1436185148.jpg')}/>
                <View style={{height:10}}></View>
                <Image style={styles.imagedeta} source={require('../assets/photos/30-1451458466-ins-kolkota.jpg')}/>
                <View style={{height:10}}></View>
                <Image style={styles.imagedeta} source={require('../assets/photos/232.jpg')}/>
                <View style={{height:10}}></View>
                <Image style={styles.imagedeta} source={require('../assets/photos/1200px-USCGC_Knight_island.jpg')}/>
                <View style={{height:10}}></View>
                <Image style={styles.imagedeta} source={require('../assets/photos/111330-gthdnieibw-1548307555.jpg')}/>
                <View style={{height:10}}></View>
                <Image style={styles.imagedeta} source={require('../assets/photos/indian-army-relief-efforts.jpg')}/>
                <View style={{height:10}}></View>
                <Image style={styles.imagedeta} source={require('../assets/photos/Indian-Coast-Guard-fleet-now-stands-at-4th-largest-Coast-Guard-in-the-World.jpg')}/>
                <View style={{height:10}}></View>
                <Image style={styles.imagedeta} source={require('../assets/photos/Job_Image27012019015917.jpg')}/>
            <View style={{height:50}}></View>
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
export default gallery




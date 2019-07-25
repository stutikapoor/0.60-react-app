
import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Button,Image , ScrollView} from 'react-native'

export class aboutUs extends Component {
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
                    <Text style={{color:'#fff',fontFamily:'"Times New Roman", Times, serif',fontSize:20,paddingLeft:50}}>About Us</Text>

                        
                        
                    </View>
                </View>
                <ScrollView>
                    
                <View>
                <Image style={styles.aboutimage} source={require('../assets/1.jpg')}/>
                </View>
                <View>
           
                    <Text style={styles.a2}>               
The CAPFs are armed forces under the Ministry of Home Affairs and comprise of the following forces :
 </Text>



 <Text style={styles.a2}>1) Assam Rifles (AR) engaged in border guarding along Indo-Myanmar border, as well as in counter insurgency operations in the North East.
 </Text>
 <Text style={styles.a2}>2) Border Security Force (BSF) guards Indias borders with Pakistan and Bangladesh, and are also deployed for anti insurgency operations.
 </Text>
 <Text style={styles.a2}>3) Central Industrial Security Force (CISF) provides security to the key sectors including Airports, Metro systems, important industries in the public and private Sector, heritage monuments, Government buildings and security to protected persons.
 </Text>
 <Text style={styles.a2}>4) Central Reserve Police Force (CRPF) is the primary force for internal secruity including anti naxal operations, counter insurgency duties in J&K and North East, and Law & Order problems.
 </Text>
 <Text style={styles.a2}>5) Indo-Tibetan Border Police (ITBP) guards Indias borders with China. Specially trained to operate in high altitude mountainous terrain, it is also engaged in internal security duties from time to time.
 </Text>
 <Text style={styles.a2}>6) National Disaster Response Force (NDRF) is for specialized response to natural and man-made disasters, saving lives and livelihood and prepares communities in disaster resilience and disaster risk reduction.
 </Text>
 <Text style={styles.a2}>7) National Security Guard (NSG) is a Special Force mandated to conduct counter-terrorist, counter-hijack, and hostage-rescue operations as well as provide `mobile security to designated protectees.
 </Text>
 <Text style={styles.a2}>8) Sashastra Seema Bal (SSB) with the motto of "Service Security Brotherhood" is primarily mandated to guard Indias borders with Nepal and Bhutan. The force is also performing internal security duties and is deployed to deal with LWE / Counter-insurgency in many states.                   
 </Text>

</View>
                <View style={{height:40}}></View>
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
    aboutimage:{
        height:300,
        width:420
    },
})

export default aboutUs
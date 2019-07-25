
import React, { Component } from 'react'
import { Text, View,StyleSheet,TextInput,TouchableOpacity,Button,Image , ScrollView} from 'react-native'

export class contact extends Component {
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
                    <Text style={{color:'#fff',fontFamily:'"Times New Roman", Times, serif',fontSize:20,paddingLeft:50}}>Contact Us</Text>

                        
                        
                    </View>
                </View>
                <ScrollView>
                     
                <View>
                <View style={{height:40}}></View>
                <Image style={styles.aboutimage} source={require('../assets/map.jpg')}/>
                <View style={{height:20}}></View>
                           <Text style={styles.a3}>Please enter your details </Text>
                           <View style={{height:20}}></View>
                           <Text style={styles.a3}>Name</Text>
                           <TextInput style={styles.box}></TextInput>
                           <Text style={styles.a3}>Email</Text>
                           <TextInput style={styles.box}></TextInput>
                           <Text style={styles.a3}>Subject</Text>
                           <TextInput style={styles.box}></TextInput>
                           <Text style={styles.a3}>Message</Text>
                           <TextInput style={styles.box}></TextInput>
                            <Text>{'\n'}</Text>
                           
                           <Button style={styles.btnTest} title="Submit" ></Button>
                           <View style={{height:100}}></View>
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
    box:{
        backgroundColor:"white"
    }
})

export default contact
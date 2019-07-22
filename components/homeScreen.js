import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native'


class homeScreen extends Component {
    constructor(props) {
        super(props);
        // this.goto = this.goto.bind(this)
    }
    goto() {
        this.props.navigation.navigate('AboutUs');
    }

    render() {
        return (
            <View>
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
                        <Text style={styles.logoText}>
                            TestAPP
                        </Text>
                        <Image style={styles.logo} source={require('../assets/d.jpg')} />
                    </View>
                </View>
                <View>
                    <Text style={{ color: '#fff' }}>This is HomeScreen</Text>
                    {/* <TouchableOpacity><Text>test</Text></TouchableOpacity> */}
                    <View>
                        <Image style={styles.img} source={require('../assets/d.jpg')} />
                        <Button style={styles.btnTest} title="click me" onPress={() => this.goto()} />
                    </View>
                    
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    logo: {
        height: 50,
        width: 50
    },
    img: {
        alignSelf: 'center'
    },
    btnTest: {
        width: 100,
        height: 100
    },
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
    },
    logoMain: {
        flexDirection: 'row',
        flex: 12,
        marginRight: 15,
        // backgroundColor:'#FFF'
    },
    hamburger: {
        // width:"25%",
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
        flex: 3
    },
    hamburgerEven: {
        flex: 2,
        backgroundColor: '#FFF'
    },
    hamburgerEvenMid: {
        flex: 2,
        width: '100%',
        // marginLeft: '',
        backgroundColor: '#FFF'
    },
})

export default homeScreen

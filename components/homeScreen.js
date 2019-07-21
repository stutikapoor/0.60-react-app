import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Button} from 'react-native'
// import PushController from './PushController';
import PushNotification from 'react-native-push-notification';

// var PushNotification = require('react-native-push-notification');
 
PushNotification.configure({
 
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },
 
    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
 
        // process the notification
 
        // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
        notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
 
    // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
    // senderID: "YOUR GCM (OR FCM) SENDER ID",
 
    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },
 
    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,
 
    /**
      * (optional) default: true
      * - Specified if permissions (ios) and token (android and ios) will requested or not,
      * - if not, you must call PushNotificationsHandler.requestPermissions() later
      */
    requestPermissions: true,
});
// import 



 class homeScreen extends Component {
    constructor(props){
        super(props);
    
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
    }
    
    handleAppStateChange(){
        PushNotification.localNotification({
           message:'hello',
            soundName:'default',
            vibrate:true,
            vibration:100
          });
        alert(`Check Notification is sent`)
                  
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
                    </View>
                </View>
                <Text style={{color:'#fff'}}>This is HomeScreen</Text>
                <TouchableOpacity><Text>test</Text></TouchableOpacity>
                <Button title="notify" onPress={this.handleAppStateChange}/>
          {/* <PushController/> */}
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

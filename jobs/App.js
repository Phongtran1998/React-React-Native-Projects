import {Notifications} from 'expo'
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements'
import {Provider} from 'react-redux';
import registerForNotifications from './services/push_notifications'
import store from './store';
import AuthScreen from './Screen/AuthScreen';
import WelcomeScreen from './Screen/WelcomeScreen';
import MapScreen from './Screen/MapScreen';
import DeckScreen from './Screen/DeckScreen';
import SettingScreen from './Screen/SettingScreen';
import ReviewScreen from './Screen/ReviewScreen'

export default class App extends React.Component {
    componentDidMount(){
        registerForNotifications();
        Notifications.addListener((notification) => {
            const {data: {text}, origin} = notification;
            if (origin === 'received' && text) {
                Alert.alert(
                    'New Push Notification',
                    text,
                    [{text: 'OK'}]
                )
            }
        })

    }
  render() {
    const MainNavigator = createBottomTabNavigator({
       welcome: {screen: WelcomeScreen},
       auth: {screen: AuthScreen},
        main: {
          screen: createBottomTabNavigator({
                map: {screen: MapScreen},
                deck: {screen: DeckScreen},
                review: {
                    screen: createStackNavigator({
                        review: {screen: ReviewScreen},
                        setting: {screen: SettingScreen}
                    }),
                    title: 'Review Jobs',
                    tabBarIcon: ({tintColor}) => {return <Icon name={'favorite'} size={30} color={tintColor}/>}
                }
          }, {
              tabBarPosition: 'bottom',
              tabBarOptions: {
                  labelStyle: {fontSize: 12}
              }
          })

        }
    }, {
        navigationOptions:({navigation}) => ({
          tabBarVisible: false
        }),
        lazy: true
    });
    return (
        <Provider store={store}>
        <MainNavigator />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
class App extends Component {
    componentWillMount(){
        console.disableYellowBox = true;
        const firebase = require("firebase");
        const config = {
            apiKey: "AIzaSyA6CKza0rboAwP8_fYL9aYD7G-irF-Y6D8",
            authDomain: "manager-6722a.firebaseapp.com",
            databaseURL: "https://manager-6722a.firebaseio.com",
            projectId: "manager-6722a",
            storageBucket: "manager-6722a.appspot.com",
            messagingSenderId: "336594536233"
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router/>
            </Provider>
        )
    }
}

export default App;
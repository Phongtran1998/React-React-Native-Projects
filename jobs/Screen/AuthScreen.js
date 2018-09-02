import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {Button} from 'react-native-elements'
import {connect} from 'react-redux';
import * as actions from '../actions';


class AuthScreen extends Component {
    componentDidMount(){
        this.onAuthComplete(this.props)
    }
    onAuthComplete(props) {
        if (props.token){
            this.props.navigation.navigate('map')
        }
    }
    componentWillReceiveProps(nextProps){
        this.onAuthComplete(nextProps)
    }
    render() {
        return (
            <View>
                <Button title={"Sign In"}
                        large
                        buttonStyle={{marginTop: 24}}
                        backgroundColor={'#03A9F4'}
                        onPress={() => this.props.facebookLogin()}/>
            </View>
        )
    }
}
function mapStateToProps({auth}) {
    return {token: auth.token}
}
export default connect(mapStateToProps, actions)(AuthScreen)
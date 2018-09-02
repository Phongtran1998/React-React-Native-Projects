import React, {Component} from 'react';
import {View, Text, Platform, AsyncStorage} from 'react-native';
import {Button} from 'react-native-elements'
import {connect} from 'react-redux';
import * as actions from "../actions";

class SettingScreen extends Component {
    onSignOut = () => {
       this.props.facebookLogOut();

    };
    onSignOutComplete(props) {
        if (!props.token) {
            this.props.navigation.navigate('auth');
        }
    }
    componentWillReceiveProps(nextProps){
        this.onSignOutComplete(nextProps)
    }
    renderFunction() {
        return(
            <View>
                <Button title={"Reset Liked Jobs"}
                        large
                        buttonStyle={{marginTop: 24}}
                        icon={{name: 'delete-forever'}}
                        backgroundColor={'#F44336'}
                        onPress={this.props.clearLikedJobs}
                />
            </View>
        )
    }
    render() {
        return(
            <View>
            {this.renderFunction()}
                <Button title={"Sign Out"}
                        large
                        buttonStyle={{marginTop: 24}}
                        backgroundColor={'#F44336'}
                        onPress={this.onSignOut}
                />
            </View>
        )
    }
}
function mapStateToProps({like, auth}) {
    return {likeJob: like, token: auth.token}
}
export default connect(mapStateToProps, actions)(SettingScreen)
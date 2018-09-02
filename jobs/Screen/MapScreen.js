import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {MapView} from 'expo';
import {SearchBar, Button, Icon} from 'react-native-elements'
import {connect} from 'react-redux';
import * as actions from '../actions';


class MapScreen extends Component {
    state = {region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09,

        }, mapLoaded: false};
    static navigationOptions = {
        title: 'Map',
        tabBarIcon: ({tintColor}) => {return <Icon name={'my-location'} size={30} color={tintColor}/>}

    };
    componentDidMount(){
        this.setState({mapLoaded: true});

    }
    onRegionChangeComplete = (region) => {
        this.setState({region})
    };

    onButtonPress = () => {
        this.props.fetchJobs(this.state.region, this.props.search, () => {
            this.props.navigation.navigate('deck')
        })
    };
    onChangeSearch = text => {
        this.props.jobSearch(text);
    };
    render() {
        if (!this.state.mapLoaded) {
            return (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size={'large'}/>
                </View>
            )
        }
        return (
            <View style={{flex: 1, paddingTop: 25}}>
                <SearchBar
                    noIcon
                    lightTheme
                    round
                    placeholder={'Job Description'}
                    onChangeText={this.onChangeSearch}
                    value={this.props.search}
                />
                <MapView style={{flex: 1}} region={this.state.region} onRegionChangeComplete={this.onRegionChangeComplete}/>
                <View style={styles.buttonContainer}>
                    <Button large title={'Search this area'} backgroundColor={'#009688'} icon={{name: 'search'}} onPress={this.onButtonPress}/>
                </View>
            </View>
        )
    }
}
const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0
    }
};

function mapStateToProps({search}) {
    return {
        search: search.job
    }
}

export default connect(mapStateToProps, actions)(MapScreen)
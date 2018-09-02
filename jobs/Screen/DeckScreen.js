import React, {Component} from 'react';
import {View, Text, Platform} from 'react-native';
import {connect} from 'react-redux';
import {MapView}  from 'expo';
import {Card, Button, Icon} from 'react-native-elements'
import Geocoder from 'react-native-geocoding'
import Swipe from '../Component/Swipe';
import * as actions from '../actions'
class DeckScreen extends Component {

    static navigationOptions = {
        title: 'Jobs',
        tabBarIcon: ({tintColor}) => {return <Icon name={'description'} size={30} color={tintColor}/>}

    };

     renderCard(job) {
         let longitude, latitude = null;
        // Geocoder.init('AIzaSyCa5p6OZQxVyQirvKtn41610y0Jw4XUMTQ');
        // Geocoder.from(job.location).then(
        //     json => {
        //         let location = json.results[0].geometry.location;
        //         latitude = parseFloat(location.lat).toFixed(4);
        //         longitude = parseFloat(location.lng).toFixed(4);
        //
        //         console.log(latitude, longitude);
        //
        //
        //     },
        //     error => {
        //         console.error(error);
        //         longitude = 0.107760;
        //         latitude = 52.205067;
        //
        //     }
        //
        // );
        const initialRegion = {
            longitude: longitude ? longitude : -122.030792,
            latitude: latitude ? latitude : 36.974117,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        };

        return (

            <Card title={job.title}>
                <View style={{height: 300}}>
                <MapView
                    scrollEnabled={false}
                    style={{flex: 1}}
                    cacheEnabled={Platform.OS === 'android'}
                    initialRegion={initialRegion}
                >

                </MapView>
                </View>
                <View style={styles.detailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.created_at}</Text>
                </View>
                <View style={{height: 100}}>
                    <Text>{job.description.replace(/<b>/g, '').replace(/<\/b/g, '').replace(/<br>/g, '').replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/\[/g, '').replace(/\]/g, '').replace(/<h3>/g, '').replace(/<\/h3>/, '').replace(/&/g, '').replace(/<ul>/g, '').replace(/<\/ul>/g, '').replace(/<li>/g, '').replace(/<\/li>/g, '')}</Text>
                </View>
            </Card>
        )
    }
    renderNoMoreCards = () => {
        return(
            <Card title={"No more Jobs"}>
                <Button title={'Back to Map'} large icon={{name: 'my-location'}}
                        backgroundColor='#03A9F4' onPress={() => this.props.navigation.navigate('map')}/>
            </Card>
        )
    }
    render() {

        return (
            <View style={{marginTop: 10}}>
                <Swipe
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                    onSwipeRight={job => this.props.likeJob(job)}
                />
            </View>
        )
    }
}

const styles = {
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
};

function mapStateToProps({search}) {
    return {jobs: search.result}
}
export default connect(mapStateToProps, actions)(DeckScreen)
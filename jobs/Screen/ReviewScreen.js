import React, {Component} from 'react';
import {ScrollView, Text, Platform, View, Linking} from 'react-native';
import {Button, Card, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {MapView} from 'expo'
class ReviewScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            title: 'Review Jobs',

            headerRight: (
                <Button
                    backgroundColor="rgba(0,0,0,0)"
                    color="rgba(0, 122, 255, 1)"
                    title="Settings"
                    onPress={() => navigate('setting')}
                />
            )
        };
    };
    renderLikeJobs(){
        return this.props.likeJob.map(job => {
            const {company, created_at, url, id, title} = job;
            const initialRegion = {
                longitude: -73.935242,
                latitude:  40.730610,
                longitudeDelta: 0.045,
                latitudeDelta: 0.02
            };
            return(
                <Card title={title} key={id}>
                    <View style={{height: 200}}>
                        <MapView style={{flex: 1}} cacheEnabled={Platform.OS === 'android'} scrollEnabled={false} initialRegion={initialRegion}/>
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{company}</Text>
                            <Text style={styles.italics}>{created_at}</Text>
                        </View>
                        <Button title={'Apply Now!'} backgroundColor={'#03A9F4'} onPress={() => Linking.openURL(url)}/>
                    </View>
                </Card>
            )
        })
    }
    render() {
        return (
            <ScrollView>
                {this.renderLikeJobs()}
            </ScrollView>
        )
    }
}
const styles = {
    detailWrapper: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    italics: {
      fontStyle: 'italic'
    }
};
function mapStateToProps({like}) {
    return {likeJob: like}
}
export default connect(mapStateToProps)(ReviewScreen)
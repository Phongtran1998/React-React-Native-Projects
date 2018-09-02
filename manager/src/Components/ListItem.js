import React, {Component} from'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {CardSection} from "./common";

class ListItem extends Component {
    onRowPress(){
        Actions.employeeEdit({employee: this.props.employee});
    }
    render(){
        const {name, shift} = this.props.employee;

        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{name}</Text>
                        <Text style={styles.titleStyle}>{shift}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};
export default ListItem
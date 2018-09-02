import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, View} from 'react-native';
import {employeesFetch, logOut} from "../actions";
import ListItem from './ListItem'
import {Button, CardSection} from "./common";

class EmployeeList extends Component {
    componentWillMount(){
        this.props.employeesFetch();
        this.createDataSource(this.props)
    }
    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps)
    }
    createDataSource({employees}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource =ds.cloneWithRows(employees)
    }
    renderRow(employee){
        return <ListItem employee={employee}/>
    }
    onButtonPress(){
        this.props.logOut()
    }
    render(){
        console.log(this.props);
        return(
            <View>
                <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                 />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} style={{backgroundColor: 'red'}}>Sign out</Button>
                </CardSection>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
            return { ...val, uid}
        });
    return {employees}
};

export default connect(mapStateToProps, {employeesFetch, logOut})(EmployeeList)
import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList'
import EmployeeCreate from './Components/EmployeeCreate';
import EmployeeEdit from './Components/EmployeeEdit';

const RouterComponent= () => {
    return(
        <Router>
            <Scene key={"root"} hideNavBar>
                <Scene key={"auth"}>
                    <Scene initial key={"login"} component={LoginForm} title={"Please Login"}
                    titleStyle={styles.title}/>
                </Scene>
                <Scene key={"main"}>
                    <Scene
                        key={"employeeList"}
                        component={EmployeeList}
                        title={"Employees"}
                        rightTitle={"Add"}
                        rightButtonTextStyle={styles.right}
                        onRight={() => Actions.employeeCreate()}
                        titleStyle={styles.title}
                        initial
                    />
                    <Scene title={"Create Employee"} key={"employeeCreate"} component={EmployeeCreate} titleStyle={styles.title}/>
                    <Scene  title={"Edit Employee"} key={"employeeEdit"} component={EmployeeEdit} titleStyle={styles.title}/>
                </Scene>
            </Scene>
        </Router>
    )
};
const styles = {
    right: {
        color: '#08AB8A',
        marginLeft: 5,
        fontSize: 20
    },
    title: {
        flex: 1,
        textAlign: 'center'
    }
};
export default RouterComponent
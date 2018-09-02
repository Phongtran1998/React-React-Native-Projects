//Import library
import React from 'react';
import { Text, View } from 'react-native';
//Make the components
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (<View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>);
};

const styles = {
  textStyle: {
      fontSize: 20
  },
  viewStyle: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      elevation: 10,
      position: 'relative'
  }
};
//Make the components available to other parts of the app
export { Header };

import React from 'react';

import { StyleSheet, Text, View } from 'react-native';


class ScreenView extends React.Component {

    render() {
        return (
            <View style={this.props.styles.container}>
                <Text style={TextClass.Text}>{this.props.text}</Text>
            </View>

        )
    }
}



export default ScreenView;

const TextClass = StyleSheet.create({
    Text: {
        fontSize:48,
        color: "#000"
    }
});

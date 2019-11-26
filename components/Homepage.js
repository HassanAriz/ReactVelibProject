import React from 'react';
import {Button, View } from "react-native";

class Homepage extends React.Component {

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
            <Button
                title="views"
                onPress={() => navigate('DoubleView')}
            />

            <Button
        title="hello"
        onPress={() => navigate('ThirdPage')}
        />
        </View>
        )
    }
}

export default Homepage;

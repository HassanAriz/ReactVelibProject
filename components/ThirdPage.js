import React from 'react';
import {Button, View} from "react-native";


class ThirdPage extends React.Component {

    static navigationOptions = {
        title: 'NavigationPage',
    };

    render() {
        const {push, navigate} = this.props.navigation;

        return (
            <View>
                <Button
                    title="hello"
                    onPress={() => push('ThirdPage')}
                />

                <Button
                    title="Home"
                    onPress={() => navigate('Home')}
                />
            </View>
        )
    }

}

export default ThirdPage;

import React from 'react';
import {StyleSheet, View} from "react-native";
import ScreenView from "./ScreenView";

class AnimationViewPage extends React.Component {

    static navigationOptions = {
        title: 'View',
    };
    render() {
        return (
            <View style={highViewClass.container}>
                <ScreenView text="1" styles={highViewClass}/>
                <ScreenView text="2" styles={lowViewClass}/>
            </View>

        )
    }
}

const highViewClass = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9b6508',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },

});



const lowViewClass = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#83281f',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
});

export default AnimationViewPage;


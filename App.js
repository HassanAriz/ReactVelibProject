import React from 'react';
import ScreenView from './components/ScreenView';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={highViewClass.container}>
            <ScreenView text="1" styles={highViewClass}/>
            <ScreenView text="2" styles={lowViewClass}/>
        </View>
    );
}


const highViewClass = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5dade2',
        alignItems: 'center',
        justifyContent: 'center',
    },

});



const lowViewClass = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#58d68d',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
});

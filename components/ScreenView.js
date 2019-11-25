import React from 'react';

import { StyleSheet, Text, View } from 'react-native';


class ScreenView extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Text}>NANANJA  .NANI !!!!</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        fontSize:48,
    }
});

export default ScreenView;

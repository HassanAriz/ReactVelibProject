import React from 'react';

import {Animated, StyleSheet, Text} from 'react-native';


class ScreenView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            height: new Animated.Value(1),
            full: 0
        }
    }

    handlePress = () => {
        if(!this.state.full){
            Animated.timing (
                this.state.height, {toValue: 1.5}
            ).start();
            this.setState({
                full: 1
            })
        }
        if(this.state.full) {
            Animated.timing(
                this.state.height, {toValue: 1}
            ).start();
            this.setState({
                full: 0
            })
        }
    }

    render() {
        return (
            <Animated.View style={this.props.styles.container} flex={this.state.height}>
                <Text style={TextClass.Text} onPress={this.handlePress}>{this.props.text}</Text>
            </Animated.View>

        )
    }
}



export default ScreenView;

const TextClass = StyleSheet.create({
    Text: {
        fontSize:48,
        color: "#FFF",
        height: "100%",
        width: "100%",
        textAlign: "center",
        marginTop: "50%"
    }
});

import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class CalcButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.handleButtonInput.bind(this, this.props.value)}
        style={styles.button}
      >
        <Text style={styles.btnText}> {this.props.value}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
 
    button: {
      flex: 1,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgreen"
    },
    btnText: {
      fontSize: 36
    }
  });

export default CalcButton;

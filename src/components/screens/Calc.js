import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";

class Calc extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };
    this.validKry = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "+",
      "-",
      "/",
      "*",
      "="
    ];
  }

  handleInput(text) {
    this.setState({
      inputText: text
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          onChangeText={this.handleInput.bind(this)}
          value={this.state.inputText}
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgb(41,41,41)",
    height: 100,
    width: 100 + "%",
    color: "white",
    textAlign: "right",
    fontSize: 48
  }
});
export default Calc;

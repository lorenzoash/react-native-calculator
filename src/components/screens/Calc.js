import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { CalcButton } from "../presentation";

class Calc extends Component {
  constructor() {
    super();
    this.initial = {
      inputText: "",
      pendingOperation: null,
      firstOperand: ""
    };
    this.state = this.initial; 
    this.validKeys = [
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
      "=",
      "C"
    ];
  }

  handleInput(text) {
    this.setState({
      inputText: text
    });
  }

  handleButtonInput(text) {
    if (["+", "-", "/", "*"].indexOf(text) > -1) {
      this.setState({
        pendingOperation: text,
        firstOperand: this.state.inputText,
        inputText: ""
      });
      console.log(JSON.stringify(this.state));
      return;
    } else if (text === "=") {
      this.calculate();
      return;
    }else if(text === "C"){
        this.setState(this.initial
        );
    } else {
    this.setState({
      inputText: this.state.inputText + text
    });
    console.log(JSON.stringify(this.state));
  }
}
  calculate() {
    let result = null;
    switch (this.state.pendingOperation) {
      case "+":
        result = Number(this.state.firstOperand) + Number(this.state.inputText);
        result = result.toString();
        this.setState({
          inputText: result,
          pendingOperation: null,
          firstOperand: ""
        });
        return;
      case "-":
        result = Number(this.state.firstOperand) - Number(this.state.inputText);
        result = result.toString();
        this.setState({
          inputText: result,
          pendingOperation: null,
          firstOperand: ""
        });
        return;
      case "/":
        result = Number(this.state.firstOperand) / Number(this.state.inputText);
        result = result.toString();
        this.setState({
          inputText: result,
          pendingOperation: null,
          firstOperand: ""
        });
        return;
      case "*":
        result = Number(this.state.firstOperand) * Number(this.state.inputText);
        result = result.toString();
        this.setState({
          inputText: result,
          pendingOperation: null,
          firstOperand: ""
        });
        return;
      default:
        return;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          onChangeText={this.handleInput.bind(this)}
          value={this.state.inputText}
          style={styles.input}
        />
        <View style={{ flex: 1, flexDirection: "column" }}>
          {this.validKeys.map((key, i) => {
            if (i % 2 != 0) {
              return;
            }
            return (
              <View style={styles.row}>
                <CalcButton 
                handleButtonInput={this.handleButtonInput.bind(this)}
                value={this.validKeys[i]} /> 

                <CalcButton 
                handleButtonInput={this.handleButtonInput.bind(this)}
                value={this.validKeys[i + 1]}/>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgb(42,41,41)",
    height: 100,
    width: 100 + "%",
    color: "white",
    textAlign: "right",
    fontSize: 48
  },

  row: {
    flex: 1,
    flexDirection: "row"
  }
});
export default Calc;

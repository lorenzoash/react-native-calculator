import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

class Calc extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      pendingOperation: null,
      firstOperand: ""
    };
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
      "="
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
    }
    this.setState({
      inputText: this.state.inputText + text
    });
    console.log(JSON.stringify(this.state));
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
            if (i % 2 !== 0) {
              return;
            }
            return (
              <View style={styles.row}>
                <TouchableOpacity
                  onPress={this.handleButtonInput.bind(this, this.validKeys[i])}
                  style={styles.button}
                >
                  <Text style={styles.btnText}> {this.validKeys[i]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.handleButtonInput.bind(
                    this,
                    this.validKeys[i + 1]
                  )}
                  style={styles.button}
                >
                  <Text style={styles.btnText}> {this.validKeys[i + 1]}</Text>
                </TouchableOpacity>
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
    backgroundColor: "rgb(41,41,41)",
    height: 100,
    width: 100 + "%",
    color: "white",
    textAlign: "right",
    fontSize: 48
  },
  button: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen"
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  btnText: {
    fontSize: 36
  }
});
export default Calc;

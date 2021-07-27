import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
  Button,
  Image,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Form({ addHandler }) {
  const [text, setValue] = useState("");
  const onChange = (text) => {
    setValue(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Write your work list"
      ></TextInput>
      <Button
        color="green"
        onPress={() => addHandler(text)}
        title="Add"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
  },
});

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Alert,
  Image,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListItem({ el, deletHandler }) {
  return (
    <TouchableOpacity onPress={() => deletHandler(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    marginTop: 20,
    width: "60%",
    marginLeft: "20%",
  },
});

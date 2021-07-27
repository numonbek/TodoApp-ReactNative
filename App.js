import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  Alert,
  Image,
  View,
  FlatList,
  SectionList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import ListItem from "./components/Listitem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить молоко", key: "1" },
    { text: "Купыть машину", key: "2" },
    { text: "Купить картошку", key: "3" },
    { text: "Стать Миллионером", key: "4" },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list,
      ];
    });
  };
  const deletHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    });
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <ScrollView>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem el={item} deletHandler={deletHandler} />
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

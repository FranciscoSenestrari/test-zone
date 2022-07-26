import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "./components/svg/cop.svg";
import Item from "./components/Item";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.back}></View>
      <View style={styles.buttons}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  buttons: {
    flexWrap: "wrap",
    flexDirection:"row",
    marginTop: 90,
    marginLeft:60
  },
  back: {
    backgroundColor: "#6B96DC",
    height: 50,
    width: 350,
    marginTop: 0,
    position: "absolute",
    borderBottomEndRadius: 100,
    borderTopStartRadius: 100,
  },
});

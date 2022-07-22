import { View, Image, StyleSheet } from "react-native";
import React from "react";
import Icon from "./svg/user.svg";

const Item = () => {
  return (
    <View style={styles.container}>
      <Image source={require('/components/svg/feet.png')} />
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 120,
    backgroundColor: "#f4f4f4",
    borderRadius: 20,
    shadowColor: "#c1c1c1",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 10,
  },
});

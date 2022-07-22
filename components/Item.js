import { View, Image, StyleSheet , TouchableOpacity} from "react-native";
import React from "react";
import Icon from "./svg/user.svg";

const Item = ({source}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={require("./svg/feet.png")} />
    </TouchableOpacity>
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    alignContent:"center",
    margin:25
  },
  image: {
    width: 100 ,
    height: 100,
  },
});

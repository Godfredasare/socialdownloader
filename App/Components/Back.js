import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Config/Colors";
import Icon from "./VectorIcons";

const Back = ({
  onPress,
  type,
  name,
  size,
  color,
  style,
  background = "secondary",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style, { backgroundColor: Colors[background] }]}
    >
      <Icon
        name={name}
        type={type}
        size={size}
        color={color}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.background,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

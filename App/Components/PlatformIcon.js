import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../Config/Colors";
import Icon from "./VectorIcons";

const PlatformIcon = ({ onPress, type, name, color, title, style, size }) => {
  return (
    <View onPress={onPress} style={[styles.container]}>
      <View style={[style]}>
        <Icon name={name} type={type} size={size} color={color} />
      </View>
    </View>
  );
};

export default PlatformIcon;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    alignSelf: "center",
    marginVertical: 15,
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

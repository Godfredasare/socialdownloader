import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import Icons from "../Components/VectorIcons";
import Colors from "../Config/Colors";

const Platform = ({type, color, name, background, onPress}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, {backgroundColor: background}]}>
      <Icons type={type} name={name} size={60} color={color} />
    </Pressable>
  );
};

export default Platform;

const styles = StyleSheet.create({
  container: {
    width: 92,
    height: 140,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 12,
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

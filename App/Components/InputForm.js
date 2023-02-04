import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "./VectorIcons";

const InputForm = ({
  placeholder,
  name,
  size,
  type,
  color,
  style,
  background,
  width = "100%",
  ...otherProps
}) => {
  return (
    <View
      style={[
        styles.container,
        style,
        { backgroundColor: background, width: width },
      ]}
    >
      <Icon
        name={name}
        type={type}
        size={size}
        color={color}
        style={styles.icon}
      />
      <TextInput
        placeholder={placeholder}
        {...otherProps}
        style={styles.input}
      />
    </View>
  );
};
export default InputForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    // width: '100%',
    borderRadius: 27,
  },
  input: {
    fontSize: 16,
    width: "90%",
    paddingLeft: 10,
  },
  icon: {
    paddingLeft: 5,
  },
});

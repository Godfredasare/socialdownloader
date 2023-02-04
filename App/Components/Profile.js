import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import {Ionicons } from "@expo/vector-icons";
import Colors from "../Config/Colors";


const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU'

const Profile = ({ }) => {
  return (
    <View style={styles.container}>
    {!imageUrl && (
              <Ionicons name="person" size={30} color={Colors.primary} />
            )}
            {imageUrl && (
              <Image source={{ uri: imageUrl }} style={styles.image} />
            )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    borderRadius: 25,
    width: 50,
    height: 50,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 35,
    width: 50,
    height: 50,
  },
});

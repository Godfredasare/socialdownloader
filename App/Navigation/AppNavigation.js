import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProgressScreen from "../Screens/ProgressScreen";
import SavedScreen from "../Screens/SavedScreen";
import Colors from "../Config/Colors";
import {
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          height: 65,
          borderRadius: 15,
          marginLeft: 20,
          marginRight: 20,
          backgroundColor: "#eef0f2",
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowlabel: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.wrap}>
              <View
                style={[
                  styles.wrapIcon,
                  { backgroundColor: focused ? '#329d9c' : "transparent" },
                ]}
              >
                <Octicons
                  name="home"
                  size={24}
                  color={focused ? "white" : color}
                />
              </View>
              {focused && (
                <Text style={{ fontSize: 15, marginLeft: 2 }}>Home</Text>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressScreen}
        options={{
            tabBarIcon: ({ focused, color, size }) => (
                <View style={styles.wrap}>
                  <View
                    style={[
                      styles.wrapIcon,
                      { backgroundColor: focused ? '#329d9c' : "transparent" },
                    ]}
                  >
                    <Octicons
                      name="download"
                      size={24}
                      color={focused ? "white" : color}
                    />
                  </View>
                  {focused && (
                    <Text style={{ fontSize: 15, marginLeft: 2 }}>Progress</Text>
                  )}
                </View>
              ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
            tabBarIcon: ({ focused, color, size }) => (
                <View style={styles.wrap}>
                  <View
                    style={[
                      styles.wrapIcon,
                      { backgroundColor: focused ? '#329d9c' : "transparent" },
                    ]}
                  >
                    <MaterialCommunityIcons
                      name="folder-plus"
                      size={24}
                      color={focused ? "white" : color}
                    />
                  </View>
                  {focused && (
                    <Text style={{ fontSize: 15, marginLeft: 2 }}>Saved</Text>
                  )}
                </View>
              ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});

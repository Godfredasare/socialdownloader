import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Safeview = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Safeview;

const styles = StyleSheet.create({
  container:{

  }
});

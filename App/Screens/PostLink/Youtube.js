import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeView from "../../Components/Safeview";
import Back from "../../Components/Back";
import PlatFormIcon from "../../Components/PlatformIcon";
import InputForm from "../../Components/InputForm";
import Colors from "../../Config/Colors";

const Youtube = ({ navigation }) => {
  return (
    <SafeView style={[styles.container]}>
      <ScrollView>
        <View style={styles.wrapTop}>
          <Back
            onPress={() => navigation.goBack()}
            type="ionicons"
            name={"ios-caret-back-outline"}
            color={Colors.white}
            size={30}
          />
          <Text style={styles.platform}>Youtube Downloader</Text>
        </View>
        <View>
        <PlatFormIcon
            type="ionicons"
            name={"ios-logo-youtube"}
            color={'#fd1d1d'}
            size={50}
          />
        </View>
        <View style={styles.wrapSearch}>
          <InputForm
            placeholder={"Paste link here..."}
            type="fontisto"
            name="link"
            color={Colors.secondary}
            size={16}
            background={Colors.white}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            keyboardType="default"
            width="83%"
            style={styles.search}
          />
          <Back
            onPress={() => navigation.goBack()}
            type="fontawesome5"
            name={"download"}
            color={Colors.white}
            size={20}
            background="primary"
            style={{ width: 45, height: 45, borderRadius: 23 }}
          />
        </View>
      </ScrollView>
    </SafeView>
  );
};

export default Youtube;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: Colors.background,
    flex: 1,
    paddingTop: 15,
  },
  wrapSearch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  wrapTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  platform:{
    fontSize: 20,
    paddingLeft: 30,
    fontWeight: '600',
  },
  search:{
    shadowColor: Colors.background,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
  }
});

import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Platform from "../Components/Platform";
import Safeview from "../Components/Safeview";
import Profile from "../Components/Profile";
import Back from "../Components/Back";
import Colors from "../Config/Colors";

const icon = [
  {
    id: "1",
    type: "fontawesome5",
    name: "facebook",
    color: "#292f36",
    background: "#bce6ff",
    navigate: "facebook",
  },
  {
    id: "2",
    type: "fontawesome5",
    name: "whatsapp",
    color: "#292f36",
    background: "#cff4d2",
    navigate: "whatsapp",
  },
  {
    id: "3",
    type: "AntDesign",
    name: "instagram",
    color: "#292f36",
    background: "#ffaaa6",
    navigate: "instagram",
  },
  {
    id: "4",
    type: "ionicons",
    name: "ios-logo-youtube",
    color: "#292f36",
    background: "#ff847c",
    navigate: "youtube",
  },
  {
    id: "5",
    type: "fontawesome5",
    name: "tiktok",
    color: "#292f36",
    background: "#dadad9",
    navigate: "tiktok",
  },
  {
    id: "6",
    type: "ionicons",
    name: "ios-logo-twitter",
    color: "#292f36",
    background: "#bce6ff",
    navigate: "twitter",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <Safeview style={styles.container}>
      <View style={styles.wrapProfile}>
      <Back
            type="AntDesign"
            name={"appstore1"}
            color={Colors.white}
            size={20} />
        <Text style={styles.text}>Social Downloader</Text>
        <Profile />
      </View>
      <Text style={styles.platformText}>
        Select a <Text style={{ color: Colors.primary }}>platform</Text> to post
        your link and start the download process.
      </Text>

      <View style={styles.flatlist}>
        <FlatList
          data={icon}
          numColumns={3}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Platform
              type={item.type}
              name={item.name}
              color={item.color}
              background={item.background}
              onPress={() => navigation.navigate(item.navigate)}
            />
          )}
        />
      </View>
    </Safeview>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    backgroundColor: Colors.background,
    flex: 1,
  },
  icon: {
    backgroundColor: Colors.secondary,
    borderRadius: 20,
    width: 40,
    height: 40,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapProfile: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  platformText: {
    fontSize: 25,
    fontWeight: "600",
    top: 100,
    width: "80%",
    paddingLeft: 10,
  },
  flatlist: {
    top: 120,
  },
});

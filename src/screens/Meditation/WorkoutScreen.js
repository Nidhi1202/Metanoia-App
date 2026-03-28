import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Card } from "react-native-elements";
import { Video } from "expo-av";

const { width, height } = Dimensions.get("window");

const WorkoutScreen = () => {
  WorkoutList = [
    {
      id: 1,
      name: "Stretching Basics",
      uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    },
    {
      id: 2,
      name: "20 Minute HIIT",
      uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    },
    {
      id: 3,
      name: "30 Minute HIIT",
      uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    },
  ];
  return (
    <View style={styles.screen}>
      <View style={styles.demoBanner}>
        <Text style={styles.demoBannerText}>
          Demo — placeholder videos. Actual workout content coming soon.
        </Text>
      </View>
      <FlatList
        data={WorkoutList}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => {
          return (
            <ScrollView style={{ marginTop: 10, marginBottom: 10 }}>
              <Card containerStyle={{ borderRadius: 20 }}>
                <Card.Title style={{ fontFamily: "Poppins-SemiBold" }}>
                  {item.name}
                </Card.Title>
                <Card.Divider />
                <View>
                  <Video
                    source={{
                      uri: `${item.uri}`,
                    }}
                    useNativeControls
                    resizeMode="cover"
                    isLooping={false}
                    style={styles.video}
                  />
                </View>
              </Card>
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

WorkoutScreen.navigationOptions = {
  headerTitle: "Workout",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  demoBanner: {
    backgroundColor: "#FFF3CD",
    borderColor: "#FBBF24",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 12,
    marginHorizontal: 16,
  },
  demoBannerText: {
    color: "#92400E",
    fontSize: 13,
    textAlign: "center",
  },
  video: {
    width: 300,
    height: 200,
  },
});

export default WorkoutScreen;

import { StyleSheet, View, Text, Button } from "react-native";
import { HomeScreenProps } from "./navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Device from "expo-device";
import Share from "react-native-share";

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const insets = useSafeAreaInsets();

  const navigateToDetails = () => {
    navigation.navigate("Details", { email: "test@test.com" });
  };

  const handleShare = async () => {
    try {
      const shareOptions = {
        title: "Share file",
        message: "Simple share with message",
        url: "https://google.com",
      };
      await Share.open(shareOptions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>{Device.brand}</Text>
      <Text style={styles.text}>{`${Device.osName} ${Device.osVersion}`}</Text>
      <Button title="Navigate to Details" onPress={navigateToDetails} />
      <Button title="Share" onPress={handleShare} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingHorizontal: 20,
  },
  text: { fontSize: 20 },
});

import { StyleSheet, View, Text, Button, Image } from "react-native";
import { HomeScreenProps } from "./navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const insets = useSafeAreaInsets();

  const navigateToDetails = () => {
    navigation.navigate("Details", { email: "test@test.com" });
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.text}>Home Screen</Text>
      <Image style={styles.image} source={require("../assets/favicon.png")} />
      <Button title="Navigate to Details" onPress={navigateToDetails} />
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
  image: {
    width: 100,
    height: 100,
    transform: [{ rotate: "45deg" }],
  },
});

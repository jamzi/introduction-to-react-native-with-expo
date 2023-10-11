import { StyleSheet, View, Text, Button } from "react-native";
import { HomeScreenProps } from "./navigation/types";

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const navigateToDetails = () => {
    navigation.navigate("Details", { email: "test@test.com" });
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Navigate to Details" onPress={navigateToDetails} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

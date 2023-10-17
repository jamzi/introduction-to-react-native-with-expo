import { StyleSheet, View, Text, Button } from "react-native";
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
});

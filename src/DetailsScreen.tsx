import { StyleSheet, View, Text, Button } from "react-native";
import { DetailsScreenProps } from "./navigation/types";

export default function DetailsScreen({
  navigation,
  route,
}: DetailsScreenProps) {
  const email = route.params?.email;

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>{email}</Text>
      <Button title="Go Back" onPress={handleGoBack} />
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

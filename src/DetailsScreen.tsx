import { StyleSheet, View, Text } from "react-native";
import { DetailsScreenProps } from "./navigation/types";

export default function DetailsScreen({ route }: DetailsScreenProps) {
  const email = route.params?.email;
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>{email}</Text>
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

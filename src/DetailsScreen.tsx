import { StyleSheet, View, Text } from "react-native";
import { DetailsScreenProps } from "./navigation/types";

export default function DetailsScreen({}: DetailsScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
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

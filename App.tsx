import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Button } from "react-native";

export default function App() {
  const handleButtonPress = () => {
    Alert.alert("Hey there");
  };

  return (
    <View style={styles.container}>
      <Text>Introduction to React Native with Expo</Text>
      <Button onPress={handleButtonPress} title="Open Dialog" />
      <StatusBar style="auto" />
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

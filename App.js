import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  console.log("App is running :)");

  return (
    <View style={styles.container}>
      <Text>Ma première appli en JS !!</Text>
      <Button title="Ajouter" onPress={() => console.log("adding")} />
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
}

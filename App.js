import { StatusBar } from "expo-status-bar";
import React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={{ height: 60, width: 200, borderColor: "#000", borderWidth: 1 }} />
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

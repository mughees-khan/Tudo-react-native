import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import App from "./src";
export default function App() {
  return (
    <NativeBaseProvider>
      <Box style={styles.body}><App/></Box>
    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
    body : {
      backgroundColor:"#3498db"
    }
})
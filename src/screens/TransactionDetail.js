import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionDetail = () => {
  console.log("Hello");
  // let transaction = data[index];
  return (
    <View style={styles.container}>
      
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default TransactionDetail;

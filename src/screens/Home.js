import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Transaction from "../components/Transaction";
import SearchBar from "../components/SearchBar";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native-elements";
import { Colours } from "../../assets/colours/Colours";
import useTransactions from "../hooks/useTransactions";

const Home = () => {
  const [search, updateSearch] = useState("");
  const [searchTransactions, results, errorMessage] = useTransactions();

  console.log("RESULTS --> " + results.length);
  return (
    <View style={styles.container}>
      <View style={styles.wallet}>
        <StatusBar style="auto" />
        <Text h4 style={styles.walletName}>
          Wallet name
        </Text>
        <View style={styles.balance}>
          <FontAwesome name="bitcoin" size={24} color="white" />
          <Text style={styles.crypto}>1.62402785</Text>
        </View>
        <View style={styles.balance}>
          <FontAwesome name="rupee" size={16} color="white" />
          <Text style={styles.rupee}>7645060.27</Text>
        </View>
      </View>

      <View style={styles.searchBar}>
        <Text style={styles.transactionsTitle}>Transactions</Text>
        <SearchBar
          search={search}
          onTermChange={updateSearch}
          onTermSubmit={() => searchTransactions(search)}
        />
        {/* error message, if any error occurs */}
        {errorMessage ? <Text>{errorMessage}</Text> : null}
      </View>

      <FlatList
        style={styles.transactions}
        data={results}
        keyExtractor={(result) => result.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Transaction data={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    // borderColor: "black",
    // borderWidth: 1,
  },
  balance: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  searchBar: {
    marginTop: 10,
    marginBottom: 15,
  },
  rupee: {
    fontSize: 16,
    marginLeft: 7,
    color: "white",
  },
  crypto: {
    fontSize: 24,
    marginLeft: 7,
    color: "white",
  },
  walletName: {
    color: "white",
    marginVertical: 5,
  },
  wallet: {
    borderRadius: 25,
    marginBottom: 10,
    padding: 15,
    backgroundColor: Colours.Blue,
  },
  transactionsTitle: {
    fontFamily: "inter-bold",
    marginBottom: 10,
    fontWeight: "600",
    fontSize: 25,
  },
  transactions: {},
});

export default Home;

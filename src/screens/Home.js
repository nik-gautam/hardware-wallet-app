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
        <Text style={styles.walletName}>Wallet name</Text>
        <View style={styles.balance}>
          <Text style={styles.crypto}>ETH 1.62402785</Text>
        </View>
        <View style={styles.balance}>
          <Text style={styles.rupee}>&#8377; 7645060.27</Text>
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
    marginHorizontal: 15,
    marginTop: 50,
    // borderColor: "black",
    // borderWidth: 1,
  },
  balance: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  searchBar: {
    marginTop: 20,
    marginBottom: 15,
  },
  rupee: {
    fontFamily: "inter-regular",
    fontWeight: "400",
    fontSize: 15,
    marginLeft: 8,
    color: "white",
  },
  crypto: {
    fontSize: 24,
    marginTop: 10,
    fontFamily: "inter-medium",
    fontWeight: "600",
    color: "white",
  },
  walletName: {
    color: "white",
    fontFamily: "inter-regular",
    fontWeight: "400",
    fontSize: 15,
    marginVertical: 5,
  },
  wallet: {
    borderRadius: 15,
    marginBottom: 10,
    padding: 15,
    backgroundColor: Colours.Blue,
    elevation: 15,
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

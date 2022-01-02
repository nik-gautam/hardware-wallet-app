import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Transaction from "../components/Transaction";
import SearchBar from "../components/SearchBar";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native-elements";
import { Colours } from "../../assets/colours/Colours";
import useTransactions from "../hooks/useTransactions";
import { useSelector } from "react-redux";
import TransactionNavigator from "../navigators/TransactionNavigator";

const Home = ({ navigation }) => {
  const [search, updateSearch] = useState("");
  const [searchTransactions, results, errorMessage, allTransactions] =
    useTransactions();

  const { isLoggedIn, balance, address } = useSelector((state) => state.wallet);

  console.log("isLoggedIn", isLoggedIn);

  return (
    <View style={styles.container}>
      <View style={styles.wallet}>
        <StatusBar style="auto" />
        {/* <Text style={styles.walletBalanceTitle}>{address}</Text> */}
        <Text style={styles.walletBalanceTitle}>Wallet Balance</Text>

        <View style={styles.balance}>
          <Text style={styles.crypto}>ETH {balance}</Text>
        </View>
        {/* <View style={styles.balance}>
          <Text style={styles.rupee}>&#8377; 7645060.27</Text>
        </View> */}
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
        keyExtractor={(result) => result.blockHash}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(TransactionNavigator, {
                  screen: "TransactionDetail",
                });
              }}>
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
    fontSize: 18,
    marginTop: 10,
    fontFamily: "inter-medium",
    fontWeight: "600",
    color: "white",
  },
  walletBalanceTitle: {
    color: "white",
    fontFamily: "inter-regular",
    fontWeight: "400",
    fontSize: 24,
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

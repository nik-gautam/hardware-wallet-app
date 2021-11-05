import React from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colours } from "../../assets/colours/Colours";

const SearchBar = ({ search, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search..."
        autoCapitalize="none"
        autoCorrect={false}
        value={search}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        style={styles.searchBox}
      />
      <TouchableOpacity onPress={onTermSubmit} style={styles.searchBarIcon}>
        <FontAwesome name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderColor: Colours.Neutral_5,
    borderRadius: 5,
    flexDirection: "row",
    padding: 10,
  },
  searchBox: {
    // borderWidth: 1,
    // borderColor: "red",
    flex: 6,
  },
  searchBarIcon: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchBar;

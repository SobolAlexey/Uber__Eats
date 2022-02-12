import { View, Text } from "react-native";
import React from "react";
import HeaderTabs from "../../HeaderTabs";
import { SafeAreaView } from "react-native-web";
import SearchBar from "../../SearchBar";

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
   <View style={{backgroundColor: 'white', padding: 15}}>
      <HeaderTabs />
      <SearchBar />
    </View>
    </SafeAreaView>
  );
};

export default Home;

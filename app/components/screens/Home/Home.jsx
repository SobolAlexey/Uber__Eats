import { View, Text } from "react-native";
import React from "react";
import HeaderTabs from "../../HeaderTabs";
import { SafeAreaView } from "react-native-web";
import SearchBar from "../../SearchBar";
import Categories from "../../Categories";


const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
   <View style={{backgroundColor: 'white', padding: 15}}>
      <HeaderTabs />
      <SearchBar />
    </View>
    <Categories />
    </SafeAreaView>
  );
};

export default Home;

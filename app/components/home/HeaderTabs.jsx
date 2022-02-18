import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-web";

const HeaderTabs = () => {
    const [activeTab, setActiveTab] = useState('Delivery')
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton 
       text="Delivery"
       textColor='black' 
       btnColor='white' 
       activeTab={activeTab}
       setActiveTab={setActiveTab}
       />
      <HeaderButton 
       text="Pickup" 
       textColor='white'
       btnColor='black' 
       activeTab={activeTab}
       setActiveTab={setActiveTab}
       />
    </View>
  );
};

export default HeaderTabs;

const HeaderButton = ({ text, textColor, btnColor, activeTab , setActiveTab }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: activeTab === text ? 'black' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={{
          color: activeTab === text ? 'white' : 'black',
          fontSize: 15,
          fontWeight: '900',
          letterSpacing: 2,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauco",
    price: "$13.56",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauco",
    price: "$13.56",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauco",
    price: "$13.56",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauco",
    price: "$13.56",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemsStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

const MenuItems = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemsStyle}>
            <BouncyCheckbox 
            iconStyle={{borderColor: 'lightgray', borderRadius: 0}}
            fillColor='green'
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider 
          width={0.5}
           orientation='vertical'
           style={{ marginHorizontal: 20}}
            />
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItems;

const FoodInfo = ({ food }) => (
  <View
    style={{
      width: 240,
      justifyContent: "space-evenly",
    }}
  >
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const FoodImage = ({ food }) => (
  <View>
    <Image
      source={{ uri: food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native-web";
import MaterialComunityIcons from "react-native-vector-icons/Ionicons";

export const localRestaurants = [
    {
      name: "Turtle Bay Sea Food Restaurant",
      image_url: "https://media-cdn.tripadvisor.com/media/photo-s/15/9e/05/d1/grilled-prawn.jpg",
      reviews: "1500",
      price: "$$",
      rating: "4.5",
      categories: [{title: "Thai"}, {title: "Comfort Food"}]
    },
    {
        name: "Любовь Пирогова",
        image_url:
         "https://media-cdn.tripadvisor.com/media/photo-p/1a/90/19/a0/photo1jpg.jpg",
        categories: ['Cafe', 'Bar'],
        price: '$$-$$$',
        reviews: 1044,
        rating: '3.5',
        categories: [{title: "Thai"}, {title: "Comfort Food"}]
    },
    {
        name: "Tomorrow",
        image_url:
         "https://img04.rl0.ru/afisha/o/s2.afisha.ru/mediastorage/9f/a1/ee84f8d1d4f84639b9c98dcaa19f.jpg",
        categories: ['Cafe', 'Bar'],
        price: '$$$',
        reviews: 1944,
        rating: '4',
        categories: [{title: "Thai"}, {title: "Comfort Food"}]
    },
    {
        name: "Индрик",
        image_url:
         "https://img04.rl0.ru/afisha/o/s.afisha.ru/mediastorage/b0/32/13c554c6664b4cb2b7e548cc32b0.jpg",
        categories: ['Cafe', 'Bar'],
        price: '$$$$',
        reviews: 1544,
        rating: '4.6',
        categories: [{title: "Thai"}, {title: "Comfort Food"}]
    },
    {
        name: "Memo",
        image_url:
         "https://img04.rl0.ru/afisha/o/www.afisha.ru/uploads/ba6ada629bc944038cab28c2e2582304.jpg",
        categories: ['Cafe', 'Bar'],
        price: '$$$',
        reviews: 2244,
        rating: '4.9',
        categories: [{title: "Thai"}, {title: "Comfort Food"}]
    },
]
const RestaurantItems = ({navigation, restaurantData}) => {
  return (
    <>
    {restaurantData.map((restaurant, index) => (
      <TouchableOpacity
       key={index}
       activeOpacity={1}
        style={{ marginBottom: 30 }}
        onPress={() => navigation.navigate("RestaurantDetail", {
          name: restaurant.name,
          image: restaurant.image_url,
          price: restaurant.price,
          reviews: restaurant.reviews,
          rating: restaurant.rating,
          categories: restaurant.categories,
        })}
        >
      <View
        style={{
          marginTop: 10,
          padding: 15,
          backgroundColor: "white",
        }}
      >
        <RestauranImage image={restaurant.image_url} />
        <RestauranInfo name={restaurant.name} rating={restaurant.rating}/>
      </View>
      </TouchableOpacity>
    ))}
    </>
  );
};

export default RestaurantItems;

const RestauranImage = ({image}) => (
  <>
    <Image
      source={{
        uri: image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20 }}>
      <MaterialComunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestauranInfo = ({name, rating}) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        {name}
      </Text>

      <Text style={{ fontSize: 13, color: "gray" }}>30-45 min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text style={{}}>{rating}</Text>
    </View>
  </View>
);

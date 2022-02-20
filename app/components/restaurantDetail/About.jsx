import { View, Text, Image } from 'react-native'
import React from 'react'
const yelpRestaurantInfo = {
  name: "Turtle Bay Sea Food Restaurant",
  image: "https://media-cdn.tripadvisor.com/media/photo-s/15/9e/05/d1/grilled-prawn.jpg",
  reviews: "1500",
  price: "$$",
  rating: "4.5",
  categories: [{title: "Thai"}, {title: "Comfort Food"}]
}

const {name, image, price, rating, categories, reviews} = yelpRestaurantInfo

const formattedCategories = categories.map(cat => cat.title).join(" • ")

const description =
 `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`

const About = () => {
  return (
    <View>
     <RestaurantImage image={image} />
     <RestaurantName name={name} />
     <RestaurantDescription description={description} />
    </View>
  )
}

export default About

const RestaurantImage = ({image}) => (
  <Image 
  source={{uri: image}}
  style={{
    width: '100%',
    height: 180,
  }}
  />
)

const RestaurantName = ({name}) => (
  <Text style={{
    fontSize: 29,
    marginHorizontal: 15,
    fontWeight: '600',
    marginTop: 10,
  }}>
  {name}
  </Text>
)

const RestaurantDescription = ({description}) => (
  <Text style={{
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15.5,
  }}>
    {description}
  </Text>
)
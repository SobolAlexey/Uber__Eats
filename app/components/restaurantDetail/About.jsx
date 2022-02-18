import { View, Text, Image } from 'react-native'
import React from 'react'
const image = 'https://media-cdn.tripadvisor.com/media/photo-s/15/9e/05/d1/grilled-prawn.jpg'
const title = 'Turtle Bay Sea Food Restaurant'
const description = 'Tai • Comfort Food  • $$ • 🎫 • 4 ⭐ (2913+)'

const About = () => {
  return (
    <View>
     <RestaurantImage image={image} />
     <RestaurantTitle title={title} />
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

const RestaurantTitle = ({title}) => (
  <Text style={{
    fontSize: 29,
    marginHorizontal: 15,
    fontWeight: '600',
    marginTop: 10,
  }}>
  {title}
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
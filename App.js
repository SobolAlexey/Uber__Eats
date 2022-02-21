import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './app/navigation/navigation';
import RestaurantDetail from './app/screens/RestaurantDetail';


export default function App() {
  return <RootNavigation />
}

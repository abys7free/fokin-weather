import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from './Weather';

const API_KEY = "24b36d9d547b52df5385ca44fe049d64";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    console.log(data);
    this.setState({isLoading: false, temp: data.main.temp});
  }
  getLocation = async() => {
    try {
      const { status } = await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
    } catch (error) {
      console.log(error);
      Alert.alert("Can't find you", "So sad")
    }

  };
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading />: <Weather temp={Math.round(temp)}/>;
  }
}
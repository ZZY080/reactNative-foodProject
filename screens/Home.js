import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'
const YELP_API_KEY = 'dIcXUKEfO0wznw5JEYOXhKAdNW-XL4MHnMV5A6l3goQ-ze05CyTcNHjujO_2jveDw-n90Qe-TDheBgJXMihs0bPTMXcdsShB7T-K9Q2zvXFGD4xo5BzELKi-vkm6Y3Yx';


export default function Home({navigation}) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery")
    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            }
        };
        return fetch(yelpUrl, apiOptions)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setRestaurantData(
                    json.businesses
                    // json.businesses.fliter((business) => {
                    //     return business.transactions.includes('')
                    // })

                )
            })
    };
    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab])

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15, }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <BottomTabs />
        </SafeAreaView>
    )
}
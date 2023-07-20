import { View, Text, Image, TouchableOpacity, Platform , Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Icon from 'react-native-feather'

import { featured } from '../constants'
import { themeColors } from '../theme'

export default function DeliveryScreen() {
    const restaurant= featured.restaurants[0];
    const navigation = useNavigation();

    // useEffect(() => {
    //     setTimeout(() => {
            

    //         <MapView
    //         initialRegion = {{
    //             latitude: restaurant.lat,
    //             longitude: restaurant.lng,
    //             latitudeDelta: 0.01,
    //             longitudeDelta: 0.01
    //         }}
    //         className="flex-1"
    //         mapType = 'standard'
    //     >
    //         <Marker 
    //           coordinate = {{
    //             latitude: restaurant.lat,
    //             longitude: restaurant.lng,
    //           }}
    //           title = { restaurant.name }
    //           description = { restaurant.description }
    //         />
    //     </MapView>
    //     }, 3000)
    // }) 

    // const map = useEffect();

    return (
        <View claasName="flex-1">

            {/* Map view */}
            {/* <View>
            { map }

            </View> */}
                        <MapView
            initialRegion = {{
                latitude: restaurant.lat,
                longitude: restaurant.lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            // style={{ width: '100%', height: '100%' }}
            style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
            // className="flex-1"
            mapType='standard'
        >
            <Marker 
              coordinate = {{
                latitude: restaurant.lat,
                longitude: restaurant.lng,
              }}
              title = { restaurant.name }
              description = { restaurant.description }
            />
        </MapView>


            <View className="rounded-t-3xl -mt-12 bg-white relative">
                  <View className="flex-row justify-between px-5 pt-10 ">
                        <View>
                            <Text className="text-lg text-gray-700 font-semibold">
                                Estimated Arrival Time 
                            </Text>
                            <Text className="text-3xl font-extrabold text-gray-700">20-40 Minutes</Text>
                            <Text className="mt-2 text-gray-700 font-semibold">Your order is on its way
                            </Text>
                        </View>
                    </View>
                    <Image className="h-24 w-24" source={require('../assets/images/bikeGuy2.gif')}/>
                    <View className="flex-row justify-between items-center rounded-full p-2 my-5 mx-2" style={{ backgroundColor: '#000'}}>
                        <View 
                            className=" p-1 rounded-full"
                            style={{ backgroundColor: 'rgba(255,255,255,0.4)'}}
                        >
                            <Image source={require('../assets/images/deliveryGuy.png')} className="w-16 h-16 rounded-full"/>
                        </View>
                        <View className="flex-1 ml-3">
                            <Text className="text-lg font-bold text-white"> Diaton Xavier 
                            </Text>
                            <Text className="font-semibold text-white"> Your Deliver 
                            </Text>
                        </View>
                        <View className="flex-row items-center sapce-x-4 mr-3">
                            <TouchableOpacity className="bg-white p-2 rounded-full">
                                <Icon.Phone  fill={'#000'} stroke={"#000"} strokeWidth={2}/>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate('Home')}
                            className="bg-white p-2 rounded-full">
                                <Icon.X   stroke={"red"} strokeWidth={2}/>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        </View>
    )
}
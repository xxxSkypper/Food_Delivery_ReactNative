import { View, Text, TouchableOpacity, Image } from 'react-native'

import { featured } from '../constants';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { ScrollView } from 'react-native-web';


const CartScreen = () => {
    const restaurant = featured.restaurants[0]
    const navigation = useNavigation();
  return (
    <View className="bg-white flex-1">

        {/* return button */}

        <View className="relative flex items-center justify-items-end justify-end text-center py-4 shadow-sm">
            <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: 'whitesmoke'}}
            className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
            >
                <Icon.ArrowLeft strokeWidth={3} stroke={'#000'}/>
            </TouchableOpacity>
            <Text className="mt-1 font-bold text-2xl ">My Cart</Text>
        </View> 

        {/* delivery time */}

        <View 
            style={{ backgroundColor: themeColors.bgColor(0.2)}}
            className="flex-row px-4 items-center"
        >
            <Image 
            source={require('../assets/images/bikeGuy.png')}
            className="w-20 h-20 rounded-full"
            />
            <Text className="flex-1 pl-4">Delivery in 20-40minutes</Text>
            <TouchableOpacity>
                <Text className="font-bold" style={{ color: themeColors.text}}>
                    Change
                </Text>
            </TouchableOpacity>
        </View>

        {/* dishes */}

        <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 50
        }}
        className="bg-white pt-5"
        >
            {
                restaurant.dishes.map((dish, index) => {
                    return (
                        <View key={index}
                        className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
                        >
                            <Image className="h-14 w-14 rounded-full" source={dish.image}/>
                        </View>
                    )
                })
            }
        </ScrollView>
    </View>

   
  )
}

export default CartScreen 
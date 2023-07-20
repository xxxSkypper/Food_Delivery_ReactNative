import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import { featured } from '../constants';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';



const CartScreen = () => {
    const restaurant = featured.restaurants[0]
    const navigation = useNavigation();
  return (
    <View className=" flex-1">

        {/* return button */}

        <View 
        className="relative flex items-center justify-items-end justify-end text-center py-4 shadow-sm" 
        style={{ backgroundColor: '#fff'}}
        >
            <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={{ borderWidth: 3, borderColor: 'rgba(209, 209, 209,0.7)', }}
            className="absolute z-10 rounded-full p-2 ml-5 shadow top-3 left-2"
            >
                <Icon.ArrowLeft strokeWidth={3} stroke={'#000'}/>
            </TouchableOpacity>
            <Text className="mt-1 font-bold text-2xl ">My Cart</Text>
        </View> 

        {/* delivery time */}

        <View 
            style={{ backgroundColor: themeColors.bgColor(0.3)}}
            className="flex-row px-4  items-center"
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
        className=" pt-5"
        >
            {
                restaurant.dishes.map((dish, index) => {
                    return (
                        <View key={index}
                        className="flex-row items-center space-x-3 py-2 px-4  rounded-3xl mx-2 mb-3 shadow-md"
                        style={{ backgroundColor: '#fff'}}
                        >
                            <Image className="h-14 w-14 rounded-2xl" source={dish.image}/>
                        
                            <View className="block">
                                <Text className="flex-1 font-bold text-gray-700">{dish.name}
                                </Text>
                                <Text className="font-semibold text-base">
                                    ${dish.price}
                                </Text>
                                <View className="flex-row justify-between items-center space-x-32">
                                    <View className="flex-row justify-center items-center">
                                        <TouchableOpacity 
                                        className="p-1 rounded-full"
                                        style={{
                                         borderWidth: 2, borderColor: 'rgba(209, 209, 209,0.7)' }}
                                        >
                                        <Icon.Minus strokeWidth={2} height={20} width={20} stroke="#000"/>
                                        </TouchableOpacity>
                                        <Text className="p-2 space-x-4 font-semibold">
                                            2
                                        </Text>
                                        <TouchableOpacity 
                                        className="p-1 rounded-full"
                                        style={{ borderWidth: 2, borderColor: 'rgba(209, 209, 209,0.7)'}}
                                        >
                                        <Icon.Plus strokeWidth={2} height={20} width={20} stroke="#000"/>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity className="p-1 rounded-full" style={{
                                        borderWidth: 2, borderColor: 'rgba(209, 209, 209,0.7)', }}>
                                        <Icon.X strokeWidth={2} height={20} width={20} stroke="#000"/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                     
                    )
                })
            }
        </ScrollView>

        {/* totals */}

        <View className="p-6 px-8 rounded-t-3xl spsce-y-4" style={{ backgroundColor: themeColors.bgColor(0.3)}}>
            <View className="flex-row justify-between">
                <Text className="font-semibold text-gray-700">Sub Total</Text>
                <Text className="font-semibold text-gray-700">$63.96</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="font-semibold text-gray-700">Taxes & fees</Text>
                <Text className="font-semibold text-gray-700">$10.00</Text>
            </View>
            <View className="flex-row justify-between border-dashed border-b-2 pb-4 border-gray-600">
                <Text className="font-semibold text-gray-700">Delivery Fee</Text>
                <Text className="font-semibold text-gray-700">$5.00</Text>
            </View>
            <View className="flex-row justify-between p-4">
                <Text className="font-extrabold text-gray-700">Total</Text>
                <Text className="font-extrabold text-gray-700">$78.96</Text>
            </View>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('OrderPreparing')}
                    className="p-3 rounded-full"
                    style={{ backgroundColor: 'rgba(0,0,0,0.8)',
                    justifyContent: 'center',
                    alignItems: 'center'}}
                >
                    <Text className="text-white text-center font-bold text-lg">Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

   
  )
}

export default CartScreen 
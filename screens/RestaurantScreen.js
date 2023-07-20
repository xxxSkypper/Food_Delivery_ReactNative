import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


import { themeColors } from '../theme';
import DishRow from '../components/dishRow';
import AddCart from '../components/addCart';


import * as Icon from "react-native-feather";
import { StatusBar } from 'expo-status-bar';


export default function RestaurantScreen() {
    const { params } = useRoute();
    const navigation = useNavigation();
    let item = params;
    return (
        <View>
           <AddCart />
           <StatusBar style='light' />
            <ScrollView>
                <View className="flex-row items-center justify-center space-x-52 mt-5">
                <TouchableOpacity 
                onPress={() => navigation.goBack()}
                className="p-3 rounded-full shadow "
                style={{ backgroundColor: 'whitesmoke',  borderWidth: 3, borderColor: 'rgba(209, 209, 209,0.7)',}}
                >
                    <Icon.ArrowLeft strokeWidth={3} stroke="black" />
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => navigation.goBack()}
                className="p-3  rounded-full"
                style={{ backgroundColor: 'whitesmoke',  borderWidth: 3, borderColor: 'rgba(209, 209, 209,0.7)',}}
                >
                    <Icon.Heart strokeWidth={3} stroke="black" />
                </TouchableOpacity>

                </View>
            <View 
                className="mt-12 pt-6"
                >
                    <View className="px-5">
                        <Text className="text-3xl font-bold">{item.name}</Text>
                        <View className="flex-row space-x-2  my-1">
                            <View className="flex-row items-center space-x-1 mb-5 mt-3">
                                <Image className="h-4 w-4" source={require('../assets/images/fullStar.png')}/>
                                <Text className="text-xs">
                                    <Text className="text-green-700">{item.starts}</Text>
                                    <Text className="text-gray-700"> <Text className="font-bold">
                                    {item.category}</Text>({item.reviews} review)  
                                    </Text>
                                </Text>
                            </View>   
                        </View>
                               
                    </View>
                </View>
                <View className="items-center space-x-1">
                    <Image className="w-72 h-72 rounded-3xl" source={item.images}/>
                   
                
                </View>
                <View className="flex items-center mx-auto w-10/12 mt-5">
                    <View className="flex-row items-center justify-between  space-x-40">
                        <View className="items-center">
                            <Text className="font-bold text-lg">Details</Text>
                        </View>
                        <View className="flex-row space-x-1">
                            <Icon.Clock height="20" width="20" strokewidth={2.5} stroke="black" />
                            <Text>15 mins</Text>
                        </View>
                    </View>
                    <Text className="text-gray-200 mt-2">{item.description}</Text>
                </View>
                <View 
                className="pb-36"
                >
                    <Text className="px-4 py-4 text-2xl font-bold">Add extra Dishes
                    </Text>

                    {/* dishes */}

                    {
                        item.dishes.map((dish, index) => <DishRow key={index} items={{...dish}} />)
                    }
                </View>

            </ScrollView>
        </View>
    )
}
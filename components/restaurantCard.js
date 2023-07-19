import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { themeColors } from '../theme';
import * as Icon from "react-native-feather";

export default function RestaurantCard({ item }) {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback 
            onPress={() => navigation.navigate('Restaurant', {...item})}
        >
        <View 
        style={{
            shadowColor: themeColors.bgColor(0.2),
            shadowRadius: 7
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg">
            <Image className="h-36 w-36 rounded-3xl" source={item.images} />
            <View className="px-3 pb-4 space-y-2 ">
                <Text className="text-lg font-bold pt-2 ">{item.name}</Text>
                <View className="flex-row items-center space-x-1">
                    <Image className="h-4 w-4" source={require('../assets/images/fullStar.png')}/>
                    <Text className="text-xs">
                        <Text className="text-green-700">{item.starts}</Text>
                        <Text className="text-gray-700"> <Text className="font-bold">
                            {item.category}</Text>({item.reviews} review)  
                        </Text>
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">

                </View>
            </View>
        </View>

        </TouchableWithoutFeedback>
    )
}
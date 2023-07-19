import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import RestaurantCard from './restaurantCard';  
import { themeColors } from '../theme';

export default function FeaturedRow({title, restaurants, description}) {
    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs">{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text }} className="font-semibold ">See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="overflow-visible py-5"
            >
                {
                    restaurants.map((restaurant, index) => {
                        return (
                            <RestaurantCard 
                            key={index}
                            item={restaurant}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
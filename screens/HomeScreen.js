import { View, Text, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow'
import { featured } from '../constants';
import { themeColors } from '../theme';
import CardIcon from '../components/cardIcon';

import * as Icon from "react-native-feather";


export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-white">
             <CardIcon />
            <StatusBar barStyle="dark-content" />

            {/* search Bar */}

            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text className="text-gray-600">Buea, CMR</Text>
                    </View>
                </View>
                <View  className="p-3 rounded-full" style={{backgroundColor: themeColors.bgColor(1)}}>
                    <Icon.Sliders height="20" width="20" strokewidth={2.5} stroke="white" />
                </View>
            </View>

            {/* main */}

            <ScrollView 
                showsVerticalScrollIncidicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
            }}>

            {/* categories */}

            <Categories />

            {/* features */}

            <View className=" mt-5 ">
                {
                    [featured, featured, featured ].map((item, index) => {
                        return (
                            <FeaturedRow 
                            key={index}
                            title={item.title[index]}
                            restaurants={item.restaurants}
                            description={item.description}/>
                        )
                    })
                }
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
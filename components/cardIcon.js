import  { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import * as Icon from "react-native-feather";

export default function CardIcon() {
    return (
        <View className="absolute bottom-20 w-full z-50">
            <TouchableOpacity className="flex-row justify-between items-center mx-5 rounded-full p-4 space-x-4 shadow-lg" style={{backgroundColor: 'rgba(161, 157, 157, 0.5)'}}>
                <View className="p-2 px-2 rounded-full " style={ styles.container}>
                    <Text className="font-extrabold text-white text-lg" style={ styleText.container }>
                            <Icon.Home strokeWidth={2} height={30} width={20} stroke={'#000'} />
                    </Text>
                </View>
                <View className="p-2 px-2 rounded-full" style={ styles.container}>
                    <Text className="font-extrabold text-white text-lg" style={ styleText.container }>
                            <Icon.MessageSquare strokeWidth={2} height={20} width={20} stroke={'#000'}/>
                    </Text>
                </View>
                <View className="p-2 px-2 rounded-full" style={ styles.container}>
                    <Text className="font-extrabold text-white text-lg" style={ styleText.container }>
                            <Icon.ShoppingCart strokeWidth={2} height={20} width={20} stroke={'#000'} />
                    </Text>
                </View>
                <View className="p-2 px-2 rounded-full" style={ styles.container}>
                    <Text className="font-extrabold text-white text-lg" style={ styleText.container }>
                            <Icon.Bell strokeWidth={2} height={20} width={20} stroke={'#000'}/>
                    </Text>
                </View>
                <View className="p-2 px-2 rounded-full" style={ styles.container}>
                    <Text className="font-extrabold text-white text-lg" style={ styleText.container }>
                            <Icon.User strokeWidth={2} height={20} width={20} stroke={'#000'} />
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styleText = StyleSheet.create({ 
    container:{ 
        color: '#fff', 
        alignItems: 'center', 
        justifyContent: 'center' 
    }  })

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        // backgroundColor: 'rgba(0,0,0,0.7)',
    }
})
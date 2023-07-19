import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AddCart() {
    const navigation = useNavigation();
    return (
        <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity 
            onPress={() => navigation.navigate('Cart') }
            className="flex-row justify-between items-center mx-5 rounded-full p-4 space-x-4 shadow-lg" 
            style={styles.container}
        >
                <Text className="font-extrabold text-white text-lg" style={ styleText.container }>
                        Add to Cart
                </Text>
        </TouchableOpacity>
    </View>
    )
}

const styleText = StyleSheet.create({ container:{ color: '#fff', }  })
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
import { useNavigation } from "@react-navigation/native"
import { Alert, Text, TouchableOpacity, View } from "react-native"
import { ScreenNames } from "../navigation/ScreenNames";


const SplashLoadingScreen = (props: any) => {

    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "blue"
            }}>
            <Text style={{
                marginTop: 50
            }}>FAhad</Text>
            <View style={{
                marginTop: 30,
                width: '80%',
            }}>

                <TouchableOpacity style={{
                    backgroundColor: 'rgb(44, 108, 233)',
                    paddingVertical: 15,
                    paddingHorizontal: 5,
                    borderRadius: 10,
                    alignItems: 'center',
                }}

                    onPress={() => {
                        navigation.navigate(ScreenNames.LoginScreen)
                    }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>Register</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default SplashLoadingScreen;
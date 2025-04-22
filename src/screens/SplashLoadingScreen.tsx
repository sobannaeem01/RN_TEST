import { NavigationProp, useNavigation } from "@react-navigation/native"
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ScreenNames } from "../navigation/ScreenNames";
import { RootStackParamList } from "../navigation/RootStackParamsList";



const SplashLoadingScreen = (props: any) => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
    <View style={styles.container}>
        <View style={{
            flex: 1
        }}>
             <Image
                source={require("../assets/googleLogo.png")}
                style={styles.logo}
        />
        
        <View
            style={{
                flex: 1,
               
            }}>
            <Text style={{
                marginTop: 100,
                fontSize: 25,
                //backgroundColor: 'yellow',
            }}>'Welcome To My Application"</Text>
           
           
           
            <View style={{
                marginTop: 30,
                width: '100%',
            }}>

                <TouchableOpacity style={{
                    backgroundColor: 'rgb(44, 108, 233)',
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                    borderRadius: 20,
                    alignItems: 'center',
                }}

                    onPress={() => {
                        navigation.navigate(ScreenNames.LoginScreen)
                    }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>LogIn</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: 'rgb(44, 108, 233)',
                    paddingVertical: 10,
                    marginTop: 10,
                    paddingHorizontal: 5,
                    borderRadius: 20,
                    alignItems: 'center',
                }}

                    onPress={() => {
                        navigation.navigate(ScreenNames.RegisterScreen, {
                            email2: "Asdfasdf",
                            password2: "Asdfjasdfgasd"
                        })
                    }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                        //backgroundColor: 'yellow',
                        fontWeight: 'bold',
                    }}>Register</Text>
                </TouchableOpacity>


            </View>
        </View>

        </View>
    </View>  
    );
};

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        paddingTop: 50,
        backgroundColor: 'f8f8f8',
      },
    logo: {

        width: 100,
        height: 100,
        marginLeft: '25%',
        resizeMode: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    
      },
  
  
  });

export default SplashLoadingScreen;
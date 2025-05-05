
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon, IconButton } from 'react-native-paper';
import { RootStackParamList } from "../navigation/RootStackParamsList";


const handleButtonPress = () => {
  Alert.alert('Button Pressed!', 'You tapped the button.');
};
const Dashboardscreen = (props: any) => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>

      <Text style={styles.textinput}>IPTV</Text>

      <View style={styles.container1}>


        {/* Button # 1 */}
        <TouchableOpacity style={styles.button1} onPress={handleButtonPress}>

          {/* Button # 1 Header Section */}
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "blue"
          }}>

            <TouchableOpacity activeOpacity={0.5} onPress={() => {
              Alert.alert("Hello from FAghad")
            }}>
              <Icon
                source="camera"
                color={"orange"}
                size={50}
              />
            </TouchableOpacity>
            <Text style={{
              color: "#878787"
            }}>Last Updated: </Text>
            <Text style={styles.Label}> 2 Days ago</Text>
          </View>

          <Icon source="movie-filter" color={"grey"} size={30} />
          <Text style={styles.buttonText}>Live TV</Text>
          <Text style={styles.buttonText2}>+15000 Channels</Text>

        </TouchableOpacity>

        {/* Button # 2 */}
        <TouchableOpacity style={styles.button2} onPress={handleButtonPress}>
          <Icon source="television-classic" color={"grey"} size={30} />
          <Text style={styles.buttonText}>Movies</Text>
          <Text style={styles.buttonText2}>+100 Movies</Text>
        </TouchableOpacity>

        {/* Button # 3 */}
        <TouchableOpacity style={styles.button3} onPress={handleButtonPress}>
          <Icon source="movie-roll" color={"grey"} size={30} />
          <Text style={styles.buttonText}>Series</Text>
          <Text style={styles.buttonText2}>+500 Series</Text>
        </TouchableOpacity>

      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: 'rgb(29, 29, 43)',
    flexDirection: 'column',
    paddingTop: 2,
    //backgroundColor: 'f8f8f8',
  },

  textinput: {
    fontSize: 40,
    fontWeight: '400',
    color: 'white',
    //backgroundColor: 'orange',
    //justifyContent: 'flex-start',
    textAlign: 'left',
    margin: 10,
  },
  container1: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',

  },
  button1: {
    marginLeft: 20,
    //alignItems: 'flex-start',
    backgroundColor: 'rgb(35, 32, 50)',
    //paddingVertical: 20,
    //paddingHorizontal: 25,
    padding: 20,
    borderRadius: 20,
  },
  button2: {
    backgroundColor: 'rgb(35, 32, 50)',
    //paddingVertical: 20,
    //paddingHorizontal: 25,
    padding: 50,
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  button3: {
    backgroundColor: 'rgb(35, 32, 50)',
    //paddingVertical: 20,
    padding: 60,
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '300',
    //textAlign: 'left'
  },

  buttonText2: {
    fontSize: 12,

  },
  lable: {
    fontSize: 10,
  }
});

export default Dashboardscreen;
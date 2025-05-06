
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
    <View style={{

      flex: 1,
      backgroundColor: 'rgb(29, 29, 43)',
      flexDirection: 'column',
      justifyContent: "flex-start",
      alignItems: 'flex-start'

      // paddingTop: 2,
      //backgroundColor: 'f8f8f8',
    }}>

      <View style={{
        width: "100%",
        // height: "50%",
        alignItems: "flex-start",
        justifyContent: 'flex-start',
        flexDirection: "row",
        backgroundColor: "orange"
      }}>
        <Text style={{
          fontSize: 40,
          fontWeight: '400',
          color: 'white',
          //backgroundColor: 'orange',
          //justifyContent: 'flex-start',
          textAlign: 'left',
        }}>IPTV</Text>

      </View>


      <View style={{
        flex: 1,
        width: "100%",
        // height: "100%",
        padding: 10,
        flexDirection: "row",
        // justifyContent: 'center',
        alignItems: "flex-start",
        backgroundColor: "blue"

      }}>


        <View style={{
          height: "100%",
          width: "70%",
          flexDirection: "row",
          backgroundColor: "orange",
          justifyContent: "space-between",
          alignItems: 'flex-start'
        }}>
          {/* Button # 1 */}
          <TouchableOpacity style={styles.button1} onPress={handleButtonPress}>
            <View style={{
              //backgroundColor: "red"
            }}>
              {/* Button # 1 Header Section */}
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                //backgroundColor: 'yellow'

              }}>

                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                  Alert.alert("Refreshing...")
                }}>
                  <Icon
                    source="refresh-circle"
                    color={"rgb(106, 92, 178)"}
                    size={25}
                  />
                </TouchableOpacity>
                <Text style={styles.Label}> 2 Days ago</Text>
              </View>
            </View>

            <View style={{
              // paddingTop: 150,
              // padding
              // paddingHorizontal: 10,
              //backgroundColor: 'yellow'

            }}>
              <Icon source="television-classic" color={"grey"} size={30} />
              <Text style={styles.buttonText}>Live TV</Text>
              <Text style={styles.buttonText2}>+15000 Channels</Text>

            </View>

          </TouchableOpacity>

          {/* Button # 2 */}
          <TouchableOpacity style={styles.button1} onPress={handleButtonPress}>
            <View style={{
              //backgroundColor: "red"
            }}>
              {/* Button # 1 Header Section */}
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                //backgroundColor: 'yellow'

              }}>

                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                  Alert.alert("Refreshing...")
                }}>
                  <Icon
                    source="refresh-circle"
                    color={"rgb(106, 92, 178)"}
                    size={25}
                  />
                </TouchableOpacity>
                <Text style={styles.Label}> 2 Days ago</Text>
              </View>
            </View>

            <View style={{
              // paddingTop: 150,
              // padding
              // paddingHorizontal: 10,
              //backgroundColor: 'yellow'

            }}>
              <Icon source="video-vintage" color={"grey"} size={30} />
              <Text style={styles.buttonText}>Movies</Text>
              <Text style={styles.buttonText2}>+1500 Movies</Text>

            </View>

          </TouchableOpacity>


          {/* Button # 3 */}
          <TouchableOpacity style={styles.button1} onPress={handleButtonPress}>
            <View style={{
              //backgroundColor: "red"
            }}>
              {/* Button # 1 Header Section */}
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                //backgroundColor: 'yellow'

              }}>

                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                  Alert.alert("Refreshing...")
                }}>
                  <Icon
                    source="refresh-circle"
                    color={"rgb(106, 92, 178)"}
                    size={25}
                  />
                </TouchableOpacity>
                <Text style={styles.Label}> 2 Days ago</Text>
              </View>
            </View>

            <View style={{
              // paddingTop: 150,
              // padding
              // paddingHorizontal: 10,
              //backgroundColor: 'yellow'

            }}>
              <Icon source="television-classic" color={"grey"} size={30} />
              <Text style={styles.buttonText}>Live TV</Text>
              <Text style={styles.buttonText2}>+15000 Channels</Text>

            </View>

          </TouchableOpacity>

        </View>

        <View style={{
          flex: 1,
          height: 100,
          // marginLeft: 10,
          backgroundColor: "purple"
        }}>

        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'rgb(29, 29, 43)',
    flexDirection: 'column',
    // paddingTop: 2,
    //backgroundColor: 'f8f8f8',
  },

  textinput: {
    fontSize: 40,
    fontWeight: '400',
    color: 'white',
    //backgroundColor: 'orange',
    //justifyContent: 'flex-start',
    textAlign: 'left',
  },
  container1: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "red"

  },
  button1: {
    height: "100%",
    width: '32%',
    // marginLeft: 20,
    alignItems: 'flex-start',
    backgroundColor: 'rgb(35, 32, 50)',
    padding: 20,
    justifyContent: 'space-between',
    borderRadius: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '400',
    //textAlign: 'left'

  },

  buttonText2: {
    fontSize: 15,
    color: 'grey'

  },
  Label: {
    fontSize: 12,
    color: 'grey',

  },

});

export default Dashboardscreen;
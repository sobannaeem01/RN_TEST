import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Alert, TouchableOpacity, Text, TextInput } from 'react-native';
  
const LogoFromURL = () => {
  const [email, setEmail] = useState('');
    const [heading1] = useState('GET STARTED NOW!');
    const [heading2] = useState('Enter Your email and get stated right\naway.');



    useEffect(() => {
      console.log("Fahad useeffect Initial: ", email);
    }, []);

    useEffect(() => {
      console.log("Fahad useeffect called: ", email);
    }, [email]);

    useEffect(() => {
      console.log("Fahad useeffect heading: ", email);
    }, [heading1]);



  const handleButtonPress = () => {
    Alert.alert('Button Pressed!', 'You tapped the button.');
  };

  return (
    <View style={styles.container}>
      {/* <Image
        source={{
          uri: 'https://i.pinimg.com/736x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg',
        }}
        style={styles.logo}
      /> */}

<Image
        source={require("./src/assets/googleLogo.png")}
        style={styles.logo}
      />
      
      <View style={styles.textContainer}>
        <Text style={styles.textBold}>{heading1}</Text>
      </View>
      <View style={styles.backtextContainer}>
        <Text style={styles.textSimple}>{heading2}</Text>
      </View>


     
      <View style={styles.inputContainer}>

      <Text style={styles.textEmail}>Email:</Text>
      

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"  // Keyboard for email input
          autoCapitalize="none"         // Prevents auto-capitalization
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.roundButton} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
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
    resizeMode: 'stretch',
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%',
  },

  roundButton: {
    backgroundColor: 'rgb(44, 108, 233)',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  
  textContainer: {
    backgroundColor: 'fafafa',
    padding: 5,
    marginTop: 100,
    width: '100%',
    alignItems: 'center',
  },
  textBold: {
    fontSize: 32,
    fontWeight: "900",
    color: 'black',
  },

  // Text Container Styles 2
  backtextContainer: {
    backgroundColor: 'b1b5bb',
    padding: 2,
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  },
  textSimple: {
    fontSize: 15,
    color: 'black',
    textAlign: "center"
  },

  //email text 
  textEmail: {
    fontSize: 20,
    fontWeight: 'light',
    color: 'black',
     //backgroundColor: 'orange',
    textAlign: "left",

  },

  // Email input field
  inputContainer: {
    marginTop: 200,
    width: '80%',
    // backgroundColor: 'red',
  },
  
  input: {
    marginLeft:2,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
});

export default LogoFromURL;

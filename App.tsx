import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Alert, TouchableOpacity, Text, TextInput, PanResponder } from 'react-native';

const LogoFromURL = () => {
  const [name, setNAme] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [blood, setBlood] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const [isPasswordVisible2, setIsPasswordVisible2] = useState(true);



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

     



      <View style={styles.inputContainer6}>
        <Text style={styles.textinput}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Name"
          value={name}
          onChangeText={setNAme}
          // Prevents auto-capitalization
          autoCapitalize='none'
          keyboardType= 'default'        />
      </View>  
      <View style={styles.inputContainer6}>
          <Text style={styles.textinput}>Phone no:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Phone Number"
            value={phone}
            onChangeText={setPhone}
            autoCapitalize='none'
            keyboardType='default'
          />
      </View>
      <View style={styles.inputContainer6}>
          <Text style={styles.textinput}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            keyboardType= 'email-address'
          />
      </View>
      <View style={styles.inputContainer6}>
          <Text style={styles.textinput}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            value={address}
            onChangeText={setAddress}
            autoCapitalize='none'
            keyboardType= 'default'
          />
      </View>
    <View style={styles.inputcontainer8}>
      <View style={styles.inputContainer7}>
          <Text style={styles.textinput}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            value={password}
            secureTextEntry={isPasswordVisible} // Hide password when false
            onChangeText={setPassword}
            autoCapitalize='none'
            keyboardType= 'default'
          />
      </View>
        <TouchableOpacity
          onPress={() => {
            setIsPasswordVisible(!isPasswordVisible);
          }} style={styles.emojiButton}>

            <Text style={styles.emojiText}>
            {isPasswordVisible ? '🙈' : '👁️'} {/* Emoji toggles */}
            </Text>
        </TouchableOpacity>
    </View>
    <View style={styles.inputcontainer8}>
       <View style={styles.inputContainer7}>
          <Text style={styles.textinput}>Conform your Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confrom Your Password"
            value={cpassword}
            secureTextEntry={isPasswordVisible2} // Hide password when false
            onChangeText={setCPassword}
            autoCapitalize='none'
            keyboardType= 'default'
          />
      </View>
       <TouchableOpacity
          onPress={() => {
            setIsPasswordVisible2(!isPasswordVisible);
          }} style={styles.emojiButton}>
           <Text style={styles.emojiText}>
            {isPasswordVisible2 ? '🙈' : '👁️'} {/* Emoji toggles */}
           </Text>
        </TouchableOpacity>
    </View>
      
        <View style={styles.inputContainer6}>
          <Text style={styles.textinput}>Blood Group</Text>
          <TextInput
            style={styles.input}
            placeholder="Confrom Your Password"
            value={blood}
            onChangeText={setBlood}
            autoCapitalize='none'
            keyboardType= 'default'
          />
        </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.roundButton} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Register</Text>
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
    marginTop: 30,
    width: '80%',
  },
//register botton
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
 
  //TextInput text
  textinput: {
    fontSize: 20,
    fontWeight: 'light',
    color: 'black',
    //backgroundColor: 'orange',
    textAlign: "left",
    margin: 8
  },
 
  // name input field
  inputContainer6: {
    width: '80%',
    //backgroundColor: 'red',
  },
  inputcontainer8: {
    width: "80%",
    alignItems: 'flex-end',
    flexDirection: 'row', 
  },
  // name input field
  inputContainer7: {
    width: '80%',
    //backgroundColor: 'red',
  },
  //emoji
  emojiButton: {
    padding: 8,
    flexDirection: 'row'
  },
  emojiText: {
    fontSize: 20,
  },
  input: {
    marginLeft: 2,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: "black"
  },
   

});

export default LogoFromURL;

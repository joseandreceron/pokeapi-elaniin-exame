//Modules
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';

//Components
import Button from '../components/Buttons/Button';
import Input from '../components/Forms/Input';

//constants
import { scale, verticalScale, moderateScale } from '../helpers/ScailingScreen';
import { COLORS } from '../helpers/constants';


export const SignIn = (({ navigation }) => {
  const [password, SetPassword] = useState("")
  const [user, setUser] = useState("")


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' />

      {/* <Image
        source={require('../assets/Images/Logos/Ceronlogo.png')}
        style={styles.logo}
      /> */}

      <View style={styles.wrapper}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.subtitle}>Poke Api</Text>
      </View>


      <View style={styles.wrapper}>
        <Input
          title={"Email"}
          onChangeText={() => console.log('username')}
          value={user}
          keyboardType="email-address"
          placeholder={"example@example.com"}
          placeholderTextColor={COLORS.lightBlack}
        />

        <Input
          title={"Password"}
          onChangeText={() => console.log('password')}
          value={user}
          secureTextEntry={true}
          placeholder={"XXXXXXX"}
          placeholderTextColor={COLORS.lightBlack}
        />

        {/* <TouchableOpacity
          style={styles.forgotButton}
        >
          <Text style={styles.forgotButtonText}>Olvido su clave?</Text>
        </TouchableOpacity> */}

        <View style={styles.buttonContainer}>
          <Button
            backgroundColor={COLORS.lightBlue}
            title={"Login"}
            titleColor={COLORS.white}
            onPress={() => navigation.navigate('Home')}
            isLoading={user?.isLoading}
          />
        </View>
      </View>

    </SafeAreaView>
  );
}
)
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(10),
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  logo: {
    width: 380,
    height: 90,
    marginTop: verticalScale(80)
  },
  title: {
    fontSize: moderateScale(25),
    fontWeight: "bold",
    color: COLORS.blackV2
  },
  subtitle: {
    fontSize: moderateScale(18),
    color: COLORS.darkGrey,
    marginTop: verticalScale(5)
  },
  wrapper: {
    marginTop: verticalScale(30),
    paddingHorizontal: moderateScale(25),
    width: "100%",
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: '#352641',
    width: '90%',
    height: '25%',
    fontSize: moderateScale(14)
  },
  loginButton: {
    height: verticalScale(55),
    width: moderateScale(300),
    backgroundColor: COLORS.lightBlue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(25)
  },
  loginButtonText: {
    fontSize: moderateScale(16),
    color: COLORS.white,
    fontWeight: 'bold'
  },
  forgotButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: verticalScale(5),
    marginBottom: verticalScale(15)
  },
  forgotButtonText: {
    color: COLORS.blackV2,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
})
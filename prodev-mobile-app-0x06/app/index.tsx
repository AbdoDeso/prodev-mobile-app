import {  Text, View, ImageBackground, Dimensions, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";  
import { Link } from 'expo-router';
import { styles } from "../styles/_mainstyle";
export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >

          <View>
            <Image source={require("../assets/images/logo.png")} />
          </View>
          <View style={styles.textGroup}>
            <Text style={styles.textLarge}>Find your favorite place here</Text>
            <Text style={styles.textSmall}>The best prices for over 2 </Text>
            <Text style={styles.textSmall}>million properties worldwide</Text>
          </View>
          <View style={styles.buttonContainer}>
                <Link href='/join' asChild>
                  <TouchableOpacity  style={styles.button}>
                  <Text  style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
                  </TouchableOpacity>
               </Link>
          </View>
          <View style={styles.buttonContainer}>
              <Link href='/signin' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </Link>
          </View>
            <View style={styles.buttonContainer}>
              <Link href='/(home)' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textSmall}>Home Screen</Text>
                </TouchableOpacity>
              </Link>
          </View>

       </ImageBackground>

      </SafeAreaView>
    </SafeAreaProvider>
    
  );
  
}
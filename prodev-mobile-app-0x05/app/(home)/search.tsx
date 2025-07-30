import { View, Text, TextInput } from "react-native";
import { ImageBackground } from "react-native";
import { styles } from "../../styles/_mainstyle";
import { Feather } from "@expo/vector-icons";
import { Link } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  return (
       
                <ImageBackground
          source={require("../../assets/images/background-image.png")}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
             <View style={styles.navGroup}>
              <Link href='../' asChild>
                   <Ionicons name="arrow-back" size={25} />
              </Link>
              </View>
     <View style={styles.titleContainer}>
            <Text style={styles.buttonPrimary}>Where to?</Text>
            <TextInput
              placeholder="Location . Date . Add guest"style={styles.buttonPrimary} />
                          <Feather name="search" size={24} color="blue" />

          </View>
    
 </ImageBackground>
  
  )
}

export default Profile;
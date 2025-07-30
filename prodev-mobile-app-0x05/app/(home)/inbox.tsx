import { View, Text  } from "react-native";
import { ImageBackground  } from "react-native";
import { styles } from "../../styles/_mainstyle";
import { Ionicons } from "@expo/vector-icons";
    import { Link } from 'expo-router';

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
            <Text style={styles.titleContainer}>inbox</Text>
         </ImageBackground>
    
  )
}

export default Profile;
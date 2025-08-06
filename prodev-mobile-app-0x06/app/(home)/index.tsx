import PropertyListing from "@/components/PropertyListing";
import { styles } from "../../styles/_mainstyle";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";
import { Link } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import HomeRootLayout from "./_layout";
const Home = () => {
  return (
    <View style={styles.container}>
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
            <Text style={styles.titleContainer}>Welcome to My Project Test</Text>
 </ImageBackground>
    </View>
  );
};

export default Home;

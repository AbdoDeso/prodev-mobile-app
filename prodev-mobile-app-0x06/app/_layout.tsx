import { Stack } from "expo-router";
import { View } from 'react-native'
import "../global.css"
const RootLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="/" />
      <Stack.Screen name="Join" />
      <Stack.Screen name="signin" />
    </Stack>
  );
};

export default RootLayout;
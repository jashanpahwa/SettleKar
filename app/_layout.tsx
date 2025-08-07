import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import ListingsScreen from '../screens/ListingsScreen';
import { RootStackParamList } from '../types/navigation';

import { useColorScheme } from '@/hooks/useColorScheme';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
         <Stack.Screen 
        name="Listings" 
        component={ListingsScreen} 
        options={{ title: 'Available Properties' }}
      />
        <Stack.Screen name="+not-found" />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

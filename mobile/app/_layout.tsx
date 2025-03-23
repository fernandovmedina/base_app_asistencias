import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "ADLaMDisplay": require('../assets/fonts/ADLaMDisplay-Regular.ttf'),
    "ChelseaMarket": require('../assets/fonts/ChelseaMarket-Regular.ttf'),
    "KleeOneRegular": require('../assets/fonts/KleeOne-Regular.ttf'),
    "KleeOneSemiBold": require('../assets/fonts/KleeOne-SemiBold.ttf'),
    "InterExtraThin": require('../assets/fonts/InterExtraThin.ttf'),
    "InterThin": require('../assets/fonts/InterThin.ttf'),
    "InterRegular": require('../assets/fonts/InterRegular.ttf'),
    "InterSemiBold": require('../assets/fonts/InterSemiBold.ttf'),
    "InterBold": require('../assets/fonts/InterBold.ttf'),
    "InterExtraBold": require('../assets/fonts/InterExtraBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

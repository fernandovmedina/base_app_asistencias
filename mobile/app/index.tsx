import { Redirect } from "expo-router";

const Index = () => {
    const isSignedIn = true;

    if (isSignedIn) return <Redirect href="/(tabs)/owner/home" />

    return <Redirect href="/(auth)/welcome" />
}

export default Index;

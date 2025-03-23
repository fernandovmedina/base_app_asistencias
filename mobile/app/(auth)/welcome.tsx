import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Welcome = () => {
    const navigator = useRouter();

    const SuperMarketLogo = require("@/assets/images/logo.png");

    return (
        <SafeAreaView className="bg-white h-full px-7 pb-10">
            <View className="flex-1 mt-28 justify-center items-center">
                <Image className="w-52" source={SuperMarketLogo} resizeMode="contain" />
            </View>
            <View className="items-center">
                <Text className="font-adl-regular text-3xl">SUPERMARKET ML</Text>
                <TouchableOpacity 
                    className="mt-10 rounded-lg bg-primary-orange w-full py-3"
                    onPress={() => navigator.push("/(auth)/login")}
                >
                    <Text className="text-white text-xl text-center font-chelsea-regular">Inicia sesión</Text>
                </TouchableOpacity>
                <View className="flex-row items-center mt-4">
                    <Text className="font-klee-regular">¿No tienes una cuenta aún? </Text>
                    <TouchableOpacity
                        onPress={() => navigator.push("/(auth)/register")}
                    >
                        <Text className="font-bold underline">Registrarme</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Welcome;

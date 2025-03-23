import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Login = () => {
  const navigator = useRouter();

  const SuperMarketLogo = require("@/assets/images/logo.png");
  const UserIcon = require("@/assets/images/grey_user.png");
  const PasswordIcon = require("@/assets/images/grey_password.png");
  const Back = require("@/assets/images/black_back.png");

  return (
    <SafeAreaView className="bg-white h-full px-7">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View>
            <TouchableOpacity onPress={() => navigator.back()}>
              <Image className="w-8" source={Back} resizeMode="contain" />
            </TouchableOpacity>
          </View>

          <View className="mt-40 mx-auto">
            <Image
              className="w-48"
              source={SuperMarketLogo}
              resizeMode="contain"
            />
          </View>

          <View>
            <Text className="mx-auto font-adl-regular text-4xl">
              Bienvenido
            </Text>
            <Text className="mx-auto text-4xl font-adl-regular text-primary-brown">
              SUPERMARKET ML
            </Text>
          </View>

          <View className="mt-6">
            <Text className="font-chelsea-regular text-xl">
              Inicio de sesión
            </Text>

            <View className="flex-row items-center mt-5 bg-gray-100 rounded-xl px-4 py-2 w-full">
              <Image source={UserIcon} className="w-5 h-5 mr-3" />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="Usuario / Correo / Teléfono"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <View className="flex-row items-center mt-4 bg-gray-100 rounded-xl px-4 py-2 w-full">
              <Image source={PasswordIcon} className="w-5 h-5 mr-3" />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="Contraseña"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity className="mt-5 rounded-lg bg-primary-orange w-full py-3">
              <Text className="mx-auto text-white font-chelsea-regular text-xl">
                Iniciar sesión
              </Text>
            </TouchableOpacity>

            <View className="flex-row mx-auto items-center mt-4">
              <Text className="font-klee-regular">
                ¿No tienes una cuenta aún?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => navigator.push("/(auth)/register")}
              >
                <Text className="font-bold underline">Registrarme</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

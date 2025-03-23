import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Keyboard } from "react-native";
import { useRouter } from "expo-router";

const Register = () => {
  const navigator = useRouter();

  const SuperMarketLogo = require("@/assets/images/logo.png");
  const NameIcon = require("@/assets/images/grey_names.png");
  const LastnameIcon = require("@/assets/images/grey_lastnames.png");
  const UserIcon = require("@/assets/images/grey_user.png");
  const EmailIcon = require("@/assets/images/grey_email.png");
  const PasswordIcon = require("@/assets/images/grey_password.png");
  const EmployeeIcon = require("@/assets/images/grey_employee.png");
  const PhoneIcon = require("@/assets/images/grey_phone.png");
  const Back = require("@/assets/images/black_back.png");

  return (
    <SafeAreaView className="bg-white h-full px-7">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View>
            <TouchableOpacity onPress={() => navigator.back()}>
              <Image className="w-8" source={Back} resizeMode="contain" />
            </TouchableOpacity>
          </View>

          <View className="mx-auto -mt-7">
            <Image className="w-40" source={SuperMarketLogo} resizeMode="contain" />
          </View>

          <View>
            <Text className="font-chelsea-regular text-xl">Registro</Text>
            <View className="flex-row items-center mt-5 bg-gray-100 rounded-xl px-4 w-full">
              <Image source={NameIcon} className="w-5 h-5 mr-3" />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="Nombre (s)"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <View className="flex-row items-center mt-5 bg-gray-100 rounded-xl px-4 w-full">
              <Image source={LastnameIcon} className="w-5 h-5 mr-3" />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="Apellidos"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <View className="flex-row items-center mt-5 bg-gray-100 rounded-xl px-4 w-full">
              <Image source={UserIcon} className="w-5 h-5 mr-3" />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="Nombre de usuario"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <View className="flex-row items-center mt-5 bg-gray-100 rounded-xl px-4 w-full">
              <Image source={EmailIcon} className="w-5 h-5 mr-3" />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="Correo electronico"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <View className="flex-row items-center mt-5 bg-gray-100 rounded-xl px-4 w-full">
              <Image source={PasswordIcon} className="w-5 h-5 mr-3" />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="Contraseña"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={true}
              />
            </View>

            <View className="flex-row items-center mt-5 bg-gray-100 rounded-xl px-4 w-full">
              <Image source={EmployeeIcon} className="w-5 h-5 mr-3" />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="Tipo de empleado"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <View className="flex-row items-center mt-5 bg-gray-100 rounded-xl px-4 w-full">
              <Image source={PhoneIcon} className="w-5 h-5 mr-3" />
              <TextInput
                className="flex-1 text-gray-700"
                placeholder="Telefono"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <TouchableOpacity className="mt-5 rounded-lg bg-primary-orange w-full py-3">
              <Text className="mx-auto text-white font-chelsea-regular text-xl">
                Registrarme
              </Text>
            </TouchableOpacity>

            <View className="flex-row mx-auto items-center mt-4">
              <Text className="font-klee-regular">¿Ya tienes una cuenta? </Text>
              <TouchableOpacity onPress={() => navigator.push("/(auth)/login")}>
                <Text className="font-bold underline">Iniciar sesion</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

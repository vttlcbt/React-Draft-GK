import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Hinh01 from "./Hinh01"
import Hinh02 from "./Hinh02"

const stack = createNativeStackNavigator()

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <Hinh01 />
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Hinh01"
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen name="Hinh01" component={Hinh01} />
        <stack.Screen name="Hinh02" component={Hinh02} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

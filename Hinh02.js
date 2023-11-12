import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native"
import { DATA } from "./data"
import Hinh01 from "./Hinh01"
import { useState } from "react"

export default function Hinh02(props) {
  const { navigation, route } = props
  const { navigate, goBack } = navigation
  const idRef = route.params
  return (
    <View style={styles.container}>
      <View>
        <Pressable
          style={styles.box}
          onPress={() => {
            alert(idRef)
          }}
        >
          <Text>Show</Text>
        </Pressable>
        <View>
          <Image
            source={
              idRef == 1
                ? require("./assets/vang.png")
                : idRef == 2
                ? require("./assets/tim.png")
                : idRef == 3
                ? require("./assets/xanhla.png")
                : require("./assets/do.png")
            }
            style={styles.img}
          />
        </View>
      </View>
      <View>
        {/* <Image source={require("./assets/vang.png")} style={styles.img} /> */}
        <Text>Welcome</Text>
        <Text>Choice you Best food</Text>
      </View>
      <View style={styles.btn}>
        <Pressable
          style={styles.box}
          onPress={() => {
            goBack()
          }}
        >
          <Text>Back</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "10%",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C95B5B",
    width: "90%",
    height: "90%",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

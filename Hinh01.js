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
import Hinh02 from "./Hinh02"
import React, { useState } from "react"

export default function Hinh01(props) {
  const { navigation, route } = props
  const { navigate, goBack } = navigation

  const [filterArr, setFilterArr] = useState(DATA)
  const handleFilter = (typeBtn) => {
    if (typeBtn == "all") {
      setFilterArr(DATA)
    } else {
      const newArr = DATA.filter((item) => item.type == typeBtn)
      setFilterArr(newArr)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <Text>Welcome</Text>
        <Text>Choice you Best food</Text>
        <TextInput style={styles.input1} placeholder="search"></TextInput>
      </View>
      <View style={styles.btns}>
        <Pressable style={styles.btn} onPress={() => handleFilter("floating")}>
          <Text>Floating</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => handleFilter("donut")}>
          <Text>Donut</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => handleFilter("all")}>
          <Text>All</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        <ScrollView>
          <FlatList
            data={filterArr}
            renderItem={({ item }) => {
              return (
                <View style={styles.box}>
                  <Pressable
                    style={styles.pressBox}
                    onPress={() => {
                      navigate("Hinh02", item.id)
                    }}
                  >
                    <Image style={styles.img} source={item.img} />
                    <View style={styles.info}>
                      <Text>{item.id}</Text>
                      <Text>{item.name}</Text>
                      <Text>{item.desc}</Text>
                      <Text>{item.price}</Text>
                    </View>
                  </Pressable>
                </View>
              )
            }}
          />
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row1: {
    backgroundColor: "#D4D3FF",
    width: "100%",
    height: "10%",
    padding: "1%",
  },
  input1: {
    backgroundColor: "#ffffff",
    border: "1px solid #B98181",
    borderRadius: 5,
    padding: 10,
    width: "60%",
    height: "30%",
  },
  content: {
    width: "100%",
    height: "80%",
    // backgroundColor: "#D1B6FF",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
  },
  box: {
    backgroundColor: "#F4DDDD",
    borderRadius: 15,
    width: "100%",
    marginBottom: 10,
    padding: 10,
  },
  pressBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  info: {
    justifyContent: "center",
    alignContent: "center",
    margin: 15,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  btns: {
    flexDirection: "row",
    backgroundColor: "#B8FFCA",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "10%",
  },
  btn: {
    backgroundColor: "#ffffff",
    border: "1px solid #535353",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
    paddingHorizontal: "5%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// 이전에 제공해주던 API 를 rn 의 확장을 위해 deprecated 하고
// third-party 라이브러리에서 제공받도록 변경됐다. (ex. AsyncStorage)

// View = container
// Text 는 무조건 Text 에 들어가야함
// View 는 Flex Container 임 (default flex)
// flex-direction default is column
// 항상 반응형으로 레이아웃을 만들어야함 (레이아웃 스크린 사이즈는 다양하기 떄문)
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 3, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 22,
//     color: "red",
//   },
// });

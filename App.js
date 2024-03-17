import { ScrollView, Dimensions, StyleSheet, Text, View } from "react-native";

// 이전에 제공해주던 API 를 rn 의 확장을 위해 deprecated 하고
// third-party 라이브러리에서 제공받도록 변경됐다. (ex. AsyncStorage)

// View = container
// Text 는 무조건 Text 에 들어가야함
// View 는 Flex Container 임 (default flex)
// flex-direction default is column
// 항상 반응형으로 레이아웃을 만들어야함 (레이아웃 스크린 사이즈는 다양하기 떄문)

const { width: SCREEN_WIDTH } = Dimensions.get("window");
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      {/* ScrollView 에 style 을 넣고싶다면 contentContainerStyle */}
      <ScrollView
        contentContainerStyle={styles.weather}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },

  cityName: {
    color: "#000",
    fontSize: 48,
    fontWeight: 700,
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 30,
    fontSize: 168,
  },
  description: {
    marginTop: -20,
    fontSize: 60,
  },
});

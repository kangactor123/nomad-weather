import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { ScrollView, Dimensions, StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import getEnvVars from "./environment";

// 이전에 제공해주던 API 를 rn 의 확장을 위해 deprecated 하고
// third-party 라이브러리에서 제공받도록 변경됐다. (ex. AsyncStorage)

// View = container
// Text 는 무조건 Text 에 들어가야함
// View 는 Flex Container 임 (default flex)
// flex-direction default is column
// 항상 반응형으로 레이아웃을 만들어야함 (레이아웃 스크린 사이즈는 다양하기 떄문)

const API_KEY = getEnvVars().apiKey;

const { width: SCREEN_WIDTH } = Dimensions.get("window");
export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      {
        latitude,
        longitude,
      },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    ).then((res) => res.json());

    const days = data.list.map((forecast) => ({
      dt_txt: forecast.dt_txt,
      main: forecast.main,
    }));

    setDays(days);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      {/* ScrollView 에 style 을 넣고싶다면 contentContainerStyle */}
      <ScrollView
        contentContainerStyle={styles.weather}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {days.map((day) => (
          <View key={day.dt_txt} style={styles.day}>
            <Text style={styles.temp}>{dayjs(day.dt_txt).format("DD")}</Text>
            <Text style={styles.description}>{day.main.temp}</Text>
          </View>
        ))}
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
    // marginTop: -20,
    fontSize: 60,
  },
});

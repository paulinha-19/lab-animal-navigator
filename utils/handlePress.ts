import { Alert, Linking } from "react-native";

interface UrlItem {
  name: string;
  url: string;
}

export const handlePress = (label: string, urls: UrlItem[]) => {
  if (urls.length === 1) {
    Linking.openURL(urls[0].url).catch(() =>
      Alert.alert("Erro", "Não foi possível abrir a URL.")
    );
  } else {
    Alert.alert(
      label,
      "Escolha uma das opções:",
      urls.map((item) => ({
        text: item.name,
        onPress: () =>
          Linking.openURL(item.url).catch(() =>
            Alert.alert("Erro", "Não foi possível abrir a URL.")
          ),
      })),
      { cancelable: true }
    );
  }
};

import { Linking } from "react-native";
import { router } from "expo-router";

interface UrlItem {
  label: string;
  urls: { name: string; url: string }[];
}

export const handlePress = (
  item: UrlItem,
  setSelectedItem: (item: UrlItem | null) => void
) => {
  if (item.urls.length === 1) {
    const { url } = item.urls[0];
    if (url.endsWith(".pdf")) {
      router.navigate(`/(authenticated)/pdf-viewer`);
    } else {
      Linking.openURL(url)
      .catch(() => alert("Erro ao abrir a URL."));
      setSelectedItem(null);
    }
  } else {
    setSelectedItem(item);
  }
};

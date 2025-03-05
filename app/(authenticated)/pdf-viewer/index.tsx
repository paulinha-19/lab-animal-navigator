import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { WebView } from "react-native-webview";
import { Colors } from "@/constants/Colors";

export default function PdfViewerScreen() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Colors.light.background} />
          <Text style={styles.loadingText}>Carregando o pdf...</Text>
        </View>
      )}
      <WebView
        style={styles.pdf}
        nestedScrollEnabled={true}
        source={{
          uri: "https://drive.google.com/file/d/1XZo0eRdiZn5DN15aC21GR7i_Y5uSvVwZ/view",
        }}
        onLoadEnd={handleLoadEnd}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    color: Colors.light.background,
    fontSize: 16,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

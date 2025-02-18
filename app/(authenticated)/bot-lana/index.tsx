import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import { WebView } from "react-native-webview";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";

export default function BotLanaScreen() {
  const [isLoading, setIsLoading] = useState(true);

  const injectedJavaScript = `
    (function() {
      window.onload = function() {
        const checkElements = setInterval(() => {
          const chatPanel = document.getElementById("chat-panel");
          const messageContainer = document.querySelector(".message-container.mt-2");
          if (chatPanel && messageContainer) {
            document.body.style.display = "block"; // Exibe o conteúdo
            clearInterval(checkElements); // Para o intervalo quando os elementos forem encontrados
          }
        }, 100); // Verifica a cada 100ms
      };
    })();
  `;

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Colors.light.background} />
          <Text style={styles.loadingText}>Carregando o bot...</Text>
        </View>
      )}

      <WebView
        style={styles.container}
        source={{
          uri: "https://bot.writesonic.com/share/bot/fc311317-e6f9-43b7-9fc6-6333b78ae3a6",
        }}
        injectedJavaScript={injectedJavaScript}
        onLoadEnd={handleLoadEnd}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
});

import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const SearchInfo = () => {
  return (
    <View>
      <Text style={styles.infoText}>
        Toque em A-Z para ver a lista alfabética dos títulos e tópicos
      </Text>
      <Text style={styles.infoText}>
        Encontre informações sobre tópicos de planejamento experimental,
        legislação e etc...
      </Text>
      <Text style={styles.infoText}>
        Escolha o tópico e seja direcionado para o link do assunto com apenas um
        click
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
});

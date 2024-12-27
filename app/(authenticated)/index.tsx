import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { DrawerMenu } from "@/components";
import { Colors } from "@/constants/Colors";
import { Box } from "@/components/ui/box";
import { Link } from "expo-router";
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background }}>
        <Box className="bg-primary-500" style={styles.containter}>
          <DrawerMenu />
          <Box style={styles.containerHome}>
            <Image
              style={styles.sizeLogo}
              source={require("../../assets/images/logo-lab-animal.png")}
            />
            <Text style={styles.textLogo}>LabAnimal</Text>
            <Text style={styles.textLogo}>Navigator</Text>
            <Text style={{ ...styles.textTopics, marginTop: 80 }}>Tópicos</Text>
            <Link href="/" style={{ ...styles.textTopics, marginTop: 10 }}>
              Link para a lista de A-Z
            </Link>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    position: "relative",
  },
  containerHome: {
    alignItems: "center",
    marginTop: 80,
  },
  sizeLogo: {
    width: 150,
    height: 100,
  },
  textLogo: {
    color: Colors.light.text,
    fontSize: 50,
  },
  textTopics: {
    color: Colors.light.text,
    fontSize: 15,
  },
});

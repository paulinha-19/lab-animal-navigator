import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "transparent",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={["#35629d", "#153d72"]}
            style={{ flex: 1 }}
            start={{ x: -0.8, y: 1 }}
            end={{ x: 1.2, y: 1 }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Início",

          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={focused ? "white" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explorer/index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={focused ? "white" : color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slotContainer: {
    flex: 1,
    position: "relative",
  },
});

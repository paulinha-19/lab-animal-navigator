import React from "react";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function AuthenticatedLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="topics/search-topics"
          options={{
            title: "Tópicos",
            headerTitleStyle: { fontSize: 20 },
            headerStyle: { backgroundColor: "#153d72" },
            headerTintColor: "#fff",
         
          }}
        />
        <Stack.Screen
          name="topics/az-list"
          options={{
            title: "A-Z",
            headerTitleStyle: { fontSize: 20 },
            headerStyle: { backgroundColor: "#153d72" },
            headerTintColor: "#fff",
          }}
        />
      </Stack>
    </GluestackUIProvider>
  );
}

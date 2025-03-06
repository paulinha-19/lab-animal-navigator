import React from "react";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function AuthenticatedLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Screen
          name="home/index"
          options={{
            title: "",
            headerTitleStyle: { fontSize: 16 },
            headerStyle: { backgroundColor: "#153d72" },
            headerTintColor: "#fff",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="bot-lana/index"
          options={{
            title: "LANA",
            headerTitleStyle: { fontSize: 16 },
            headerStyle: { backgroundColor: "#153d72" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="topics/search-topics"
          options={{
            title: "Assuntos",
            headerTitleStyle: { fontSize: 16 },
            headerStyle: { backgroundColor: "#153d72" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="calculations/calculations"
          options={{
            title: "Cálculos",
            headerTitleStyle: { fontSize: 16 },
            headerStyle: { backgroundColor: "#153d72" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="calculations/calculation-doses"
          options={{
            title: "Cálculo de doses",
            headerTitleStyle: { fontSize: 16 },
            headerStyle: { backgroundColor: "#153d72" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="calculations/calculation-administered"
          options={{
            title: "Cálculo de quantidade de ração administrada",
            headerTitleStyle: { fontSize: 16 },
            headerStyle: { backgroundColor: "#153d72" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="pdf-viewer/index"
          options={{
            title: "Biologia e manejo",
            headerTitleStyle: { fontSize: 16 },
            headerStyle: { backgroundColor: "#153d72" },
            headerTintColor: "#fff",
          }}
        />
      </Stack>
    </GluestackUIProvider>
  );
}

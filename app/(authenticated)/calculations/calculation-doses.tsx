import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useForm } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";
import { zodResolver } from "@hookform/resolvers/zod";
import {calculationAdministeredSchema, CalculationAdministeredForm } from "@/schemas/index";
import { ControlledInput } from "@/components";
import { ControlledSelect } from "@/components/common/ControlledSelect";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { Center } from "@/components/ui/center";
import { Button, ButtonText } from "@/components/ui/button";

export default function CalculationDosesScreen() {
  const [results, setResults] = useState<{ grams: number; kg: number } | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);

  const options = ["A", "2", " 3"];
  const options2 = ["B", "C", " D"];
  const options3 = ["F", "G", " H"];

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CalculationAdministeredForm>({
    mode: "onChange",
    defaultValues: {
      selectSpecies: "",
      selectLineage: "",
      selectPhaseLife: "",
      numberAnimals: "",
    },
    resolver: zodResolver(calculationAdministeredSchema),
  });

  const onSubmit = (data: CalculationAdministeredForm) => {
    // Convert values to numbers before calculation
    const numberAnimals = parseFloat(data.numberAnimals as any);

    // Checks if both values are valid numbers
    if (!isNaN(numberAnimals)) {
      const grams = numberAnimals;
      const kg = grams / 1000;

      setResults({ grams, kg });
      setShowModal(true);
    } else {
      console.error("Os valores fornecidos não são números válidos.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    reset();
    setResults(null);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: Colors.light.background }}>
        <View style={styles.container}>
          <ControlledSelect
            control={control}
            name="selectSpecies"
            label="Selecione uma espécie"
            options={options}
            sizeError={14}
            colorValue="#fff"
            placeholder="Escolha uma opção"
          />
          <View style={styles.spaceBettwenInput}>
            <ControlledSelect
              control={control}
              name="selectLineage"
              label="Selecione uma linhagem"
              options={options2}
              sizeError={14}
              colorValue="#fff"
              placeholder="Escolha uma opção"
            />
          </View>
          <View style={styles.spaceBettwenInput}>
            <ControlledSelect
              control={control}
              name="selectPhaseLife"
              label="Selecione uma fase da vida"
              options={options3}
              sizeError={14}
              colorValue="#fff"
              placeholder="Escolha uma opção"
            />
          </View>
          <ControlledInput
            control={control}
            name="numberAnimals"
            placeholder="Insira um valor"
            placeholderColor="#ddd"
            label="Quantidade de animais"
            autoCapitalize="none"
            keyboardType="number-pad"
            errorMessage={errors?.numberAnimals?.message}
            borderColorInputFocus="#7589A4"
            borderColorInputBlur="#7589A4"
            backgroundColorInput="#7589A4"
            sizeLabel={16}
            sizeError={14}
          />
        </View>
        <View style={styles.buttonSubmitContainer}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <LinearGradient
              colors={["#35629d", Colors.light.background]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.buttonSubmit}
            >
              <Text style={styles.textButtonSubmit}>Calcular</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Center>
        <Modal isOpen={showModal} onClose={handleCloseModal} size="md">
          <ModalBackdrop />
          <ModalContent>
            <ModalHeader>
              <Text style={styles.modalTitle}>Resultado</Text>
            </ModalHeader>
            <ModalBody>
              {results && (
                <View>
                  <Text style={styles.modalText}>
                    Quantidade de oferta de ração diária (g): {results.grams} g
                  </Text>
                  <Text style={styles.modalText}>
                    Quantidade de oferta de ração diária (kg):{" "}
                    {results.kg.toFixed(2)} kg
                  </Text>
                </View>
              )}
            </ModalBody>
            <ModalFooter>
              <Button variant="solid" onPress={handleCloseModal}>
                <ButtonText>Fechar</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  buttonSubmitContainer: {
    alignSelf: "center",
  },
  buttonSubmit: {
    padding: 15,
    width: 200,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  textButtonSubmit: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  spaceBettwenInput: {
    marginTop: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.light.background,
  },
  modalText: {
    fontSize: 16,
    color: Colors.light.background,
    marginVertical: 5,
  },
});

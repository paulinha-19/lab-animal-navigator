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
import { zodResolver } from "@hookform/resolvers/zod";
import calculationAdministeredSchema from "@/schemas/calculation-administered";
import { LinearGradient } from "expo-linear-gradient";
import { ControlledInput, CalculationAdministeredResults } from "@/components";
import { ControlledSelect } from "@/components/common/ControlledSelect";
import { CalculationAdministeredForm } from "@/schemas/calculation-administered";
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
import { SPECIES, LINEAGE, PHASELIFE } from "@/data/calculation";

export default function CalculationAdministeredScreen() {
  const [results, setResults] = useState<{
    grams: number;
    kg: number;
    species: string;
    lineage: string;
    phase: string;
  } | null>(null);

  const [showModal, setShowModal] = useState(false);

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
      amountFeed: "",
    },
    resolver: zodResolver(calculationAdministeredSchema),
  });

  const onSubmit = (data: CalculationAdministeredForm) => {
    const numberAnimals = parseFloat(data.numberAnimals as any);
    const amountFeed = parseFloat(data.amountFeed as any);

    if (!isNaN(numberAnimals) && !isNaN(amountFeed)) {
      const grams = numberAnimals * amountFeed;
      const kg = grams / 1000;

      setResults({
        grams,
        kg,
        species: data.selectSpecies,
        lineage: data.selectLineage,
        phase: data.selectPhaseLife,
      });
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
            options={SPECIES}
            sizeError={14}
            colorValue="#fff"
            placeholder="Escolha uma opção"
          />
          <View style={styles.spaceBettwenInput}>
            <ControlledSelect
              control={control}
              name="selectLineage"
              label="Selecione uma linhagem"
              options={LINEAGE}
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
              options={PHASELIFE}
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
          <ControlledInput
            control={control}
            name="amountFeed"
            placeholder="Insira um valor"
            placeholderColor="#ddd"
            label="Quantidade de ração/animal (g)"
            autoCapitalize="none"
            keyboardType="number-pad"
            errorMessage={errors?.amountFeed?.message}
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
              {results && <CalculationAdministeredResults results={results} />}
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
});

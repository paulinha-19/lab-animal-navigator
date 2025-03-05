import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from "@/components/ui/modal";

interface CustomAlertProps {
  visible: boolean;
  heading?: string;
  subtitle?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "full" | undefined;
  sizeIcon?: number | undefined;
  color?: string | undefined;
  onClose: () => void;
  children?: React.ReactNode;
}

export const CustomAlert = ({
  visible,
  heading,
  subtitle,
  size = "xs",
  sizeIcon = 20,
  color = "black",
  onClose,
  children,
}: CustomAlertProps) => {
  return (
    <Modal isOpen={visible} onClose={onClose} size={size}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          {heading && <Text style={styles.headingText}>{heading}</Text>}
          <ModalCloseButton>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" size={sizeIcon} color={color} />
            </Pressable>
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          {subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>}
        </ModalBody>
          {children}
      </ModalContent>
    </Modal>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitleText: {},
});

import { TouchableWithoutFeedback, View, Text, StyleSheet, PanResponderInstance } from "react-native";
import React, { memo } from "react";

interface AlphabetListProps {
  onSelectLetter: (letter: string) => void;
  alphabetRef: React.RefObject<View>;
  panResponder: PanResponderInstance;
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const AlphabetList = memo(
  ({ onSelectLetter, alphabetRef, panResponder }: AlphabetListProps) => (
    <View
      ref={alphabetRef}
      style={styles.alphabetContainer}
      {...panResponder.panHandlers}
    >
      {alphabet.map((letter, index) => (
        <TouchableWithoutFeedback
        key={index} 
          onPress={() => onSelectLetter(letter)}
        >
          <View style={styles.alphabetItem}>
            <Text style={styles.alphabetText}>{letter}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  )
);

const styles = StyleSheet.create({
  alphabetContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b31b1b",
    width: 30,
  },
  alphabetItem: {
    paddingVertical: 2,
  },
  alphabetText: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold",
  },
});

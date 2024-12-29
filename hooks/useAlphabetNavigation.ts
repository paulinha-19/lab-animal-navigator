import { useRef } from "react";
import { FlatList, PanResponder, View } from "react-native";
import { debounce } from "lodash";
import { DATA } from "@/data/az-list";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const useAlphabetNavigation = () => {
  const listRef = useRef<FlatList>(null);
  const alphabetRef = useRef<View>(null);

  const scrollToSection = (key: string) => {
    const index = DATA.findIndex((section) => section.key === key);
    if (index !== -1) {
      listRef.current?.scrollToIndex({ index, animated: true });
    }
  };

  const handleScrollByPosition = debounce((locationY: number) => {
    alphabetRef.current?.measure((x, y, width, height, pageX, pageY) => {
      const relativeY = locationY - pageY;
      const index = Math.floor((relativeY / height) * alphabet.length);
      if (index >= 0 && index < alphabet.length) {
        const letter = alphabet[index];
        scrollToSection(letter);
      }
    });
  }, 100);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt) => {
      const { locationY } = evt.nativeEvent;
      handleScrollByPosition(locationY);
    },
    onPanResponderMove: (evt) => {
      const { locationY } = evt.nativeEvent;
      handleScrollByPosition(locationY);
    },
  });

  return { listRef, alphabetRef, scrollToSection, panResponder };
};

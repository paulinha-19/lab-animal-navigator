import React, { useState, useEffect } from "react";
import { Text } from "react-native";

interface TypewriterTextProps {
  messages: string[];
  speed?: number;
  delay?: number;
  style?: object;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  messages,
  speed = 100,
  delay = 2000,
  style,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const currentMessage = messages[currentMessageIndex];

        if (charIndex < currentMessage.length) {
          setCharIndex((prevIndex) => prevIndex + 1);
          return currentMessage.substring(0, charIndex + 1);
        } else {
          clearInterval(interval);

          // Somente alterna a mensagem se houver mais de uma
          if (messages.length > 1) {
            setTimeout(() => {
              setCharIndex(0);
              setCurrentMessageIndex(
                (prevIndex) => (prevIndex + 1) % messages.length
              );
            }, delay);
          }
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [charIndex, currentMessageIndex]);

  return <Text style={style}>{displayedText}</Text>;
};

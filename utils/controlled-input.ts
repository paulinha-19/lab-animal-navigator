export const onChangeText = (
  text: string,
  onChange: (...event: any[]) => void,
  keyboardType?: string
) => {
  if (
    keyboardType === "numeric" ||
    keyboardType === "number-pad" ||
    keyboardType === "decimal-pad"
  ) {
    const parsedValue = parseFloat(text);
    onChange(text === "" ? text : isNaN(parsedValue) ? "" : parsedValue);
  } else {
    onChange(text);
  }
};

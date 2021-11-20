import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

interface Props {
  onAddGoal: (courseGoal: string) => void;
  cancelHandler: () => void;
  visible: boolean;
}

const GoalInput = ({ onAddGoal, visible, cancelHandler }: Props) => {
  const [enteredGoal, setEnteredGoal] = useState<string>("");

  const goalInput = (enteredText: string | any) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInput}
          value={enteredGoal}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={cancelHandler} color="red" />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

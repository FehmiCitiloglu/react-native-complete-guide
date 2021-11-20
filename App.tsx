import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  type CurrentCourseGoals = { id: string; value: string }[];

  const [courseGoals, setCourseGoals] = useState<any>([]);
  const [isAddMode, setIsAddMode] = useState<boolean>(false);

  const addGoalHandler = (goalTitle: string) => {
    setCourseGoals((currentGoals: CurrentCourseGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const deleteGoalHandler = (goalId: string) => {
    setCourseGoals((currentGoals: CurrentCourseGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const toggleIsVisible = () => {
    setIsAddMode(true);
  };
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={toggleIsVisible} />
      <GoalInput
        onAddGoal={addGoalHandler.bind(courseGoals)}
        visible={isAddMode}
        cancelHandler={cancelGoalAdditionHandler}
      />
      {/* yukarıdaki ile aynı işlemi yapıyor <GoalInput onAddGoal={() => addGoalHandler(courseGoals)} /> */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={deleteGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

import { View, Text, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';

function MealOverviewScreen() {
  return (
    <View style={ style.container }>
      <Text>Meals Overview Screen</Text>
    </View>
  )
}

export default MealOverviewScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../../screens/CategoriesScreen';
import MealsOverviewScreen from '../../screens/MealsOverviewScreen';

// * HELPERS
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='inverted'/>
      <NavigationContainer independent={ true }>
        <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories"
            component={ CategoriesScreen }
            options={{ title: "Meals Categories" }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={ MealsOverviewScreen }
            options={{ title: "Meals Overview" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

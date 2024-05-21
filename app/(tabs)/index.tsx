import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../../screens/CategoriesScreen';
import MealsOverviewScreen from '../../screens/MealsOverviewScreen';
import MealDetailScreen from '../../screens/MealDetailScreen';
import FavoritesScreen from '../../screens/FavoritesScreen';
import FavoritesContextProvider from '../../store/context/favorites-context';

// * NAVIGATION
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#202020" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#202020" },
        drawerContentStyle: { backgroundColor: "#070505" },
        drawerActiveBackgroundColor: "#464646",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "white",
        drawerInactiveBackgroundColor: "#070505",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={ CategoriesScreen }
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons
              name="list"
              color={ color }
              size={ size }
            />
          }
        }}
      />

      <Drawer.Screen
        name="Favorites"
        component={ FavoritesScreen }
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons
              name="star"
              color={ color }
              size={ size }
            />
          }
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='inverted'/>
      <FavoritesContextProvider>
        <NavigationContainer independent={ true }>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#202020" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#202020" }
            }}
          >
            {/* This is part of the drawer navigation */}
            <Stack.Screen
              name="Drawer"
              component={ DrawerNavigator }
              options={{
                title: "Meals Categories",
                headerShown: false,
              }}
            />

            {/* <Stack.Screen
              name="MealsCategories"
              component={ CategoriesScreen }
              options={{
                title: "Meals Categories",
              }}
            /> */}

            <Stack.Screen
              name="MealsOverview"
              component={ MealsOverviewScreen }
            />

            <Stack.Screen
              name="MealDetail"
              component={ MealDetailScreen }
              options={{
                title: "About the Meal"
              }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
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

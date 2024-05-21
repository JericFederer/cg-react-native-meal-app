import { useLayoutEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealList from '@/components/MealList/MealList';

function MealOverviewScreen({ route, navigation }) {
  // * Also usable to get the 'route' object
  // const route = useRoute();

  // * HELPERS
  const categoryId = route.params.categoryId;
  
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  }); //: displayedMeals

  // * useLayoutEffect for category screen header title
  useLayoutEffect(() => {
    // * Get the current category's title
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

    // * Set the screen header into the the current category's title
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]); //: useLayoutEffect
  
  return <MealList meals={ displayedMeals }/>
}

export default MealOverviewScreen;
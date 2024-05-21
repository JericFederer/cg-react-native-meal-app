import { useContext } from 'react';

import MealList from '@/components/MealList/MealList';
import { MEALS } from '@/data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

function FavoritesScreen() {
  // * useContext
  const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter(meal => favoriteMealCtx.ids.includes(meal.id) )

  return (
    <MealList meals={ favoriteMeals }/>
  )
}

export default FavoritesScreen;
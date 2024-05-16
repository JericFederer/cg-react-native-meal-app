import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealOverviewScreen({ route }) {
  // * Also usable to get the 'route' object
  // const route = useRoute();

  // * HELPERS
  const categoryId = route.params.categoryId;
  
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  }); //: displayedMeals

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };

    return <MealItem { ...mealItemProps } />
  }; //: renderMealItem

  return (
    <View style={ style.container }>
      <FlatList 
        data={ displayedMeals }
        keyExtractor={ (item) => item.id }
        renderItem={ renderMealItem }
      />
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
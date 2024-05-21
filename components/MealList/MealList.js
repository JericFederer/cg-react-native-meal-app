import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from './MealItem';

function MealList({ meals }) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: itemData.item.id,
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
        data={ meals }
        keyExtractor={ (item) => item.id }
        renderItem={ renderMealItem }
      />
    </View>
  )
}

export default MealList;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});
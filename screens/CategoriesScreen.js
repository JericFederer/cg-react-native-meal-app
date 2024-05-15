import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({ navigation }) {

  // * HELPERS
  function renderCategoryItem(itemData) {
    function pressHandler() {
      // * This will render 'MealsOverViewScreen.js'
      navigation.navigate("Meals Overview");
    }
  
    return (
      <CategoryGridTile
        title={ itemData.item.title }
        color={ itemData.item.color }
        onPress={ pressHandler }
      />
    )
  }

  return (
    <FlatList
      data={ CATEGORIES }
      keyExtractor={ (item) => item.id }
      // * renderItem passes the itemData automatically
      renderItem={ renderCategoryItem }
      numColumns={ 2 }
    />
  )
}

export default CategoriesScreen;
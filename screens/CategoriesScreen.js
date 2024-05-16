import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({ navigation }) {
  // * Also usable to get the navigation object
  // const navigation = useNavigation();

  // * HELPERS
  function renderCategoryItem(itemData) {
    function pressHandler() {
      // * This will render 'MealsOverViewScreen.js'
      // * route.params for 'MealsOverviewScreen' component
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
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
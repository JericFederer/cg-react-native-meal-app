import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
} from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={ styles.gridItem }>
      <Pressable
        android_ripple={ {color: '#ccc'} }
        style={ ({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null] }
        onPress={ onPress }
      >
        <View style={ [styles.innerContainer, {backgroundColor: color}] }>
          <Text style={ styles.title }>{ title }</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
  }
});
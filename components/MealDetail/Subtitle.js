import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ children }) {
  return (
    <View style={ styles.subtitleContainer }>
      <Text style={ styles.subtitle }>{ children }</Text>
    </View>
  )
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#5dfcdd',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: '#5dfcdd',
    borderBottomWidth: 2,
  }
})
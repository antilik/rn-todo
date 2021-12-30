import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ListItem({ el, deleteHandler, toggleHandler }) {
  return (
    <TouchableOpacity
      onLongPress={() => deleteHandler(el.key)}
      onPress={() => toggleHandler(el.key)}
    >
      <Text
        style={[styles.text, el.done ? styles.textDone : styles.textNotDone]}
      >
        {el.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
    marginTop: 15,
    width: '60%',
    marginLeft: '20%',
  },
  textDone: {
    textDecorationLine: 'line-through',
    color: 'white',
    backgroundColor: 'green',
    fontWeight: 'bold',
  },
  textNotDone: {
    textDecorationLine: 'none',
  },
});

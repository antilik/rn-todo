import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function Form({ addHandler }) {
  const [inputText, setInputText] = useState('');

  const onChange = (text) => {
    setInputText(text);
  };

  const addPressHandler = () => {
    if (inputText.trim()) {
      addHandler(inputText.trim());
      setInputText('');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        defaultValue={inputText}
        onChangeText={onChange}
        placeholder="Write a task"
      ></TextInput>
      <View style={styles.buttonAdd}>
        <Button title="Add a task" onPress={addPressHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginVertical: 30,
    marginHorizontal: '20%',
    width: '60%',
  },
  buttonAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

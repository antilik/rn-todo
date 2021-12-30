import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { key: '1', text: 'Buy a coffee', done: false },
    { key: '2', text: 'Buy a car', done: false },
    { key: '3', text: 'Drink a cup of tea', done: false },
    { key: '4', text: 'Buy a course', done: true },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => [
      { key: Date.now().toString(), text, done: false },
      ...list,
    ]);
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((item) => item.key !== key);
    });
  };

  const toggleHandler = (key) => {
    setListOfItems((list) => {
      return list.map((el) => {
        return el.key === key ? { ...el, done: !el.done } : el;
      });
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header></Header>
      <Form addHandler={addHandler} />
      <View style={{ flex: 1 }}>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem
              el={item}
              deleteHandler={deleteHandler}
              toggleHandler={toggleHandler}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

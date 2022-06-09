import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import FurnitureItem from '../FurnitureItem';
import styles from './styles';
import Items from './Items';

const FurnitureList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Items}
        renderItem={({item}) => <FurnitureItem Item={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default FurnitureList;

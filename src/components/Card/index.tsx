import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DogObject } from '../../redux/features/dogs/type';

const Card = ({ breeds, url }: DogObject) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.title}>
            Breed: {breeds[0]?.name ?? 'Breed not found'}
          </Text>
          <Text style={styles.temperament}>
            Temperament:{' '}
            {breeds[0]?.temperament + '.' ?? 'Temperament not found'}
          </Text>
        </View>
      </View>

      <Image style={styles.cardImage} source={{ uri: url }} />

      <View style={styles.cardFooter}>
        <View style={styles.lifeSpanContainer}>
          <Text style={styles.lifeSpan}>
            Life span: {breeds[0]?.life_span ?? 'Unidentified lifetime'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0ffff',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: 150,
  },
  title: {
    fontSize: 18,
    flex: 1,
  },
  temperament: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  lifeSpan: {
    color: 'purple',
  },
  lifeSpanContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
});

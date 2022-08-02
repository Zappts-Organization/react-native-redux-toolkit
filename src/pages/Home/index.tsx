import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import Card from '../../components/Card';
import { fetchDogs } from '../../redux/features/dogs/dogsThunks';

const Home = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const { breeds, loading } = useAppSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(fetchDogs(page));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={breeds}
        renderItem={({ item: dog }) => (
          <Card breeds={dog.breeds} url={dog.url} />
        )}
        keyExtractor={(item) => item.id + Math.random()}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        onEndReached={() => {
          setPage(page + 1);
          dispatch(fetchDogs(page));
        }}
        ListFooterComponent={
          loading && <ActivityIndicator style={styles.loader} />
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  loader: {
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: '#e0ffff',
  },
  container: {
    flexDirection: 'row',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
});

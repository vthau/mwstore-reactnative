import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {fetchCategory, fetchBrand, fetchProduct} from './../actions/actions';
import RenderProduct from './../components/RenderProduct';
import RenderSwiper from './../components/RenderSwiper';

const HOT = {type: 'HOT'};

const Home = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);

  const cates = useSelector(state => state.cateReducer.cates);
  const brands = useSelector(state => state.brandReducer.brands);
  const products = useSelector(state => state.productReducer.hotProducts);

  const onRefresh = () => {
    setRefresh(true);
    dispatch(fetchCategory());
    dispatch(fetchBrand());
    dispatch(fetchProduct(HOT));
    setRefresh(false);
  };

  return (
    <ScrollView
      style={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <RenderSwiper
          type
          autoplay
          style={styles.productComponent}
          title="Hot deal"
          items={products}
          navigation={navigation}
        />

        <RenderSwiper
          style={styles.productComponent}
          title="Danh mục"
          items={cates}
          navigation={navigation}
        />
        <RenderSwiper
          style={styles.productComponent}
          title="Thương hiệu"
          items={brands}
          navigation={navigation}
        />
        <RenderProduct
          style={styles.productComponent}
          products={products}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productComponent: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

import CallAPI from './../utils/CallAPI';
import * as Config from './../Config/config';
import readStorage from './../utils/readStorage';

export const signInRequest = dataLogin => {
  return dispatch => {
    CallAPI(Config.API_SIGNUP, 'POST', {...dataLogin}).then(res => {
      if (typeof res.data !== 'string') {
        dispatch(signIn(res.data));
      }
    });
  };
};

export const signIn = info => {
  return {
    type: 'SIGN_IN',
    payload: info,
  };
};

export const signInToken = () => {
  return async dispatch => {
    const resp = await readStorage('signIn');
    if (resp !== null && resp.token !== null) {
      const {token} = resp;

      CallAPI(Config.API_SIGNIN_TOKEN, 'POST', {token: token})
        .then(res => {
          if (res.data !== 'TOKEN_INVALID') {
            dispatch(signIn(res.data));
          }
        })
        .catch(() => {
          console.log('error check login');
        });
    }
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT',
  };
};

export const fetchCategory = () => {
  return dispatch => {
    CallAPI(Config.API_CATE, 'GET', null).then(res => {
      dispatch(initCate(res.data));
    });
  };
};

export const initCate = cates => {
  return {
    type: 'INIT_CATE',
    payload: cates,
  };
};

export const fetchBrand = () => {
  return dispatch => {
    CallAPI(Config.API_BRAND, 'GET', null).then(res => {
      dispatch(initBrand(res.data));
    });
  };
};

export const initBrand = brands => {
  return {
    type: 'INIT_BRAND',
    payload: brands,
  };
};

export const fetchHotProduct = () => {
  return dispatch => {
    CallAPI(`${Config.API_PRODUCT}hot`, 'GET', null).then(res => {
      dispatch(initProduct(res.data));
    });
  };
};

export const initProduct = products => {
  return {
    type: 'INIT_PRODUCT',
    payload: products,
  };
};

export const fetchOrderHistory = () => {
  return dispatch => {
    CallAPI(Config.API_CATE, 'POST', null).then(res => {
      dispatch(initOrderHistory(res.data));
    });
  };
};

export const initOrderHistory = orderHistory => {
  return {
    type: 'ORDER_HISTORY',
    payload: orderHistory,
  };
};

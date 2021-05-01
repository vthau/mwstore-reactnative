import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AuthenNavigator from '../Authentication/AuthenNavigator';
import Setting from './Setting';

const SettingContainer = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const signIn = useSelector(state => state.authenReducer.signIn);

  return (
    <>{signIn ? <Setting navigation={navigation} /> : <AuthenNavigator />}</>
  );
};

export default SettingContainer;

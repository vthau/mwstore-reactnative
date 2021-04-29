import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import avatar from './../../../assets/img/avatars/avatar.png';
const {height, width} = Dimensions.get('window');
const boxSize = width / 2 - 40;
import {Formik} from 'formik';
import {validateUpdateProfile} from './../../utils/validation';

const Proflie = () => {
  const [name, setName] = useState('Trung Hau');
  const [email, setEmail] = useState('crtrunghau@gmail.com');
  const [phone, setPhone] = useState('0382881573');
  const [address, setAddress] = useState('ben tre');
  const [status, setStatus] = useState('khong gi khong the');
  const [update, setUpdate] = useState(false);

  const changeInfo = values => {
    console.log(values);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxHeader}>
          <FontAwesome5 name={'angle-left'} size={24} color={'#414dd1'} />
          <Text style={styles.titlePage}>Thong tin tai khoan</Text>
          <View></View>
        </View>
        <View style={styles.boxBackground}>
          <View style={styles.boxImage}>
            <TouchableOpacity style={styles.wrapImage}>
              <Image style={styles.avatarImage} source={avatar} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.boxName}>
          <Text style={styles.userName}>Trung Hau</Text>
          <Text style={styles.status}>Khong gi khong the</Text>
        </View>
        <View style={styles.boxInfo}>
          <Formik
            initialValues={{name, email, phone, address, status}}
            validationSchema={validateUpdateProfile}
            onSubmit={values => changeInfo(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
              values,
            }) => (
              <>
                <Text style={styles.nameFill}>Tên</Text>
                <View style={styles.infoItem}>
                  <FontAwesome5 name={'user'} size={22} color={'#616161'} />
                  <TextInput
                    style={styles.textInput}
                    // onFocus={() => focusInput('email')}
                    onBlur={handleBlur('name')}
                    onChangeText={handleChange('name')}
                    value={values.name}
                    placeholder="Nhập tên của bạn..."
                    editable={update}
                  />
                </View>
                {errors.name && touched.name ? (
                  <Text style={styles.errorFill}>{errors.name}</Text>
                ) : null}

                <Text style={styles.nameFill}>Email</Text>
                <View style={styles.infoItem}>
                  <FontAwesome5 name={'envelope'} size={22} color={'#616161'} />
                  <TextInput
                    style={styles.textInput}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    editable={false}
                  />
                </View>

                <Text style={styles.nameFill}>Điện thoại</Text>
                <View style={styles.infoItem}>
                  <FontAwesome5
                    name={'mobile-alt'}
                    size={22}
                    color={'#616161'}
                  />
                  <TextInput
                    style={styles.textInput}
                    // onFocus={() => focusInput('email')}
                    onBlur={handleBlur('phone')}
                    onChangeText={handleChange('phone')}
                    value={values.phone}
                    placeholder="Nhập số điện thoại của bạn..."
                    editable={update}
                  />
                </View>
                {errors.phone && touched.phone ? (
                  <Text style={styles.errorFill}>{errors.phone}</Text>
                ) : null}

                <Text style={styles.nameFill}>Trạng thái</Text>
                <View style={styles.infoItem}>
                  <FontAwesome5
                    name={'info-circle'}
                    size={22}
                    color={'#616161'}
                  />
                  <TextInput
                    style={styles.textInput}
                    // onFocus={() => focusInput('email')}
                    onBlur={handleBlur('status')}
                    onChangeText={handleChange('status')}
                    value={values.status}
                    placeholder="Nhập trạng thái của bạn..."
                    editable={update}
                  />
                </View>
                {errors.status && touched.status ? (
                  <Text style={styles.errorFill}>{errors.status}</Text>
                ) : null}

                <Text style={styles.nameFill}>Địa chỉ</Text>
                <View style={styles.infoItem}>
                  <FontAwesome5
                    name={'map-marked-alt'}
                    size={22}
                    color={'#616161'}
                  />
                  <TextInput
                    style={styles.textInput}
                    // onFocus={() => focusInput('email')}
                    onBlur={handleBlur('address')}
                    onChangeText={handleChange('address')}
                    value={values.address}
                    placeholder="Nhập địa chỉ của bạn"
                    editable={update}
                  />
                </View>
                {errors.address && touched.address ? (
                  <Text style={styles.errorFill}>{errors.address}</Text>
                ) : null}
                {update ? (
                  <TouchableOpacity
                    onPress={() => {
                      setUpdate(false);
                      handleSubmit();
                    }}>
                    <View style={styles.changeInfo}>
                      <Text style={styles.textChangeInfo}>Cập nhập</Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setUpdate(true)}>
                    <View style={styles.changeInfo}>
                      <Text style={styles.textChangeInfo}>Chỉnh sửa</Text>
                    </View>
                  </TouchableOpacity>
                )}
              </>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
};

export default Proflie;

const styles = StyleSheet.create({
  textChangeInfo: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
  },
  changeInfo: {
    marginTop: 30,
    backgroundColor: '#003FFF',
    borderRadius: 14,
    alignItems: 'center',
  },
  nameFill: {
    paddingLeft: 20,
    paddingTop: 16,
  },
  errorFill: {
    paddingTop: 2,
    paddingLeft: 10,
    color: 'red',
    fontSize: 14,
  },
  boxInfo: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
    marginTop: 4,
    backgroundColor: '#F3F3F3',
    borderRadius: 14,
    paddingLeft: 8,
  },
  textInput: {
    color: '#414dd1',
    marginLeft: 6,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  boxHeader: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titlePage: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#414dd1',
  },
  boxBackground: {
    paddingBottom: width / 7,
  },
  boxImage: {
    marginTop: 20,
    height: width / 2.5,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  wrapImage: {
    position: 'absolute',
    top: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 3 + 6,
    height: width / 3 + 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 70,
  },
  avatarImage: {
    borderRadius: 70,
    width: width / 3,
    height: width / 3,
  },
  boxName: {
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 20,
    color: '#414dd1',
    fontWeight: 'bold',
  },
  status: {
    textAlign: 'center',
    color: '#a19f9f',
    fontSize: 14,
  },
});
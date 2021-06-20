import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  Alert,
} from 'react-native';

import usersData from '../../data/employees';
import {vh, vw} from '../../units';
import {appTheme} from '../../utils';
import InputField from '../../components/InputField';
import styles from './styles';
import {generalImages} from '../../assets/images';
import FloatingButton from '../../components/buttons/FloatingButton';
import Button from '../../components/buttons/Button';

const EmployeesScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [users, setUsers] = useState(usersData);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const renderUser = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={generalImages.avatar}
            style={{height: vh * 8, width: vh * 8}}
          />
          <View style={{marginLeft: vw * 4}}>
            <Text style={{fontSize: vh * 3}}>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{marginRight: vw * 4}}
            onPress={() => editEmployeeHandler(item, index)}>
            <Image source={generalImages.edit} style={styles.iconImage} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => deleteEmployeeHandler(item, index)}>
            <Image source={generalImages.delete} style={styles.iconImage} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const saveEmployeeHandler = () => {
    if (name == '' || age == '') {
      return Alert.alert('Warning', 'Please fill all the fields!');
    }

    setModalVisible(false);
    const usersClone = [...users];
    if (isEdit) {
      usersClone[currentIndex].name = name;
      usersClone[currentIndex].age = age;
    } else {
      usersClone.push({
        id: usersClone[usersClone.length - 1].id + 1,
        name,
        age,
      });
    }
    setUsers(usersClone);
    setName('');
    setAge('');
  };

  const deleteEmployeeHandler = (item, index) => {
    const usersClone = [...users];
    usersClone.splice(index, 1);
    setUsers(usersClone);
  };

  const editEmployeeHandler = (item, index) => {
    setCurrentIndex(index);
    setIsEdit(true);
    setName(item.name);
    setAge(item.age);
    setModalVisible(true);
  };

  const filterHandler = () => {
    const filteredUsers = users.filter(user => user.age > 25);
    setUsers(filteredUsers);
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          style={styles.backdropContainer}
          onPress={() => setModalVisible(false)}></TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.modalContainer}>
            <InputField
              label="Enter Name:"
              placeholder="Employee Name"
              onChangeText={name => setName(name)}
              value={name}
            />

            <InputField
              label="Enter Age:"
              placeholder="Employee Age"
              keyboardType="numeric"
              onChangeText={age => setAge(age)}
              value={age}
            />

            <View style={{alignItems: 'center'}}>
              <Button onPress={saveEmployeeHandler}>
                <Text style={{color: appTheme.white}}>
                  {isEdit ? 'Edit' : 'Save'}
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>

      <View style={{height: vh * 86}}>
        <FlatList
          data={users}
          renderItem={renderUser}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={{fontSize: vh * 2.5}}>
                No users available, please add some users to see them
              </Text>
            </View>
          )}
        />
      </View>

      <View style={styles.floatingButtonContainer}>
        <FloatingButton onPress={filterHandler}>
          <Image source={generalImages.filter} style={styles.buttonImage} />
        </FloatingButton>

        <FloatingButton onPress={() => setModalVisible(true)}>
          <Image source={generalImages.plus} style={styles.buttonImage} />
        </FloatingButton>
      </View>
    </View>
  );
};

export default EmployeesScreen;

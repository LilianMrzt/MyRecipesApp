import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import Icons from '@assets/Icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTabBarButton = () => {
  const {colors} = useTheme();
  const styles = customTabBarButtonStyle(colors);

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.customButton]}
          onPress={() => setIsModalVisible(true)}>
          <View style={styles.buttonContent}>
            <Ionicons name={Icons.add} color={colors.surface} size={30} />
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        visible={isModalVisible}
        animationType={'slide'}
        onRequestClose={() => setIsModalVisible(false)}
        style={styles.modal}>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Hi 👋!</Text>
          <Text style={styles.contentTitle}>Hello from Overlay!</Text>
          <Button title={'rere'} onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </>
  );
};

const customTabBarButtonStyle = colors =>
  StyleSheet.create({
    container: {
      height: 70,
      width: 70,
      backgroundColor: colors.background,
      top: -40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
    },
    customButton: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContent: {
      width: 60,
      height: 60,
      borderRadius: 50,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      backgroundColor: colors.background,
      padding: 22,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 17,
      borderTopLeftRadius: 17,
    },
    contentTitle: {
      color: colors.onBackground,
      fontSize: 20,
      marginBottom: 12,
    },
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
  });

export default CustomTabBarButton;

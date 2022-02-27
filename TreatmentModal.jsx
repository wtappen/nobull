import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Modal = ({
  isOpen, closeModal, title, children, onAfterOpen,
}) => (
  <NativeModal
    isVisible={isOpen}
    onBackButtonPress={closeModal}
    onSwipeComplete={closeModal}
    onModalWillShow={onAfterOpen}
    swipeDirection={['down']}
    style={styles.modal}
  >
    <View style={styles.body}>
      <View style={styles.reverseRow}>
        <Button title="Done" onPress={closeModal} />
      </View>
      <Text style={styles.h1}>{title}</Text>
      {children}
    </View>
  </NativeModal>
);
Modal.defaultProps = {
  title: '',
};
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onAfterOpen: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;

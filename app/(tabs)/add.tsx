import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import CameraComponent from '../../components/Camera'; // Certifique-se de importar o componente CameraComponent corretamente

const Add = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);

  const toggleCamera = () => {
    setIsCameraActive(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {isCameraActive && <CameraComponent />}
        <View style={styles.overlay}>
          <View style={styles.buttonContainer}>
            <Button
              title="Ligar Câmera"
              onPress={toggleCamera}
              disabled={isCameraActive}
            />
            <Button
              title="Desligar Câmera"
              onPress={toggleCamera}
              disabled={!isCameraActive}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EEFA',
  },
  cameraContainer: {
    flex: 1,
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'transparent',
  },
});

export default Add;
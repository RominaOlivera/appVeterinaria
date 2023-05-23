import React from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';

const LandingPage = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titulo}>¡Bienvenido a </Text>
        <Text style={styles.tituloBold}>Clínica Animalia</Text>
        <Text style={styles.titulo}>!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={onPress} style={styles.btnNuevaCita}>
          <Text style={styles.btnTextoNuevaCita}>Ingresar</Text>
        </Pressable>
      </View>
      <ImageBackground
        source={require("../assets/perro-gato.png")}
        style={styles.imageBackground}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  titulo: {
    fontSize: 28,
    color: "#374151",
    fontWeight: "600",
  },
  tituloBold: {
    fontSize: 28,
    color: "#6D28D9",
    fontWeight: "900",
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: undefined,
    marginTop:60
  


  },
  buttonContainer: {
    marginTop: 'auto',
    // marginBottom: 50,
    marginTop:20,
    alignItems: 'center',
  },
  btnNuevaCita: {
    backgroundColor: "#6D28D9",
    padding: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase",
  },
});

export default LandingPage;

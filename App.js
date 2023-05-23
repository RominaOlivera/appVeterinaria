// import React, { useState } from 'react';
// import { SafeAreaView, Text, StyleSheet, Pressable, FlatList, Alert, Modal } from 'react-native';
// import Formulario from './src/components/Formulario';
// import Paciente from './src/components/Paciente';
// import InformacionPaciente from './src/components/InformacionPaciente';

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [pacientes, setPacientes] = useState([])
//   const [paciente, setPaciente] = useState({})
//   const [modalPaciente, setModalPaciente] = useState(false)



//   const pacienteEditar = id => {
//     const pacienteEditar = pacientes.filter(paciente => paciente.id === id)
//     console.log(pacienteEditar)
//     setPaciente(pacienteEditar[0])
//   }

//   const pacienteEliminar = id => {
//     Alert.alert("¿Deseas eliminar a este paciente?",
//       "Un paciente eliminado no se puede recuperar",
//       [
//         { text: "Cancelar" },
//         {
//           text: "Si, Eliminar", onPress: () => {
//             const pacientesActualizados = pacientes.filter(
//               pacientesState => pacientesState.id != id)
//             setPacientes(pacientesActualizados)
//           }
//         }
//       ])
//   }
//   const cerrarModal = () => {
//     setModalVisible(false)

//   }
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.titulo}>Administrador de Citas {""}
//         <Text style={styles.tituloBold}>Veterinaria</Text>
//       </Text>
//       <Pressable
//         onPress={() => setModalVisible(true)}
//         style={styles.btnNuevaCita}>
//         <Text style={styles.btnTextoNuevaCita}>Nueva cita</Text>
//       </Pressable>

//       {pacientes.length === 0 ?
//         <Text style={styles.noPacientes}>No hay pacientes aún</Text> :
//         <FlatList
//           data={pacientes}
//           style={styles.listado}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => {
//             return (
//               <Paciente
//                 item={item}
//                 setModalVisible={setModalVisible}
//                 pacienteEditar={pacienteEditar}
//                 pacienteEliminar={pacienteEliminar}
//                 setModalPaciente={setModalPaciente}
//                 setPaciente={setPaciente}
//               />
//             )
//           }}
//         />}

//       {modalVisible && (<Formulario
//         cerrarModal={cerrarModal}
//         setPacientes={setPacientes}
//         pacientes={pacientes}
//         paciente={paciente}
//         setPaciente={setPaciente} />)}

//       <Modal visible={modalPaciente}
//         animationType='fade'
//       >
//         <InformacionPaciente
//           paciente={paciente}
//           setModalPaciente={setModalPaciente}
//           setPaciente={setPaciente} />

//       </Modal>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#F3F4F6",
//     flex: 1,
//   },
//   titulo: {
//     textAlign: "center",
//     marginTop: 50,
//     fontSize: 30,
//     color: "#374151",
//     fontWeight: "600",
//   },
//   tituloBold: {
//     fontWeight: "900",
//     color: "#6D28D9"
//   },
//   btnNuevaCita: {
//     backgroundColor: "#6D28D9",
//     padding: 20,
//     marginTop: 20,
//     marginHorizontal: 20,
//     borderRadius: 10,
//   },
//   btnTextoNuevaCita: {
//     textAlign: "center",
//     color: "#FFF",
//     fontSize: 20,
//     fontWeight: "900",
//     textTransform: "uppercase"
//   },
//   noPacientes: {
//     marginTop: 40,
//     textAlign: "center",
//     fontSize: 24,
//     fontWeight: 600,

//   },
//   listado: {
//     marginTop: 50

//   }
// });

// export default App;

import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Pressable, FlatList, Alert, Modal } from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';
import LandingPage from "./src/components/LandingPage" 

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [modalPaciente, setModalPaciente] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true)

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id);
    console.log(pacienteEditar);
    setPaciente(pacienteEditar[0]);
  }

  const pacienteEliminar = id => {
    Alert.alert("¿Deseas eliminar a este paciente?",
      "Un paciente eliminado no se puede recuperar",
      [
        { text: "Cancelar" },
        {
          text: "Si, Eliminar", onPress: () => {
            const pacientesActualizados = pacientes.filter(
              pacientesState => pacientesState.id !== id
            );
            setPacientes(pacientesActualizados);
          }
        }
      ]);
  }

  const cerrarModal = () => {
    setModalVisible(false);
  }

  if (showLandingPage) {
    return (
      <LandingPage
        onPress={() => setShowLandingPage(false)} 
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas {""}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.btnNuevaCita}>
        <Text style={styles.btnTextoNuevaCita}>Nueva cita</Text>
      </Pressable>

      {pacientes.length === 0 ?
        <Text style={styles.noPacientes}>No hay pacientes aún</Text> :
        <FlatList
          data={pacientes}
          style={styles.listado}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Paciente
                item={item}
                setModalVisible={setModalVisible}
                pacienteEditar={pacienteEditar}
                pacienteEliminar={pacienteEliminar}
                setModalPaciente={setModalPaciente}
                setPaciente={setPaciente}
              />
            );
          }}
        />}

      {modalVisible && (<Formulario
        cerrarModal={cerrarModal}
        setPacientes={setPacientes}
        pacientes={pacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />)}

      <Modal visible={modalPaciente} animationType='fade'>
        <InformacionPaciente
          paciente={paciente}
          setModalPaciente={setModalPaciente}
          setPaciente={setPaciente}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    flex: 1,
  },
  titulo: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
    color: "#374151",
    fontWeight: "600",
  },
  tituloBold: {
    fontWeight: "900",
    color: "#6D28D9"
  },
  btnNuevaCita: {
    backgroundColor: "#6D28D9",
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  noPacientes: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
  listado: {
    marginTop: 50
  }
});

export default App

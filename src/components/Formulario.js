import React, { useState, useEffect } from 'react';
import { Modal, Text, SafeAreaView, StyleSheet, View, TextInput, ScrollView, Pressable, Alert } from 'react-native'
import DatePicker from 'react-native-date-picker';

export default function Formulario({modalVisible, pacientes, setPacientes, paciente: pacienteObj, setPaciente: setPacienteApp, cerrarModal }) {

    const [paciente, setPaciente] = useState("")
    const [id, setId] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [fecha, setFecha] = useState(new Date())
    const [sintomas, setSintomas] = useState("")

    useEffect(() => {
        if (Object.keys(pacienteObj).length > 0) {
            setId(pacienteObj.id)
            setPaciente(pacienteObj.paciente)
            setPropietario(pacienteObj.propietario)
            setEmail(pacienteObj.email)
            setTelefono(pacienteObj.telefono)
            setSintomas(pacienteObj.sintomas)
        }
    }, [pacienteObj])


    const handleCita = () => {
        if ([paciente, propietario, fecha, sintomas].includes("")) {
            Alert.alert(
                "Error",
                "Todos los campos son obligatorios"
            )
            return
        }
        const nuevoPaciente = {
            paciente,
            propietario,
            email,
            telefono,
            fecha,
            sintomas
        }

        if (id) {
            nuevoPaciente.id = id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPacienteApp({})
        } else {
            nuevoPaciente.id = Date.now()
            setPacientes([...pacientes, nuevoPaciente])

        }

      cerrarModal()
        setId("")
        setPaciente("")
        setPropietario("")
        setEmail("")
        setTelefono("")
        setFecha(new Date())
        setSintomas("")


    }

    return (
        <Modal animationType='slide'
            visible={modalVisible}>
            <SafeAreaView style={styles.contenido}>

                <ScrollView>
                    <Text style={styles.titulo}>{pacienteObj.id ? "Editar" : "Nueva" } {""}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>

                    <Pressable style={styles.btnCancelar}
                        onPress={() => {
                            setPacienteApp({})
                            setId("")
                            cerrarModal()
                            setPaciente("")
                            setPropietario("")
                            setEmail("")
                            setTelefono("")
                            setFecha(new Date())
                            setSintomas("")
                        }
                        } >
                        <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Paciente</Text>
                        <TextInput placeholder='Nombre Paciente'
                            placeholderTextColor={"#666"}
                            style={styles.input}
                            value={paciente}
                            onChangeText={setPaciente} />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput placeholder='Nombre Propietario'
                            placeholderTextColor={"#666"}
                            style={styles.input}
                            value={propietario}
                            onChangeText={setPropietario} />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Email Propietario</Text>
                        <TextInput placeholder='Email Propietario'
                            placeholderTextColor={"#666"}
                            keyboardType='email-address'
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail} />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono Propietario</Text>
                        <TextInput placeholder='Teléfono Propietario'
                            placeholderTextColor={"#666"}
                            keyboardType='number-pad'
                            style={styles.input}
                            value={telefono}
                            onChangeText={setTelefono}
                            maxLength={10} />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha de alta</Text>
                        <View style={styles.fechaContenedor} >
                            <DatePicker
                            mode='date'
                                date={fecha}
                                locale='es'
                                onDateChange={(date) => setFecha(date)}
                            />
                        </View>
                    </View>

                    <View style={styles.campo}>
                        <Text style={[styles.label]}>Sintomas Paciente</Text>
                        <TextInput
                            style={[styles.input, styles.sintomasInput]}
                            value={sintomas}
                            onChangeText={setSintomas}
                            multiline={true}
                            numberOfLines={4} />
                    </View>

                    <Pressable style={styles.btnNuevaCita}
                        onPress={handleCita}>
                        <Text style={styles.btnNuevaCitaTexto}>{ pacienteObj.id ? "Editar" : "Agregar"} Paciente</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal >
    )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: "#6D28D9",
        flex: 1
    },
    titulo: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 30,
        color: "#FFF"
    },
    tituloBold: {
        fontWeight: "900"
    },
    btnCancelar: {
        marginVertical: 30,
        backgroundColor: "#5827A4",
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
    },
    btnCancelarTexto: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 20,
        textTransform: "uppercase"
    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,

    },
    label: {
        color: "#FFF",
        marginBottom: 0,
        marginTop: 10,
        fontSize: 20,
        fontWeight: "600"
    },
    input: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        marginTop: 10,

    },
    sintomasInput: {
        textAlignVertical: 'top',
        height: 150,
    },
    fechaContenedor: {
        marginTop: 10,
        backgroundColor: "#FFF",
    },
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: "#F59E0B",
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10
    },
    btnNuevaCitaTexto: {
        textAlign: "center",
        color: "#5827A4",
        textTransform: "uppercase",
        fontWeight: "700",
        fontSize: 20,


    }
})

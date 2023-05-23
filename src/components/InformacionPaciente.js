import React from 'react'
import { View, Text, SafeAreaView, Pressable, StyleSheet } from "react-native"
import { formatearFecha } from "../helpers"


export default function InformacionPaciente({ paciente, setModalPaciente, setPaciente }) {


    return (
        <SafeAreaView style={styles.contenedor}>
            <Text style={styles.titulo} >Información {""}
                <Text style={styles.tituloBold}>Paciente</Text></Text>
            <View>
                <Pressable onPress={() => {
                    setModalPaciente(false)
                    setPaciente({})
                }}
                    style={styles.btnCerrar}
                >
                    <Text style={styles.btnCerrarTexto}>X Cerrar</Text>
                </Pressable>
            </View>
            <View style={styles.contenido}>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.valor}>{paciente.paciente}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Propietario:</Text>
                    <Text style={styles.valor}>{paciente.propietario}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.valor}>{paciente.email}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Telefono:</Text>
                    <Text style={styles.valor}>{paciente.telefono}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Fecha alta:</Text>
                    <Text style={styles.valor}>{formatearFecha(paciente.fecha)}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Sintomas:</Text>
                    <Text style={styles.valor}>{paciente.sintomas}</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: "#F59E0B",
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 30,
        color: "#FFF"
    },
    tituloBold: {
        fontWeight: "900",
        color: "#FFF"

    },
    btnCerrar: {
        marginVertical: 30,
        backgroundColor: "#E06900",
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
    },
    btnCerrarTexto: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 20,
        textTransform: "uppercase"
    },
    contenido: {
        backgroundColor: "#FFF",
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    campo: {
        marginBottom: 10
    },
    label: {
        textTransform: "uppercase",
        color: "#374151",
        fontWeight: "600",
        marginBottom: 3
    },
    valor: {
        fontWeight: "700",
        fontSize: 20,
        color: "#334155"
    }

})
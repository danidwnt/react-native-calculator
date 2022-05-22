import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



export default function Form() {

    // const [hitung , setHitung] = useState(0)
    // const [ hasil , setHasil ] = useState(0)

    // masukanAngka = (value) => {
    //     if ( hitung == 0){
    //         setHitung({hitung : value})
    //     }else {
    //         setHitung({hitung : value + "" + hitung})
    //     }
    // }

    const [keys, setKeys] = useState(['0'])
    const [ result, setResult] = useState("")
    let combination = ""
    function getResult() {
        for (let i = 0; i < keys.length; i++) {
            combination = combination + keys[i];
        }
        const executeStringNumber = eval(combination)
        setResult( "=" + executeStringNumber);
    }

    return (
        <View style={style.container} >
            <StatusBar />

            <Text style={style.textStyle} >Display</Text>
            <Text style={style.TextInput}>{keys}{result} </Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20, }}>
                <TouchableOpacity onPress={() => setKeys([...keys, '1'])} >
                    <Text style={style.InputNumber}> 1 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setKeys([...keys, '2'])}>
                    <Text style={style.InputNumber}> 2 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setKeys([...keys, '-'])}>
                    <Text style={style.InputTanda}> - </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setKeys([...keys, '+'])}>
                    <Text style={style.InputTanda}> + </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20, }}>
                <TouchableOpacity onPress={() => setKeys([...keys, '3'])} >
                    <Text style={style.InputNumber}> 3 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setKeys([...keys, '4'])}>
                    <Text style={style.InputNumber}> 4 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setKeys([...keys, '/'])}>
                    <Text style={style.InputTanda}> / </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setKeys([...keys, '*'])}>
                    <Text style={style.InputTanda}> * </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20, }}>
                <TouchableOpacity onPress={() => setKeys([...keys, '5'])} >
                    <Text style={style.InputNumber}> 5 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setKeys([...keys, '6'])}>
                    <Text style={style.InputNumber}> 6 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setKeys([...keys, '%'])}>
                    <Text style={style.InputTanda}> % </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => getResult()} >
                    <Text style={style.InputTanda}> = </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20, }}>
                <TouchableOpacity onPress={() => setKeys([...keys, '7'])}>
                    <Text style={style.InputNumber}> 7 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setKeys([...keys, '8'])}>
                    <Text style={style.InputNumber}> 8 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setKeys([...keys, '9'])}>
                    <Text style={style.InputNumber}> 9 </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setKeys([...keys, '0'])}>
                    <Text style={style.InputNumber}> 0 </Text>
                </TouchableOpacity>
            </View>
            <View  style={{ flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity>
                    <Text style={style.InputClear}> C </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 20,
    },
    textStyle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 50,
    },
    TextInput: {
        height: 100,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        padding: 20,
        backgroundColor: '#FFF',
        color: 'black',
        fontSize: 25,
        // textAlign : 'end'
    },
    InputNumber: {
        fontSize: 50,
        color: '#fff',
        backgroundColor: '#FF5757',
        width: 70,
        textAlign: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        marginRight: 5,
    },
    InputTanda: {
        fontSize: 50,
        color: '#fff',
        backgroundColor: '#930707',
        width: 70,
        textAlign: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        marginRight: 5,
    },
    InputClear: {
        fontSize: 50,
        color: '#fff',
        backgroundColor: '#930707',
        width: 200,
        textAlign: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        marginRight: 5,
    }
})

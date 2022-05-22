import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Operator extends Component {
    constructor(props){
        super(props);
        this.state ={
            result : 0,
            keys : 0,
        }
    }

    handelPress = (value) => {
        if (this.state.keys == 0){
            this.setState({keys : value})
        }else {
            this.setState({keys : this.state.keys + "" + value});
        }
    }

    keysresult = () => {
        let result = eval(this.state.keys);
        this.setState({keys : result})
    }

  render() {
    return (
        <View style={style.container} >
        <StatusBar />

        <Text style={style.textStyle} >Display</Text>
        <Text style={style.TextInput}>{this.state.keys} </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20, }}>
            <TouchableOpacity onPress={()=> this.handelPress(1)} >
                <Text style={style.InputNumber}> 1 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.handelPress(2)}>
                <Text style={style.InputNumber}> 2 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.handelPress('-')}>
                <Text style={style.InputTanda}> - </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.handelPress('+')} >
                <Text style={style.InputTanda}> + </Text>
            </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20, }}>
            <TouchableOpacity  onPress={()=> this.handelPress(3)}>
                <Text style={style.InputNumber}> 3 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.handelPress(4)}>
                <Text style={style.InputNumber}> 4 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.handelPress('/')}>
                <Text style={style.InputTanda}> / </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.handelPress('*')}>
                <Text style={style.InputTanda}> x </Text>
            </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20, }}>
            <TouchableOpacity onPress={()=> this.handelPress(5)}>
                <Text style={style.InputNumber}> 5 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.handelPress(6)}>
                <Text style={style.InputNumber}> 6 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.handelPress('%')}>
                <Text style={style.InputTanda}> % </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.keysresult()} >
                <Text style={style.InputTanda}> = </Text>
            </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20, }}>
            <TouchableOpacity onPress={()=> this.handelPress(7)}>
                <Text style={style.InputNumber}> 7 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.handelPress(8)}>
                <Text style={style.InputNumber}> 8 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.handelPress(9)} >
                <Text style={style.InputNumber}> 9 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.handelPress(0)}>
                <Text style={style.InputNumber}> 0 </Text>
            </TouchableOpacity>
        </View>
        <View  style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <TouchableOpacity onPress={() => this.setState({keys : 0}) }>
                <Text style={style.InputClear}> Clear </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
  }
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
        marginBottom: 10,
        padding: 20,
        backgroundColor: '#FFF',
        color: 'black',
        fontSize: 35,
        textAlign : 'right',
        fontWeight : 'bold'
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
        fontSize: 30,
        color: '#fff',
        backgroundColor: '#930707',
        width: 315,
        textAlign: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        marginRight: 5,
        padding: 10,
        fontWeight : 'bold'
    }
})
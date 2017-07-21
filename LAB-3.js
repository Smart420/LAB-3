import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    Alert,
    Button

} from 'react-native';

export default class lab3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'PUSH',
            arrayList: ['Nitipoom Yawichai 572115035', 'Name2', 'name3', 'name4'],
        };
    }
    _handleName(event) {
        console.log('its work');
    }
    _onPush() {
        this.setState({
            arrayList: [...this.state.arrayList, this.state.text],
        })
    }
    _onPop() {
        Alert.alert(
            'Confirmation',
            'Are you sure to pop the list?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'POP', onPress: () => this._Pop() },
            ],
            { cancelable: false }
        )
    }
    _Pop() {
        var index = this.state.arrayList.indexOf(this.state.arrayList)
        this.setState({
            arrayList: this.state.arrayList.slice(0, index)
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputBox}>
                    <TextInput style={{ width: 430, height: 50 ,}}
                        onSubmitEditing={(event) => this._handleName(event)} />
                    <View style={{ margin: 5 }}>
                        <Button
                            onPress={()=>this._onPush()}
                            title="PUSH"
                        color="red"/>
                    </View>
                    <View style={{ margin: 5 }}>
                        <Button
                            onPress={()=>this._onPop()}
                            title="POP"
                    color="red"/>
                    </View>
                </View>

                <View style={styles.listBox}>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={this.state.arrayList}
                            renderItem={({ item }) => <Text>{item}</Text>} />
                    </View>
                </View>
                                
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        flex: 1,
        flexDirection: 'column',
    },
    inputBox: {
        borderWidth: 2,
        margin: 20,
        flex: 1,
        backgroundColor: 'white',
    },
    listBox: {
        flex: 3,
        flexDirection: 'column',
        margin: 20,
        borderWidth: 2,
    }
})
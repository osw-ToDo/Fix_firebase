import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {theme } from '../theme';
import TodoInput from '../components/TodoInput';
import Day from '../components/Date';
import Category from '../components/Category';
import ToggleSwitch from 'toggle-switch-react-native';


//const [newTask, setNewTask]=useState('');
/*const _handleTextChange = text =>{
    setNewTask(text);
};*/

const Task = () => {
    return(
            <View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Start-Date:</Text>
                <Day/>
                </View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Due-Date:</Text>
                <Day/>
                </View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Category:</Text>
                <Category/>
                </View>
                <View style={taskStyles.container}>
                <Text style={taskStyles.text}>To-do:</Text>
                <TodoInput/>
                </View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Completed:</Text>
                <ToggleSwitch
                    isOn={false}
                    onColor="#2Faf53"
                    offColor="#ecf0f1"
                    size="large"
                    onToggle={isOn => console.log("changed to : ", isOn)}
                    />
                </View>
            </View>
    )
}
const taskStyles=StyleSheet.create({
    container: {
        margin:10,
        marginLeft:0,
        padding:5,
        marginTop:20,
       
    },
    column:{
        flexDirection: 'row',
        margin:10,
        marginLeft:0,
        padding:5,
        marginTop:20,
        
        
    },
    text:{
        flex:1,
        fontSize:23,
        fontWeight: '500',
        color: theme.cate,
        marginTop: 10,
        marginLeft: 20,
        width: 150,
        textAlignVertical: 'center',
    },
});

/*Task.propTypes = {
    text:PropTypes.string.isRequired,
};*/

export default Task;
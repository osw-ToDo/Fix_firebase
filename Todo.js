import React from "react";
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Todo({ id, title, complete }) {
    async function toggleComplete() {
        await firestore()
        .colletion('todos')
        .doc(id)
        .update({
            duedate: !finish,
            complete: !complete,
        });
    }

    return (
        <List.Item
            title={title}
            duedate={duedate}
            onPress={()=>toggleComplete()}
            left={props => (
                <List.Icon {...props} icon={complete ? 'check' : 'cancel'} />
            )}
            />
    );
}

export default React.memo(Todo);

//duedate 
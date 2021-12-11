import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

export default class RadioButton extends Component {
	state = {
		value: null,
	};
    

	render() {
		const { PROP } = this.props;
		const { value } = this.state;

		return (
			<View style = {styles.listBox}>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							{/* <Text style={styles.radioText}>{res.text}</Text> */}
							<TouchableOpacity
								
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
                                    
                                {value != res.key && <Image source={res.image} style={iconStyle.pic}/>}
                                {value === res.key && <Image source={res.selimage} style={iconStyle.pic}/>}
							</TouchableOpacity>
						</View>
					);
				})}
                {/* <Text> Selected: {this.state.value} </Text>  <View style={styles.selectedRb} />*/}
			</View>
		);
	}
}

const iconStyle = StyleSheet.create({
    pic: {
      tintColor: 'black',
      width: 50,
      height: 50,
      margin: 5,
      resizeMode: 'contain', 
  },
});

const styles = StyleSheet.create({
    listBox:{
      //  backgroundColor:'yellow',
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent:'flex-start',
    },

	container: {
       // backgroundColor:'pink',
        marginBottom: 1,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});
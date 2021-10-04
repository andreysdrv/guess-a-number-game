import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../constans/colors'

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{title}</Text>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		color: 'black',
		fontSize: 18,
	},
})

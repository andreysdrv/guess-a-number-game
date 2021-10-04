import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = ({ style, children }) => {
	return <View style={{ ...styles.card, ...style }}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
	card: {
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		elevation: 8,
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 20,
	},
})

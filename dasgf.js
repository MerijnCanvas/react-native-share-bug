/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import Share from 'react-native-share';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TouchableOpacity,
 } from 'react-native';
 
 import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
 import {useState} from 'react/cjs/react.production.min';
 
 const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
	 <View style={styles.sectionContainer}>
	   <Text
		 style={[
		   styles.sectionTitle,
		   {
			 color: isDarkMode ? Colors.white : Colors.black,
		   },
		 ]}>
		 {title}
	   </Text>
	   <Text
		 style={[
		   styles.sectionDescription,
		   {
			 color: isDarkMode ? Colors.light : Colors.dark,
		   },s
		 ]}>
		 {children}
	   </Text>
	 </View>
   );
 };
 
 const App: () => Node = () => {
   const [shared, setShared] = useState();
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
	 backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   const onSharePress = async () => {
	 const image =
	   'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
 
	 const shareText = 'Hallo';
 
	 const result = await Share.open({
	   message: shareText,
	   url: image,
	   type: 'image/*',
	 });
 
	 console.log(result);
 
	 if (!result.app) {
	   return;
	 }
 
	 if (
	   !result.app.match(/whatsapp/i) &&
	   !result.app.match(/instagram/i) &&
	   !result.app.match(/linkedin/i) &&
	   !result.app.match(/facebook/i) &&
	   !result.app.match(/twitter/i)
	 ) {
	   return;
	 }
 
	 console.log('GELUKT!!!!');
   };
 
   return (
	 <SafeAreaView style={backgroundStyle}>
	   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
	   <ScrollView
		 contentInsetAdjustmentBehavior="automatic"
		 style={backgroundStyle}>
		 <Header />
		 <View
		   style={{
			 backgroundColor: isDarkMode ? Colors.black : Colors.white,
		   }}>
		   <Section title="Share">
			 <TouchableOpacity
			   onPress={onSharePress}
			   style={{
				 padding: 20,
				 backgroundColor: 'red',
			   }}>
			   <Text style={{color: 'white'}}>Hello world</Text>
			 </TouchableOpacity>
		   </Section>
		 </View>
	   </ScrollView>
	 </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
	 marginTop: 32,
	 paddingHorizontal: 24,
   },
   sectionTitle: {
	 fontSize: 24,
	 fontWeight: '600',
   },
   sectionDescription: {
	 marginTop: 8,
	 fontSize: 18,
	 fontWeight: '400',
   },
   highlight: {
	 fontWeight: '700',
   },
 });
 
 export default App;
 
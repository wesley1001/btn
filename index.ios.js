import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';


import List from './app/components/list';

class btnapp extends Component {
  // _handleBackButtonPress() {
  //   this.props.navigator.pop();
  // }
  //
  // _handleNextButtonPress() {
  //   this.props.navigator.push(nextRoute);
  // }

  render() {
    return (
      <View style={styles.container}>

      <NavigatorIOS
        style={{flex: 1, alignSelf: 'stretch'}}
        initialRoute={{
          title: 'By The Numbers',
          component: List,
          barTintColor: '#6064CA',
          titleTextColor: '#ffffff'
        }} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('btnapp', () => btnapp);

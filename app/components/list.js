
import React, {
  AppRegistry,
  Component,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class List extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {dataSource: ds.cloneWithRows([
      {
        name: 'Squat',
        id: 1,
      },
      {
        name: 'Deadlift',
        id: 2,
      },
      {
        name: 'Press',
        id: 3,
      }
    ])};
  }

  handleRowPress() {
    console.log(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
         dataSource={this.state.dataSource}
         renderRow={(rowData) => <TouchableHighlight underlayColor={'#cdcdcd'} style={styles.row} onPress={() => this.handleRowPress.bind(this) }><Text>{rowData.name}</Text></TouchableHighlight>}
         />
       </View>
    )
  }
}

const styles = StyleSheet.create({
    row: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#cdcdcd',
      borderStyle: 'solid',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
    container: {
      flex: 1
    }
});

export default List;

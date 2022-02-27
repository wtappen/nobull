import { withNavigation } from 'react-navigation';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Tracking({ navigation }) {

  const image = { uri: "https://reactjs.org/logo-og.png" };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={() => this.deleteContact()}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.69)',
        }}
      >
        <Text>
          Tap Anywhere to create a note
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default withNavigation(Tracking);
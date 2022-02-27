import { withNavigation } from 'react-navigation';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function TrackStart({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Tracking')}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 250,
          height: 250,
          backgroundColor: '#FFB703',
          borderRadius: 250,
        }}
      >
        <Text>
          START TRACKING
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default withNavigation(TrackStart);
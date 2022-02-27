import { withNavigation } from 'react-navigation';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { Card } from 'react-native-shadow-cards';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function BullSummary({ navigation }) {
  return (
    <View style={{
      flex: 1, alignItems: 'center', backgroundColor: 'white',
    }}>
      <Text
        style={{
          fontSize: 30,
          paddingBottom: 30,
          paddingTop: 30,
          fontFamily: 'Arial'
        }}
      >
        We found errors!
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        < Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            paddingRight: 5
          }}
        >
          Call
        </Text>
        < Text
          style={{
            fontWeight: 'bold',
            color: '#02adba',
            // textDecoration: 'underline',
            fontSize: 18,
            paddingRight: 5
          }}
        >
          888-888-8888
        </Text>
        < Text
          style={{
            fontSize: 18
          }}
        >
          to negotiate
        </Text>
      </View>
      < Text
        style={{
          fontSize: 18
        }}
      >
        the following errors in your bill
      </Text>

      <Text
        style={{
          fontWeight: 'bold',
          color: '#FFD580',
          fontSize: 20,
          paddingBottom: 30,
          paddingTop: 30
        }}
      >
        You've got this!
      </Text>
      <Card style={{
        padding: 20, margin: 10, borderRadius: 12, minHeight: 150,
      }}>
        <View
          style={{
            paddingBottom: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Duplicate charge
          </Text>
          <Icon name="copy-outline" size={30} color="#000" />
        </View>
        <Text
          style={{
            fontSize: 18
          }}
        >
          You were charged twice for your X-rays
        </Text>
      </Card>
      <Card style={{ padding: 20, margin: 10, borderRadius: 12 }}>
        <View
          style={{
            paddingBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Ballance billing
          </Text>
          <Icon2 name="exclamationcircleo" size={30} color="#000" />
        </View>
        <Text
          style={{
            fontSize: 18
          }}
        >
          Legally, under the No Surprise Act, you are protected against out of network billing
        </Text>
      </Card>
    </ View>
  );
}

export default BullSummary;


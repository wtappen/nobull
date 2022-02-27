import { withNavigation } from 'react-navigation';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function NoBull({ navigation }) {
  return (
    <View style={{
      flex: 1, alignItems: 'center', backgroundColor: 'white',
    }}>
      <Text
        style={{
          fontSize: 30,
          paddingBottom: 60,
          paddingTop: 30,
          fontFamily: 'Arial'
        }}
      >
        Past hospital visits
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
            New York Presbyterian
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Feb 22
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('BillSummary')}
          style={{
            borderWidth: 1,
            padding: 5,
            borderRadius: 50,
            borderColor: '#02adba',
            paddingLeft: 10,
            marginTop: 20,
            width: 110
          }}
        >
          <Text
            style={{
              fontSize: 20,
            }}>
            Link a bill
          </Text>
        </TouchableOpacity>
      </Card>
      <Card style={{ padding: 20, margin: 10, borderRadius: 12, minHeight: 140, }}>
        <View
          style={{
            paddingBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Mount Sinai
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Dec 15
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#02adba',
          }}
        >
          Found 700$ in savings
        </Text>
      </Card>
      <Card style={{ padding: 20, margin: 10, borderRadius: 12, minHeight: 140, }}>
        <View
          style={{
            paddingBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Mount Sinai
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Sep 2
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#02adba',
          }}
        >
          Found 1200$ in savings
        </Text>
      </Card>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#219EBC',
          width: '100%',
          minHeight: 80,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Card style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingBottom: 20,
          marginBottom: 20,
          bottom: 20,
          alignItems: 'center',
          backgroundColor: 'white',
          minHeight: 40,
          borderRadius: 50,
          width: '50%',
          paddingTop: 20
        }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              paddingBottom: 2,
              paddingRight: 15,
              color: '#FFB703'
            }}>
            +
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            New Visit
          </Text>

        </Card>
      </View>

    </ View>
  );
}

export default NoBull;


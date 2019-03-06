import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox, TouchableOpacity, Picker, Image, ScrollView, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

const { width } = Dimensions.get('window')

class HomeScreen extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      chosenDate: '',
      ssn: '',
      toggle: false,
      showMe: false
    }
  }

  _handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('LT')
    })
  }
  _showPicker = () => {
    this.setState({
      isVisible: true
    })
  }

  _hidePicker = () => {
    this.setState({
      isVisible: false
    })
  }

  _iconbtn = () => {
    const newState = !this.state.toggle
    this.setState({
      toggle: newState,
      showMe: !this.state.showMe
    })
  }

  render() {
    const { toggle } = this.state
    const iconName = toggle ? 'angle-up' : 'angle-down'
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Add a New Product</Text>
        <View style={styles.productsection}>
          <View style={styles.productviews}>
            <Text>Pro price  </Text>
            <View style={styles.labelView}>
              <Icon type='FontAwesome' name='dollar' style={{ fontSize: 15, color: 'gray' }} />
              <TextInput style={styles.productlabels} />
            </View>
          </View>
          <View style={styles.productviews}>
            <Text>Bid time    </Text>
            <View style={styles.labelView}>
              <Icon type='FontAwesome' name='calendar' style={{ fontSize: 15, color: 'gray' }} />
              <TextInput style={styles.productlabels} onFocus={this._showPicker}>
                {this.state.chosenDate}
              </TextInput>
            </View>
            <DateTimePicker
              isVisible={this.state.isVisible}
              onConfirm={this._handlePicker}
              onCancel={this._hidePicker}
              mode={'time'} is24Hour={false}
            />
          </View>
          <View style={styles.productviews}>
            <CheckBox value={this.state.checked} onValueChange={() => this.setState({ checked: !this.state.checked })} />
            <Text style={{ fontSize: 14 }}>Show Products</Text>
          </View>
          {
            this.state.showMe ?
              <View style={styles.pickerView}>
                <Text style={{ fontSize: 14 }}>SSN :</Text>
                <Picker selectedValue={this.state.ssn}
                  style={styles.pickerstyle}
                  mode={'dropdown'}
                  onValueChange={(itemValue, itemIndex) => this.setState({ ssn: itemValue })}>
                  <Picker.Item label="1234" value="1" />
                  <Picker.Item label="5678" value="2" />
                  <Picker.Item label="9101" value="3" />
                </Picker>
              </View>
              :
              null
          }

          <View style={styles.productviews}>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={{ textAlign: 'center', color: 'white' }}>ADD BUTTON    +</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignSelf: 'flex-end', marginRight: 10, paddingLeft: 5 }}>
            <Icon type='FontAwesome' onPress={() => this._iconbtn()} name={iconName} style={{ fontSize: 25, color: 'gray' }} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 360, marginTop: 30, marginBottom: 10, }}>
          <Text>SSA</Text>
          <Text>View All  <Icon type='FontAwesome' name='angle-right' style={{ fontSize: 20, color: 'white' }} /></Text>
        </View>
        <ScrollView style={{ marginBottom: 10, width: width }} contentContainerStyle={{ alignItems: 'center' }} >
          <View style={styles.priductItems}>
            <Image style={{ width: 50, height: 30 }} source={require('../pakflag.png')}></Image>
            <Text>4 *** 1234</Text>
            <Text>$ 400</Text>
            <Text>1 hour</Text>
          </View>
          
        </ScrollView>
      </View >
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  pickerstyle: {
    width: 140,
    height: 30,

  },
  welcome: {
    fontSize: 17,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  submitButton: {
    backgroundColor: '#F82260',
    padding: 10,
    width: 150,
    borderRadius: 30,
  },
  productsection: {
    width: 290,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    elevation: 15,
  },
  productlabels: {
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 5,
    paddingRight: 0,
    width: 160,
  },
  labelView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    paddingLeft: 5,
    width: 160,
  },
  pickerView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 290,
    padding: 5,
    justifyContent: 'center',
    borderTopColor: 'lightgray',
    borderBottomColor: 'lightgray',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  priductItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 360, height: 70,
    backgroundColor: '#EAEAEA',
    borderRadius: 5, elevation: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    marginBottom: 5
  },
  productviews: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
});

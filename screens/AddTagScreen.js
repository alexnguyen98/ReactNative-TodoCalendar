import React from 'react'
import { 
  StyleSheet, 
  KeyboardAvoidingView, 
  Keyboard, 
  TouchableWithoutFeedback 
} from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import ChatInput from '../components/AddScreen/ChatInput'
import ChatView from '../components/AddScreen/ChatView'

class AddTagScreen extends React.Component {
  state = {
    textInput: '',
  };

  setText = text => {
    this.setState({textInput: text})
  }

  addText = text => {
    this.setState(state => {
      return {
        textInput: state.textInput + text + ' '
      }
    })
  }

  saveTag = () => {
    if (!this.state.textInput.trim())
      return

    const usedTags = this.state.textInput.trim().split(' ')
    const todaysTags = usedTags.map(tag => ({
      tag,
      date: this.props.curTime.date,
      hours: this.props.curTime.hours,
      minutes: this.props.curTime.minutes,
      value: null
    }))
    this.props.addTag(todaysTags,usedTags)
    this.setState({textInput: ''})
    this.props.navigation.navigate('TabScreen')
  }

  render() {
    return (
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior="padding" 
        keyboardVerticalOffset={80}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ChatView 
            usedTags={this.props.usedTags}
            addText={this.addText}
            removeUsedTag={this.props.removeUsedTag}
        />
        </TouchableWithoutFeedback>
        <ChatInput
          send={this.saveTag}
          change={this.setText}
          value={this.state.textInput}
        />
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTag: (todaysTags,usedTags) => dispatch({type:'ADD_T_TAG', payload:{todaysTags,usedTags}}),
  removeUsedTag: (tag) => dispatch({type:'REMOVE_USED_TAG', payload: tag})
})

const mapStateToProps = state => ({
  curTime: state.tags.curTime,
  usedTags: state.tags.usedTags
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
})

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(AddTagScreen))
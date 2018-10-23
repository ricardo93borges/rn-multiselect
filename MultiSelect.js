import React, { Component } from "react"
import {
  Text,
  View,
  Modal,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native"
import styles from "./style"
import PropTypes from "prop-types"

export default class MultiSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      selectedItems: []
    }
  }

  setButtonClasses = itemKey => {
    if (this.state.selectedItems.includes(itemKey)) {
      return [styles.button, styles.horizontalLine, styles.buttonSelectedColor]
    }
    return [styles.button, styles.horizontalLine, styles.buttonColor]
  }

  setTextClasses = itemKey => {
    if (this.state.selectedItems.includes(itemKey)) {
      return [styles.buttonText, styles.textSelectedColor]
    }
    return [styles.buttonText]
  }

  selectItem = itemKey => {
    let selectedItems = this.state.selectedItems
    let index = selectedItems.indexOf(itemKey)

    if (index >= 0) {
      selectedItems.splice(index, 1)
    } else {
      selectedItems.push(itemKey)
    }
    this.setState({ selectedItems })
    this.props.onChange(selectedItems)
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible })
  }

  renderTags = () => {
    let items = []
    let selectedItems =
      this.state.selectedItems.length > 0 ? this.state.selectedItems : this.props.selectedOptions

    selectedItems.map(key => {
      let item = this.props.data.find(elem => elem.key === key)
      if (item) items.push(item)
    })

    if (items.length > 0) {
      return (
        <ScrollView contentContainerStyle={[styles.horizontalLine, styles.tagInput]}>
          {items.map(item => {
            return (
              <Text key={item.key} style={styles.tag}>
                {item.label}
              </Text>
            )
          })}
        </ScrollView>
      )
    } else {
      return (
        <View style={[styles.horizontalLine, styles.tagInput]}>
          <Text style={{ padding: 10, color: "#CCC" }}>{this.props.placeholder}</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View>
        <Modal
          style={styles.modal}
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.toggleModal()}
        >
          <View style={styles.modalInner}>
            <View style={styles.select}>
              <ScrollView style={{ maxHeight: 400 }}>
                {this.props.data.map(item => {
                  return (
                    <TouchableHighlight
                      key={item.key}
                      underlayColor="#273a8c"
                      style={this.setButtonClasses(item.key)}
                      onPress={() => this.selectItem(item.key)}
                    >
                      <Text style={this.setTextClasses(item.key)}>{item.label}</Text>
                    </TouchableHighlight>
                  )
                })}
              </ScrollView>
              <TouchableHighlight
                underlayColor="#CCC"
                style={styles.button}
                onPress={() => this.toggleModal()}
              >
                <Text style={[styles.buttonText, styles.footerText]}>
                  {this.props.modalFooterText}
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableWithoutFeedback onPress={() => this.toggleModal()}>
          {this.renderTags()}
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

MultiSelect.propTypes = {
  data: PropTypes.array.isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.number),
  placeholder: PropTypes.string,
  modalFooterText: PropTypes.string,
  onChange: PropTypes.func
}

MultiSelect.defaultProps = {
  placeholder: "Touch to choose tags",
  modalFooterText: "SUBMIT"
}

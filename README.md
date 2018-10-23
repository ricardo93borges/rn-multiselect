# RN Multiselect

[![npm version](https://badge.fury.io/js/rn-multiselect.svg)](https://badge.fury.io/js/rn-multiselect)

Multiselect component for react native

## Install

```
npm i rn-multiselect
```

## Usage

```jsx
<MultiSelect
  data={[{key:1, label:'Option 1'}, {key:2, label:'Option 2'}, {key:3, label:'Option 3' } ]}
  selectedOptions={[1,2]}
  onChange={values => this.setState({ selectedOptions: values })}
  modalFooterText="Submit"
  placeholder="Click here to choose"
/>
```

<h1 align="center">
  <img width="300" src="https://github.com/ricardo93borges/rn-multiselect/blob/master/media/img1.jpg" />
</h1>
<br/>
<h1 align="center">
  <img width="300" src="https://github.com/ricardo93borges/rn-multiselect/blob/master/media/img2.jpg" /><br/>
</h1>
<br/>
<h1 align="center">
  <img width="300" src="https://github.com/ricardo93borges/rn-multiselect/blob/master/media/img3.jpg" /><br/>
</h1>
<br/>
<h1 align="center">
  <img width="300" src="https://github.com/ricardo93borges/rn-multiselect/blob/master/media/img4.jpg" /><br/>
</h1>
<br/>

###### Props

* **data _(required)_:** Options, expect an array of objects with key and label
* **selectedOptions:** Selected options, expect an array of selected options's keys
* **onChange:** Function that is called when a option is selected, returns selected options
* **modalFooterText:** Text displayed on modal's footer
* **placeholder:** Text displayed when there is no tag selected

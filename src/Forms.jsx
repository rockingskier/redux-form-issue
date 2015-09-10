import { connect } from 'react-redux';
import { connectReduxForm } from 'redux-form';
import React, { Component, PropTypes } from 'react';

import BaseForm from './BaseForm.jsx';


var DefinedForm = connectReduxForm({
  form: 'contact',
  fields: ['name'],
  validate: (data) => { return {}; }
})(BaseForm);


class DynamicForm extends Component {
  render() {
    const { formName, fieldsNeeded } = this.props;

    var DynamicInnerForm = connectReduxForm({
      form: formName,
      fields: fieldsNeeded,
      validate: (data) => { return {}; }
    })(BaseForm);

    return <DynamicInnerForm formKey={this.props.formKey} />;
  }
}

class FormContainer extends Component {
  render() {
    return (
      <div>
        <h2>DefinedForm</h2>
        <DefinedForm
          formKey={this.props.formKey + 'DefinedForm'} />

        <h2>DynamicForm</h2>
        <DynamicForm
          formKey={this.props.formKey + 'DynamicForm'}
          formName={'contact'}
          fieldsNeeded={['name']} />
      </div>
    );
  }
}
const ConnectedFormContainer = connect(state => state)(FormContainer);


export default class extends Component {
  render() {
    return (
      <div>
        <h1>FormContainer</h1>
        <FormContainer formKey={'Unconnected'} />

        <h1>ConnectedFormContainer</h1>
        <ConnectedFormContainer formKey={'Connected'} />
      </div>
    )
  }
}

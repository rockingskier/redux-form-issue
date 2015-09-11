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
    const {path} = this.props;
    return (
      <div>
        <hr/>
        <h3>{path} (from redux-react-router state)</h3>
        <hr/>
        <h2>DefinedForm</h2>
        <DefinedForm
          formKey={this.props.formKey + 'DefinedForm'} />

        <h2>DynamicForm</h2>
        <DynamicForm
          formKey={this.props.formKey + 'DynamicForm'}
          formName="contact"
          fieldsNeeded={['name']} />
      </div>
    );
  }
}

/**
 * I'm not entirely sure why it doesn't work when you have connect(state => state), but if you just use
 * connect(), which does not inject state, or select a specific slice of state, then it works.
 **/
const ConnectedFormContainer = connect(
  state => ({
    path: state.router.pathname
  })
)(FormContainer);

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

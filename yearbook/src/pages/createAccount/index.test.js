import React from 'react';
import Form from './index';
import TestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import CreateAccount from './index';

it('gets the form state from onSubmit function', () => {
    const wrapper = document.createElement('div');
    const onSubmitFn = jest.fn();
    ReactDOM.render(
      <Form loginSubmitForm={onSubmitFn}>
        <CreateAccount name="username" type="text" />;
      </Form>,
      wrapper
    );
    TestUtils.Simulate.click(CreateAccount);

});
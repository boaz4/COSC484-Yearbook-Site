import React from 'react';
import Form from './index';
import TestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import Login from './index';

it('gets the form state from onSubmit function', () => {
    const wrapper = document.createElement('div');
    const onSubmitFn = jest.fn();
    ReactDOM.render(
      <Form loginSubmitForm={onSubmitFn}>
        <Login name="username" type="text" />;
      </Form>,
      wrapper
    );
    /* const input = wrapper.querySelector('input');
    const form = wrapper.querySelector('form'); */

    TestUtils.Simulate.click(Login);
    /* expect(onSubmitFn).toHaveBeenCalled(); */
});
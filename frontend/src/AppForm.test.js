import React from 'react';
import ReactDOM from 'react-dom';
import AppForm from './components/AppForm';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppForm/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

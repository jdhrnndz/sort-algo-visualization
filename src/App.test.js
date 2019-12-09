import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders default settings without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders using SquareCanvas without crashing', () => {
  const app = shallow(<App />);

  app
    .find('#element-select')
    .simulate('change', { target: { value: 'square' } });
});

it('renders using CircleCanvas without crashing', () => {
  const app = shallow(<App />);

  app
    .find('#element-select')
    .simulate('change', { target: { value: 'circle' } });
});

it('renders using HexCanvas without crashing', () => {
  const app = shallow(<App />);

  app.find('#element-select').simulate('change', { target: { value: 'hex' } });
});

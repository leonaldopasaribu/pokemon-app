import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Buttons from '../Global/Buttons';

afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Buttons></Buttons>, div);
});

it('renders button correctly', () => {
  const { getByTestId } = render(<Buttons title="Previous"></Buttons>);
  expect(getByTestId('button')).toHaveTextContent('Previous');
});

it('matches snapshot Previous', () => {
  const tree = renderer.create(<Buttons label="Previous"></Buttons>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('matches snapshot Next', () => {
  const tree = renderer.create(<Buttons label="Next"></Buttons>).toJSON();
  expect(tree).toMatchSnapshot();
});

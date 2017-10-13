import React from 'react';
import renderer from 'react-test-renderer';

import Row from './index';

describe('snapshot', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Row />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
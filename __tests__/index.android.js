import 'react-native';
import React from 'react';
import Index from '../index.android.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

//I don't even know why the hell I kept this in.

it('displays searcher on the page', () =>{
  const tree = renderer.create(
    <Index />
  ).toJSON();
  expect(tree.children[0].children).toEqual(["Searcher"])
});

it('displays movie data after submitting a title', () => {


});

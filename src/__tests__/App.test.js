import React from "react";
import ReactDOM from "react-dom";
import '../matchMedia';
import App from '../App';

import renderer from 'react-test-renderer';



test("renders the correct content", () => {

const root = document.createElement("div");
ReactDOM.render(<App />, root);



expect(root.querySelector("button").textContent).toBe("Browse Recipes");

expect(root.querySelector("h1").textContent).toBe("tasteIT");


});

describe('Jest snapshot testing suite', () => {
  test('Matches DOM Snapshot for App component', () => {
      const domTree = renderer.create(<App />).toJSON();

      expect(domTree).toMatchSnapshot();
  });
});

// Testing external BCH link on the homepage

describe('Testing external link', () => {
  test('Opens BCH link on a new tab', () => {

    document.addEventListener("DOMContentLoaded", function() {
      expect(document.querySelector('a').getAttribute('href')).toBe('http://bc.fi');
    });
    
  
  });
  });


















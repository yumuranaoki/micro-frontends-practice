import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App : React.FC<{}> = () => {
  return (
    <div>
      Hello React
    </div>
  );
};

class CustomElementsApp extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({mode: 'open'})
     .appendChild(mountPoint);
    ReactDOM.render(<App />, mountPoint)
  }
}

customElements.define(
  'react-root',
  CustomElementsApp
);
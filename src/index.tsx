import React from 'react';
import ReactDom from 'react-dom';

export default function App():JSX.Element {
  return (
    <h6>hello ts</h6>
  )
}


ReactDom.render(<App />,document.getElementById('app-root'));

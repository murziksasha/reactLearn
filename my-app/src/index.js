
import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import './index.css';


import App from './App';
import {Button} from './App';

const BigButton = styled(Button)`
  margin: 30px auto;
  width: 245px;
`;

ReactDOM.render(
  <StrictMode>
    <App/>
    <BigButton as="a">Some button</BigButton>
  </StrictMode>,
  document.querySelector('#root')
  );





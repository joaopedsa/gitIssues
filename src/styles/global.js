import { injectGlobal } from 'styled-components';

import 'font-awesome/css/font-awesome.min.css';

injectGlobal`
  *{
    outline : 0 ;
    margin : 0 ;
    padding : 0 ;
    box-sizing : border-box;
  }

  body{
    height:100%;
    width:100%;
    background : #F5F5F5;
    text-rendering:optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
`;

import styled from 'styled-components';


export const Container = styled.div`
  display :flex;
  flex-direction : row;
  flex-wrap: wrap;
  height : 100%;
  width : 100%;
`;
export const SmallContainer = styled.div`
  width : 33vw;
  height : 20vh;
  margin : 1em;
  padding : 2em;
  padding-top : 1em;
  border-radius : 5px;
  display : flex;
  flex-direction : row;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.1);
  background : rgb(255,255,255);
  button{
    width : 9em;
    height : 2em;
    padding : 1px;
    background : #B286D1;
    border : none;
    outline: none;
    color : white;
    font-weight : bold;
    font-size : 0.9em;
    margin-top:10px;
    border-radius : 5px;
    i{
      margin-right : 15px;
    }
  }
  img{
    height : 6em;
    width : 6em;
    border-radius : 45px;
  }
  ul{
    list-style : none;
    margin-left : 15px;
    white-space: nowrap;
    overflow: hidden;
  }
  strong{
    font-size : 1.4em;
  }
  small{
    font-size : 0.9em;
    color : gray;
  }
`;

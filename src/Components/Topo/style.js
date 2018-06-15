import styled from 'styled-components';


export const Container = styled.div`
  width : 100%;
  input{
    background : #EEE;
  }
`;
export const Form = styled.form`
  display : flex;
  flex-direction : row;
  justify-content : left;
  width : 80%;
  padding : 15px 15px;
  small{
    font-size : 16px;
    color : gray;
  }
  strong{
    font-size : 18px;
  }
  ul{
    padding-top:3.7vh;
    padding-left:0.7vw;
    list-style : none;
  }
  img{
    margin-top : 20px;
    margin-left : 25px;
    width : 60px;
    height : 60px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  height : 100%;
  width : 100%;
  display : flex;
`;
export const ContainerLeft = styled.div`
  flex-direction : column;
  min-height : 100vh;
  display : flex;
  background-color:rgb(255,255,255);
  padding : 15px;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
`;
export const ContainerRight = styled.div`
  height : 100%;
  width : 100%;
  display : flex;
  flex-direction : column;
  justify-items:left;
`;
export const ContainerTopo = styled.div`
  max-height : 125px;
  width : 100%;
  display : flex;
  flex-direction : row;
  background : #FFF;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
  justify-items:left;
    select{
        width: 240px;
       height: 40px;
       overflow: hidden;
       border-radius : 5px;
       border: 1px solid #ccc;
       margin-right : 20px;
       margin-top : 37px;
       text-indent : 5px;
    }
`;
export const Linha = styled.div`
  background : #EEE;
  height : 1.5px;
  width : 90%;
  margin-top : 2.5vh;
`;

export const Form = styled.form`
  margin-top : 20px;
  display : flex;
  input{
    height : 55px;
    width : 75%;
    padding : 0 20px;
    background : #EEE;
    font-size : 1.2em;
    color : #444;
    border-radius : 5px;
    border : ${props => (props.error === "true" ? '2px solid #F00' : 0)};
  }
  button{
    width : 20%;
    height : 55px;
    padding : 0 20px;
    margin-left : 10px;
    background : #59EA9A;
    color : #fff;
    border : 0;
    font-size: 1.2em;
    font-weight : bold;
    border-radius : 5px;
  }
  button:hover{
      background : #52d89f;
  }
`;
export const FormRepositorio = styled.form`
  display : flex;
  flex-direction : row;
  width : 100%;
  padding : 0.2vw 0.4vh;
  small{
    font-size : 1em;
    color : gray;
    margin-top : 0.5vh;
  }
  strong{
    font-size : 18px;
    margin-top : 0.5vh;
  }
  ul{
    width:100%;
    padding-top:1.7vh;
    padding-left:0.7vw;
    list-style : none;
  }
  i{
    margin-top:25px;
  }
`;
export const ContainerRepositorio = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  img {
    height : 60px;
    width : 60px;
  }
`;

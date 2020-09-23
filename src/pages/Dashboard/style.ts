import styled, {css} from 'styled-components';
import {shade} from 'polished'

interface FormProps{
  hasError:boolean;
}

//template literals
export const Title = styled.h1`
font-size:48px;
color:#3A3A3A;
margin-top:80px;
max-width:450px;
line-height:56px;
`;

export const Form = styled.form<FormProps>`
margin-top:40px;
max-width:700px;
display:flex;

input{

flex:1;
height:70px;
border:0;
padding: 0 24px;  
background: #FFFFFF;
border-radius: 5px  0 0 5px; 
border:2px solid #fff;
${(props) => props.hasError && css `
  border-color:#c53030;
  border-right:0;

`}

}
button{
  height:70px;
  width:210px;
  background:#04D361;
  border-radius: 0  5px 5px 0;
  border:0;
  color:#FFFFFF;
  font-weight:bold;
  &:hover{
    background: ${shade(0.2,'#04D361')}
  }
}
`;
export const Repositories = styled.div`
  margin-top:120px;
  max-width:700px;
  display:flex;
  flex-direction:column;
  
  img{
    height:80px;
    border-radius:50%;
    margin-right:24px;
  }

 
  a{
    background:#FFFFFF;
    height:100px;
    width:100%;
    display:block;
    display:flex;
    align-items:center;
    padding:24px;
    text-decoration:none;
    color:#3D3D4D;
    transition: transform 0.3s;
   
    &+ a{
      margin-top:16px;
    }
   
  
    &:hover{
      box-shadow: 3px 10px 10px #3D3D4D;
      transform: translateY(-5px);
    }
  
  strong{

    font-size:24px;
  }
  p{ 
  margin-top:4px;
   font-size:18px;
   color: #A8A8B3;
  }
  svg{
    margin-left:auto;
    color:#A8A8B3;
    
  }
   }
`;
export const Error = styled.div`
   height:70px; 
   max-width:700px;
   background:#F8D7DA;
   display:flex;
   align-items:center;
   border-radius:5px;
   padding:14px;
  
`;
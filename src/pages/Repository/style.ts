import styled from 'styled-components';

export const Header = styled.header`

  display:flex;
  align-items:center;
  justify-content:space-between;

  a{
    display:flex;
    align-items:center;
    text-decoration:none;
    color:#a8a8b3;
    transition:color 0.2s;
    /*
    o '&' é ultilizado para se referir ao proprio elemento  
     */
    &:hover{
      color:#666;
    }

    svg{
      margin-right:4px;
    }
  }
`;

export const RepositoryInfo = styled.div`
  font-family:'Roboto';
 header{
   display:flex;
   margin-top:80px;
   align-items:center; 
   img{
     width:160px;
     height:150px;
     border-radius:50%;
     padding:14px;
   }
   div{
     display:flex;
     flex-direction:column;
     margin-left:13px;
     strong{
       font-size:36px;
     }
     p{
      font-size:20px; 
      color:#737380;
     }
   }
 }
   ul{
     list-style:none;
     display:flex;
     margin-top:9px;
     margin-left:18px;
     
    
    li{
      display:flex;
      flex-direction:column;
      p{
      color:#6C6C80;

      }
      & + li{
        margin-left:60px;
      }      
    }
   }

`;

export const Repositories = styled.div`
  margin-top:120px;
  
  display:flex;
  flex-direction:column;
  
 
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
import React,{useEffect, useState} from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import {FiChevronsLeft, FiChevronRight} from 'react-icons/fi'
import api from '../../services/api'

import {Header} from './style'
import {RepositoryInfo} from './style'
import {Repositories} from './style'



import logo from '../../assets/logo.svg'

interface Repository{
  full_name:string;
  description:string;
  stargazers_count:number;
  forks_count:number;
  open_issues_count:number;
  owner:{
    login:string;
    avatar_url:string;
  };
}
interface Issues{
  id:number;
  title:number;
  html_url:string;
  user:{
    login:string;
  }
}

interface RepositoryParams{
  repository:string;
}

const Repository: React.FC = () =>{

  const {params} = useRouteMatch<RepositoryParams>();
  const [repository,setRepository] = useState<Repository | null>(null);
  const [issues,setIssues] = useState<Issues[]>([]);

 useEffect(() =>{
   
    api.get(`repos/${params.repository}`).then(response =>{
       setRepository(response.data);
    })
    api.get(`repos/${params.repository}/issues`).then(response =>{
       setIssues(response.data);
    })

    //ou
  
    // async function load(){
    //   const [response,issues] = await Promise.all([
    //     api.get(`repos/${params.repository}`),
    //     api.get(`repos/${params.repository}/issues`)
    //   ])

    //   setRepository(response.data);
    //   console.log(response);
    //   console.log(issues);
    // }

    // load();

  },[params.repository])


  return(
    <>
      <Header>
        <img src={logo} alt="Github Explorer"/>
        <Link to="/">
        <FiChevronsLeft size={16} />
        Voltar
        </Link>
      </Header>
     

  
  {repository && (
/**
 * Se o repositorio nao for null exibir
 */
<RepositoryInfo>
<header>
  <img src={repository.owner.avatar_url} alt={repository.owner.avatar_url}/>
  <div>
    <strong>
      {params.repository}
    </strong>
      <p>{repository.description}</p>
  </div>
</header>
  <ul>
    <li>
  <strong>{repository.stargazers_count}</strong>
      <p>Stars</p>
    </li>
    <li>
      <strong>{repository.forks_count}</strong>
      <p>Forks</p>
    </li>
    <li>
  <strong>{repository.open_issues_count}</strong>
      <p>Issues abertas</p>
    </li>
  </ul>
</RepositoryInfo>

      )}

      <Repositories >
       {issues.map(issue =>( 

         <a href={issue.html_url} key={issue.id}>

            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
          <FiChevronRight size={20}/>
        </a>
       ))} 
      </Repositories>
    </>

  );
};
export default Repository;
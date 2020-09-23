import React,{useState,FormEvent,useEffect} from 'react'
import {FiChevronRight} from 'react-icons/fi';
import api from '../../services/api';
import {Link} from 'react-router-dom'

import logo from '../../assets/logo.svg'
import {Title} from './style'
import {Form} from './style'
import {Error} from './style'
import {Repositories} from './style'

interface Repository{
  full_name:string;
  description:string;
  owner:{
    login:string;
    avatar_url:string;
  };
}


const Dashboard: React.FC = () =>{
  const [newError,setError] = useState('');
  const [newRepo,setNewRepo] = useState('');
  const [repositories,setRepositories] = useState<Repository[]>(() =>{
    const storageRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if(storageRepositories){
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  useEffect(() =>{
    localStorage.setItem('@GithubExplorer:repositories',JSON.stringify(repositories));

  },[newRepo, repositories])

  async function handleAddRepository(event:FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault();
    
    if(!newRepo){
      setError('Digite o nome de um respositório');
      return;
    }
   try{

     const response = await api.get<Repository>(`repos/${newRepo}`);
     
     const repository = response.data;
     setError('');
     
     setRepositories([...repositories,repository]);
     setNewRepo('');
    }catch(err){
      setError('Repositorio nao encontrado.')
    } 
    
  }
  
  return(
    <>
     <img src={logo} alt="Github"/>
     <Title>Explore repositórios no Github</Title>
      {newError && <Error>{newError}</Error>}
    <Form hasError={!!newError} onSubmit={handleAddRepository}>
      <input 
      value={newRepo}
      onChange={(e) => setNewRepo(e.target.value)}
      placeholder="Digite o nome do repositorio"/>
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      
      {repositories.map(repository =>(
        <Link to={`/repository/${repository.full_name}`} key={repository.full_name}>
        <img src={repository.owner.avatar_url} alt="Avatar"/>
      <div> 
      <strong>{repository.full_name}</strong>
      <p>{repository.description ||'Sem descrição'}</p>
      </div>
        <FiChevronRight size={20}/>
      </Link>
        ))}
    </Repositories>
    </>
  );
};
export default Dashboard;
import { useFetch } from './hooks/useFetch';

type Repository = {
  full_name: string;
  description: string;
}

function App() {
  const { data: repositories, isFetching } = 
    useFetch<Repository[]>('https://api.github.com/users/MatheusEdnei/repos')
  
  return (
    <ul>
      { isFetching && <p>Carregando...</p>}
      {repositories?.map(repositories => {
        return (
          <li key={repositories.full_name}>
            <strong>{repositories.full_name}</strong>
            <p>{repositories.description}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default App

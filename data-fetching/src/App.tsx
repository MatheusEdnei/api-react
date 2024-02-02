import { useEffect, useState } from 'react'
import './App.css'

type Repository = {
  full_name: string;
  description: string;
}

function App() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/MatheusEdnei/repos')
      .then(reponse => reponse.json())
      .then(data => {
        setRepositories(data);
      });
  }, []);
  
  return (
    <ul>
      {repositories.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default App

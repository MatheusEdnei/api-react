import { useQuery } from "react-query";
import axios from "axios";

type Repository = {
  full_name: string;
  description: string;
}

function App() {

  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/MatheusEdnei/repos');

    return response.data;
  })
  
  return (
    <ul>
      { isFetching && <p>Carregando...</p>}
      {data?.map(data => {
        return (
          <li key={data.full_name}>
            <strong>{data.full_name}</strong>
            <p>{data.description}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default App

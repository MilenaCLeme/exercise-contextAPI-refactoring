import React, { useContext } from 'react';
import Context from '../context/Context';


function Posts() {
  const {  api, carregando } = useContext(Context);
  console.log(api)

  const returnApi = () => {
    return (
      <ul>
      { api.map(({ id, title }) => <li key={id}>{title}</li>)}
      </ul>
    );
  };


  return (
    <div>
      { carregando === false ? <h2>Loading...</h2> : returnApi() }
    </div>
  );
}

export default Posts;

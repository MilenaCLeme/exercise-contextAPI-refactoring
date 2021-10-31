import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { getPostsBySubreddit } from '../services/redditAPI'; 

function Provider({children}) {
  const options = ['reactjs','frontend'];
  const [value, setvalue] = useState('reactjs');
  const [alteração, setalteracao] = useState('reactjs')
  const [isFetching, setisFetching] = useState(false);
  const [lastUpdated, setlastUpdated] = useState()
  const [api, setapi] = useState([]);
  const [carregando, setcarregando] = useState(false)

  useEffect(() => {
    async function api() {
      const { data } = await getPostsBySubreddit(alteração)
      const newArray = []
      data.children.forEach(element => {
        newArray.push(element.data);
      });
      setapi(newArray);
      setisFetching(false);
      setlastUpdated(new Date());
      setcarregando(true);
    }
    api();
  } , [alteração])

  function alterarApiQuantoBotaoApertado() {
    setalteracao(value)
    setcarregando(false)
  }

  const ContextValue = {
    options,
    value,
    setvalue,
    isFetching,
    setisFetching,
    lastUpdated,
    alterarApiQuantoBotaoApertado,
    api,
    carregando,
  };

  return (
    <Context.Provider value={ ContextValue }>
      {children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default Provider;

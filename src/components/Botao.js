import React, { useContext } from 'react';
import Context from '../context/Context';

function Botao() {
  const { isFetching, setisFetching, lastUpdated, alterarApiQuantoBotaoApertado } = useContext(Context)
  return (
    <div>
      <span>{`Last updated at ${new Date(lastUpdated).toLocaleTimeString('en-US')}.`}</span>;
      <button
        type="button"
        onClick={(event) => { setisFetching(event); alterarApiQuantoBotaoApertado() } }
        disabled={isFetching}
      >
        Refresh
      </button>
    </div>
  )
}

export default Botao;

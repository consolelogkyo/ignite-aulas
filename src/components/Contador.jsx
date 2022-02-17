import { useState } from 'react'

export function Contador() {
  const [contador, setContador] = useState(1)

  function batata() {
    setContador(contador + 1)
  }

  return (
    <div>
      <h2>{contador}</h2>
      <button type="button" onClick={batata}>
        Adicionar
      </button>
    </div>
  )
}

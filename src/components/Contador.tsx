import { useState } from 'react'

export function Contador() {
  const [contador, setContador] = useState(999)

  function batata() {
    setContador(contador + 50444)
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

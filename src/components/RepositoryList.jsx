import { useEffect, useState } from 'react'
import '../styles/global.scss'
import '../styles/repositories.scss'
import { RepositoryItem } from './RepositoryItem'

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(reponse => reponse.json())
    .then(data => setRepositories(data))
  },[])

  console.log(repositories)
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}

      </ul>
    </section>
  )
}

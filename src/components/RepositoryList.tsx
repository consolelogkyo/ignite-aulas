import { useEffect, useState } from 'react'
import '../styles/global.scss'
import '../styles/repositories.scss'
import { RepositoryItem } from './RepositoryItem'

interface Repository {
name: string;
description: string;
html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(reponse => reponse.json())
      .then(data => setRepositories(data))
  }, [])

  // console.log(repositories)
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repos => {
          console.log(repos)
          return <RepositoryItem key={repos.name} repository={repos} />
        })}

      </ul>
    </section>
  )
}

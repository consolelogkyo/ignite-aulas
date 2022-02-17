import '../styles/global.scss'
import { RepositoryItem } from './RepositoryItem'

const repository = {
  name: 'unform',
  description: 'Forms in react',
  link: 'https://google.com.br',
}

export function RepositoryList(props) {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}

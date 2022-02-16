import './RepositoryList.styles.scss'

const defaultValue = {
  name: '',
  description: '',
  link: '',
}

export function RepositoryItem({repository = defaultValue}) {
  const {name, description, link} = repository
  return (
    <>
      <li className="repositoryList">
        <strong>{name ?? 'batata'}</strong>
        <p>{description}</p>

        <a href={link}>Acessar repositórios</a>
      </li>
    </>
  );
}
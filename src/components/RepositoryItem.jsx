export function RepositoryItem(props) {
  return (
    <li className="picaDura">
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar Repositório</a>
    </li>
  )
}

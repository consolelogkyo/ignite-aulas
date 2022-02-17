export function RepositoryItem(props) {
  return (
    <li className="picaDura">
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.link}>Acess Repository</a>
    </li>
  )
}

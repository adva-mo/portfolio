export default function AppCard({
  name,
  codingLanguages,
  info,
  githubLink,
  demo,
  tech,
}) {
  return (
    <div>
      <h5>name: {name}</h5>
      <p>coding Languages: {codingLanguages}</p>
      <p>technologies: {tech}</p>
      <p>info: {info}</p>
      <a href={githubLink}>githubLink</a>
      <a href={demo}>demo</a>
    </div>
  );
}

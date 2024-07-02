export function Skills() {
  const skills = ["PHP", "Laravel", "SQL", "Docker", "Kubernetes", "AWS", "React", "Typescript", "GraphQL", "NodeJS"];

  return (
    <div className="p-4 rounded-lg">
      <div className="mt-4 flex flex-wrap">
        {skills.map((skill, index) => (
          <span key={index} className="m-2 px-4 py-2 bg-primary text-white rounded-full">{skill}</span>
        ))}
      </div>
    </div>
  );
};

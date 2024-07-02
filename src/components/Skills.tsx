export function Skills() {
  const skills = ["PHP", "Laravel", "SQL", "Docker", "Kubernetes", "AWS", "React", "Typescript", "GraphQL", "NodeJS"];

  return (
    <div className="rounded-lg">
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <span key={index} className="shadow-2xl m-2 px-4 py-2 bg-primary text-white rounded-full"> <strong>{skill}</strong></span>
        ))}
      </div>
    </div>
  );
};

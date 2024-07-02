export function About() {
  return (
    <div className=" rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Educational Background</h2>
      <p>
        Bachelor in Information Systems (FACOM) from the Federal University of Mato Grosso do Sul (UFMS).
      </p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Experience</h2>
      <ul className="list-disc list-inside ml-4">
        <li><strong>Web Systems</strong> and Mobile Device Development</li>
        <li>Over 4 years in software development and architecture</li>
        <li>Participated in hackathons, developer conferences, and training sessions in partnership with SEBRAE-MS in Campo Grande, MS</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4 mb-2">Current Research</h2>
      <ul className="list-disc list-inside ml-4">
        <li>Software Quality, specifically in <strong>Code Smells</strong> and <strong>Community Smells</strong></li>
        <li>Software Engineering research on Community Smells, Software Ecosystems, and Software Engineering applied to Machine Learning</li>
      </ul>
      <p className="mt-4">
        Member of the Development Laboratory of FACOM (LEDES).
      </p>
    </div>
  );
};

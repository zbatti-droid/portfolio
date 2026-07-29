const skillGroups = [
  {
    category: 'Frontend',
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'API REST'],
  },
  {
    category: 'Données',
    items: ['PostgreSQL'],
  },
  {
    category: 'Blockchain',
    items: ['Solidity (bases)', 'Smart Contracts', 'Ethereum'],
  },
  {
    category: 'Fondamentaux',
    items: ['Langage C', 'Algorithmique', 'Git / GitHub'],
  },
];

function Skills() {
  return (
    <section id="competences" className="skills">
      <div className="section-header">
        <span className="section-eyebrow">Compétences</span>
        <h2 className="section-title">Ce que je maîtrise</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3 className="skill-group-title">{group.category}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li className="skill-item" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
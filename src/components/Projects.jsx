import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'DiploChain',
    period: '2025',
    description:
      "Plateforme décentralisée de délivrance et vérification de diplômes académiques. Trois interfaces (Admin, Étudiant, Employeur), enregistrement sur Ethereum via Smart Contract, et vérification instantanée par QR Code ou hash cryptographique.",
    stack: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'Solidity', 'Ethereum'],
    note: 'Projet de Fin d\'Études — Note obtenue : 16/20',
    github: 'https://github.com/zbatti-droid/DiploChain',
    demo: 'https://diploma-app-sigma.vercel.app',
  },
];

function Projects() {
  return (
    <section id="projets" className="projects">
      <div className="section-header">
        <span className="section-eyebrow">Archive</span>
        <h2 className="section-title">Projets</h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-record" key={project.title}>
            <div className="project-record-meta">
              <span className="project-record-period">{project.period}</span>
              <span className="project-record-line" />
            </div>

            <div className="project-record-body">
              <h3 className="project-record-title">{project.title}</h3>
              {project.note && (
                <p className="project-record-note">{project.note}</p>
              )}
              <p className="project-record-desc">{project.description}</p>

              <div className="project-record-stack">
                {project.stack.map((tech) => (
                  <span className="stack-tag" key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-record-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Code2 size={16} /> Code source
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={16} /> Démo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
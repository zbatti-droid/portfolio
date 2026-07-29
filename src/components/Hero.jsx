import { ShieldCheck } from 'lucide-react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-eyebrow">Développeur Full-Stack</span>

        <h1 className="hero-title">
          Zakaria Batti
        </h1>

        <p className="hero-subtitle">
          Je construis des systèmes qui prouvent ce qu'ils avancent —
          du code vérifiable, des données auditables, des interfaces
          qui ne laissent pas de place au doute.
        </p>

        <div className="hero-actions">
          <a href="#projets" className="btn-primary">Voir mes projets</a>
          <a href="#contact" className="btn-secondary">Me contacter</a>
        </div>
      </div>

      {/* البطاقة - العنصر المميز ديال التصميم */}
      <div className="hero-card">
        <div className="verify-card">
          <div className="verify-card-header">
            <ShieldCheck size={18} />
            <span>PROFIL VÉRIFIÉ</span>
          </div>

          <h3 className="verify-card-name">Zakaria Batti</h3>
          <p className="verify-card-role">React · Node.js · PostgreSQL</p>

          <div className="verify-card-row">
            <span className="verify-card-label">Formation</span>
            <span>Licence Informatique</span>
          </div>
          <div className="verify-card-row">
            <span className="verify-card-label">Projet phare</span>
            <span>DiploChain — 16/20</span>
          </div>

          <div className="verify-card-footer">
            <span className="verify-dot" />
            Disponible pour opportunités
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
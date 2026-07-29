import { Mail, Link2, Code2, MapPin } from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'battizakaria15@gmail.com',
    href: 'mailto:battizakaria15@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/zakaria-batti',
    href: 'https://linkedin.com/in/zakaria-batti',
    icon: Link2,
  },
  {
    label: 'GitHub',
    value: 'github.com/zbatti-droid',
    href: 'https://github.com/zbatti-droid',
    icon: Code2,
  },
];

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">Travaillons ensemble</h2>
        <p className="contact-intro">
          Ouvert aux opportunités freelance et aux postes de développeur junior.
        </p>
      </div>

      <div className="contact-grid">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-card" key={link.label}>
              <Icon size={20} />
              <div>
                <span className="contact-card-label">{link.label}</span>
                <span className="contact-card-value">{link.value}</span>
              </div>
            </a>
          );
        })}
      </div>

      <div className="contact-location">
        <MapPin size={16} />
        <span>Agadir, Sidi Bibi — Maroc</span>
      </div>
    </section>
  );
}

export default Contact;

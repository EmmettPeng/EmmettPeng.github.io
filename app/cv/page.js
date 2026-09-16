import Footer from '@/components/Footer';
import cv from '@/content/cv.json';

export const metadata = {
  title: 'CV & Experience',
  description: 'Education, research experience, skills, and honors of Xi Emmett Peng.',
};

const DatedList = ({items}) => <div className="dated-list">{items.map(item => <article key={`${item.date}-${item.title}`}>
  <time>{item.date}</time>
  <div>
    <h3>{item.title}</h3>
    <p className="muted">{item.place}</p>
    {item.detail && <p className="cv-detail">{item.detail}</p>}
    {item.bullets && <ul className="cv-bullets">{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
    {item.links && <p className="cv-entry-links">{item.links.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}</p>}
  </div>
</article>)}</div>;

export default function CV() {
  return <main className="page cv-page">
    <h1>CV &amp; Experience</h1>
    <section className="cv-intro">
      <p className="cv-lede">{cv.profile}</p>
      <p className="cv-file-link"><a href={cv.cvFile.href} target="_blank" rel="noopener noreferrer">{cv.cvFile.label}</a> <span>· {cv.cvFile.updated}</span></p>
    </section>
    <section><h2>Education</h2><DatedList items={cv.education}/></section>
    <section><h2>Research Experience</h2><DatedList items={cv.researchExperience}/></section>
    <section><h2>Honors &amp; Awards</h2><DatedList items={cv.awards}/></section>
    <section><h2>Skills &amp; Expertise</h2><div className="method-list">{cv.methods.map(method => <p key={method.title}><strong>{method.title}</strong><br/><span className="muted">{method.text}</span></p>)}</div></section>
    <Footer/>
  </main>;
}

import Footer from '@/components/Footer';
import cv from '@/content/cv.json';

export const metadata = {
  title: 'CV & Experience',
  description: 'Education, research experience, methods, and honors of Xi Emmett Peng.',
};

const DatedList = ({items}) => <div className="dated-list">{items.map(item => <article key={`${item.date}-${item.title}`}><time>{item.date}</time><div><h3>{item.title}</h3><p className="muted">{item.place}</p>{item.text && <p>{item.text}</p>}</div></article>)}</div>;

export default function CV() {
  return <main className="page">
    <h1>CV &amp; Experience</h1>
    <section className="bio"><h2>Profile</h2><p>{cv.profile}</p><p className="link-row">{cv.links.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}</p></section>
    <section><h2>Education</h2><DatedList items={cv.education}/></section>
    <section><h2>Research Experience</h2><DatedList items={cv.researchExperience}/></section>
    <section><h2>Methods &amp; Tools</h2><div className="method-list">{cv.methods.map(method => <p key={method.title}><strong>{method.title}</strong><br/><span className="muted">{method.text}</span></p>)}</div></section>
    <section><h2>Honors &amp; Awards</h2><DatedList items={cv.awards}/></section>
    <section><h2>Research Output</h2><p>{cv.researchOutput}</p><p><a href="/publications/">View the complete publication list</a></p></section>
    <Footer/>
  </main>;
}

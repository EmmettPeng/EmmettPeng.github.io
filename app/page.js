import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import UpdatesList from '@/components/UpdatesList';
import { getAllNotes } from '@/lib/content';
import home from '@/content/home.json';
import styles from './HomeAvatar.module.css';

export default function Home() {
  const notes = getAllNotes();
  return <main className="page">
    <div className="home-intro">
      <Image className={styles.avatar} src={home.avatar} alt={home.name} width={220} height={275} priority />
      <div className="identity-copy"><h1>{home.name} <span>{home.chineseName} <strong className="name-pinyin">{home.pinyinName}</strong></span></h1><p className="muted">{home.tagline}</p><p className="link-row">{home.links.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}</p></div>
      <section className="bio bio-essay">{home.bioEssay.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="current-work"><p>{home.currentWork}</p></div></section>
    </div>
    <section><h2>Updates</h2><UpdatesList updates={home.updates} /></section>
    <section><h2>Selected Publications</h2><ol className="publication-list">{home.selectedPublications.map(item => <li key={item.title}><p className="meta">{item.venue}</p><h3>{item.title}</h3><p><strong>Xi Peng</strong>{item.authors.slice(7)}</p><p><a href={item.href}>Paper</a></p></li>)}</ol><p><Link href="/publications/">Full publication list</Link></p></section>
    <section><h2>Notes</h2><div className="note-list">{notes.map(note => <Link key={note.slug} href={`/notes/${note.slug}/`}><time>{note.date}</time><span>{note.title}</span></Link>)}</div><p><Link href="/notes/">All notes</Link></p></section>
    <section><h2>CV &amp; Experience</h2><div className="dated-list">{home.experience.map(item => <article key={`${item.date}-${item.title}`}><time>{item.date}</time><div><h3>{item.title}</h3><p>{item.place}</p></div></article>)}</div><p><Link href="/cv/">Full CV and experience</Link></p></section>
    <section><h2>Links</h2><p>{home.externalLinks.map((link, index) => <span key={link.label}><a href={link.href}>{link.label}</a>{index < home.externalLinks.length - 1 && <br/>}</span>)}</p></section>
    <Footer/>
  </main>;
}

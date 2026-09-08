import Link from 'next/link';import Footer from '@/components/Footer';import {getAllNotes} from '@/lib/content';
export const metadata={title:'Notes'};
export default function Notes(){const notes=getAllNotes();return <main className="page"><h1>Notes</h1><p className="intro">Research stories, methods and notes.</p><div className="notes-index">{notes.map(note=><article key={note.slug}><time>{note.date}</time><div><h2><Link href={`/notes/${note.slug}/`}>{note.title}</Link></h2><p>{note.excerpt}…</p></div></article>)}</div><Footer/></main>}

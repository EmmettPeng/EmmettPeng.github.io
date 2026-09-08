import Link from 'next/link';import Footer from '@/components/Footer';import {getAllNotes,getNote} from '@/lib/content';
export function generateStaticParams(){return getAllNotes().map(({slug})=>({slug}))}
export async function generateMetadata({params}){const {slug}=await params;const note=getNote(slug);return {title:note.title}}
export default async function Note({params}){const {slug}=await params;const note=getNote(slug);return <main className="page article-page"><article><header><h1>{note.title}</h1><p className="meta">{note.date}{note.tags.length?` / ${note.tags.join(', ')}`:''}</p></header><div className="markdown" dangerouslySetInnerHTML={{__html:note.html}}/></article><p><Link href="/notes/">Back to notes</Link></p><Footer/></main>}

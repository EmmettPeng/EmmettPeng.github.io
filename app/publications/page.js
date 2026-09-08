import Footer from '@/components/Footer';import {getPage} from '@/lib/content';
export const metadata={title:'Publications'};
export default function Publications(){const page=getPage('publications');return <main className="page content-page"><h1>{page.title}</h1><div className="markdown publications" dangerouslySetInnerHTML={{__html:page.html}}/><Footer/></main>}

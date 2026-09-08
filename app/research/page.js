import Footer from '@/components/Footer';import {getPage} from '@/lib/content';
export const metadata={title:'Research'};
export default function Research(){const page=getPage('research');return <main className="page content-page"><h1>{page.title}</h1><div className="markdown" dangerouslySetInnerHTML={{__html:page.html}}/><Footer/></main>}

import Link from 'next/link';
const links = [['Research','/research/'],['Publications','/publications/'],['Notes','/notes/'],['CV & Experience','/cv/']];
export default function Header(){return <header className="site-header"><div className="header-inner"><Link className="site-name" href="/">Xi Emmett Peng</Link><nav aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav></div></header>}

import './globals.css';
import Header from '@/components/Header';
export const metadata={metadataBase:new URL('https://www.emmettnotebook.com'),title:{default:'Xi Emmett Peng',template:'%s | Xi Emmett Peng'},description:'Bioinformatics researcher working on microbial ecology, metagenomics and network science.'};
export default function RootLayout({children}){return <html lang="en"><body><Header />{children}</body></html>}

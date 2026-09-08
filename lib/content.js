import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const notesDirectory = path.join(process.cwd(), 'content', 'notes');
const pagesDirectory = path.join(process.cwd(), 'content', 'pages');
const markdown = new MarkdownIt({ html: true, linkify: true, typographer: false });

const normalizeTags = (tags) => !tags ? [] : Array.isArray(tags) ? tags : [tags];

export function getAllNotes() {
  return fs.readdirSync(notesDirectory).filter((file) => file.endsWith('.md')).map((file) => {
    const raw = fs.readFileSync(path.join(notesDirectory, file), 'utf8');
    const { data, content } = matter(raw);
    const slug = data.slug || file.replace(/\.md$/, '');
    const excerpt = content.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, '').replace(/[#*_`\[\]()]/g, '').replace(/\s+/g, ' ').trim().slice(0, 180);
    return { slug, title: data.title || slug, date: new Date(data.date).toISOString().slice(0, 10), tags: normalizeTags(data.tags), excerpt };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

export function getNote(slug) {
  const file = fs.readdirSync(notesDirectory).find((entry) => {
    const raw = fs.readFileSync(path.join(notesDirectory, entry), 'utf8');
    const { data } = matter(raw);
    return (data.slug || entry.replace(/\.md$/, '')) === slug;
  });
  if (!file) throw new Error(`Unknown note: ${slug}`);
  const raw = fs.readFileSync(path.join(notesDirectory, file), 'utf8');
  const { data, content } = matter(raw);
  return { slug, title: data.title || slug, date: new Date(data.date).toISOString().slice(0, 10), tags: normalizeTags(data.tags), html: markdown.render(content.replace('<!-- more -->', '')) };
}

export function getPage(name) {
  const raw = fs.readFileSync(path.join(pagesDirectory, `${name}.md`), 'utf8');
  const { data, content } = matter(raw);
  return { title: data.title || name, html: markdown.render(content) };
}

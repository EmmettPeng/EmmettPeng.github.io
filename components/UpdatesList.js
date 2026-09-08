'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './UpdatesList.module.css';

const VISIBLE_UPDATES = 5;

export default function UpdatesList({ updates }) {
  const listRef = useRef(null);
  const [visibleHeight, setVisibleHeight] = useState(null);
  const hasMore = updates.length > VISIBLE_UPDATES;

  useEffect(() => {
    const list = listRef.current;
    if (!list || !hasMore) return;

    const measure = () => {
      const items = Array.from(list.children).slice(0, VISIBLE_UPDATES);
      if (!items.length) return;
      const listTop = list.getBoundingClientRect().top;
      const lastItemBottom = items.at(-1).getBoundingClientRect().bottom;
      setVisibleHeight(Math.ceil(lastItemBottom - listTop));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    Array.from(list.children).slice(0, VISIBLE_UPDATES).forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, [hasMore, updates]);

  return (
    <div
      ref={listRef}
      className={`dated-list update-list${hasMore ? ` ${styles.scrollable}` : ''}`}
      style={visibleHeight ? { '--updates-height': `${visibleHeight}px` } : undefined}
      tabIndex={hasMore ? 0 : undefined}
      role={hasMore ? 'region' : undefined}
      aria-label={hasMore ? `Updates. Showing five of ${updates.length}; scroll for more.` : undefined}
    >
      {updates.map(item => (
        <article key={`${item.date}-${item.title}`}>
          <time>{item.date}</time>
          <div>
            <h3>{item.href ? <Link href={item.href}>{item.title}</Link> : item.title}</h3>
            <p>{item.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

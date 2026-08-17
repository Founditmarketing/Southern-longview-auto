import { useEffect } from 'react';

const SITE_URL = 'https://www.southernlongviewauto.com';

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function PageSEO({ title, description, path, noIndex = false }: PageSEOProps) {
  useEffect(() => {
    document.title = title;

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', `${SITE_URL}${path}`);
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'robots', noIndex ? 'noindex,nofollow' : 'index,follow');

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${path}`);
  }, [title, description, path, noIndex]);

  return null;
}

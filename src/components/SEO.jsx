import { useEffect } from 'react';

export default function SEO() {
  useEffect(() => {
    document.title = 'RetroVision Studio — Cinematic Video Editing & Post-Production';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'RetroVision Studio: cinematic editing, color grading, motion graphics, and sound design. Hire a bold, adventurous post-production team.';
      document.head.appendChild(m);
    } else {
      metaDesc.setAttribute('content', 'RetroVision Studio: cinematic editing, color grading, motion graphics, and sound design. Hire a bold, adventurous post-production team.');
    }

    const keywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    keywords.setAttribute('name', 'keywords');
    keywords.setAttribute('content', 'video editing team, cinematic editing, color grading, motion graphics, post production studio');
    if (!keywords.parentElement) document.head.appendChild(keywords);
  }, []);
  return null;
}

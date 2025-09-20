// public/src/components/pages/HomeOnePager.js
// public/src/components/pages/HomeOnePager.js
import React, { useEffect, useRef } from 'react';
import Inicio from './Inicio';
import Servicios from './Servicios';
import Metodologia from './Metodologia';
import Productos from './Productos';
import Articles from './Articles';
import Partners from './Partners';
import Contacto from './Contacto';
import { useLocation } from 'react-router-dom';

export default function HomeOnePager() {
  const refs = useRef({});

  // 1. Scroll a la sección correcta cuando cambia el hash
  const { hash } = useLocation();
  useEffect(() => {
    const id = (hash || '#home').replace('#','');
    const el = refs.current[id];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  // 2. 👉 Aquí va el código del punto 5 (scrollspy)
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.onepager .snap'));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const id = visible.target.id;
          if (window.location.hash !== `#${id}`) {
            window.history.replaceState(null, '', `#${id}`);
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0.25, 0.5, 0.75] }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // 3. Render de las secciones
  return (
    <div className="onepager">
      <section id="home" ref={el => (refs.current['home'] = el)} className="snap">
        <Inicio />
      </section>
      <section id="servicios" ref={el => (refs.current['servicios'] = el)} className="snap">
        <Servicios />
      </section>
      <section id="metodologia" ref={el => (refs.current['metodologia'] = el)} className="snap">
        <Metodologia />
      </section>
      <section id="productos" ref={el => (refs.current['productos'] = el)} className="snap">
        <Productos />
      </section>
      <section id="articles" ref={el => (refs.current['articles'] = el)} className="snap">
        <Articles />
      </section>
      <section id="partners" ref={el => (refs.current['partners'] = el)} className="snap">
        <Partners />
      </section>
      <section id="contacto" ref={el => (refs.current['contacto'] = el)} className="snap">
        <Contacto />
      </section>
    </div>
  );
}

# 🔥 MetalCoder Portfolio - Fabio Zagaria

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

> **Portfolio moderno e interattivo con estetica cyber/hacker che rispecchia il brand MetalCoder**

Un portfolio sviluppato con tecnologie web moderne, caratterizzato da animazioni fluide, effetti cyber e un design accattivante che cattura l'attenzione dal primo impatto.

## 🚀 Demo Live

- **[Visualizza Portfolio](https://metalcoder-portfolio.netlify.app)** *(sostituisci con il tuo URL)*
- **[Repository GitHub](https://github.com/JavaMetalCoder/PortfolioFZ)**

## ✨ Caratteristiche Principali

### 🎨 Design & UX
- **Tema Cyber/Metal**: Palette nero e verde acido che rispecchia il logo
- **Animazioni Fluide**: Micro-interazioni e transizioni smooth per un'esperienza premium
- **Responsive Design**: Perfettamente ottimizzato per desktop, tablet e mobile
- **Loading Screen**: Schermata di caricamento con effetto progress bar
- **Effetti Glitch**: Animazioni glitch per il testo principale

### 🛠️ Funzionalità Tecniche
- **Scroll Animations**: Elementi che si animano durante lo scroll
- **Typing Effect**: Effetto macchina da scrivere per il testo dinamico
- **Terminal Window**: Simulazione di terminale con skill bars animate
- **Counter Animation**: Contatori animati per le statistiche
- **Form Validation**: Validazione real-time del form di contatto
- **Smooth Scrolling**: Navigazione fluida tra le sezioni

### 🎯 Sezioni
1. **Hero**: Presentazione principale con terminal simulato
2. **About**: Chi sono, stack tecnologico e statistiche
3. **Projects**: Showcase dei progetti con overlay interattivi
4. **Services**: Servizi offerti con card animate
5. **Contact**: Form di contatto con validazione e social links

## 🏗️ Struttura del Progetto

```
portfolio-metalcoder/
│
├── index.html          # Struttura HTML5 semantica
├── style.css           # Stili CSS3 con variabili e animazioni
├── script.js           # JavaScript ES6+ per interazioni
├── logo.png            # Logo MetalCoder
├── README.md           # Questo file
├── .gitignore          # File Git ignore
└── assets/             # (Opzionale) Cartella per risorse aggiuntive
    ├── images/
    ├── icons/
    └── fonts/
```

## 🛠️ Tecnologie Utilizzate

### Frontend
- **HTML5**: Markup semantico e accessibile
- **CSS3**: 
  - Custom Properties (CSS Variables)
  - Flexbox & CSS Grid
  - Animazioni e transizioni
  - Media queries per responsive design
- **JavaScript ES6+**:
  - Classes e moduli
  - Intersection Observer API
  - Event Listeners avanzati
  - Animazioni performanti con RequestAnimationFrame

### Librerie Esterne
- **[Font Awesome 6.4.0](https://fontawesome.com/)**: Icone vettoriali
- **[Google Fonts](https://fonts.google.com/)**: Typography (Orbitron + Rajdhani)
- **[Formspree](https://formspree.io/)**: Gestione form di contatto

### Tools & Performance
- **CSS Grid & Flexbox**: Layout moderni e responsive
- **Intersection Observer**: Animazioni ottimizzate per performance
- **CSS Transform & Transitions**: Animazioni hardware-accelerated
- **Throttle & Debounce**: Ottimizzazione eventi scroll

## 🚀 Installazione e Utilizzo

### Quick Start

1. **Clona il repository**
   ```bash
   git clone https://github.com/JavaMetalCoder/PortfolioFZ.git
   cd PortfolioFZ
   ```

2. **Apri nel browser**
   ```bash
   # Metodo 1: Apri direttamente index.html
   open index.html
   
   # Metodo 2: Server locale (consigliato)
   python -m http.server 8000
   # Oppure
   npx serve .
   ```

<<<<<<< HEAD
## 🎨 Futuri Aggiornamenti 

* **Upgrade**: il portfolio stesso sarà aggiornato completamente. Per il frontend sarà utilizzato React.js e il backend node.js ad esempio
=======
3. **Vai su** `http://localhost:8000`

### Personalizzazione
>>>>>>> 1cbdf7c (feat: all)

#### 🎨 Colori e Tema
Modifica le CSS Variables in `style.css`:
```css
:root {
    --primary-green: #00ff41;     /* Verde primario */
    --dark-green: #00cc33;        /* Verde scuro */
    --bright-green: #39ff14;      /* Verde brillante */
    --bg-black: #0d0d0d;         /* Sfondo nero */
    /* ... altre variabili */
}
```

#### 📝 Contenuti
1. **Dati personali**: Modifica le informazioni in `index.html`
2. **Progetti**: Aggiorna la sezione `#projects` con i tuoi progetti
3. **Skills**: Modifica le percentuali delle skill bars
4. **Contatti**: Aggiorna email e social links

#### 🖼️ Logo e Immagini
- Sostituisci `logo.png` con il tuo logo
- Mantieni dimensioni quadrate per il logo (es. 200x200px)
- Formato consigliato: PNG con sfondo trasparente

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px (Layout a 2 colonne)
- **Tablet**: 768px - 1024px (Layout adattivo)
- **Mobile**: < 768px (Layout a colonna singola + menu hamburger)

## ⚡ Performance

### Ottimizzazioni Implementate
- **CSS**: Uso di `transform` e `opacity` per animazioni hardware-accelerated
- **JavaScript**: Throttling degli eventi scroll e resize
- **Immagini**: Lazy loading e formati ottimizzati
- **Fonts**: Preconnect a Google Fonts per caricamento veloce

### Metriche Target
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🎮 Easter Eggs & Features Nascoste

### Scorciatoie da Tastiera
- **Ctrl + Shift + M**: Attiva l'effetto Matrix Rain
- **Ctrl + Shift + D**: Mostra info di debug nella console

### Console Developer
Apri la console per vedere:
- ASCII Art del logo MetalCoder
- Informazioni di debug e performance
- Messaggi motivazionali per sviluppatori

## 🔧 Configurazione Avanzata

### Form di Contatto (Formspree)
1. Registrati su [Formspree.io](https://formspree.io/)
2. Crea un nuovo form
3. Sostituisci l'action nel form HTML:
   ```html
   <form action="https://formspree.io/f/TUO_FORM_ID" method="POST">
   ```

### Analytics (Opzionale)
Aggiungi Google Analytics o altri strumenti:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Service Worker (PWA)
Per rendere il sito una Progressive Web App, aggiungi:
1. `manifest.json` per metadati app
2. `sw.js` per funzionalità offline
3. Icone per diverse dimensioni

## 🐛 Debugging & Troubleshooting

### Problemi Comuni

**Animazioni non funzionano**
- Verifica che JavaScript sia abilitato
- Controlla la console per errori
- Assicurati che `script.js` sia caricato correttamente

**Layout non responsive**
- Controlla il viewport meta tag in `<head>`
- Verifica i media queries in CSS
- Testa su dispositivi reali, non solo dev tools

**Form di contatto non funziona**
- Verifica l'URL di Formspree
- Controlla che tutti i campi abbiano attributo `name`
- Testa la validazione JavaScript

### Debug Mode
Aggiungi `?debug=true` all'URL per attivare log aggiuntivi.

## 🤝 Contribuire

### Come Contribuire
1. Fork del repository
2. Crea un branch per la feature (`git checkout -b feature/nuova-funzionalita`)
3. Commit delle modifiche (`git commit -am 'Aggiunge nuova funzionalità'`)
4. Push del branch (`git push origin feature/nuova-funzionalita`)
5. Crea una Pull Request

### Code Style
- **Indentazione**: 4 spazi
- **Naming**: camelCase per JavaScript, kebab-case per CSS
- **Commenti**: Documenta funzioni complesse
- **Performance**: Evita layout thrashing, usa transform per animazioni

## 📄 Licenza

Questo progetto è rilasciato sotto la licenza **MIT**. Vedi il file `LICENSE` per i dettagli.

```
MIT License

Copyright (c) 2025 Fabio Zagaria (MetalCoder)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## 📞 Contatti

**Fabio Zagaria (MetalCoder)**

- 📧 **Email**: [zagariafabio1999@gmail.com](mailto:zagariafabio1999@gmail.com)
- 🐙 **GitHub**: [@JavaMetalCoder](https://github.com/JavaMetalCoder)
- 💼 **LinkedIn**: [/in/metalcoder](https://linkedin.com/in/metalcoder)
- 🐦 **Twitter**: [@_zaki44_](https://x.com/_zaki44_)
- 📘 **Facebook**: [MetalCoder](https://www.facebook.com/share/169QNWueXV/)

---

<<<<<<< HEAD
© 2025 Fabio Zagaria aka MetalCoder. Tutti i diritti riservati. 
=======
## 🏆 Achievements

- ✅ **100% Responsive Design**
- ✅ **Accessibilità WCAG 2.1**
- ✅ **Performance Score > 90**
- ✅ **Cross-browser Compatibility**
- ✅ **Modern CSS & JavaScript**
- ✅ **SEO Optimized**

---

### 💡 Prossimi Sviluppi

- [ ] **Dark/Light Mode Toggle**
- [ ] **Internazionalizzazione (i18n)**
- [ ] **Blog Section con CMS**
- [ ] **3D Elements con Three.js**
- [ ] **Advanced Animations con GSAP**
- [ ] **PWA con Offline Support**

---

**Made with 🔥 by MetalCoder | Built to inspire and impress**

> *"Il codice è poesia, il design è arte, insieme creano magia."* - MetalCoder
>>>>>>> 1cbdf7c (feat: all)

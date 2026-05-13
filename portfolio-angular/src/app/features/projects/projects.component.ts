import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Avvocà - Studio Legale',
      icon: 'fas fa-globe',
      description: 'Sito Web REALE per un avvocato esperto.',
      problem: 'Creare una presenza online professionale per uno studio legale.',
      solution: 'Sviluppo di un sito statico performante e accessibile.',
      technologies: ['HTML', 'CSS', 'JS'],
      learning: 'Gestione del cliente, UI/UX per professionisti, responsive design.',
      status: 'Completato',
      liveLink: 'https://www.avvoca.net/',
      githubLink: ''
    },
    {
      title: 'Fakeflix',
      icon: 'fas fa-film',
      description: 'Clone dell\'interfaccia di Netflix sviluppato come progetto pratico. Un esercizio completo di responsive design e DOM manipulation.',
      problem: 'Replicare una UI complessa senza framework.',
      solution: 'Utilizzo avanzato di Flexbox, Grid e JavaScript puro.',
      technologies: ['HTML', 'CSS', 'JS'],
      learning: 'Gestione dello stato in Vanilla JS, layout complessi, organizzazione del CSS.',
      status: 'Esercizio didattico',
      liveLink: '',
      githubLink: 'https://github.com/JavaMetalCoder/Fakeflix'
    },
    {
      title: 'LabForWeb',
      icon: 'fas fa-code',
      description: 'Repository contenente gli esercizi e i progetti realizzati durante il percorso di formazione LabForWeb.',
      problem: 'Raccogliere e tracciare i progressi formativi.',
      solution: 'Organizzazione in cartelle tematiche per modulo.',
      technologies: ['HTML', 'CSS', 'JS', 'Angular', 'Bootstrap', 'MySQL'],
      learning: 'Costanza, versioning con Git, evoluzione del codice.',
      status: 'In sviluppo',
      liveLink: '',
      githubLink: 'https://github.com/JavaMetalCoder/LABFORWEB'
    },
    {
      title: 'Gestionale Spese',
      icon: 'fas fa-wallet',
      description: 'Applicazione per gestire e monitorare le spese in modo semplice e ordinato.',
      problem: 'Tenere sotto controllo entrate, uscite e movimenti economici senza perdere il quadro generale.',
      solution: 'Realizzazione di un gestionale dedicato alla registrazione e consultazione delle spese.',
      technologies: ['Angular', 'Bootstrap'],
      learning: 'Organizzazione dei dati, gestione delle operazioni CRUD e logica applicativa orientata all\'utente.',
      status: 'In sviluppo',
      liveLink: '',
      githubLink: 'https://github.com/fabiozagaria/gestionale-spese'
    }
  ];
}

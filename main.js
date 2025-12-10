// Basic JS for navigation, translations and form handling

const translations = {
  en: {
    metaTitle: 'Thalem ™ Tools for Strength Athletes & Armwrestlers',
    navHome: 'Home',
    navAbout: 'About',
    navRoadmap: 'Roadmap',
    navApp: 'Thalem Armwrestling',
    navContact: 'Contact',
    navPrivacy: 'Privacy',
    heroTitle: 'Thalem ™ Tools for Strength Athletes & Armwrestlers',
    heroDescription: "I'm building Thalem because strength athletes deserve proper tools. If you love training and want something built by someone who actually trains too, you're in the right place.",
    ctaApp: 'Learn About My App',
    ctaContact: 'Join Early Testers',
    whatTitle: 'What is Thalem?',
    whatParagraph1: 'Thalem is my personal project. I want to help armwrestlers and other strength athletes track their training in a serious, structured way. Just proper logging and progress tracking.',
    whatParagraph2: "My goal is to help grow strength sports by making training more organised and accessible, especially in a sport like armwrestling that doesn't have many good tools yet.",
    featuresTitle: 'Thalem Armwrestling App Features',
    cardProgramTitle: 'Program Builder',
    cardProgramDesc: 'Create and customise armwrestling specific training programmes with ease.',
    cardLogsTitle: 'Workout & PR Logs',
    cardLogsDesc: 'Track reps, weights and personal records over time to monitor progress.',
    cardSparTitle: 'Table Sparring Logs',
    cardSparDesc: 'Record sparring sessions including opponents, rounds and results.',
    cardOppTitle: 'Opponent Management',
    cardOppDesc: 'Keep a list of opponents, track matches and analyse how you stack up.',
    cardStatsTitle: 'Stats & History',
    cardStatsDesc: 'Visualise your progress with charts and detailed historical data.',
    cardCosmeticTitle: 'Cosmetics Themes',
    cardCosmeticDesc: 'Personalise your app with sleek themes from the in-app shop.',
    pricingTitle: 'Pricing',
    pricingParagraph: "I want to keep Thalem as affordable as possible. I'm just one person building this, and I'd rather have more athletes using it than charge a big subscription fee since the whole point of this project is to grow the sport.",
    priceFreeTitle: 'Free',
    priceFreeValue: '€0',
    priceFreeDesc: 'Access to all core logging features supported by ads (planned).',
    priceFullTitle: 'Full',
    priceFullValue: '€3',
    priceFullDesc: 'One-time purchase with no ads and full feature access.',
    priceCosmeticTitle: 'Cosmetics',
    priceCosmeticValue: '€0.50+',
    priceCosmeticDesc: 'Optional themes and cosmetics to support my work on Thalem.',
    languagesTitle: 'Languages',
    languagesParagraph: 'Thalem Armwrestling will launch in English first. After release I plan to add more languages like Greek, Russian and Hindi so more athletes can use the app in their own language.',
    comingTitle: 'Coming Soon',
    comingParagraph1: 'Right now the app is in private testing while I polish features, fix bugs and make sure everything feels solid.',
    comingParagraph2: 'If you want to be one of the first people to try Thalem Armwrestling and give feedback, you can join the early testers programme.',
    comingButton: 'Join Early Testers',
    footerText: '&copy; 2025 Thalem. All rights reserved.'
  },
  gr: {
    metaTitle: 'Thalem ™ Εργαλεία για Αθλητές Δύναμης & Πάλη Χεριού',
    navHome: 'Αρχική',
    navAbout: 'Σχετικά',
    navRoadmap: 'Οδικός Χάρτης',
    navApp: 'Thalem Armwrestling',
    navContact: 'Επικοινωνία',
    navPrivacy: 'Απόρρητο',
    heroTitle: 'Thalem ™ Εργαλεία για Αθλητές Δύναμης & Πάλη Χεριού',
    heroDescription: 'Δημιουργώ το Thalem γιατί οι αθλητές δύναμης αξίζουν σωστά εργαλεία. Αν αγαπάς την προπόνηση και θέλεις κάτι φτιαγμένο από κάποιον που προπονείται κι ο ίδιος, είσαι στο σωστό μέρος.',
    ctaApp: 'Μάθε για την εφαρμογή μου',
    ctaContact: 'Γίνε πρώτος δοκιμαστής',
    whatTitle: 'Τι είναι το Thalem;',
    whatParagraph1: 'Το Thalem είναι προσωπικό μου project. Θέλω να βοηθήσω παλαιστές χεριού και άλλους αθλητές δύναμης να καταγράφουν την προπόνησή τους με σοβαρότητα και δομή. Απλό logging και παρακολούθηση προόδου.',
    whatParagraph2: 'Στόχος μου είναι να αναπτυχθούν τα αθλήματα δύναμης κάνοντας την προπόνηση πιο οργανωμένη και προσιτή, ειδικά σε ένα άθλημα όπως η πάλη χεριού που δεν έχει ακόμη πολλά καλά εργαλεία.',
    featuresTitle: 'Δυνατότητες της εφαρμογής Thalem Armwrestling',
    cardProgramTitle: 'Δημιουργός Προγραμμάτων',
    cardProgramDesc: 'Δημιούργησε και προσαρμόσε προγράμματα ειδικά για πάλη χεριού με ευκολία.',
    cardLogsTitle: 'Καταγραφές Προπονήσεων & Ρεκόρ',
    cardLogsDesc: 'Καταγράφεις επαναλήψεις, βάρη και προσωπικά ρεκόρ για να βλέπεις πρόοδο.',
    cardSparTitle: 'Καταγραφές Σπάρρινγκ',
    cardSparDesc: 'Καταγράφεις προπονήσεις στο τραπέζι με αντιπάλους, γύρους και αποτελέσματα.',
    cardOppTitle: 'Διαχείριση Αντιπάλων',
    cardOppDesc: 'Κράτα λίστα αντιπάλων, παρακολούθησε ματς και ανέλυσε πώς συγκρίνεσαι.',
    cardStatsTitle: 'Στατιστικά & Ιστορικό',
    cardStatsDesc: 'Οπτικοποίησε την πρόοδό σου με γραφήματα και λεπτομερή ιστορικά δεδομένα.',
    cardCosmeticTitle: 'Θέματα Εμφάνισης',
    cardCosmeticDesc: 'Προσαρμόζεις την εφαρμογή με κομψά θέματα από το κατάστημα.',
    pricingTitle: 'Τιμολόγηση',
    pricingParagraph: 'Θέλω να κρατήσω το Thalem όσο πιο προσιτό γίνεται. Είμαι μόνος μου σε αυτό το project και προτιμώ να έχω περισσότερους αθλητές παρά να χρεώνω υψηλή συνδρομή, αφού ο στόχος είναι να μεγαλώσουμε το άθλημα.',
    priceFreeTitle: 'Δωρεάν',
    priceFreeValue: '€0',
    priceFreeDesc: 'Πρόσβαση σε όλες τις βασικές λειτουργίες καταγραφής με υποστηριζόμενες διαφημίσεις (σε σχέδιο).',
    priceFullTitle: 'Πλήρης',
    priceFullValue: '€3',
    priceFullDesc: 'Εφάπαξ αγορά χωρίς διαφημίσεις και πλήρης πρόσβαση.',
    priceCosmeticTitle: 'Κοσμητικά',
    priceCosmeticValue: '€0,50+',
    priceCosmeticDesc: 'Προαιρετικά θέματα και κοσμητικά για να στηρίξεις τη δουλειά μου στο Thalem.',
    languagesTitle: 'Γλώσσες',
    languagesParagraph: 'Η εφαρμογή Thalem Armwrestling θα ξεκινήσει στα αγγλικά πρώτα. Μετά την έκδοση σχεδιάζω να προσθέσω περισσότερες γλώσσες όπως τα ελληνικά, ρωσικά και χίντι για να μπορούν περισσότεροι αθλητές να τη χρησιμοποιούν στην δική τους γλώσσα.',
    comingTitle: 'Σύντομα',
    comingParagraph1: 'Αυτή τη στιγμή η εφαρμογή δοκιμάζεται ιδιωτικά ενώ τελειοποιώ λειτουργίες, διορθώνω σφάλματα και φροντίζω να είναι στιβαρή.',
    comingParagraph2: 'Αν θέλεις να είσαι από τους πρώτους που θα δοκιμάσουν το Thalem Armwrestling και θα δώσουν feedback, μπες στο πρόγραμμα πρώιμων δοκιμαστών.',
    comingButton: 'Γίνε πρώτος δοκιμαστής',
    footerText: '© 2025 Thalem. Όλα τα δικαιώματα διατηρούνται.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  // Toggle mobile menu
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Simple form submission handler for contact page
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      if (successMessage) {
        successMessage.style.display = 'block';
      }
    });
  }

  const i18nElements = document.querySelectorAll('[data-i18n-key]');
  const langButtons = document.querySelectorAll('.lang-btn');
  const savedLang = window.localStorage ? window.localStorage.getItem('thalemLang') : null;
  const resolveLang = (lang) => (lang === 'gr' ? 'gr' : 'en');

  const setLanguage = (lang) => {
    const dictionary = translations[lang] || translations.en;
    i18nElements.forEach((el) => {
      const key = el.dataset.i18nKey;
      const value = dictionary[key];
      if (!value) {
        return;
      }
      if (el.tagName === 'TITLE') {
        el.textContent = value;
      } else {
        el.textContent = value;
      }
    });

    document.documentElement.lang = lang === 'gr' ? 'el' : 'en';
    document.title = dictionary.metaTitle || document.title;
    langButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    if (window.localStorage) {
      window.localStorage.setItem('thalemLang', lang);
    }
  };

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      setLanguage(resolveLang(btn.dataset.lang));
    });
  });

  setLanguage(resolveLang(savedLang));
});

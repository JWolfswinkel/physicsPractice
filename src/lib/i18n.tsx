'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Supported languages
export type Language = 'en' | 'nl';

// Localised text structure - can be a simple string (English only) or multilingual
export type LocalisedText = string | { en: string; nl: string };

// Context type
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getText: (text: LocalisedText) => string;
}

const STORAGE_KEY = 'physics-practice-language';
const DEFAULT_LANGUAGE: Language = 'en';

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// UI strings dictionary
export const uiStrings: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.practice': 'Practice',
    'nav.progress': 'Progress',
    'nav.admin': 'Admin',

    // Home page
    'home.title': 'Physics Practice',
    'home.subtitle': 'Master VWO physics with interactive practice and step-by-step explanations',
    'home.streak': 'Streak',
    'home.days': 'days',
    'home.overallAccuracy': 'Overall Accuracy',
    'home.questionsAttempted': 'Questions Attempted',
    'home.startPracticing': 'Start practicing to track your progress!',
    'home.browseTopics': 'Browse Topics',
    'home.chooseWhatToPractice': 'Choose what to practice',
    'home.recommended': 'Recommended',
    'home.dashboard': 'Dashboard',
    'home.viewProgress': 'View your progress',
    'home.topics': 'Topics',
    'home.notStarted': 'Not started',
    'home.toReview': 'to review',
    'home.recentMistakes': 'Recent Mistakes to Review',
    'home.practice': 'Practice',

    // Topics page
    'topics.title': 'Choose a Topic',
    'topics.subtitle': 'Select a physics topic to start practicing',
    'topics.questions': 'questions',
    'topics.accuracy': 'accuracy',
    'topics.mastered': 'mastered',
    'topics.attempts': 'attempts',
    'topics.needsPractice': 'Needs Practice',
    'topics.best': 'Best',
    'topics.howItWorks': 'How it works:',
    'topics.howItWorks1': 'Each session has 5-10 questions mixing different difficulty levels',
    'topics.howItWorks2': 'Questions you get wrong will appear more often (spaced repetition)',
    'topics.howItWorks3': 'Use the "I\'m stuck" button for hints before seeing the full solution',
    'topics.howItWorks4': 'Master a question by answering it correctly 3 times in a row',

    // Practice page
    'practice.progress': 'Progress',
    'practice.correctOf': 'correct of',
    'practice.answered': 'answered',
    'practice.exit': 'Exit',
    'practice.sessionComplete': 'Session Complete!',
    'practice.accuracy': 'Accuracy',
    'practice.correct': 'Correct',
    'practice.excellentWork': 'Excellent work! You have a strong understanding of this topic.',
    'practice.goodEffort': 'Good effort! Keep practicing to improve your understanding.',
    'practice.keepGoing': 'Keep going! Practice makes perfect. Review the solutions and try again.',
    'practice.practiceAgain': 'Practice Again',
    'practice.chooseAnotherTopic': 'Choose Another Topic',
    'practice.viewProgress': 'View Progress',
    'practice.sessionReview': 'Session Review',
    'practice.correctAnswer': 'Correct answer',
    'practice.topicNotFound': 'Topic Not Found',
    'practice.topicNotFoundDesc': 'The topic doesn\'t exist.',
    'practice.backToTopics': 'Back to Topics',
    'practice.noQuestions': 'No Questions Available',
    'practice.noQuestionsDesc': 'There are no questions for this topic yet.',

    // Question card
    'question.of': 'of',
    'question.question': 'Question',
    'question.multipleChoice': 'Multiple Choice',
    'question.numeric': 'Numeric',
    'question.checkAnswer': 'Check Answer',
    'question.nextQuestion': 'Next Question',
    'question.seeResults': 'See Results',
    'question.showSolution': 'Show step-by-step solution',
    'question.yourAnswer': 'Your answer',
    'question.correct': 'Correct!',
    'question.incorrect': 'Incorrect',
    'question.dutch': 'Dutch',

    // Difficulty
    'difficulty.basic': 'Basic',
    'difficulty.intermediate': 'Intermediate',
    'difficulty.advanced': 'Advanced',

    // Hints
    'hint.imStuck': "I'm stuck - show hint",
    'hint.hint': 'Hint',
    'hint.allRevealed': 'All hints revealed. Try your best answer!',

    // Solution
    'solution.correctAnswer': 'Correct Answer',
    'solution.stepByStep': 'Step-by-Step Solution',
    'solution.commonMistakes': 'Common Mistakes to Avoid',

    // Numeric input
    'numeric.enterAnswer': 'Enter your answer...',
    'numeric.unit': 'Unit',
    'numeric.helper': 'You can use either a comma (3,5) or period (3.5) as decimal separator',
    'numeric.selectUnit': "Don't forget to select the correct unit!",

    // Dashboard
    'dashboard.title': 'Your Progress',
    'dashboard.exportData': 'Export Data',
    'dashboard.resetProgress': 'Reset Progress',
    'dashboard.resetConfirmTitle': 'Reset All Progress?',
    'dashboard.resetConfirmDesc': 'This will permanently delete all your progress and attempt history. This action cannot be undone.',
    'dashboard.cancel': 'Cancel',
    'dashboard.reset': 'Reset',
    'dashboard.noProgress': 'No Progress Yet',
    'dashboard.noProgressDesc': 'Complete some practice sessions to see your progress here.',
    'dashboard.startPracticing': 'Start Practicing',
    'dashboard.dayStreak': 'Day Streak',
    'dashboard.overallAccuracy': 'Overall Accuracy',
    'dashboard.questionsAnswered': 'Questions Answered',
    'dashboard.correctAnswers': 'Correct Answers',
    'dashboard.topicPerformance': 'Topic Performance',
    'dashboard.focusArea': 'Focus Area',
    'dashboard.practiceToImprove': 'to improve',
    'dashboard.reviewMistakes': 'Review Mistakes',
    'dashboard.recentMistakesToReview': 'recent mistakes to review',
    'dashboard.recentMistakes': 'Recent Mistakes',
    'dashboard.avg': 'avg',
    'dashboard.last': 'Last',

    // Admin
    'admin.title': 'Admin Access',
    'admin.enterPasscode': 'Enter the admin passcode to manage questions',
    'admin.passcode': 'Enter passcode...',
    'admin.incorrectPasscode': 'Incorrect passcode',
    'admin.login': 'Login',
    'admin.logout': 'Logout',
    'admin.questionBank': 'Question Bank',
    'admin.questionsTotal': 'questions total',
    'admin.addQuestion': '+ Add Question',
    'admin.exportJson': 'Export JSON',
    'admin.importJson': 'Import JSON',
    'admin.all': 'All',
    'admin.id': 'ID',
    'admin.topic': 'Topic',
    'admin.difficulty': 'Difficulty',
    'admin.type': 'Type',
    'admin.questionCol': 'Question',
    'admin.actions': 'Actions',
    'admin.edit': 'Edit',
    'admin.delete': 'Delete',
    'admin.createQuestion': 'Create Question',
    'admin.editQuestion': 'Edit Question',
    'admin.answerType': 'Answer Type',
    'admin.questionPrompt': 'Question Prompt',
    'admin.questionPromptEn': 'Question Prompt (English)',
    'admin.questionPromptNl': 'Question Prompt (Dutch)',
    'admin.choices': 'Choices (one per line)',
    'admin.choicesEn': 'Choices - English (one per line)',
    'admin.choicesNl': 'Choices - Dutch (one per line)',
    'admin.correctAnswer': 'Correct Answer',
    'admin.correctUnit': 'Correct Unit',
    'admin.absoluteTolerance': 'Absolute Tolerance',
    'admin.unitOptions': 'Unit Options (comma-separated)',
    'admin.hints': 'Hints (one per line, max 3)',
    'admin.hintsEn': 'Hints - English (one per line, max 3)',
    'admin.hintsNl': 'Hints - Dutch (one per line, max 3)',
    'admin.solutionSteps': 'Solution Steps (one per line)',
    'admin.solutionStepsEn': 'Solution Steps - English (one per line)',
    'admin.solutionStepsNl': 'Solution Steps - Dutch (one per line)',
    'admin.commonMistakes': 'Common Mistakes (one per line)',
    'admin.commonMistakesEn': 'Common Mistakes - English (one per line)',
    'admin.commonMistakesNl': 'Common Mistakes - Dutch (one per line)',
    'admin.dutchKeywords': 'Dutch Keywords (comma-separated)',
    'admin.saveChanges': 'Save Changes',
    'admin.create': 'Create Question',

    // Level selector
    'level.vwo3': 'VWO 3',
    'level.vwo4': 'VWO 4',
    'level.select': 'Select Level',

    // Footer
    'footer.title': 'Physics Practice App for VWO Students',
    'footer.dutch': 'Dutch: Natuurkunde oefenprogramma',

    // Grading feedback
    'grading.correct': 'Correct!',
    'grading.incorrect': 'Incorrect. The correct answer is',
    'grading.enterValidNumber': 'Please enter a valid number.',
    'grading.selectUnit': 'Please select a unit for your answer.',
    'grading.numberCorrectUnitWrong': 'Your number is correct, but the unit is wrong.',
    'grading.correctUnitIs': 'The correct unit is',
    'grading.acceptedRange': 'accepted range',
  },

  nl: {
    // Navigation
    'nav.practice': 'Oefenen',
    'nav.progress': 'Voortgang',
    'nav.admin': 'Beheer',

    // Home page
    'home.title': 'Natuurkunde Oefenen',
    'home.subtitle': 'Beheers VWO natuurkunde met interactieve oefeningen en stapsgewijze uitleg',
    'home.streak': 'Reeks',
    'home.days': 'dagen',
    'home.overallAccuracy': 'Totale Score',
    'home.questionsAttempted': 'Vragen Beantwoord',
    'home.startPracticing': 'Begin met oefenen om je voortgang te volgen!',
    'home.browseTopics': 'Bekijk Onderwerpen',
    'home.chooseWhatToPractice': 'Kies wat je wilt oefenen',
    'home.recommended': 'Aanbevolen',
    'home.dashboard': 'Dashboard',
    'home.viewProgress': 'Bekijk je voortgang',
    'home.topics': 'Onderwerpen',
    'home.notStarted': 'Nog niet gestart',
    'home.toReview': 'te herhalen',
    'home.recentMistakes': 'Recente Fouten om te Herhalen',
    'home.practice': 'Oefenen',

    // Topics page
    'topics.title': 'Kies een Onderwerp',
    'topics.subtitle': 'Selecteer een natuurkunde onderwerp om te oefenen',
    'topics.questions': 'vragen',
    'topics.accuracy': 'score',
    'topics.mastered': 'beheerst',
    'topics.attempts': 'pogingen',
    'topics.needsPractice': 'Meer Oefenen',
    'topics.best': 'Beste',
    'topics.howItWorks': 'Hoe het werkt:',
    'topics.howItWorks1': 'Elke sessie heeft 5-10 vragen met verschillende moeilijkheidsgraden',
    'topics.howItWorks2': 'Vragen die je fout beantwoordt komen vaker terug (herhaling)',
    'topics.howItWorks3': 'Gebruik de "Ik zit vast" knop voor hints voordat je de uitwerking ziet',
    'topics.howItWorks4': 'Beheers een vraag door deze 3 keer achter elkaar goed te beantwoorden',

    // Practice page
    'practice.progress': 'Voortgang',
    'practice.correctOf': 'goed van',
    'practice.answered': 'beantwoord',
    'practice.exit': 'Stoppen',
    'practice.sessionComplete': 'Sessie Voltooid!',
    'practice.accuracy': 'Score',
    'practice.correct': 'Goed',
    'practice.excellentWork': 'Uitstekend werk! Je begrijpt dit onderwerp goed.',
    'practice.goodEffort': 'Goed gedaan! Blijf oefenen om je begrip te verbeteren.',
    'practice.keepGoing': 'Ga zo door! Oefening baart kunst. Bekijk de uitwerkingen en probeer opnieuw.',
    'practice.practiceAgain': 'Opnieuw Oefenen',
    'practice.chooseAnotherTopic': 'Kies Ander Onderwerp',
    'practice.viewProgress': 'Bekijk Voortgang',
    'practice.sessionReview': 'Sessie Overzicht',
    'practice.correctAnswer': 'Juiste antwoord',
    'practice.topicNotFound': 'Onderwerp Niet Gevonden',
    'practice.topicNotFoundDesc': 'Dit onderwerp bestaat niet.',
    'practice.backToTopics': 'Terug naar Onderwerpen',
    'practice.noQuestions': 'Geen Vragen Beschikbaar',
    'practice.noQuestionsDesc': 'Er zijn nog geen vragen voor dit onderwerp.',

    // Question card
    'question.of': 'van',
    'question.question': 'Vraag',
    'question.multipleChoice': 'Meerkeuze',
    'question.numeric': 'Numeriek',
    'question.checkAnswer': 'Controleer Antwoord',
    'question.nextQuestion': 'Volgende Vraag',
    'question.seeResults': 'Bekijk Resultaten',
    'question.showSolution': 'Toon stapsgewijze uitwerking',
    'question.yourAnswer': 'Jouw antwoord',
    'question.correct': 'Goed!',
    'question.incorrect': 'Fout',
    'question.dutch': 'Nederlands',

    // Difficulty
    'difficulty.basic': 'Basis',
    'difficulty.intermediate': 'Gemiddeld',
    'difficulty.advanced': 'Gevorderd',

    // Hints
    'hint.imStuck': 'Ik zit vast - toon hint',
    'hint.hint': 'Hint',
    'hint.allRevealed': 'Alle hints getoond. Probeer je beste antwoord!',

    // Solution
    'solution.correctAnswer': 'Juiste Antwoord',
    'solution.stepByStep': 'Stapsgewijze Uitwerking',
    'solution.commonMistakes': 'Veelgemaakte Fouten',

    // Numeric input
    'numeric.enterAnswer': 'Vul je antwoord in...',
    'numeric.unit': 'Eenheid',
    'numeric.helper': 'Je kunt zowel een komma (3,5) als een punt (3.5) gebruiken als decimaalteken',
    'numeric.selectUnit': 'Vergeet niet de juiste eenheid te kiezen!',

    // Dashboard
    'dashboard.title': 'Jouw Voortgang',
    'dashboard.exportData': 'Exporteer Data',
    'dashboard.resetProgress': 'Reset Voortgang',
    'dashboard.resetConfirmTitle': 'Alle Voortgang Resetten?',
    'dashboard.resetConfirmDesc': 'Dit verwijdert permanent al je voortgang en antwoordgeschiedenis. Deze actie kan niet ongedaan worden gemaakt.',
    'dashboard.cancel': 'Annuleren',
    'dashboard.reset': 'Reset',
    'dashboard.noProgress': 'Nog Geen Voortgang',
    'dashboard.noProgressDesc': 'Voltooi een oefensessie om hier je voortgang te zien.',
    'dashboard.startPracticing': 'Begin met Oefenen',
    'dashboard.dayStreak': 'Dagen Reeks',
    'dashboard.overallAccuracy': 'Totale Score',
    'dashboard.questionsAnswered': 'Vragen Beantwoord',
    'dashboard.correctAnswers': 'Goede Antwoorden',
    'dashboard.topicPerformance': 'Prestaties per Onderwerp',
    'dashboard.focusArea': 'Aandachtsgebied',
    'dashboard.practiceToImprove': 'om te verbeteren',
    'dashboard.reviewMistakes': 'Herhaal Fouten',
    'dashboard.recentMistakesToReview': 'recente fouten om te herhalen',
    'dashboard.recentMistakes': 'Recente Fouten',
    'dashboard.avg': 'gem',
    'dashboard.last': 'Laatst',

    // Admin
    'admin.title': 'Beheerder Toegang',
    'admin.enterPasscode': 'Voer de beheerderscode in om vragen te beheren',
    'admin.passcode': 'Voer code in...',
    'admin.incorrectPasscode': 'Onjuiste code',
    'admin.login': 'Inloggen',
    'admin.logout': 'Uitloggen',
    'admin.questionBank': 'Vragenbank',
    'admin.questionsTotal': 'vragen totaal',
    'admin.addQuestion': '+ Vraag Toevoegen',
    'admin.exportJson': 'Exporteer JSON',
    'admin.importJson': 'Importeer JSON',
    'admin.all': 'Alle',
    'admin.id': 'ID',
    'admin.topic': 'Onderwerp',
    'admin.difficulty': 'Moeilijkheid',
    'admin.type': 'Type',
    'admin.questionCol': 'Vraag',
    'admin.actions': 'Acties',
    'admin.edit': 'Bewerken',
    'admin.delete': 'Verwijderen',
    'admin.createQuestion': 'Vraag Maken',
    'admin.editQuestion': 'Vraag Bewerken',
    'admin.answerType': 'Antwoordtype',
    'admin.questionPrompt': 'Vraag',
    'admin.questionPromptEn': 'Vraag (Engels)',
    'admin.questionPromptNl': 'Vraag (Nederlands)',
    'admin.choices': 'Keuzes (één per regel)',
    'admin.choicesEn': 'Keuzes - Engels (één per regel)',
    'admin.choicesNl': 'Keuzes - Nederlands (één per regel)',
    'admin.correctAnswer': 'Juiste Antwoord',
    'admin.correctUnit': 'Juiste Eenheid',
    'admin.absoluteTolerance': 'Absolute Tolerantie',
    'admin.unitOptions': 'Eenheidsopties (kommagescheiden)',
    'admin.hints': 'Hints (één per regel, max 3)',
    'admin.hintsEn': 'Hints - Engels (één per regel, max 3)',
    'admin.hintsNl': 'Hints - Nederlands (één per regel, max 3)',
    'admin.solutionSteps': 'Uitwerkingsstappen (één per regel)',
    'admin.solutionStepsEn': 'Uitwerkingsstappen - Engels (één per regel)',
    'admin.solutionStepsNl': 'Uitwerkingsstappen - Nederlands (één per regel)',
    'admin.commonMistakes': 'Veelgemaakte Fouten (één per regel)',
    'admin.commonMistakesEn': 'Veelgemaakte Fouten - Engels (één per regel)',
    'admin.commonMistakesNl': 'Veelgemaakte Fouten - Nederlands (één per regel)',
    'admin.dutchKeywords': 'Nederlandse Zoekwoorden (kommagescheiden)',
    'admin.saveChanges': 'Wijzigingen Opslaan',
    'admin.create': 'Vraag Maken',

    // Level selector
    'level.vwo3': 'VWO 3',
    'level.vwo4': 'VWO 4',
    'level.select': 'Kies Niveau',

    // Footer
    'footer.title': 'Natuurkunde Oefenapp voor VWO Leerlingen',
    'footer.dutch': 'English: Physics Practice App',

    // Grading feedback
    'grading.correct': 'Goed!',
    'grading.incorrect': 'Fout. Het juiste antwoord is',
    'grading.enterValidNumber': 'Voer een geldig getal in.',
    'grading.selectUnit': 'Selecteer een eenheid voor je antwoord.',
    'grading.numberCorrectUnitWrong': 'Je getal is goed, maar de eenheid is fout.',
    'grading.correctUnitIs': 'De juiste eenheid is',
    'grading.acceptedRange': 'toegestane marge',
  },
};

// Topic names in both languages
export const topicNames: Record<string, { en: string; nl: string }> = {
  'forces-newton': {
    en: 'Forces & Newton\'s Laws',
    nl: 'Krachten & Newton\'s Wetten',
  },
  'energy-work': {
    en: 'Energy & Work',
    nl: 'Energie & Arbeid',
  },
  'power': {
    en: 'Power',
    nl: 'Vermogen',
  },
  'motion-graphs': {
    en: 'Motion Graphs',
    nl: 'Bewegingsdiagrammen',
  },
  'density-pressure': {
    en: 'Density & Pressure',
    nl: 'Dichtheid & Druk',
  },
  'circuits': {
    en: 'Electric Circuits',
    nl: 'Elektrische Schakelingen',
  },
  // VWO-4 topics
  'kinematics-2d': {
    en: 'Kinematics 2D',
    nl: 'Kinematica 2D',
  },
  'forces-dynamics': {
    en: 'Forces & Dynamics',
    nl: 'Krachten & Dynamica',
  },
  'work-energy-power': {
    en: 'Work, Energy & Power',
    nl: 'Arbeid, Energie & Vermogen',
  },
  'momentum-impulse': {
    en: 'Momentum & Impulse',
    nl: 'Impuls & Impulsmoment',
  },
  'circular-motion': {
    en: 'Circular Motion & Gravitation',
    nl: 'Cirkelbewegingen & Gravitatie',
  },
  'harmonic-motion': {
    en: 'Simple Harmonic Motion',
    nl: 'Harmonische Trillingen',
  },
  'dc-circuits': {
    en: 'DC Circuits',
    nl: 'Gelijkstroomschakelingen',
  },
  'fields-basics': {
    en: 'Fields Basics',
    nl: 'Velden – Basis',
  },
};

// Topic descriptions in both languages
export const topicDescriptions: Record<string, { en: string; nl: string }> = {
  'forces-newton': {
    en: 'Learn about forces, friction, and Newton\'s three laws of motion.',
    nl: 'Leer over krachten, wrijving en de drie wetten van Newton.',
  },
  'energy-work': {
    en: 'Understand kinetic energy, potential energy, and the work-energy theorem.',
    nl: 'Begrijp kinetische energie, potentiële energie en de arbeid-energiestelling.',
  },
  'power': {
    en: 'Calculate power as the rate of energy transfer or work done per unit time.',
    nl: 'Bereken vermogen als de snelheid van energieoverdracht of arbeid per tijdseenheid.',
  },
  'motion-graphs': {
    en: 'Interpret and analyze position-time, velocity-time, and acceleration-time graphs.',
    nl: 'Interpreteer en analyseer plaats-tijd, snelheid-tijd en versnelling-tijd diagrammen.',
  },
  'density-pressure': {
    en: 'Work with density, pressure in fluids, and buoyancy concepts.',
    nl: 'Werk met dichtheid, druk in vloeistoffen en drijfkracht.',
  },
  'circuits': {
    en: 'Analyze series and parallel circuits with resistors, voltage, and current.',
    nl: 'Analyseer serie- en parallelschakelingen met weerstanden, spanning en stroom.',
  },
  // VWO-4 topics
  'kinematics-2d': {
    en: 'Analyse motion in two dimensions using vector decomposition and relative motion.',
    nl: 'Analyseer beweging in twee dimensies met vectorontbinding en relatieve snelheid.',
  },
  'forces-dynamics': {
    en: 'Apply Newton\'s laws to inclined planes, friction problems and circular motion.',
    nl: 'Pas de wetten van Newton toe op hellende vlakken, wrijving en cirkelbewegingen.',
  },
  'work-energy-power': {
    en: 'Calculate work, energy conversions and efficiency in real-world systems.',
    nl: 'Bereken arbeid, energieomzettingen en rendement in praktijksituaties.',
  },
  'momentum-impulse': {
    en: 'Understand conservation of momentum, impulse and one-dimensional collisions.',
    nl: 'Begrijp behoud van impuls, stoot en eendimensionale botsingen.',
  },
  'circular-motion': {
    en: 'Study centripetal acceleration, centripetal force and Newton\'s law of gravitation.',
    nl: 'Bestudeer centripetale versnelling, centripetale kracht en de gravitatiewet van Newton.',
  },
  'harmonic-motion': {
    en: 'Explore oscillations, period, frequency and energy in mass-spring systems.',
    nl: 'Verken trillingen, periode, frequentie en energie in massa-veersystemen.',
  },
  'dc-circuits': {
    en: 'Analyse series and parallel circuits using Ohm\'s law and Kirchhoff\'s rules.',
    nl: 'Analyseer serie- en parallelschakelingen met de wet van Ohm en de wetten van Kirchhoff.',
  },
  'fields-basics': {
    en: 'Understand electric field strength, potential difference and field lines.',
    nl: 'Begrijp elektrische veldsterkte, potentiaalverschil en veldlijnen.',
  },
};

// Provider component
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'nl') {
      setLanguageState(stored);
    }
  }, []);

  // Save language to localStorage when changed
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  // Translation function for UI strings
  const t = useCallback((key: string): string => {
    const value = uiStrings[language][key];
    if (!value) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Missing translation for key: ${key} in language: ${language}`);
      }
      // Fallback to English
      return uiStrings.en[key] || key;
    }
    return value;
  }, [language]);

  // Get text from LocalisedText (string or {en, nl})
  const getText = useCallback((text: LocalisedText): string => {
    if (typeof text === 'string') {
      return text;
    }
    const value = text[language];
    if (!value) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Missing ${language} translation for text:`, text);
      }
      // Fallback to English
      return text.en || '';
    }
    return value;
  }, [language]);

  // Prevent hydration mismatch by rendering default language until mounted
  const contextValue: LanguageContextType = {
    language: mounted ? language : DEFAULT_LANGUAGE,
    setLanguage,
    t,
    getText,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to use language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Helper to get localised text outside of React components
export function getLocalisedText(text: LocalisedText, language: Language): string {
  if (typeof text === 'string') {
    return text;
  }
  return text[language] || text.en || '';
}

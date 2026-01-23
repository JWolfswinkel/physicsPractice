/**
 * Grading logic for physics practice questions
 * Handles numeric answers with tolerance, MCQ, and unit validation
 */

import { Question, GradingResult, NumericTolerance, Language } from './types';

// Localised feedback messages
const feedbackMessages = {
  en: {
    correct: 'Correct!',
    incorrect: 'Incorrect. The correct answer is',
    enterValidNumber: 'Please enter a valid number.',
    selectUnit: 'Please select a unit for your answer.',
    numberCorrectUnitWrong: 'Your number is correct, but the unit is wrong.',
    correctUnitIs: 'The correct unit is',
    acceptedRange: 'accepted range',
    unknownType: 'Unknown question type',
  },
  nl: {
    correct: 'Goed!',
    incorrect: 'Fout. Het juiste antwoord is',
    enterValidNumber: 'Voer een geldig getal in.',
    selectUnit: 'Selecteer een eenheid voor je antwoord.',
    numberCorrectUnitWrong: 'Je getal is goed, maar de eenheid is fout.',
    correctUnitIs: 'De juiste eenheid is',
    acceptedRange: 'toegestane marge',
    unknownType: 'Onbekend vraagtype',
  },
};

/**
 * Parse a numeric string input, handling both comma and decimal point
 * as decimal separators (common in Dutch notation)
 */
export function parseNumericInput(input: string): number | null {
  if (!input || typeof input !== 'string') {
    return null;
  }

  // Trim whitespace
  let cleaned = input.trim();

  // Replace comma with period for Dutch decimal notation
  cleaned = cleaned.replace(',', '.');

  // Remove any spaces (e.g., "1 000" → "1000")
  cleaned = cleaned.replace(/\s/g, '');

  // Try to parse as number
  const parsed = parseFloat(cleaned);

  if (isNaN(parsed) || !isFinite(parsed)) {
    return null;
  }

  return parsed;
}

/**
 * Check if a numeric answer is within tolerance
 */
export function isWithinTolerance(
  givenValue: number,
  correctValue: number,
  tolerance?: NumericTolerance
): boolean {
  // If no tolerance specified, require exact match (within floating point precision)
  if (!tolerance) {
    return Math.abs(givenValue - correctValue) < 0.0001;
  }

  // Check absolute tolerance
  if (tolerance.absolute !== undefined) {
    if (Math.abs(givenValue - correctValue) <= tolerance.absolute) {
      return true;
    }
  }

  // Check relative tolerance
  if (tolerance.relative !== undefined) {
    // Avoid division by zero
    if (correctValue === 0) {
      return givenValue === 0;
    }
    const relativeError = Math.abs((givenValue - correctValue) / correctValue);
    if (relativeError <= tolerance.relative) {
      return true;
    }
  }

  return false;
}

/**
 * Normalize unit strings for comparison
 */
export function normalizeUnit(unit: string): string {
  if (!unit) return '';

  let normalized = unit.trim().toLowerCase();

  const unitMap: Record<string, string> = {
    'n': 'n', 'newton': 'n', 'newtons': 'n',
    'kg': 'kg', 'kilogram': 'kg', 'kilograms': 'kg',
    'g': 'g', 'gram': 'g', 'grams': 'g',
    'm': 'm', 'meter': 'm', 'meters': 'm', 'metre': 'm', 'metres': 'm',
    'cm': 'cm', 'centimeter': 'cm', 'centimeters': 'cm',
    's': 's', 'sec': 's', 'second': 's', 'seconds': 's',
    'm/s': 'm/s', 'ms-1': 'm/s', 'meter/second': 'm/s', 'meters/second': 'm/s', 'mps': 'm/s',
    'm/s²': 'm/s²', 'm/s2': 'm/s²', 'ms-2': 'm/s²', 'meter/second²': 'm/s²', 'meters/second²': 'm/s²',
    'j': 'j', 'joule': 'j', 'joules': 'j',
    'kj': 'kj', 'kilojoule': 'kj', 'kilojoules': 'kj',
    'w': 'w', 'watt': 'w', 'watts': 'w', 'j/s': 'w',
    'kw': 'kw', 'kilowatt': 'kw', 'kilowatts': 'kw',
    'pa': 'pa', 'pascal': 'pa', 'pascals': 'pa', 'n/m²': 'pa', 'n/m2': 'pa',
    'kpa': 'kpa', 'kilopascal': 'kpa', 'bar': 'bar',
    'kg/m³': 'kg/m³', 'kg/m3': 'kg/m³',
    'g/cm³': 'g/cm³', 'g/cm3': 'g/cm³', 'g/l': 'g/l', 'kg/l': 'kg/l',
    'a': 'a', 'amp': 'a', 'ampere': 'a', 'amperes': 'a',
    'v': 'v', 'volt': 'v', 'volts': 'v',
    'ω': 'ω', 'ohm': 'ω', 'ohms': 'ω', 'Ω': 'ω',
    '(fraction)': '(fraction)', 'fraction': '(fraction)',
    '%': '%', 'percent': '%',
  };

  return unitMap[normalized] || normalized;
}

/**
 * Check if the given unit matches the correct unit
 */
export function isUnitCorrect(givenUnit: string, correctUnit: string): boolean {
  return normalizeUnit(givenUnit) === normalizeUnit(correctUnit);
}

/**
 * Unit conversion factors to a base unit
 * Each entry maps a normalized unit to [baseUnit, conversionFactor]
 * where givenValue * conversionFactor = valueInBaseUnit
 */
const unitConversions: Record<string, [string, number]> = {
  // Energy: base unit is J
  'j': ['j', 1],
  'kj': ['j', 1000],

  // Power: base unit is W
  'w': ['w', 1],
  'kw': ['w', 1000],

  // Pressure: base unit is Pa
  'pa': ['pa', 1],
  'kpa': ['pa', 1000],
  'bar': ['pa', 100000],

  // Length: base unit is m
  'm': ['m', 1],
  'km': ['m', 1000],
  'cm': ['m', 0.01],
  'mm': ['m', 0.001],

  // Mass: base unit is kg
  'kg': ['kg', 1],
  'g': ['kg', 0.001],

  // Time: base unit is s
  's': ['s', 1],
  'ms': ['s', 0.001],
  'min': ['s', 60],
  'h': ['s', 3600],
};

/**
 * Check if two units are convertible (same physical quantity)
 */
export function areUnitsConvertible(unit1: string, unit2: string): boolean {
  const norm1 = normalizeUnit(unit1);
  const norm2 = normalizeUnit(unit2);

  const conv1 = unitConversions[norm1];
  const conv2 = unitConversions[norm2];

  if (!conv1 || !conv2) return false;

  // Same base unit means they're convertible
  return conv1[0] === conv2[0];
}

/**
 * Convert a value from one unit to another
 * Returns null if units are not convertible
 */
export function convertValue(value: number, fromUnit: string, toUnit: string): number | null {
  const normFrom = normalizeUnit(fromUnit);
  const normTo = normalizeUnit(toUnit);

  // Same unit, no conversion needed
  if (normFrom === normTo) return value;

  const convFrom = unitConversions[normFrom];
  const convTo = unitConversions[normTo];

  if (!convFrom || !convTo) return null;
  if (convFrom[0] !== convTo[0]) return null; // Different base units

  // Convert: value -> base unit -> target unit
  const valueInBase = value * convFrom[1];
  const valueInTarget = valueInBase / convTo[1];

  return valueInTarget;
}

/**
 * Grade a student's answer against a question
 */
export function gradeAnswer(
  question: Question,
  givenAnswer: string | number,
  givenUnit?: string,
  language: Language = 'en'
): GradingResult {
  const msg = feedbackMessages[language];
  const result: GradingResult = {
    correct: false,
    feedback: '',
    correctAnswer: question.correctAnswer,
    correctUnit: question.correctUnit,
    tolerance: question.tolerance,
  };

  switch (question.answerType) {
    case 'mcq':
      result.correct = gradeMultipleChoice(question, givenAnswer);
      result.feedback = result.correct
        ? msg.correct
        : `${msg.incorrect}: ${question.correctAnswer}`;
      break;

    case 'numeric':
      const numericResult = gradeNumeric(question, givenAnswer, givenUnit, language);
      result.correct = numericResult.correct;
      result.feedback = numericResult.feedback;
      break;

    case 'text':
      result.correct = gradeTextAnswer(question, givenAnswer);
      result.feedback = result.correct
        ? msg.correct
        : `${msg.incorrect}: ${question.correctAnswer}`;
      break;

    default:
      result.feedback = msg.unknownType;
  }

  return result;
}

function gradeMultipleChoice(question: Question, givenAnswer: string | number): boolean {
  const given = String(givenAnswer).trim().toLowerCase();
  const correct = String(question.correctAnswer).trim().toLowerCase();
  return given === correct;
}

function gradeNumeric(
  question: Question,
  givenAnswer: string | number,
  givenUnit?: string,
  language: Language = 'en'
): { correct: boolean; feedback: string } {
  const msg = feedbackMessages[language];

  const givenValue =
    typeof givenAnswer === 'number'
      ? givenAnswer
      : parseNumericInput(String(givenAnswer));

  if (givenValue === null) {
    return { correct: false, feedback: msg.enterValidNumber };
  }

  const correctValue =
    typeof question.correctAnswer === 'number'
      ? question.correctAnswer
      : parseNumericInput(String(question.correctAnswer));

  if (correctValue === null) {
    return { correct: false, feedback: 'Error: Invalid correct answer in question data.' };
  }

  // Handle unit validation and conversion
  if (question.unitOptions && question.correctUnit) {
    if (!givenUnit) {
      return { correct: false, feedback: msg.selectUnit };
    }

    // Check if units are the same
    if (isUnitCorrect(givenUnit, question.correctUnit)) {
      // Same unit - compare values directly
      const valueCorrect = isWithinTolerance(givenValue, correctValue, question.tolerance);
      if (valueCorrect) {
        return { correct: true, feedback: msg.correct };
      } else {
        const toleranceInfo = question.tolerance
          ? ` (${msg.acceptedRange}: ${formatToleranceRange(correctValue, question.tolerance)})`
          : '';
        return {
          correct: false,
          feedback: `${msg.incorrect} ${correctValue} ${question.correctUnit}${toleranceInfo}`,
        };
      }
    }

    // Check if units are convertible (e.g., kW to W, kJ to J)
    if (areUnitsConvertible(givenUnit, question.correctUnit)) {
      // Convert given value to the correct unit
      const convertedValue = convertValue(givenValue, givenUnit, question.correctUnit);
      if (convertedValue !== null) {
        const valueCorrect = isWithinTolerance(convertedValue, correctValue, question.tolerance);
        if (valueCorrect) {
          return { correct: true, feedback: msg.correct };
        } else {
          const toleranceInfo = question.tolerance
            ? ` (${msg.acceptedRange}: ${formatToleranceRange(correctValue, question.tolerance)})`
            : '';
          return {
            correct: false,
            feedback: `${msg.incorrect} ${correctValue} ${question.correctUnit}${toleranceInfo}`,
          };
        }
      }
    }

    // Units are not the same and not convertible - wrong unit
    // But first check if the value would be correct (to give helpful feedback)
    const valueCorrect = isWithinTolerance(givenValue, correctValue, question.tolerance);
    if (valueCorrect) {
      return {
        correct: false,
        feedback: `${msg.numberCorrectUnitWrong} ${msg.correctUnitIs} ${question.correctUnit}.`,
      };
    } else {
      const toleranceInfo = question.tolerance
        ? ` (${msg.acceptedRange}: ${formatToleranceRange(correctValue, question.tolerance)})`
        : '';
      return {
        correct: false,
        feedback: `${msg.incorrect} ${correctValue} ${question.correctUnit}${toleranceInfo}`,
      };
    }
  }

  // No unit required - just check the value
  const valueCorrect = isWithinTolerance(givenValue, correctValue, question.tolerance);
  if (valueCorrect) {
    return { correct: true, feedback: msg.correct };
  } else {
    const toleranceInfo = question.tolerance
      ? ` (${msg.acceptedRange}: ${formatToleranceRange(correctValue, question.tolerance)})`
      : '';
    return {
      correct: false,
      feedback: `${msg.incorrect} ${correctValue} ${question.correctUnit || ''}${toleranceInfo}`,
    };
  }
}

function gradeTextAnswer(question: Question, givenAnswer: string | number): boolean {
  const given = String(givenAnswer).trim().toLowerCase();
  const correct = String(question.correctAnswer).trim().toLowerCase();
  return given === correct;
}

export function formatToleranceRange(
  correctValue: number,
  tolerance: NumericTolerance
): string {
  if (tolerance.absolute !== undefined) {
    const min = correctValue - tolerance.absolute;
    const max = correctValue + tolerance.absolute;
    return `${min.toFixed(2)} - ${max.toFixed(2)}`;
  }

  if (tolerance.relative !== undefined) {
    const margin = correctValue * tolerance.relative;
    const min = correctValue - margin;
    const max = correctValue + margin;
    return `${min.toFixed(2)} - ${max.toFixed(2)}`;
  }

  return String(correctValue);
}

export function calculateAccuracy(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

export function getDifficultyLabel(difficulty: 1 | 2 | 3, language: Language = 'en'): string {
  const labels = {
    en: { 1: 'Basic', 2: 'Intermediate', 3: 'Advanced' },
    nl: { 1: 'Basis', 2: 'Gemiddeld', 3: 'Gevorderd' },
  };
  return labels[language][difficulty] || labels.en[difficulty] || 'Unknown';
}

export function formatTimeSpent(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
}

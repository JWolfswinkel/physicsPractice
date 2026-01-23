/**
 * Unit tests for grading logic
 * Tests numeric parsing, tolerance checking, and unit validation
 */

import {
  parseNumericInput,
  isWithinTolerance,
  normalizeUnit,
  isUnitCorrect,
  gradeAnswer,
  calculateAccuracy,
  formatToleranceRange,
  getDifficultyLabel,
  areUnitsConvertible,
  convertValue,
} from '../src/lib/grading';
import { Question } from '../src/lib/types';

describe('parseNumericInput', () => {
  test('parses integer correctly', () => {
    expect(parseNumericInput('42')).toBe(42);
  });

  test('parses decimal with period', () => {
    expect(parseNumericInput('3.14')).toBeCloseTo(3.14);
  });

  test('parses decimal with comma (Dutch notation)', () => {
    expect(parseNumericInput('3,14')).toBeCloseTo(3.14);
  });

  test('parses negative numbers', () => {
    expect(parseNumericInput('-5.5')).toBeCloseTo(-5.5);
  });

  test('handles whitespace', () => {
    expect(parseNumericInput('  42  ')).toBe(42);
  });

  test('handles spaces in large numbers', () => {
    expect(parseNumericInput('1 000')).toBe(1000);
  });

  test('returns null for empty string', () => {
    expect(parseNumericInput('')).toBeNull();
  });

  test('returns null for non-numeric input', () => {
    expect(parseNumericInput('abc')).toBeNull();
  });

  test('returns null for undefined/null', () => {
    expect(parseNumericInput(undefined as unknown as string)).toBeNull();
    expect(parseNumericInput(null as unknown as string)).toBeNull();
  });

  test('handles scientific notation', () => {
    expect(parseNumericInput('1e3')).toBe(1000);
  });
});

describe('isWithinTolerance', () => {
  test('exact match with no tolerance', () => {
    expect(isWithinTolerance(5, 5)).toBe(true);
  });

  test('slight mismatch with no tolerance', () => {
    expect(isWithinTolerance(5.01, 5)).toBe(false);
  });

  test('within absolute tolerance', () => {
    expect(isWithinTolerance(5.05, 5, { absolute: 0.1 })).toBe(true);
  });

  test('outside absolute tolerance', () => {
    expect(isWithinTolerance(5.2, 5, { absolute: 0.1 })).toBe(false);
  });

  test('at edge of absolute tolerance', () => {
    expect(isWithinTolerance(5.1, 5, { absolute: 0.1 })).toBe(true);
  });

  test('within relative tolerance', () => {
    expect(isWithinTolerance(105, 100, { relative: 0.1 })).toBe(true);
  });

  test('outside relative tolerance', () => {
    expect(isWithinTolerance(112, 100, { relative: 0.1 })).toBe(false);
  });

  test('handles zero correct value with relative tolerance', () => {
    expect(isWithinTolerance(0, 0, { relative: 0.1 })).toBe(true);
    expect(isWithinTolerance(0.1, 0, { relative: 0.1 })).toBe(false);
  });

  test('passes if either tolerance is satisfied', () => {
    // Absolute passes, relative fails
    expect(isWithinTolerance(1.05, 1, { absolute: 0.1, relative: 0.01 })).toBe(true);
    // Relative passes, absolute fails
    expect(isWithinTolerance(1.05, 1, { absolute: 0.01, relative: 0.1 })).toBe(true);
  });

  test('negative values with tolerance', () => {
    expect(isWithinTolerance(-4.95, -5, { absolute: 0.1 })).toBe(true);
  });
});

describe('normalizeUnit', () => {
  test('normalizes common units', () => {
    expect(normalizeUnit('N')).toBe('n');
    expect(normalizeUnit('newton')).toBe('n');
    expect(normalizeUnit('Newtons')).toBe('n');
  });

  test('normalizes velocity units', () => {
    expect(normalizeUnit('m/s')).toBe('m/s');
    expect(normalizeUnit('ms-1')).toBe('m/s');
    expect(normalizeUnit('meters/second')).toBe('m/s');
  });

  test('normalizes acceleration units', () => {
    expect(normalizeUnit('m/s²')).toBe('m/s²');
    expect(normalizeUnit('m/s2')).toBe('m/s²');
    expect(normalizeUnit('ms-2')).toBe('m/s²');
  });

  test('normalizes energy units', () => {
    expect(normalizeUnit('J')).toBe('j');
    expect(normalizeUnit('joule')).toBe('j');
    expect(normalizeUnit('Joules')).toBe('j');
  });

  test('normalizes power units', () => {
    expect(normalizeUnit('W')).toBe('w');
    expect(normalizeUnit('watt')).toBe('w');
    expect(normalizeUnit('J/s')).toBe('w');
  });

  test('handles empty and unknown units', () => {
    expect(normalizeUnit('')).toBe('');
    expect(normalizeUnit('unknown')).toBe('unknown');
  });

  test('handles electrical units', () => {
    expect(normalizeUnit('A')).toBe('a');
    expect(normalizeUnit('ampere')).toBe('a');
    expect(normalizeUnit('V')).toBe('v');
    expect(normalizeUnit('Ω')).toBe('ω');
    expect(normalizeUnit('ohm')).toBe('ω');
  });
});

describe('isUnitCorrect', () => {
  test('matching units', () => {
    expect(isUnitCorrect('N', 'N')).toBe(true);
    expect(isUnitCorrect('newton', 'N')).toBe(true);
  });

  test('different units', () => {
    expect(isUnitCorrect('N', 'kg')).toBe(false);
  });

  test('velocity variations', () => {
    expect(isUnitCorrect('m/s', 'm/s')).toBe(true);
    expect(isUnitCorrect('ms-1', 'm/s')).toBe(true);
  });
});

describe('gradeAnswer', () => {
  const numericQuestion: Question = {
    id: 'test-1',
    topic: 'forces-newton',
    difficulty: 1,
    prompt: 'What is 2 + 2?',
    answerType: 'numeric',
    correctAnswer: 4,
    tolerance: { absolute: 0.1 },
    hints: [],
    solutionSteps: [],
    commonMistakes: [],
  };

  const numericWithUnit: Question = {
    ...numericQuestion,
    id: 'test-2',
    correctAnswer: 5,
    unitOptions: ['m/s²', 'm/s', 'N'],
    correctUnit: 'm/s²',
  };

  const mcqQuestion: Question = {
    id: 'test-3',
    topic: 'forces-newton',
    difficulty: 1,
    prompt: 'Which is correct?',
    answerType: 'mcq',
    choices: ['Option A', 'Option B', 'Option C'],
    correctAnswer: 'Option A',
    hints: [],
    solutionSteps: [],
    commonMistakes: [],
  };

  test('grades correct numeric answer', () => {
    const result = gradeAnswer(numericQuestion, '4');
    expect(result.correct).toBe(true);
    expect(result.feedback).toContain('Correct');
  });

  test('grades incorrect numeric answer', () => {
    const result = gradeAnswer(numericQuestion, '5');
    expect(result.correct).toBe(false);
    expect(result.feedback).toContain('Incorrect');
  });

  test('accepts Dutch comma notation', () => {
    const result = gradeAnswer(numericQuestion, '4,0');
    expect(result.correct).toBe(true);
  });

  test('grades numeric with correct unit', () => {
    const result = gradeAnswer(numericWithUnit, '5', 'm/s²');
    expect(result.correct).toBe(true);
  });

  test('grades numeric with wrong unit', () => {
    const result = gradeAnswer(numericWithUnit, '5', 'm/s');
    expect(result.correct).toBe(false);
    expect(result.feedback).toContain('unit is wrong');
  });

  test('requires unit when unitOptions present', () => {
    const result = gradeAnswer(numericWithUnit, '5');
    expect(result.correct).toBe(false);
    expect(result.feedback).toContain('select a unit');
  });

  test('grades correct MCQ answer', () => {
    const result = gradeAnswer(mcqQuestion, 'Option A');
    expect(result.correct).toBe(true);
  });

  test('grades incorrect MCQ answer', () => {
    const result = gradeAnswer(mcqQuestion, 'Option B');
    expect(result.correct).toBe(false);
  });

  test('MCQ grading is case-insensitive', () => {
    const result = gradeAnswer(mcqQuestion, 'option a');
    expect(result.correct).toBe(true);
  });

  test('handles invalid numeric input', () => {
    const result = gradeAnswer(numericQuestion, 'not a number');
    expect(result.correct).toBe(false);
    expect(result.feedback).toContain('valid number');
  });
});

describe('calculateAccuracy', () => {
  test('calculates percentage correctly', () => {
    expect(calculateAccuracy(8, 10)).toBe(80);
    expect(calculateAccuracy(3, 4)).toBe(75);
  });

  test('handles zero attempts', () => {
    expect(calculateAccuracy(0, 0)).toBe(0);
  });

  test('handles 100% accuracy', () => {
    expect(calculateAccuracy(10, 10)).toBe(100);
  });

  test('rounds to nearest integer', () => {
    expect(calculateAccuracy(1, 3)).toBe(33);
  });
});

describe('formatToleranceRange', () => {
  test('formats absolute tolerance', () => {
    const result = formatToleranceRange(5, { absolute: 0.1 });
    expect(result).toContain('4.90');
    expect(result).toContain('5.10');
  });

  test('formats relative tolerance', () => {
    const result = formatToleranceRange(100, { relative: 0.05 });
    expect(result).toContain('95.00');
    expect(result).toContain('105.00');
  });

  test('handles no tolerance', () => {
    const result = formatToleranceRange(42, {});
    expect(result).toBe('42');
  });
});

describe('getDifficultyLabel', () => {
  test('returns English labels by default', () => {
    expect(getDifficultyLabel(1)).toBe('Basic');
    expect(getDifficultyLabel(2)).toBe('Intermediate');
    expect(getDifficultyLabel(3)).toBe('Advanced');
  });

  test('returns English labels when language is en', () => {
    expect(getDifficultyLabel(1, 'en')).toBe('Basic');
    expect(getDifficultyLabel(2, 'en')).toBe('Intermediate');
    expect(getDifficultyLabel(3, 'en')).toBe('Advanced');
  });

  test('returns Dutch labels when language is nl', () => {
    expect(getDifficultyLabel(1, 'nl')).toBe('Basis');
    expect(getDifficultyLabel(2, 'nl')).toBe('Gemiddeld');
    expect(getDifficultyLabel(3, 'nl')).toBe('Gevorderd');
  });
});

describe('gradeAnswer - language support', () => {
  const numericQuestion: Question = {
    id: 'lang-test-1',
    topic: 'forces-newton',
    difficulty: 1,
    prompt: 'Test question',
    answerType: 'numeric',
    correctAnswer: 5,
    tolerance: { absolute: 0.1 },
    hints: [],
    solutionSteps: [],
    commonMistakes: [],
  };

  const numericWithUnit: Question = {
    ...numericQuestion,
    id: 'lang-test-2',
    unitOptions: ['m/s²', 'm/s', 'N'],
    correctUnit: 'm/s²',
  };

  test('returns Dutch feedback for correct answer', () => {
    const result = gradeAnswer(numericQuestion, '5', undefined, 'nl');
    expect(result.correct).toBe(true);
    expect(result.feedback).toBe('Goed!');
  });

  test('returns Dutch feedback for incorrect answer', () => {
    const result = gradeAnswer(numericQuestion, '10', undefined, 'nl');
    expect(result.correct).toBe(false);
    expect(result.feedback).toContain('Fout');
    expect(result.feedback).toContain('5');
  });

  test('returns Dutch feedback for missing unit', () => {
    const result = gradeAnswer(numericWithUnit, '5', undefined, 'nl');
    expect(result.correct).toBe(false);
    expect(result.feedback).toContain('eenheid');
  });

  test('returns Dutch feedback for wrong unit', () => {
    const result = gradeAnswer(numericWithUnit, '5', 'm/s', 'nl');
    expect(result.correct).toBe(false);
    expect(result.feedback).toContain('eenheid is fout');
  });

  test('returns Dutch feedback for invalid number', () => {
    const result = gradeAnswer(numericQuestion, 'abc', undefined, 'nl');
    expect(result.correct).toBe(false);
    expect(result.feedback).toContain('geldig getal');
  });

  test('returns English feedback for correct answer', () => {
    const result = gradeAnswer(numericQuestion, '5', undefined, 'en');
    expect(result.correct).toBe(true);
    expect(result.feedback).toBe('Correct!');
  });

  test('returns English feedback for incorrect answer', () => {
    const result = gradeAnswer(numericQuestion, '10', undefined, 'en');
    expect(result.correct).toBe(false);
    expect(result.feedback).toContain('Incorrect');
  });
});

describe('parseNumericInput - Dutch notation edge cases', () => {
  test('parses Dutch comma with multiple digits after', () => {
    expect(parseNumericInput('3,14159')).toBeCloseTo(3.14159);
  });

  test('parses Dutch comma with large numbers', () => {
    expect(parseNumericInput('1000,5')).toBeCloseTo(1000.5);
  });

  test('handles Dutch negative decimal', () => {
    expect(parseNumericInput('-3,5')).toBeCloseTo(-3.5);
  });

  test('parses zero with comma', () => {
    expect(parseNumericInput('0,5')).toBeCloseTo(0.5);
  });

  test('parses comma without leading zero', () => {
    // This is common Dutch input style
    expect(parseNumericInput(',5')).toBeCloseTo(0.5);
  });

  test('handles mixed whitespace and comma', () => {
    expect(parseNumericInput(' 3,5 ')).toBeCloseTo(3.5);
  });

  test('parses Dutch thousands with space and comma decimal', () => {
    // 1 234,5 in Dutch notation
    expect(parseNumericInput('1 234,5')).toBeCloseTo(1234.5);
  });
});

describe('areUnitsConvertible', () => {
  test('W and kW are convertible', () => {
    expect(areUnitsConvertible('W', 'kW')).toBe(true);
    expect(areUnitsConvertible('kW', 'W')).toBe(true);
  });

  test('J and kJ are convertible', () => {
    expect(areUnitsConvertible('J', 'kJ')).toBe(true);
    expect(areUnitsConvertible('kJ', 'J')).toBe(true);
  });

  test('Pa and kPa are convertible', () => {
    expect(areUnitsConvertible('Pa', 'kPa')).toBe(true);
    expect(areUnitsConvertible('kPa', 'Pa')).toBe(true);
  });

  test('m, cm, km are convertible', () => {
    expect(areUnitsConvertible('m', 'cm')).toBe(true);
    expect(areUnitsConvertible('m', 'km')).toBe(true);
    expect(areUnitsConvertible('cm', 'km')).toBe(true);
  });

  test('W and J are not convertible (different quantities)', () => {
    expect(areUnitsConvertible('W', 'J')).toBe(false);
  });

  test('unknown units are not convertible', () => {
    expect(areUnitsConvertible('W', 'xyz')).toBe(false);
  });
});

describe('convertValue', () => {
  test('converts kW to W', () => {
    expect(convertValue(1, 'kW', 'W')).toBe(1000);
    expect(convertValue(2.5, 'kW', 'W')).toBe(2500);
  });

  test('converts W to kW', () => {
    expect(convertValue(1000, 'W', 'kW')).toBe(1);
    expect(convertValue(500, 'W', 'kW')).toBe(0.5);
  });

  test('converts kJ to J', () => {
    expect(convertValue(1, 'kJ', 'J')).toBe(1000);
    expect(convertValue(3.5, 'kJ', 'J')).toBe(3500);
  });

  test('converts J to kJ', () => {
    expect(convertValue(2000, 'J', 'kJ')).toBe(2);
  });

  test('converts kPa to Pa', () => {
    expect(convertValue(1, 'kPa', 'Pa')).toBe(1000);
  });

  test('converts cm to m', () => {
    expect(convertValue(100, 'cm', 'm')).toBe(1);
  });

  test('converts g to kg', () => {
    expect(convertValue(1000, 'g', 'kg')).toBe(1);
  });

  test('same unit returns same value', () => {
    expect(convertValue(42, 'W', 'W')).toBe(42);
  });

  test('non-convertible units return null', () => {
    expect(convertValue(100, 'W', 'J')).toBeNull();
  });
});

describe('gradeAnswer - unit conversion', () => {
  const powerQuestion: Question = {
    id: 'power-test',
    topic: 'power',
    difficulty: 1,
    prompt: 'Calculate the power',
    answerType: 'numeric',
    correctAnswer: 1000,
    correctUnit: 'W',
    unitOptions: ['W', 'kW', 'J'],
    tolerance: { absolute: 1 },
    hints: [],
    solutionSteps: [],
    commonMistakes: [],
  };

  const energyQuestion: Question = {
    id: 'energy-test',
    topic: 'energy-work',
    difficulty: 1,
    prompt: 'Calculate the energy',
    answerType: 'numeric',
    correctAnswer: 2000,
    correctUnit: 'J',
    unitOptions: ['J', 'kJ', 'W'],
    tolerance: { absolute: 1 },
    hints: [],
    solutionSteps: [],
    commonMistakes: [],
  };

  test('accepts correct answer in kW when W is expected', () => {
    const result = gradeAnswer(powerQuestion, '1', 'kW');
    expect(result.correct).toBe(true);
  });

  test('accepts correct answer in W when W is expected', () => {
    const result = gradeAnswer(powerQuestion, '1000', 'W');
    expect(result.correct).toBe(true);
  });

  test('rejects wrong value in kW', () => {
    const result = gradeAnswer(powerQuestion, '2', 'kW');
    expect(result.correct).toBe(false);
  });

  test('accepts correct answer in kJ when J is expected', () => {
    const result = gradeAnswer(energyQuestion, '2', 'kJ');
    expect(result.correct).toBe(true);
  });

  test('accepts correct answer in J when J is expected', () => {
    const result = gradeAnswer(energyQuestion, '2000', 'J');
    expect(result.correct).toBe(true);
  });

  test('rejects non-convertible unit with correct numeric value', () => {
    // 1000 W is correct, but answering 1000 J is wrong (different quantity)
    const result = gradeAnswer(powerQuestion, '1000', 'J');
    expect(result.correct).toBe(false);
  });
});

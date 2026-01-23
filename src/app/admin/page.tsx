'use client';

import { useEffect, useState } from 'react';
import { Question, TOPICS, TopicId, Difficulty, LocalisedString } from '@/lib/types';
import { loadQuestions, saveQuestions } from '@/lib/storage';
import { useLanguage, topicNames } from '@/lib/i18n';

// Admin passcode from environment variable
const ADMIN_PASSCODE = process.env.NEXT_PUBLIC_ADMIN_PASSCODE || 'physics2024';

// Helper to get display text from LocalisedString
function getDisplayText(text: LocalisedString, language: 'en' | 'nl' = 'en'): string {
  if (typeof text === 'string') return text;
  return text[language] || text.en || '';
}

// Helper to get difficulty label with i18n
function getDifficultyLabelI18n(difficulty: 1 | 2 | 3, t: (key: string) => string): string {
  switch (difficulty) {
    case 1: return t('difficulty.basic');
    case 2: return t('difficulty.intermediate');
    case 3: return t('difficulty.advanced');
    default: return 'Unknown';
  }
}

export default function AdminPage() {
  const { t, language } = useLanguage();
  const [authenticated, setAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<TopicId | 'all'>('all');
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if already authenticated in session
    const auth = sessionStorage.getItem('admin-auth');
    if (auth === 'true') {
      setAuthenticated(true);
      setQuestions(loadQuestions());
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === ADMIN_PASSCODE) {
      setAuthenticated(true);
      sessionStorage.setItem('admin-auth', 'true');
      setQuestions(loadQuestions());
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    sessionStorage.removeItem('admin-auth');
    setPasscode('');
  };

  const handleExport = () => {
    const data = JSON.stringify({ questions }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `physics-questions-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data.questions && Array.isArray(data.questions)) {
          setQuestions(data.questions);
          saveQuestions(data.questions);
          alert(language === 'nl' ? 'Vragen succesvol geïmporteerd!' : 'Questions imported successfully!');
        } else {
          alert(language === 'nl' ? 'Ongeldig bestandsformaat' : 'Invalid file format');
        }
      } catch {
        alert(language === 'nl' ? 'Fout bij het lezen van bestand' : 'Error parsing file');
      }
    };
    reader.readAsText(file);
  };

  const handleDelete = (questionId: string) => {
    const confirmMsg = language === 'nl'
      ? 'Weet je zeker dat je deze vraag wilt verwijderen?'
      : 'Are you sure you want to delete this question?';
    if (!confirm(confirmMsg)) return;

    const newQuestions = questions.filter((q) => q.id !== questionId);
    setQuestions(newQuestions);
    saveQuestions(newQuestions);
  };

  const handleSaveQuestion = (question: Question) => {
    let newQuestions: Question[];

    if (isCreating) {
      newQuestions = [...questions, question];
    } else {
      newQuestions = questions.map((q) =>
        q.id === question.id ? question : q
      );
    }

    setQuestions(newQuestions);
    saveQuestions(newQuestions);
    setEditingQuestion(null);
    setIsCreating(false);
  };

  const startCreate = () => {
    setIsCreating(true);
    setEditingQuestion({
      id: `custom-${Date.now()}`,
      topic: 'forces-newton',
      difficulty: 1,
      prompt: { en: '', nl: '' },
      answerType: 'numeric',
      correctAnswer: '',
      hints: [{ en: '', nl: '' }, { en: '', nl: '' }, { en: '', nl: '' }],
      solutionSteps: [{ en: '', nl: '' }],
      commonMistakes: [{ en: '', nl: '' }],
    });
  };

  if (!mounted) {
    return <div className="animate-pulse h-96 bg-slate-200 rounded-xl"></div>;
  }

  // Login form
  if (!authenticated) {
    return (
      <div className="max-w-sm mx-auto py-12">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h1 className="text-xl font-bold text-slate-800 mb-4 text-center">
            {t('admin.title')}
          </h1>
          <p className="text-sm text-slate-600 mb-6 text-center">
            {t('admin.enterPasscode')}
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder={t('admin.passcode')}
              className={`w-full px-4 py-3 border-2 rounded-lg mb-4 ${
                passcodeError
                  ? 'border-red-300 focus:border-red-500'
                  : 'border-slate-200 focus:border-primary-500'
              }`}
            />
            {passcodeError && (
              <p className="text-sm text-red-600 mb-4">{t('admin.incorrectPasscode')}</p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              {t('admin.login')}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Filter questions by topic
  const filteredQuestions = selectedTopic === 'all'
    ? questions
    : questions.filter((q) => q.topic === selectedTopic);

  // Question editor modal
  if (editingQuestion) {
    return (
      <QuestionEditor
        question={editingQuestion}
        isCreating={isCreating}
        onSave={handleSaveQuestion}
        onCancel={() => {
          setEditingQuestion(null);
          setIsCreating(false);
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">{t('admin.questionBank')}</h1>
          <p className="text-slate-600">{questions.length} {t('admin.questionsTotal')}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={startCreate}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            {t('admin.addQuestion')}
          </button>
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            {t('admin.exportJson')}
          </button>
          <label className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">
            {t('admin.importJson')}
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </label>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
          >
            {t('admin.logout')}
          </button>
        </div>
      </div>

      {/* Topic Filter */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setSelectedTopic('all')}
          className={`px-3 py-1.5 rounded-full text-sm ${
            selectedTopic === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          {t('admin.all')} ({questions.length})
        </button>
        {TOPICS.map((topic) => {
          const count = questions.filter((q) => q.topic === topic.id).length;
          const topicName = topicNames[topic.id]?.[language] || topic.name;
          return (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={`px-3 py-1.5 rounded-full text-sm ${
                selectedTopic === topic.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {topic.icon} {topicName} ({count})
            </button>
          );
        })}
      </div>

      {/* Questions List */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">
                {t('admin.id')}
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">
                {t('admin.topic')}
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">
                {t('admin.difficulty')}
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">
                {t('admin.type')}
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">
                {t('admin.questionCol')}
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">
                {t('admin.actions')}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredQuestions.map((question) => (
              <tr key={question.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-sm text-slate-500 font-mono">
                  {question.id}
                </td>
                <td className="px-4 py-3 text-sm">
                  {TOPICS.find((t) => t.id === question.topic)?.icon}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      question.difficulty === 1
                        ? 'bg-green-100 text-green-700'
                        : question.difficulty === 2
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {getDifficultyLabelI18n(question.difficulty, t)}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-slate-500">
                  {question.answerType}
                </td>
                <td className="px-4 py-3 text-sm text-slate-700 max-w-md truncate">
                  {getDisplayText(question.prompt, language)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingQuestion(question)}
                      className="text-sm text-primary-600 hover:text-primary-700"
                    >
                      {t('admin.edit')}
                    </button>
                    <button
                      onClick={() => handleDelete(question.id)}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      {t('admin.delete')}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Question Editor Component with bilingual support
interface QuestionEditorProps {
  question: Question;
  isCreating: boolean;
  onSave: (question: Question) => void;
  onCancel: () => void;
}

// Helper to extract EN text from LocalisedString
function getEnText(text: LocalisedString): string {
  if (typeof text === 'string') return text;
  return text.en || '';
}

// Helper to extract NL text from LocalisedString
function getNlText(text: LocalisedString): string {
  if (typeof text === 'string') return '';
  return text.nl || '';
}

// Convert array of LocalisedString to newline-separated EN text
function getEnArrayText(arr: LocalisedString[]): string {
  return arr.map(getEnText).join('\n');
}

// Convert array of LocalisedString to newline-separated NL text
function getNlArrayText(arr: LocalisedString[]): string {
  return arr.map(getNlText).join('\n');
}

function QuestionEditor({ question, isCreating, onSave, onCancel }: QuestionEditorProps) {
  const { t, language } = useLanguage();

  // Form state for basic fields
  const [topic, setTopic] = useState<TopicId>(question.topic);
  const [difficulty, setDifficulty] = useState<Difficulty>(question.difficulty);
  const [answerType, setAnswerType] = useState(question.answerType);
  const [correctAnswer, setCorrectAnswer] = useState(String(question.correctAnswer));
  const [correctUnit, setCorrectUnit] = useState(question.correctUnit || '');
  const [toleranceAbsolute, setToleranceAbsolute] = useState(question.tolerance?.absolute?.toString() || '');
  const [unitOptions, setUnitOptions] = useState((question.unitOptions || []).join(', '));
  const [dutchKeywords, setDutchKeywords] = useState((question.dutchKeywords || []).join(', '));

  // Bilingual text fields
  const [promptEn, setPromptEn] = useState(getEnText(question.prompt));
  const [promptNl, setPromptNl] = useState(getNlText(question.prompt));
  const [choicesEn, setChoicesEn] = useState(getEnArrayText(question.choices || []));
  const [choicesNl, setChoicesNl] = useState(getNlArrayText(question.choices || []));
  const [hintsEn, setHintsEn] = useState(getEnArrayText(question.hints));
  const [hintsNl, setHintsNl] = useState(getNlArrayText(question.hints));
  const [solutionStepsEn, setSolutionStepsEn] = useState(getEnArrayText(question.solutionSteps));
  const [solutionStepsNl, setSolutionStepsNl] = useState(getNlArrayText(question.solutionSteps));
  const [commonMistakesEn, setCommonMistakesEn] = useState(getEnArrayText(question.commonMistakes));
  const [commonMistakesNl, setCommonMistakesNl] = useState(getNlArrayText(question.commonMistakes));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build bilingual arrays
    const enHints = hintsEn.split('\n').filter(h => h.trim()).slice(0, 3);
    const nlHints = hintsNl.split('\n').filter(h => h.trim()).slice(0, 3);
    const maxHints = Math.max(enHints.length, nlHints.length);
    const hints: LocalisedString[] = [];
    for (let i = 0; i < maxHints; i++) {
      hints.push({ en: enHints[i] || '', nl: nlHints[i] || '' });
    }

    const enSteps = solutionStepsEn.split('\n').filter(s => s.trim());
    const nlSteps = solutionStepsNl.split('\n').filter(s => s.trim());
    const maxSteps = Math.max(enSteps.length, nlSteps.length);
    const solutionSteps: LocalisedString[] = [];
    for (let i = 0; i < maxSteps; i++) {
      solutionSteps.push({ en: enSteps[i] || '', nl: nlSteps[i] || '' });
    }

    const enMistakes = commonMistakesEn.split('\n').filter(m => m.trim());
    const nlMistakes = commonMistakesNl.split('\n').filter(m => m.trim());
    const maxMistakes = Math.max(enMistakes.length, nlMistakes.length);
    const commonMistakes: LocalisedString[] = [];
    for (let i = 0; i < maxMistakes; i++) {
      commonMistakes.push({ en: enMistakes[i] || '', nl: nlMistakes[i] || '' });
    }

    // Build choices for MCQ
    let choices: LocalisedString[] | undefined;
    if (answerType === 'mcq') {
      const enChoices = choicesEn.split('\n').filter(c => c.trim());
      const nlChoices = choicesNl.split('\n').filter(c => c.trim());
      const maxChoices = Math.max(enChoices.length, nlChoices.length);
      choices = [];
      for (let i = 0; i < maxChoices; i++) {
        choices.push({ en: enChoices[i] || '', nl: nlChoices[i] || '' });
      }
    }

    const newQuestion: Question = {
      id: question.id,
      topic,
      difficulty,
      prompt: { en: promptEn, nl: promptNl },
      answerType,
      correctAnswer: answerType === 'numeric' ? parseFloat(correctAnswer) || correctAnswer : correctAnswer,
      hints,
      solutionSteps,
      commonMistakes,
      ...(choices && { choices }),
      ...(correctUnit && { correctUnit }),
      ...(toleranceAbsolute && { tolerance: { absolute: parseFloat(toleranceAbsolute) } }),
      ...(unitOptions && { unitOptions: unitOptions.split(',').map(s => s.trim()).filter(Boolean) }),
      ...(dutchKeywords && { dutchKeywords: dutchKeywords.split(',').map(s => s.trim()).filter(Boolean) }),
    };

    onSave(newQuestion);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-6">
          {isCreating ? t('admin.createQuestion') : t('admin.editQuestion')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t('admin.topic')}
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value as TopicId)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg"
              >
                {TOPICS.map((tp) => (
                  <option key={tp.id} value={tp.id}>
                    {tp.icon} {topicNames[tp.id]?.[language] || tp.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t('admin.difficulty')}
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(parseInt(e.target.value) as Difficulty)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg"
              >
                <option value={1}>{t('difficulty.basic')}</option>
                <option value={2}>{t('difficulty.intermediate')}</option>
                <option value={3}>{t('difficulty.advanced')}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t('admin.answerType')}
              </label>
              <select
                value={answerType}
                onChange={(e) => setAnswerType(e.target.value as 'mcq' | 'numeric' | 'text')}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg"
              >
                <option value="numeric">{t('question.numeric')}</option>
                <option value="mcq">{t('question.multipleChoice')}</option>
                <option value="text">Text</option>
              </select>
            </div>
          </div>

          {/* Question Prompt - Bilingual */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t('admin.questionPromptEn')} <span className="text-xs text-slate-400">(EN)</span>
              </label>
              <textarea
                value={promptEn}
                onChange={(e) => setPromptEn(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                placeholder="Enter the question in English..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t('admin.questionPromptNl')} <span className="text-xs text-slate-400">(NL)</span>
              </label>
              <textarea
                value={promptNl}
                onChange={(e) => setPromptNl(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                placeholder="Voer de vraag in het Nederlands in..."
              />
            </div>
          </div>

          {/* MCQ Choices - Bilingual */}
          {answerType === 'mcq' && (
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t('admin.choicesEn')} <span className="text-xs text-slate-400">(EN)</span>
                </label>
                <textarea
                  value={choicesEn}
                  onChange={(e) => setChoicesEn(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                  placeholder="Option A&#10;Option B&#10;Option C&#10;Option D"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t('admin.choicesNl')} <span className="text-xs text-slate-400">(NL)</span>
                </label>
                <textarea
                  value={choicesNl}
                  onChange={(e) => setChoicesNl(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                  placeholder="Optie A&#10;Optie B&#10;Optie C&#10;Optie D"
                />
              </div>
            </div>
          )}

          {/* Answer */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t('admin.correctAnswer')}
              </label>
              <input
                type="text"
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg"
              />
            </div>

            {answerType === 'numeric' && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t('admin.correctUnit')}
                </label>
                <input
                  type="text"
                  value={correctUnit}
                  onChange={(e) => setCorrectUnit(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                  placeholder="e.g., m/s², N, J"
                />
              </div>
            )}
          </div>

          {/* Tolerance */}
          {answerType === 'numeric' && (
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t('admin.absoluteTolerance')}
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={toleranceAbsolute}
                  onChange={(e) => setToleranceAbsolute(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                  placeholder="e.g., 0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  {t('admin.unitOptions')}
                </label>
                <input
                  type="text"
                  value={unitOptions}
                  onChange={(e) => setUnitOptions(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                  placeholder="e.g., m/s², m/s, N, kg"
                />
              </div>
            </div>
          )}

          {/* Hints - Bilingual */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t('admin.hintsEn')} <span className="text-xs text-slate-400">(EN)</span>
              </label>
              <textarea
                value={hintsEn}
                onChange={(e) => setHintsEn(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                placeholder="Hint 1&#10;Hint 2&#10;Hint 3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t('admin.hintsNl')} <span className="text-xs text-slate-400">(NL)</span>
              </label>
              <textarea
                value={hintsNl}
                onChange={(e) => setHintsNl(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                placeholder="Hint 1&#10;Hint 2&#10;Hint 3"
              />
            </div>
          </div>

          {/* Solution Steps - Bilingual */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t('admin.solutionStepsEn')} <span className="text-xs text-slate-400">(EN)</span>
              </label>
              <textarea
                value={solutionStepsEn}
                onChange={(e) => setSolutionStepsEn(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                placeholder="Step 1&#10;Step 2&#10;Step 3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t('admin.solutionStepsNl')} <span className="text-xs text-slate-400">(NL)</span>
              </label>
              <textarea
                value={solutionStepsNl}
                onChange={(e) => setSolutionStepsNl(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                placeholder="Stap 1&#10;Stap 2&#10;Stap 3"
              />
            </div>
          </div>

          {/* Common Mistakes - Bilingual */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t('admin.commonMistakesEn')} <span className="text-xs text-slate-400">(EN)</span>
              </label>
              <textarea
                value={commonMistakesEn}
                onChange={(e) => setCommonMistakesEn(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                placeholder="Common mistake 1&#10;Common mistake 2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t('admin.commonMistakesNl')} <span className="text-xs text-slate-400">(NL)</span>
              </label>
              <textarea
                value={commonMistakesNl}
                onChange={(e) => setCommonMistakesNl(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg"
                placeholder="Veelgemaakte fout 1&#10;Veelgemaakte fout 2"
              />
            </div>
          </div>

          {/* Dutch Keywords */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {t('admin.dutchKeywords')}
            </label>
            <input
              type="text"
              value={dutchKeywords}
              onChange={(e) => setDutchKeywords(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg"
              placeholder="kracht, massa, versnelling"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              {isCreating ? t('admin.create') : t('admin.saveChanges')}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200"
            >
              {t('dashboard.cancel')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

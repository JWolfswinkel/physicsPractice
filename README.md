# Physics Practice App - VWO 3

A web application to help Dutch secondary school students (VWO year 3, ages 14-15) practice physics with interactive questions and step-by-step explanations.

## Features

### Practice Mode
- Choose from 6 physics topics aligned with VWO-3 curriculum
- Mix of multiple choice and numeric input questions
- Progressive hint system ("I'm stuck" button with up to 3 hints)
- Immediate feedback with correct/incorrect indication
- Step-by-step worked solutions for every question
- Common mistakes highlighted to avoid pitfalls

### Smart Learning
- **Spaced Repetition**: Questions answered incorrectly appear more frequently
- **Mastery Tracking**: Master a question by answering it correctly 3 times in a row
- **Progress Dashboard**: See accuracy per topic, streak, and areas needing improvement
- **Recommended Topics**: Get suggestions based on your weakest areas

### Numeric Answer Handling
- Accepts both comma (3,5) and period (3.5) as decimal separators (Dutch-friendly)
- Configurable tolerance (absolute and/or relative)
- Unit selection and validation where applicable
- Handles scientific notation

### Admin/Teacher Mode
- Protected by passcode (configurable via environment variable)
- Create, edit, and delete questions via UI
- Export/import question bank as JSON
- Full control over all question properties

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Storage**: localStorage (MVP), easily extensible to database
- **Testing**: Jest with Testing Library

### Why This Stack?

1. **Next.js 14**: Modern React framework with excellent developer experience, built-in routing, and easy deployment options
2. **TypeScript**: Type safety for complex question data structures and grading logic
3. **Tailwind CSS**: Rapid UI development with utility classes, responsive by default
4. **localStorage**: Zero-config persistence for MVP, no backend needed
5. **Jest**: Industry-standard testing for the critical grading logic

## Topics Covered

| Topic | Dutch | Questions |
|-------|-------|-----------|
| Forces & Newton's Laws | Krachten en Newton's wetten | 10 |
| Energy & Work | Energie en arbeid | 10 |
| Power | Vermogen | 10 |
| Motion Graphs | Bewegingsdiagrammen | 10 |
| Density & Pressure | Dichtheid en druk | 10 |
| Electric Circuits | Elektrische schakelingen | 10 |

**Total: 60 questions** with varying difficulty levels (Basic, Intermediate, Advanced)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd physics-practice

# Install dependencies
npm install

# Copy environment file and configure
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file:

```env
# Admin passcode for teacher mode
NEXT_PUBLIC_ADMIN_PASSCODE=your-secure-passcode
```

### Running Tests

```bash
npm test
```

## Project Structure

```
physics-practice/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── topics/            # Topic selection
│   │   ├── practice/[topic]/  # Practice session
│   │   ├── dashboard/         # Progress dashboard
│   │   ├── admin/             # Teacher admin panel
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── QuestionCard.tsx   # Main question display
│   │   ├── MCQQuestion.tsx    # Multiple choice
│   │   ├── NumericQuestion.tsx# Numeric input
│   │   ├── HintSystem.tsx     # Progressive hints
│   │   └── SolutionView.tsx   # Step-by-step solution
│   ├── lib/                   # Core logic
│   │   ├── types.ts           # TypeScript definitions
│   │   ├── grading.ts         # Answer validation
│   │   └── storage.ts         # localStorage persistence
│   └── data/
│       └── questions.json     # Question bank (60 questions)
├── __tests__/
│   └── grading.test.ts        # Unit tests for grading
├── package.json
├── tailwind.config.js
└── README.md
```

## Question Format

Each question includes:

```typescript
{
  id: string;
  topic: TopicId;
  difficulty: 1 | 2 | 3;
  prompt: string;
  answerType: 'mcq' | 'numeric' | 'text';
  choices?: string[];           // For MCQ
  correctAnswer: string | number;
  tolerance?: {
    absolute?: number;
    relative?: number;
  };
  unitOptions?: string[];
  correctUnit?: string;
  hints: string[];              // Up to 3 progressive hints
  solutionSteps: string[];      // Step-by-step solution
  commonMistakes: string[];     // Common errors to avoid
  dutchKeywords?: string[];     // For searchability
}
```

## Architecture Decisions

### localStorage for MVP
- Zero backend complexity
- Works offline
- Easy to migrate to a database later (same data structures)
- User progress persists across sessions

### Client-Side Rendering
- Practice mode works entirely in browser
- No server roundtrips for grading
- Instant feedback

### Spaced Repetition (Simplified)
- Wrong answers → question added to "review" list
- Review questions appear first in next session
- 3 consecutive correct answers → "mastered"
- Mastered questions appear less frequently

### Tolerance System
- Numeric answers support absolute tolerance (±0.1)
- And/or relative tolerance (±5%)
- Passing either tolerance counts as correct

## Extending the App

### Adding Questions
1. Admin panel: Login at `/admin` with passcode
2. Or: Edit `src/data/questions.json` directly

### Adding Topics
1. Add topic to `TOPICS` array in `src/lib/types.ts`
2. Add corresponding stats in `DEFAULT_PROGRESS`
3. Create questions for the new topic

### Migrating to Database
1. Replace localStorage functions in `src/lib/storage.ts`
2. Add API routes for CRUD operations
3. Keep same TypeScript interfaces

## Contributing

1. Fork the repository
2. Create a feature branch
3. Run tests: `npm test`
4. Submit a pull request

## License

MIT

---

Built with care for Dutch physics students. Questions? Open an issue!
# physicsPractice
# physicsPractice

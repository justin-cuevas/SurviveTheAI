import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: 'Is your current job automatable by AI?',
    options: ['Yes', 'No', 'Not sure'],
    scores: [2, 0, 1],
  },
  {
    id: 2,
    question: 'How often do you use AI tools in your work?',
    options: ['Daily', 'Occasionally', 'Never'],
    scores: [0, 1, 2],
  },
  {
    id: 3,
    question: 'Do you feel confident adapting to new tech?',
    options: ['Very', 'Somewhat', 'Not at all'],
    scores: [0, 1, 2],
  },
];

export default function QuizBox() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index) => {
    const updated = [...answers];
    updated[step] = index;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const calculateScore = () => {
    return answers.reduce((total, answer, idx) => {
      return total + questions[idx].scores[answer];
    }, 0);
  };

  if (showResult) {
    const score = calculateScore();
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Your AI Risk Score</h2>
        <p className="mb-2">
          You scored <strong>{score}</strong> out of {questions.length * 2}.
        </p>
        <p className="text-sm text-gray-600">
          The higher your score, the more exposed you may be to AI disruption. Lower scores suggest resilience.
        </p>
      </div>
    );
  }

  const q = questions[step];

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-4">
      <h2 className="text-lg font-semibold">{q.question}</h2>
      <ul className="space-y-2">
        {q.options.map((opt, i) => (
          <li key={i}>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name={`q-${q.id}`}
                value={i}
                checked={answers[step] === i}
                onChange={() => handleSelect(i)}
                className="form-radio text-red-600"
              />
              <span>{opt}</span>
            </label>
          </li>
        ))}
      </ul>

      <div className="flex justify-between pt-4">
        <button
          onClick={handleBack}
          disabled={step === 0}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-semibold rounded"
        >
          {step === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}

'use client';

import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Loader2,
  RefreshCw,
  Star,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';

// ---------------------------------------------------------------------------
// Survey question definitions (mirrors the POC question types)
// ---------------------------------------------------------------------------
type Question =
  | { id: number; type: 'rating'; question: string; minLabel: string; maxLabel: string }
  | { id: number; type: 'choice'; question: string; options: string[] }
  | { id: number; type: 'text'; question: string };

const SURVEY_QUESTIONS: Question[] = [
  {
    id: 1,
    type: 'rating',
    question: 'How satisfied are you with our platform overall?',
    minLabel: 'Very dissatisfied',
    maxLabel: 'Very satisfied'
  },
  {
    id: 2,
    type: 'choice',
    question: 'How often do you participate in surveys?',
    options: ['Daily', 'Weekly', 'Monthly', 'Rarely', 'This is my first time']
  },
  {
    id: 3,
    type: 'choice',
    question: 'Which reward type do you prefer?',
    options: ['Cash (bank transfer)', 'Gift cards', 'Crypto / tokens', 'Donations to charity']
  },
  {
    id: 4,
    type: 'choice',
    question: 'How did you hear about SurveyStream?',
    options: ['Social media', 'Word of mouth', 'Search engine', 'Advertisement', 'Other']
  },
  {
    id: 5,
    type: 'text',
    question: 'One thing we could do better to improve your experience?'
  }
];

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------
interface MockSurveyProps {
  onClose: () => void;
  onComplete?: (txHash: string) => void;
  userId?: string;
  email?: string;
  tokens?: number;
  surveyTitle?: string;
  surveyId?: string;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function Stepper({ total, current }: { total: number; current: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-6">
      <div className="flex justify-between text-xs text-gray-400 mb-2">
        <span>Question {current} of {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function RatingQuestion({
  question,
  onAnswer
}: {
  question: Extract<Question, { type: 'rating' }>;
  onAnswer: (value: string) => void;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-6 leading-snug">{question.question}</h3>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onAnswer(star.toString())}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              className="bg-transparent border-none cursor-pointer p-2 transition-transform duration-150 hover:scale-125"
              aria-label={`Rate ${star} out of 5`}
            >
              <Star
                size={42}
                fill={star <= hovered ? '#f59e0b' : 'rgba(255,255,255,0.08)'}
                color={star <= hovered ? '#f59e0b' : 'rgba(255,255,255,0.25)'}
                strokeWidth={1.5}
              />
            </button>
          ))}
        </div>
        <div className="flex justify-between w-full text-xs text-gray-500 mt-1 px-2">
          <span>{question.minLabel}</span>
          <span>{question.maxLabel}</span>
        </div>
      </div>
    </div>
  );
}

function ChoiceQuestion({
  question,
  onAnswer
}: {
  question: Extract<Question, { type: 'choice' }>;
  onAnswer: (value: string) => void;
}) {
  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-6 leading-snug">{question.question}</h3>
      <div className="flex flex-col gap-2.5">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            className="w-full p-4 rounded-xl border border-white/10 bg-gray-800/60 text-gray-200 text-left flex justify-between items-center transition-all duration-200 hover:bg-blue-600/20 hover:border-blue-500/60 hover:text-white font-normal text-sm group"
          >
            <span>{option}</span>
            <ArrowRight size={15} className="opacity-0 group-hover:opacity-60 transition-opacity shrink-0 ml-2" />
          </button>
        ))}
      </div>
    </div>
  );
}

function TextQuestion({
  question,
  onAnswer
}: {
  question: Extract<Question, { type: 'text' }>;
  onAnswer: (value: string) => void;
}) {
  const [value, setValue] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value.trim()) onAnswer(value.trim());
      }}
    >
      <h3 className="text-xl font-bold text-white mb-6 leading-snug">{question.question}</h3>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type your answer here..."
        rows={4}
        autoFocus
        className="w-full p-4 rounded-xl border border-white/10 bg-gray-900/60 text-gray-100 text-sm resize-none mb-4 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all font-[inherit]"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02]"
      >
        Submit Feedback <ArrowRight size={16} />
      </button>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
export function MockSurvey({
  onClose,
  onComplete,
  userId = 'user-123',
  email = 'user@example.com',
  tokens = 500,
  surveyTitle = 'Survey',
  surveyId = 'survey-default'
}: MockSurveyProps) {
  const [step, setStep] = useState(0); // 0 = not started, shows intro
  const [answers, setAnswers] = useState<string[]>([]);
  const [status, setStatus] = useState<
    'intro' | 'questions' | 'submitting' | 'success' | 'error'
  >('intro');
  const [txHash, setTxHash] = useState<string | null>(null);
  const [blockExplorerUrl, setBlockExplorerUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isMock, setIsMock] = useState(false);

  const currentQuestion = SURVEY_QUESTIONS[step];
  const totalQuestions = SURVEY_QUESTIONS.length;

  // Auto-submit when all answers collected
  useEffect(() => {
    if (answers.length === totalQuestions && status === 'questions') {
      submitSurvey(answers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (step < totalQuestions - 1) {
      setStep(step + 1);
    }
    // If this was the last question, useEffect above will fire submit
  };

  const submitSurvey = async (finalAnswers: string[]) => {
    setStatus('submitting');
    try {
      const res = await fetch('/api/survey/record', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, email, surveyId })
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Submission failed');

      setTxHash(data.txHash);
      setBlockExplorerUrl(data.blockExplorerUrl);
      setIsMock(!!data.mock);
      setStatus('success');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unexpected error';
      setErrorMsg(message);
      setStatus('error');
    }
  };

  const handleClose = () => {
    if (status === 'success' && onComplete && txHash) {
      onComplete(txHash);
    } else {
      onClose();
    }
  };

  const handleRetry = () => {
    setStatus('submitting');
    setErrorMsg('');
    submitSurvey(answers);
  };

  // -------------------------------------------------------------------------
  // Render helpers
  // -------------------------------------------------------------------------
  const renderQuestion = () => {
    if (!currentQuestion) return null;
    if (currentQuestion.type === 'rating')
      return <RatingQuestion question={currentQuestion} onAnswer={handleAnswer} />;
    if (currentQuestion.type === 'choice')
      return <ChoiceQuestion question={currentQuestion} onAnswer={handleAnswer} />;
    if (currentQuestion.type === 'text')
      return <TextQuestion question={currentQuestion} onAnswer={handleAnswer} />;
  };

  // -------------------------------------------------------------------------
  // Overlay wrapper
  // -------------------------------------------------------------------------
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="bg-gray-900 border border-white/10 rounded-2xl w-full max-w-md shadow-2xl relative overflow-hidden">
        {/* Decorative gradient top bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500" />

        {/* Close button (not shown during submitting) */}
        {status !== 'submitting' && (
          <button
            onClick={handleClose}
            aria-label="Close survey"
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10"
          >
            <X size={20} />
          </button>
        )}

        <div className="p-7">
          {/* ---- INTRO ---- */}
          {status === 'intro' && (
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/15 mb-5">
                <Star size={32} className="text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{surveyTitle}</h2>
              <p className="text-gray-400 text-sm mb-1">
                {totalQuestions} questions · ~3 min
              </p>
              <p className="text-blue-400 font-semibold mb-7">
                Earn {tokens.toLocaleString()} tokens on completion
              </p>
              <p className="text-xs text-gray-500 mb-7">
                Your completion will be recorded on the Polygon blockchain for
                transparency and instant reward verification.
              </p>
              <button
                onClick={() => setStatus('questions')}
                id="start-survey-btn"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3.5 rounded-xl font-bold transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Start Survey <ArrowRight size={18} />
              </button>
            </div>
          )}

          {/* ---- QUESTIONS ---- */}
          {status === 'questions' && (
            <div>
              <Stepper total={totalQuestions} current={step + 1} />
              {renderQuestion()}
            </div>
          )}

          {/* ---- SUBMITTING / LOADING ---- */}
          {status === 'submitting' && (
            <div className="text-center py-8">
              <div className="relative inline-flex mb-6">
                <div className="h-20 w-20 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <RefreshCw size={24} className="text-blue-400 animate-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Recording on Blockchain</h3>
              <p className="text-gray-400 text-sm">
                Your answers are being written to the Polygon network…
              </p>
              <div className="mt-4 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0ms]" />
                <div className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:150ms]" />
                <div className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}

          {/* ---- SUCCESS ---- */}
          {status === 'success' && (
            <div className="text-center">
              {/* Animated success icon */}
              <div className="relative inline-flex items-center justify-center mb-5">
                <div className="h-20 w-20 rounded-full bg-emerald-500/15 flex items-center justify-center">
                  <CheckCircle size={40} className="text-emerald-400" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-emerald-500/30 animate-ping" style={{ animationDuration: '1.5s' }} />
              </div>

              <h2 className="text-2xl font-bold text-white mb-1">Survey Complete!</h2>
              <p className="text-gray-400 text-sm mb-5">
                Thank you for your feedback.
              </p>

              {/* Token reward badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 px-4 py-2 rounded-full mb-5">
                <Star size={16} className="text-blue-400" />
                <span className="text-blue-300 font-bold text-sm">
                  +{tokens.toLocaleString()} tokens added to your account
                </span>
              </div>

              {/* Blockchain record section */}
              {txHash && (
                <div className="mb-5 p-4 bg-emerald-500/8 rounded-xl border border-emerald-500/20">
                  <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    {isMock ? 'Demo transaction recorded' : 'Transaction confirmed on Polygon'}
                  </div>
                  <p className="text-xs font-mono text-gray-500 mb-3 truncate px-2">
                    {txHash}
                  </p>
                  {blockExplorerUrl && (
                    <a
                      href={blockExplorerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
                    >
                      View on PolygonScan <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              )}

              <button
                onClick={handleClose}
                id="close-survey-success-btn"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 hover:scale-[1.02]"
              >
                Back to Dashboard
              </button>
            </div>
          )}

          {/* ---- ERROR ---- */}
          {status === 'error' && (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-500/15 mb-5">
                <AlertCircle size={32} className="text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Submission Failed</h3>
              <p className="text-gray-400 text-sm mb-5">{errorMsg}</p>
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-4 py-3 rounded-xl font-semibold transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={handleRetry}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw size={15} /> Retry
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

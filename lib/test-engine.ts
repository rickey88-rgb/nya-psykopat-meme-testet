import { archetypes, type Question, type ResultKey, type ScoreDimension } from '@/lib/test-data';

export type AnswerMap = Record<string, string>;

export type ComputedResult = {
  totalDarkness: number;
  dominant: ScoreDimension;
  resultKey: ResultKey;
  progressPercent: number;
  profile: (typeof archetypes)[ResultKey];
};

export function computeResult(questions: Question[], answers: AnswerMap): ComputedResult {
  const dimensionScores: Record<ScoreDimension, number> = {
    sadisten: 0,
    slaktaren: 0,
    skuggregissoren: 0,
    asataren: 0,
    denIhalige: 0,
  };

  let totalDarkness = 0;

  for (const question of questions) {
    const answerId = answers[question.id];
    const option = question.options.find((entry) => entry.id === answerId);
    if (!option) continue;

    totalDarkness += option.darkness;
    (Object.keys(dimensionScores) as ScoreDimension[]).forEach((dimension) => {
      dimensionScores[dimension] += option.weights[dimension];
    });
  }

  const dominant = (Object.entries(dimensionScores).sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'denIhalige') as ScoreDimension;

  const maxPossibleDarkness = questions.reduce((sum, question) => {
    const best = question.options.reduce((highest, option) => Math.max(highest, option.darkness), 0);
    return sum + best;
  }, 0);

  const averageDimension = Object.values(dimensionScores).reduce((sum, value) => sum + value, 0) / Object.values(dimensionScores).length;
  const aboveAverageCount = Object.values(dimensionScores).filter((value) => value >= averageDimension * 0.92).length;
  const darknessRatio = maxPossibleDarkness > 0 ? totalDarkness / maxPossibleDarkness : 0;

  let resultKey: ResultKey = dominant;

  if (darknessRatio >= 0.84 && aboveAverageCount >= 4) {
    resultKey = 'antikrist';
  }

  return {
    totalDarkness,
    dominant,
    resultKey,
    progressPercent: Math.max(12, Math.min(100, Math.round(darknessRatio * 100))),
    profile: archetypes[resultKey],
  };
}

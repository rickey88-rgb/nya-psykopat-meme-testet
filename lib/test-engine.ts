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

  const maxPossibleDarkness = questions.reduce((sum, question) => {
    const best = question.options.reduce((highest, option) => Math.max(highest, option.darkness), 0);
    return sum + best;
  }, 0);

  const maxByDimension: Record<ScoreDimension, number> = {
    sadisten: 0,
    slaktaren: 0,
    skuggregissoren: 0,
    asataren: 0,
    denIhalige: 0,
  };

  for (const question of questions) {
    (Object.keys(maxByDimension) as ScoreDimension[]).forEach((dimension) => {
      maxByDimension[dimension] += question.options.reduce(
        (highest, option) => Math.max(highest, option.weights[dimension]),
        0
      );
    });
  }

  const normalizedScores: Record<ScoreDimension, number> = {
    sadisten: dimensionScores.sadisten / Math.max(1, maxByDimension.sadisten),
    slaktaren: dimensionScores.slaktaren / Math.max(1, maxByDimension.slaktaren),
    skuggregissoren: dimensionScores.skuggregissoren / Math.max(1, maxByDimension.skuggregissoren),
    asataren: dimensionScores.asataren / Math.max(1, maxByDimension.asataren),
    denIhalige: dimensionScores.denIhalige / Math.max(1, maxByDimension.denIhalige),
  };

  const dominant = (
    Object.entries(normalizedScores).sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'denIhalige'
  ) as ScoreDimension;

  const darknessRatio = maxPossibleDarkness > 0 ? totalDarkness / maxPossibleDarkness : 0;
  const aboveAverageCount = Object.values(normalizedScores).filter((value) => value >= 0.62).length;

  let resultKey: ResultKey = dominant;

  // Full pott eller nästan full pott = alltid Antikrist
  if (darknessRatio >= 0.95) {
    resultKey = 'antikrist';
  } else if (darknessRatio >= 0.84 && aboveAverageCount >= 4) {
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
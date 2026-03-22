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

  let resultKey: ResultKey;

  // Huvudresultatet ska nu styras av severity, inte av gammal archetype-logik.
  if (darknessRatio >= 0.92 || (darknessRatio >= 0.82 && aboveAverageCount >= 4)) {
    resultKey = 'antikrist'; // Apex Psychopathy Profile
  } else if (darknessRatio >= 0.68) {
    resultKey = 'denIhalige'; // Dark Triad Profile
  } else if (darknessRatio >= 0.52) {
    resultKey = 'asataren'; // Manipulative Profile
  } else if (darknessRatio >= 0.36) {
    resultKey = 'skuggregissoren'; // Emotionally Cold
  } else if (darknessRatio >= 0.2) {
    resultKey = 'slaktaren'; // Mild Red Flags
  } else {
    resultKey = 'sadisten'; // Within Normal Range
  }

  return {
    totalDarkness,
    dominant,
    resultKey,
    progressPercent: Math.max(12, Math.min(100, Math.round(darknessRatio * 100))),
    profile: archetypes[resultKey],
  };
}
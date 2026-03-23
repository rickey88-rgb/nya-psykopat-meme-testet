export type ResultKey = 'antikrist' | 'sadisten' | 'slaktaren' | 'skuggregissoren' | 'asataren' | 'denIhalige';
export type ScoreDimension = Exclude<ResultKey, 'antikrist'>;
export type QuestionType = 'scale' | 'scenario' | 'forced';

export type QuestionOption = {
  id: string;
  label: string;
  darkness: number;
  weights: Record<ScoreDimension, number>;
};

export type Question = {
  id: string;
  prompt: string;
  type: QuestionType;
  options: QuestionOption[];
};

export type ResultProfile = {
  key: ResultKey;
  title: string;
  tag: string;
  intro: string;
  main: string[];
  darkest: string;
  hidden: string;
  danger: string;
  truth: string;
  share: string;
};

const w = (
  _darkness: number,
  sadisten: number,
  slaktaren: number,
  skuggregissoren: number,
  asataren: number,
  denIhalige: number,
): QuestionOption['weights'] => ({
  sadisten,
  slaktaren,
  skuggregissoren,
  asataren,
  denIhalige,
});

export const questions: Question[] = [
  {
    id: 'q01',
    type: 'scale',
    prompt: 'Have you noticed that you often understand the villain more than the hero?',
    options: [
      { id: 'a', label: 'Not at all', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'A little more than I should', darkness: 1, weights: w(1, 0, 0, 1, 0, 1) },
      { id: 'c', label: 'Pretty often', darkness: 2, weights: w(2, 0, 0, 2, 0, 1) },
      { id: 'd', label: 'Almost always', darkness: 3, weights: w(3, 0, 0, 2, 0, 2) },
    ],
  },
  {
    id: 'q02',
    type: 'forced',
    prompt: 'What feels most like power?',
    options: [
      { id: 'a', label: 'Making someone trust you', darkness: 1, weights: w(1, 0, 0, 3, 1, 0) },
      { id: 'b', label: 'Making someone fear you', darkness: 2, weights: w(2, 2, 1, 0, 0, 0) },
      { id: 'c', label: 'Being able to leave someone completely empty', darkness: 3, weights: w(3, 1, 0, 0, 0, 3) },
      { id: 'd', label: 'Controlling everything without anyone noticing', darkness: 3, weights: w(3, 0, 0, 4, 1, 1) },
    ],
  },
  {
    id: 'q03',
    type: 'scale',
    prompt: 'People who trust you blindly usually feel like…',
    options: [
      { id: 'a', label: 'Something beautiful', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Something fragile', darkness: 1, weights: w(1, 0, 0, 1, 0, 1) },
      { id: 'c', label: 'Something useful', darkness: 2, weights: w(2, 0, 0, 3, 1, 0) },
      { id: 'd', label: 'Something that’s almost asking to be exploited', darkness: 3, weights: w(3, 1, 0, 3, 2, 1) },
    ],
  },
  {
    id: 'q04',
    type: 'scenario',
    prompt: 'If someone stood between you and the exact life you want — what would you do?',
    options: [
      { id: 'a', label: 'Back off immediately', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Try to find another way', darkness: 1, weights: w(1, 0, 0, 1, 0, 0) },
      { id: 'c', label: 'Do what it takes', darkness: 2, weights: w(2, 0, 1, 1, 1, 1) },
      { id: 'd', label: 'Take what I wanted without hesitating', darkness: 3, weights: w(3, 1, 2, 1, 1, 2) },
    ],
  },
  {
    id: 'q05',
    type: 'scale',
    prompt: 'Have you ever felt like some people almost deserve to be exploited?',
    options: [
      { id: 'a', label: 'Never', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Once or twice', darkness: 1, weights: w(1, 0, 0, 1, 1, 0) },
      { id: 'c', label: 'More often than I want to admit', darkness: 2, weights: w(2, 0, 0, 2, 2, 0) },
      { id: 'd', label: 'Yes, almost obviously', darkness: 3, weights: w(3, 1, 0, 2, 3, 1) },
    ],
  },
  {
    id: 'q06',
    type: 'forced',
    prompt: 'What bothers you the least?',
    options: [
      { id: 'a', label: 'Being hated', darkness: 1, weights: w(1, 0, 1, 0, 0, 1) },
      { id: 'b', label: 'Being powerless', darkness: 2, weights: w(2, 1, 1, 1, 0, 1) },
      { id: 'c', label: 'Watching someone else break down', darkness: 2, weights: w(2, 2, 0, 0, 0, 1) },
      { id: 'd', label: 'Feeling too much', darkness: 3, weights: w(3, 0, 0, 1, 0, 3) },
    ],
  },
  {
    id: 'q07',
    type: 'scale',
    prompt: 'Have you ever enjoyed, even a little, watching someone else get humiliated?',
    options: [
      { id: 'a', label: 'No', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'A little', darkness: 1, weights: w(1, 1, 0, 0, 0, 0) },
      { id: 'c', label: 'More than I should', darkness: 2, weights: w(2, 3, 0, 0, 0, 0) },
      { id: 'd', label: 'Yes, without a problem', darkness: 3, weights: w(3, 4, 0, 0, 0, 1) },
    ],
  },
  {
    id: 'q08',
    type: 'scenario',
    prompt: 'When someone breaks down in front of you, what happens first inside you?',
    options: [
      { id: 'a', label: 'I want to help', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'I mostly feel uncomfortable', darkness: 1, weights: w(1, 0, 0, 0, 0, 1) },
      { id: 'c', label: 'I become strangely calm', darkness: 2, weights: w(2, 1, 0, 1, 0, 2) },
      { id: 'd', label: 'Something darker wakes up', darkness: 3, weights: w(3, 3, 1, 0, 0, 2) },
    ],
  },
  {
    id: 'q09',
    type: 'scale',
    prompt: 'Have you ever wanted to push a little further just to see how much someone can take?',
    options: [
      { id: 'a', label: 'Never', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Once or twice', darkness: 1, weights: w(1, 1, 0, 0, 0, 0) },
      { id: 'c', label: 'Yes, pretty often', darkness: 2, weights: w(2, 3, 1, 0, 0, 0) },
      { id: 'd', label: 'Yes, it says more than words ever could', darkness: 3, weights: w(3, 4, 1, 0, 0, 0) },
    ],
  },
  {
    id: 'q10',
    type: 'forced',
    prompt: 'What sounds most like you when you really want something?',
    options: [
      { id: 'a', label: 'I make people want the same thing', darkness: 2, weights: w(2, 0, 0, 3, 0, 0) },
      { id: 'b', label: 'I wait for the right weakness', darkness: 2, weights: w(2, 0, 0, 1, 3, 0) },
      { id: 'c', label: 'I shut off and go for it', darkness: 3, weights: w(3, 0, 2, 0, 0, 3) },
      { id: 'd', label: 'I see how far I can push', darkness: 3, weights: w(3, 3, 1, 0, 0, 1) },
    ],
  },
  {
    id: 'q11',
    type: 'scenario',
    prompt: 'If you could win big from someone else’s downfall, how would you react?',
    options: [
      { id: 'a', label: 'Not worth it', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'I’d hesitate for a long time', darkness: 1, weights: w(1, 0, 0, 0, 1, 0) },
      { id: 'c', label: 'I’d do it if nobody saw', darkness: 2, weights: w(2, 0, 1, 1, 2, 1) },
      { id: 'd', label: 'I’d take the win and move on', darkness: 3, weights: w(3, 0, 1, 0, 3, 2) },
    ],
  },
  {
    id: 'q12',
    type: 'scale',
    prompt: 'Have you ever felt that other people’s pain doesn’t bother you as much as it should?',
    options: [
      { id: 'a', label: 'No', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Sometimes', darkness: 1, weights: w(1, 0, 0, 0, 0, 1) },
      { id: 'c', label: 'Yes, pretty often', darkness: 2, weights: w(2, 1, 1, 0, 0, 2) },
      { id: 'd', label: 'No, almost not at all', darkness: 3, weights: w(3, 2, 1, 0, 0, 3) },
    ],
  },
  {
    id: 'q13',
    type: 'forced',
    prompt: 'What feels most true about rules?',
    options: [
      { id: 'a', label: 'They protect what matters', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'They exist until something bigger becomes tempting', darkness: 1, weights: w(1, 0, 1, 1, 0, 0) },
      { id: 'c', label: 'They’re mostly for weaker people', darkness: 2, weights: w(2, 1, 1, 1, 1, 1) },
      { id: 'd', label: 'They mean nothing if no one can stop you', darkness: 3, weights: w(3, 1, 2, 0, 1, 3) },
    ],
  },
  {
    id: 'q14',
    type: 'scale',
    prompt: 'Do you think fear is sometimes more beautiful than respect?',
    options: [
      { id: 'a', label: 'No', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Maybe in certain situations', darkness: 1, weights: w(1, 1, 0, 0, 0, 0) },
      { id: 'c', label: 'Yes, often', darkness: 2, weights: w(2, 2, 1, 0, 0, 0) },
      { id: 'd', label: 'Yes, fear speaks most clearly', darkness: 3, weights: w(3, 3, 1, 0, 0, 1) },
    ],
  },
  {
    id: 'q15',
    type: 'scenario',
    prompt: 'If someone publicly humiliated you, how dark could your revenge become?',
    options: [
      { id: 'a', label: 'I’d let it go', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'I’d get the last word', darkness: 1, weights: w(1, 0, 0, 1, 0, 0) },
      { id: 'c', label: 'I’d make sure they regretted it', darkness: 2, weights: w(2, 1, 2, 1, 0, 0) },
      { id: 'd', label: 'I’d want to leave something broken behind me', darkness: 3, weights: w(3, 2, 3, 0, 0, 1) },
    ],
  },
  {
    id: 'q16',
    type: 'scale',
    prompt: 'Is your conscience really strong — or have you just never been tempted enough?',
    options: [
      { id: 'a', label: 'My conscience is strong', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Depends on the price', darkness: 1, weights: w(1, 0, 0, 1, 0, 1) },
      { id: 'c', label: 'I think temptation is stronger than conscience', darkness: 2, weights: w(2, 0, 1, 0, 1, 2) },
      { id: 'd', label: 'Conscience is easy until darkness starts paying', darkness: 3, weights: w(3, 1, 1, 1, 1, 3) },
    ],
  },
  {
    id: 'q17',
    type: 'forced',
    prompt: 'What is worse?',
    options: [
      { id: 'a', label: 'Losing control', darkness: 1, weights: w(1, 0, 1, 0, 0, 1) },
      { id: 'b', label: 'Feeling guilt', darkness: 2, weights: w(2, 0, 0, 1, 0, 2) },
      { id: 'c', label: 'Standing there without the upper hand', darkness: 2, weights: w(2, 0, 1, 2, 1, 0) },
      { id: 'd', label: 'Feeling nothing at all', darkness: 3, weights: w(3, 0, 0, 0, 0, 4) },
    ],
  },
  {
    id: 'q18',
    type: 'scenario',
    prompt: 'If you knew no one would ever find out, how far would you go?',
    options: [
      { id: 'a', label: 'No further than I do now', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Further than I’d admit out loud', darkness: 1, weights: w(1, 0, 1, 1, 0, 1) },
      { id: 'c', label: 'Further than most people would want to believe', darkness: 2, weights: w(2, 1, 2, 0, 1, 1) },
      { id: 'd', label: 'Further than anything should ever go', darkness: 3, weights: w(3, 2, 2, 1, 1, 2) },
    ],
  },
  {
    id: 'q19',
    type: 'scale',
    prompt: 'Have you ever wanted to make someone tremble just to know that you could?',
    options: [
      { id: 'a', label: 'No', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'The thought has been there', darkness: 1, weights: w(1, 1, 0, 0, 0, 0) },
      { id: 'c', label: 'Yes, it says something about power', darkness: 2, weights: w(2, 3, 0, 0, 0, 0) },
      { id: 'd', label: 'Yes, and I know what that feels like', darkness: 3, weights: w(3, 4, 1, 0, 0, 0) },
    ],
  },
  {
    id: 'q20',
    type: 'forced',
    prompt: 'What feels most like you in the dark?',
    options: [
      { id: 'a', label: 'The smile before the betrayal', darkness: 2, weights: w(2, 0, 0, 4, 0, 0) },
      { id: 'b', label: 'The hunger for weakness', darkness: 2, weights: w(2, 0, 1, 0, 3, 0) },
      { id: 'c', label: 'The pleasure in the discomfort', darkness: 3, weights: w(3, 4, 0, 0, 0, 0) },
      { id: 'd', label: 'The emptiness where something human should be', darkness: 3, weights: w(3, 0, 0, 0, 0, 4) },
    ],
  },
  {
    id: 'q21',
    type: 'scenario',
    prompt: 'If blood was the price of becoming exactly who you want to be — would you pay it?',
    options: [
      { id: 'a', label: 'No', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'I’d try to avoid paying the price', darkness: 1, weights: w(1, 0, 0, 1, 1, 0) },
      { id: 'c', label: 'If the reward was big enough', darkness: 2, weights: w(2, 1, 2, 0, 1, 1) },
      { id: 'd', label: 'Yes, without looking back', darkness: 3, weights: w(3, 1, 3, 0, 1, 2) },
    ],
  },
  {
    id: 'q22',
    type: 'scale',
    prompt: 'How much blood would your perfect life be worth?',
    options: [
      { id: 'a', label: 'None', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Less than I think', darkness: 1, weights: w(1, 0, 1, 0, 0, 1) },
      { id: 'c', label: 'More than I’d admit', darkness: 2, weights: w(2, 0, 2, 0, 1, 1) },
      { id: 'd', label: 'As much as it took', darkness: 3, weights: w(3, 1, 3, 0, 1, 2) },
    ],
  },
  {
    id: 'q23',
    type: 'forced',
    prompt: 'What would stop you first?',
    options: [
      { id: 'a', label: 'Conscience', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Fear', darkness: 1, weights: w(1, 0, 0, 0, 0, 1) },
      { id: 'c', label: 'The risk of getting caught', darkness: 2, weights: w(2, 0, 1, 1, 0, 2) },
      { id: 'd', label: 'Nothing at all', darkness: 3, weights: w(3, 1, 2, 1, 1, 3) },
    ],
  },
  {
    id: 'q24',
    type: 'scenario',
    prompt: 'If you found out your partner’s life insurance payout was huge, what’s your first thought?',
    options: [
      { id: 'a', label: 'That’s disturbing. I really don’t want to think about that.', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Funerals are expensive… but as long as there’s money left over, I guess.', darkness: 2, weights: w(2, 0, 1, 1, 0, 1) },
      { id: 'c', label: 'I’ve already started wondering what color my new car should be.', darkness: 3, weights: w(3, 0, 1, 2, 1, 1) },
      { id: 'd', label: 'Grief is temporary. Leather seats are forever.', darkness: 4, weights: w(4, 1, 1, 2, 1, 2) },
    ],
  },
  {
    id: 'q25',
    type: 'scale',
    prompt: 'If no one could stop you, who would you become?',
    options: [
      { id: 'a', label: 'Someone better', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Someone darker than people think', darkness: 1, weights: w(1, 0, 0, 1, 0, 1) },
      { id: 'c', label: 'Someone other people would learn to fear', darkness: 2, weights: w(2, 1, 1, 0, 0, 1) },
      { id: 'd', label: 'Something the world never should have let loose', darkness: 4, weights: w(4, 1, 2, 1, 1, 3) },
    ],
  },
  {
    id: 'q26',
    type: 'scenario',
    prompt: 'If the price of everything you’ve ever wanted was half of humanity — would you pay it?',
    options: [
      { id: 'a', label: 'Never', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'I’d look for another way', darkness: 1, weights: w(1, 0, 0, 1, 0, 0) },
      { id: 'c', label: 'I’d hesitate, but I’d understand the temptation', darkness: 2, weights: w(2, 0, 1, 0, 1, 1) },
      { id: 'd', label: 'Yes, if it gave me everything', darkness: 4, weights: w(4, 1, 2, 1, 1, 3) },
    ],
  },
  {
    id: 'q27',
    type: 'forced',
    prompt: 'Which sounds closest to the truth?',
    options: [
      { id: 'a', label: 'I still have a line', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'My line moves when the reward does', darkness: 2, weights: w(2, 0, 1, 1, 1, 1) },
      { id: 'c', label: 'My line mostly exists for other people to believe in', darkness: 3, weights: w(3, 0, 1, 3, 1, 1) },
      { id: 'd', label: 'I don’t know if I even have a line anymore', darkness: 4, weights: w(4, 1, 2, 1, 1, 3) },
    ],
  },
  {
    id: 'q28',
    type: 'scale',
    prompt: 'Are you good — or just afraid of the consequences?',
    options: [
      { id: 'a', label: 'Good', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Mostly afraid of what it would do to others', darkness: 1, weights: w(1, 0, 0, 0, 0, 1) },
      { id: 'c', label: 'Maybe more afraid of the consequences than I thought', darkness: 2, weights: w(2, 0, 1, 0, 1, 1) },
      { id: 'd', label: 'Consequences are the only thing holding the darkness back', darkness: 4, weights: w(4, 1, 1, 1, 1, 3) },
    ],
  },
  {
    id: 'q29',
    type: 'scenario',
    prompt: 'If your perfect life cost someone else their last breath — would you take it?',
    options: [
      { id: 'a', label: 'No', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'I’d try to run from the choice', darkness: 1, weights: w(1, 0, 0, 0, 0, 1) },
      { id: 'c', label: 'I’d want to say no, but I’m not sure', darkness: 2, weights: w(2, 0, 1, 0, 1, 1) },
      { id: 'd', label: 'Yes, if it truly gave me everything', darkness: 4, weights: w(4, 1, 2, 0, 1, 3) },
    ],
  },
  {
    id: 'q30',
    type: 'forced',
    prompt: 'If the world gave you one single night without consequences — who would you be when the sun came up?',
    options: [
      { id: 'a', label: 'The same person. Just more tired.', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Someone colder than people think.', darkness: 2, weights: w(2, 0, 1, 1, 0, 2) },
      { id: 'c', label: 'Someone other people should have protected themselves from.', darkness: 3, weights: w(3, 1, 2, 0, 1, 2) },
      { id: 'd', label: 'Something that should never be let loose into the world.', darkness: 5, weights: w(5, 2, 2, 1, 1, 4) },
    ],
  },
  {
    id: 'q31',
    type: 'forced',
    prompt: 'What do you see first?',
    options: [
      { id: 'a', label: 'A face', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Two figures', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'c', label: 'An animal', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'd', label: 'Just shapes', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
    ],
  },

];

export const analysisSteps = [
  'Reviewing your responses...',
  'Mapping your profile...',
  'Measuring pattern and severity...',
  'Finalizing your result...',
];

export const archetypes: Record<ResultKey, ResultProfile> = {
  antikrist: {
    key: 'antikrist',
    title: 'Apex Psychopathy Profile',
    tag: 'The darkest level in the test',
    intro: 'This is not a result for people who just like dark tests and forbidden thoughts. This is a result for someone who seems strangely comfortable with coldness, power, and consequences that hit other people instead of you.',
    main: [
      'If the whole truth about you were left in the open, people wouldn’t try to understand you. They’d want to get away from you.',
      'You read Machiavelli the way others read the Bible — not to become a better person, but to avoid having to be one. Where others feel guilt, you mostly feel irritation that something still slows you down. Where others hesitate, you become calm.',
      'What makes you dangerous is not rage. It’s the absence of it. You don’t need to lose control to become dark. You seem darkest when you are fully in control.',
      'If your entire inner world were shown in daylight, some would call it darkness. Others would call it a social problem.',
      'You do not carry darkness like a wound. You carry it like a tool. There are people who do terrible things in panic. And then there are people like you — the kind who could do them with a clear gaze and a steady hand.',
    ],
    darkest: 'The worst thing about you is not that you want to go further than others. It’s how natural it seems to feel once the thought is there.',
    hidden: 'You do not look dangerous when you move through the world. You look calm. That is exactly why someone would understand you too late.',
    danger: 'Where others crash inside their darkness, you seem able to stand still in it. That makes you colder than most, and more dangerous than almost anyone.',
    truth: 'If the truth about you came out, it would not end in distance. It would end in flight, locks, and people wondering how something so dark could hide in broad daylight.',
    share: 'Some people get a result. You got something that should have been kept under lock and key.',
  },

  sadisten: {
    key: 'sadisten',
    title: 'Within Normal Range',
    tag: 'Still recognizably human',
    intro: 'Your profile falls within a broadly normal range. That does not make you innocent, pure, or above ordinary selfishness. It just means your darker sides still look more like everyday human behavior than something that belongs in a forensic interview.',
    main: [
      'You do not appear unusually drawn to cruelty, manipulation, or emotional domination. If there is darkness here, it is the standard-issue kind most people hide behind timing, excuses, and the phrase "I had my reasons."',
      'Where more severe profiles treat people like assets, obstacles, or soft targets, you still seem capable of seeing them as people. In this economy, that already counts as encouraging.',
      'Nothing in your pattern strongly suggests psychopathy as a defining force. You may still be strategic, stubborn, detached, or difficult on a bad day — but not in a way that makes the room feel colder when you enter it.',
    ],
    darkest: 'Your darkest side is probably not that you want to break people. It is that, like most people, you can still be selfish and call it realism.',
    hidden: 'What stays hidden in you is not some grand inner monster. It is the smaller and much more common talent for justifying yourself a little faster than you judge everyone else.',
    danger: 'What makes you less dangerous than the profiles above is that guilt, attachment, and basic conscience still seem to get a vote.',
    truth: 'If the truth about you came out, people would not run. They would mostly nod, say "yeah, that tracks," and keep trusting you with normal adult responsibilities.',
    share: 'You did not get a nightmare profile. You got proof that you are still operating within the legal speed limit of being a person.',
  },

  slaktaren: {
    key: 'slaktaren',
    title: 'Mild Red Flags',
    tag: 'Not extreme, but not exactly comforting',
    intro: 'Your profile shows some noticeable warning signs. Nothing here screams apex predator, but there are enough cold edges to suggest that empathy is not always first in line when your interests are on the table.',
    main: [
      'You seem more comfortable than average with emotional distance, self-interest, and the idea that some people are easier to use than to care about. That is not the worst result on the page, but it is not a compliment either.',
      'This is the kind of profile that rarely shocks in the moment. It unsettles afterward. You may not be the storm, but you can look a little too calm standing inside one.',
      'There is a strategic streak here. Not enough to define you by psychopathy, but enough that people close to you might occasionally realize you were emotionally absent much earlier than they thought.',
    ],
    darkest: 'Your darkest side is not extreme sadism. It is that certain moral brakes seem lighter in you than they do in most people.',
    hidden: 'What stays hidden is how quickly you can move from warmth to distance when someone stops being useful, interesting, or convenient.',
    danger: 'What makes you riskier than average is not chaos. It is how easily you can make a cold choice and still sleep normally.',
    truth: 'If the truth about you came out, nobody would call you a monster. They would call you "a bit concerning," which is often how the interesting problems begin.',
    share: 'You are not exactly a horror story. You are more the kind of person who makes someone text their friend afterward: "That was... a little off."',
  },

  skuggregissoren: {
    key: 'skuggregissoren',
    title: 'Emotionally Cold',
    tag: 'Low warmth. High composure.',
    intro: 'Your results suggest a noticeably cold emotional style. You do not need drama, rage, or spectacle to feel unsettling. In your case, the disturbing part may be how little visible feeling seems required at all.',
    main: [
      'Where many people react with guilt, softness, or hesitation, you seem more capable of stepping back, staying flat, and treating emotion like background noise. That does not automatically make you evil. It does make you harder to reach.',
      'This profile feels controlled rather than explosive. You are not cold because you are loud. You are cold because certain human reactions appear unusually optional to you.',
      'That emotional distance can make you look strong, composed, and difficult to shake. It can also make you seem strangely untouched by things that should have landed harder.',
    ],
    darkest: 'Your darkest side is that you may not need anger to become dangerous. Distance can do the job all by itself.',
    hidden: 'What people miss is that you can look perfectly composed while the emotional part of the room has already stopped reaching you.',
    danger: 'What makes you more concerning than most is not what you feel at your worst. It is how little you may need to feel in order to keep going.',
    truth: 'If the truth about you came out, people would not describe you as explosive. They would describe you as cold in a way that feels much harder to negotiate with.',
    share: 'Some people are dramatic. You are something worse for a result page: calm.',
  },

  asataren: {
    key: 'asataren',
    title: 'Manipulative Profile',
    tag: 'Charm, pressure, and psychological leverage',
    intro: 'Your profile suggests a stronger tendency toward control, positioning, and interpersonal strategy. You do not always need to overpower people directly. If anything, the cleaner method seems more your style.',
    main: [
      'You appear comfortable reading people quickly, adjusting your image, and using timing, charm, pressure, or selective honesty to move situations in your favor. That is where this starts feeling less accidental and more deliberate.',
      'For you, trust may not always feel sacred. Sometimes it looks more like access — and access is useful. That alone says more than most people would enjoy hearing.',
      'This profile does not point to chaos. It points to design. The darker element here is not open aggression, but the possibility that you know exactly what you are doing while still looking socially polished.',
    ],
    darkest: 'Your darkest side is that warmth can become camouflage when it serves you.',
    hidden: 'What stays hidden is how natural it may feel to guide other people toward decisions that benefit you while letting them call it their own idea.',
    danger: 'What makes you more dangerous than most is that your social intelligence does not always arrive with moral hesitation attached.',
    truth: 'If the truth about you came out, some people would revisit entire conversations and realize they were never as in control as they thought.',
    share: 'You do not need to slam the door. You are the kind of profile that leaves people wondering why they opened it for you themselves.',
  },

  denIhalige: {
    key: 'denIhalige',
    title: 'Dark Triad Profile',
    tag: 'Charm, self-interest, and cold intent',
    intro: 'Your results align more strongly with a Dark Triad pattern: psychopathy, narcissism, and Machiavellianism in a tighter bundle than most people would ever admit to. This is not just selfishness with good lighting. It is a profile with real psychological bite.',
    main: [
      'There is a noticeable concentration here of emotional detachment, strategic behavior, self-focus, and reduced remorse. In plain English: you may find it easier than average to use people without feeling especially haunted afterward.',
      'This profile is not defined by obvious madness. That would almost be reassuring. What makes it darker is how functional it can look from the outside — composed, competent, and perfectly capable of smiling through the damage.',
      'People with this kind of pattern do not always seem dangerous at first. They often seem charming, funny, sharp, and suspiciously unbothered by what happens to other people when they get what they want.',
    ],
    darkest: 'Your darkest side is not that you occasionally think dark thoughts. It is that some of them appear to fit your personality a little too well.',
    hidden: 'What stays hidden is how easily confidence, charm, and self-control can conceal a much colder relationship to empathy than people expect.',
    danger: 'What makes you more dangerous than most is the combination: enough control to stay polished, enough detachment to keep going, and enough self-interest to justify almost anything.',
    truth: 'If the truth about you came out, people would not just call you difficult. They would start connecting patterns they should have noticed much sooner.',
    share: 'This is the kind of result that sounds exaggerated until people remember your face while reading it.',
  },
};

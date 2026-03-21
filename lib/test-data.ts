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
  darkness: number,
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
];

export const analysisSteps = [
  'We’re going through your answers...',
  'We’re seeing a pattern.',
  'This probably should have stayed beneath the surface.',
  'We’ve seen enough.',
];

export const archetypes: Record<ResultKey, ResultProfile> = {
  antikrist: {
    key: 'antikrist',
    title: 'Antichrist',
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
    title: 'The Sadist',
    tag: 'When control is not enough — it has to be felt',
    intro: 'You are not always satisfied with winning. Something in you wants to feel how much of another person can be broken down before it actually stops.',
    main: [
      'There are people who accidentally go too far. And then there are people like you — the kind who sometimes want to see exactly how far “too far” really is.',
      'You do not carry your darkness like rage. You carry it like curiosity toward pain, fear, and the moment another person loses all control.',
      'For you, power is not only about standing above someone. It is about seeing it in their eyes when they realize it themselves.',
    ],
    darkest: 'Your darkest side is that you are not always satisfied with victory. Something in you wants to feel the loss land in someone else’s body first.',
    hidden: 'What makes you dangerous rarely shows in the first smile. It shows when you notice that someone is already weaker — and choose to go one step further anyway.',
    danger: 'What makes you worse than most is not anger. It is that pleasure sometimes steps in where other people would have felt a stop.',
    truth: 'If the truth about you came out, people would not describe you as dark. They would describe you as someone who should never be given access to other people’s weakness.',
    share: 'Some people get a profile. You got something that smells like humiliation, control, and pure cruelty.',
  },
  slaktaren: {
    key: 'slaktaren',
    title: 'The Butcher',
    tag: 'Raw destruction without sentimentality',
    intro: 'You do not feel dangerous because you sound loud. You feel dangerous because something in you seems strangely comfortable with destruction once it serves a purpose.',
    main: [
      'There is a kind of darkness that sneaks. Your darkness does not always need to. When it wakes up, it feels like something that would rather end things than negotiate.',
      'You carry a cold relationship to violence, consequences, and the fact that some things cannot be repaired once they’ve been shattered.',
      'The worst thing about you is not that you can imagine blood. It is that you do not seem to recoil as hard as others once the thought is there.',
    ],
    darkest: 'Your darkest side is that you do not romanticize brutality. You just do not step very far away from it.',
    hidden: 'Others miss that it is not chaos that makes you threatening. It is how quickly you can accept destruction once it starts to feel logical.',
    danger: 'What makes you more dangerous than most is that you do not need much to switch from person to force.',
    truth: 'If the truth about you came out, people would realize that some people do not carry knives in their hands first. They carry them in their heads.',
    share: 'This is not a result you show off to brag. This is a result you send to scare someone.',
  },
  skuggregissoren: {
    key: 'skuggregissoren',
    title: 'The Shadow Director',
    tag: 'The smile, the lie, and the hand behind it all',
    intro: 'You do not need to break people openly. You just place them where they fall on their own, and let them believe they chose it themselves the whole time.',
    main: [
      'Other people create chaos by exploding. You create it by moving one detail, planting one thought, and waiting for the rest to collapse under its own weight.',
      'For you, trust is not always something sacred. Sometimes it feels more like the handle on a door you were already planning to open.',
      'The worst thing about your darkness is not that you lie. It is that you can make other people call the lie their own idea.',
    ],
    darkest: 'Your darkest side is that you can use warmth as camouflage. Where others see closeness, you sometimes see nothing but opportunities.',
    hidden: 'People miss you because you rarely look like a threat. It is only afterward that they realize someone was holding the strings the whole time.',
    danger: 'What makes you more dangerous than most is that your darkness thinks several steps further than their defenses.',
    truth: 'If the truth about you came out, some people would never trust their own judgment again. They would wonder how much of their life had already passed through your hands.',
    share: 'You do not feel dark because you leave blood behind. You feel dark because you leave people with the feeling that they opened the door themselves.',
  },
  asataren: {
    key: 'asataren',
    title: 'The Scavenger',
    tag: 'When weakness smells like profit',
    intro: 'You do not need to create the chaos. You just wait until the smell of weakness is in the air and go where the profit is.',
    main: [
      'There are people who throw themselves into battle. Your darkness is dirtier than that. It waits at the edge, reads the room, and takes what is left when others are already split open.',
      'You seem to have a special instinct for when something is about to crack — and an almost disturbing calm toward exploiting that exact moment.',
      'The worst thing about you is not hunger. It is that you are happy to let someone else bleed first and call it timing.',
    ],
    darkest: 'Your darkest side is that you do not always need to cause the fall yourself. You are satisfied with arriving exactly in time to profit from it.',
    hidden: 'Others miss that your darkness rarely fights for space. It only waits until there is something dying to feed on.',
    danger: 'What makes you more dangerous than most is that you never need to rush. You only need to read when someone is already open.',
    truth: 'If the truth about you came out, people would understand that some people do not look for victims. They look for openings. And you seem to smell them from a distance.',
    share: 'This is darkness that does not attack first. It just waits until someone else has fallen far enough.',
  },
  denIhalige: {
    key: 'denIhalige',
    title: 'The Hollow One',
    tag: 'The emptiness where something human should have lived',
    intro: 'The worst thing about you is not the darkness. It is the empty space where something human should have been, and how strangely clean it seems to feel in there.',
    main: [
      'You do not feel cold because you act tough. You feel cold because certain reactions other people take for granted seem completely absent when the lights go out.',
      'Where other people describe guilt, warmth, or conscience, you sometimes seem to feel only a quiet space where nothing really answers back.',
      'That does not just make you dark. It makes you hard to reach, hard to read, and in the worst case almost impossible to stop once something in you has made up its mind.',
    ],
    darkest: 'Your darkest side is that you do not always need to become angry to break inside. Sometimes the emptiness is enough.',
    hidden: 'Others miss that you can look completely normal while something behind your eyes has already shut off the human part of the room.',
    danger: 'What makes you more dangerous than most is not the violence you can imagine. It is how little warmth seems to be needed to stop you.',
    truth: 'If the truth about you came out, some people would not call you evil. They would call you empty in a way that feels worse than evil, precisely because nothing seems to get through.',
    share: 'This is not just darkness. It is the absence of something that should have been there from the beginning.',
  },
};
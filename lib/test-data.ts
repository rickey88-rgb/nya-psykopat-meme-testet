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
    prompt: 'Har du märkt att du ofta förstår skurken mer än hjälten?',
    options: [
      { id: 'a', label: 'Inte alls', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Lite mer än jag borde', darkness: 1, weights: w(1, 0, 0, 1, 0, 1) },
      { id: 'c', label: 'Ganska ofta', darkness: 2, weights: w(2, 0, 0, 2, 0, 1) },
      { id: 'd', label: 'Nästan alltid', darkness: 3, weights: w(3, 0, 0, 2, 0, 2) },
    ],
  },
  {
    id: 'q02',
    type: 'forced',
    prompt: 'Vad känns mest som styrka?',
    options: [
      { id: 'a', label: 'Att få någon att lita på dig', darkness: 1, weights: w(1, 0, 0, 3, 1, 0) },
      { id: 'b', label: 'Att få någon att frukta dig', darkness: 2, weights: w(2, 2, 1, 0, 0, 0) },
      { id: 'c', label: 'Att kunna lämna någon helt tom', darkness: 3, weights: w(3, 1, 0, 0, 0, 3) },
      { id: 'd', label: 'Att styra utan att någon märker det', darkness: 3, weights: w(3, 0, 0, 4, 1, 1) },
    ],
  },
  {
    id: 'q03',
    type: 'scale',
    prompt: 'Människor som litar blint på dig känns oftast som…',
    options: [
      { id: 'a', label: 'Något fint', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Något ömtåligt', darkness: 1, weights: w(1, 0, 0, 1, 0, 1) },
      { id: 'c', label: 'Något användbart', darkness: 2, weights: w(2, 0, 0, 3, 1, 0) },
      { id: 'd', label: 'Något som nästan ber om att utnyttjas', darkness: 3, weights: w(3, 1, 0, 3, 2, 1) },
    ],
  },
  {
    id: 'q04',
    type: 'scenario',
    prompt: 'Om någon stod mellan dig och exakt det liv du vill ha — vad hade du gjort?',
    options: [
      { id: 'a', label: 'Backat direkt', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Försökt hitta en annan väg', darkness: 1, weights: w(1, 0, 0, 1, 0, 0) },
      { id: 'c', label: 'Gjort det som krävs', darkness: 2, weights: w(2, 0, 1, 1, 1, 1) },
      { id: 'd', label: 'Tagit det jag ville ha utan att tveka', darkness: 3, weights: w(3, 1, 2, 1, 1, 2) },
    ],
  },
  {
    id: 'q05',
    type: 'scale',
    prompt: 'Har du någon gång känt att vissa människor nästan förtjänar att bli utnyttjade?',
    options: [
      { id: 'a', label: 'Aldrig', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Någon gång', darkness: 1, weights: w(1, 0, 0, 1, 1, 0) },
      { id: 'c', label: 'Oftare än jag vill erkänna', darkness: 2, weights: w(2, 0, 0, 2, 2, 0) },
      { id: 'd', label: 'Ja, nästan självklart', darkness: 3, weights: w(3, 1, 0, 2, 3, 1) },
    ],
  },
  {
    id: 'q06',
    type: 'forced',
    prompt: 'Vad stör dig minst?',
    options: [
      { id: 'a', label: 'Att bli hatad', darkness: 1, weights: w(1, 0, 1, 0, 0, 1) },
      { id: 'b', label: 'Att vara maktlös', darkness: 2, weights: w(2, 1, 1, 1, 0, 1) },
      { id: 'c', label: 'Att se någon annan gå sönder', darkness: 2, weights: w(2, 2, 0, 0, 0, 1) },
      { id: 'd', label: 'Att känna för mycket', darkness: 3, weights: w(3, 0, 0, 1, 0, 3) },
    ],
  },
  {
    id: 'q07',
    type: 'scale',
    prompt: 'Har du någon gång njutit lite av att se någon annan bli förnedrad?',
    options: [
      { id: 'a', label: 'Nej', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Lite', darkness: 1, weights: w(1, 1, 0, 0, 0, 0) },
      { id: 'c', label: 'Mer än jag borde', darkness: 2, weights: w(2, 3, 0, 0, 0, 0) },
      { id: 'd', label: 'Ja, utan problem', darkness: 3, weights: w(3, 4, 0, 0, 0, 1) },
    ],
  },
  {
    id: 'q08',
    type: 'scenario',
    prompt: 'När någon bryter ihop framför dig, vad händer först i dig?',
    options: [
      { id: 'a', label: 'Jag vill hjälpa', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Jag blir mest obekväm', darkness: 1, weights: w(1, 0, 0, 0, 0, 1) },
      { id: 'c', label: 'Jag blir märkligt lugn', darkness: 2, weights: w(2, 1, 0, 1, 0, 2) },
      { id: 'd', label: 'Något mörkare vaknar', darkness: 3, weights: w(3, 3, 1, 0, 0, 2) },
    ],
  },
  {
    id: 'q09',
    type: 'scale',
    prompt: 'Har du någon gång velat trycka lite längre bara för att se hur mycket någon tål?',
    options: [
      { id: 'a', label: 'Aldrig', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Någon gång', darkness: 1, weights: w(1, 1, 0, 0, 0, 0) },
      { id: 'c', label: 'Ja, rätt ofta', darkness: 2, weights: w(2, 3, 1, 0, 0, 0) },
      { id: 'd', label: 'Ja, det säger mer än ord', darkness: 3, weights: w(3, 4, 1, 0, 0, 0) },
    ],
  },
  {
    id: 'q10',
    type: 'forced',
    prompt: 'Vad låter mest som du när du verkligen vill något?',
    options: [
      { id: 'a', label: 'Jag får folk att vilja samma sak', darkness: 2, weights: w(2, 0, 0, 3, 0, 0) },
      { id: 'b', label: 'Jag väntar på rätt svaghet', darkness: 2, weights: w(2, 0, 0, 1, 3, 0) },
      { id: 'c', label: 'Jag stänger av och kör', darkness: 3, weights: w(3, 0, 2, 0, 0, 3) },
      { id: 'd', label: 'Jag ser hur långt jag kan pressa', darkness: 3, weights: w(3, 3, 1, 0, 0, 1) },
    ],
  },
  {
    id: 'q11',
    type: 'scenario',
    prompt: 'Om du kunde vinna stort på någon annans undergång, hur hade du reagerat?',
    options: [
      { id: 'a', label: 'Inte värt det', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Jag hade tvekat länge', darkness: 1, weights: w(1, 0, 0, 0, 1, 0) },
      { id: 'c', label: 'Jag hade gjort det om ingen såg', darkness: 2, weights: w(2, 0, 1, 1, 2, 1) },
      { id: 'd', label: 'Jag hade tagit vinsten och gått vidare', darkness: 3, weights: w(3, 0, 1, 0, 3, 2) },
    ],
  },
  {
    id: 'q12',
    type: 'scale',
    prompt: 'Har du någon gång känt att andras smärta inte stör dig så mycket som den borde?',
    options: [
      { id: 'a', label: 'Nej', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Ibland', darkness: 1, weights: w(1, 0, 0, 0, 0, 1) },
      { id: 'c', label: 'Ja, rätt ofta', darkness: 2, weights: w(2, 1, 1, 0, 0, 2) },
      { id: 'd', label: 'Nej, nästan inte alls', darkness: 3, weights: w(3, 2, 1, 0, 0, 3) },
    ],
  },
  {
    id: 'q13',
    type: 'forced',
    prompt: 'Vad känns mest sant om regler?',
    options: [
      { id: 'a', label: 'De skyddar det viktiga', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'De finns där tills något större lockar', darkness: 1, weights: w(1, 0, 1, 1, 0, 0) },
      { id: 'c', label: 'De är mest till för svagare människor', darkness: 2, weights: w(2, 1, 1, 1, 1, 1) },
      { id: 'd', label: 'De betyder inget om ingen kan stoppa dig', darkness: 3, weights: w(3, 1, 2, 0, 1, 3) },
    ],
  },
  {
    id: 'q14',
    type: 'scale',
    prompt: 'Tycker du att rädsla ibland är vackrare än respekt?',
    options: [
      { id: 'a', label: 'Nej', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Kanske i vissa lägen', darkness: 1, weights: w(1, 1, 0, 0, 0, 0) },
      { id: 'c', label: 'Ja, ofta', darkness: 2, weights: w(2, 2, 1, 0, 0, 0) },
      { id: 'd', label: 'Ja, rädsla talar klarast', darkness: 3, weights: w(3, 3, 1, 0, 0, 1) },
    ],
  },
  {
    id: 'q15',
    type: 'scenario',
    prompt: 'Om någon offentligt förnedrade dig, hur mörk hade din hämnd kunnat bli?',
    options: [
      { id: 'a', label: 'Jag hade släppt det', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Jag hade fått sista ordet', darkness: 1, weights: w(1, 0, 0, 1, 0, 0) },
      { id: 'c', label: 'Jag hade sett till att de ångrade sig', darkness: 2, weights: w(2, 1, 2, 1, 0, 0) },
      { id: 'd', label: 'Jag hade velat lämna något trasigt efter mig', darkness: 3, weights: w(3, 2, 3, 0, 0, 1) },
    ],
  },
  {
    id: 'q16',
    type: 'scale',
    prompt: 'Är ditt samvete verkligen starkt — eller har du bara aldrig blivit tillräckligt frestad?',
    options: [
      { id: 'a', label: 'Mitt samvete är starkt', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Det beror på priset', darkness: 1, weights: w(1, 0, 0, 1, 0, 1) },
      { id: 'c', label: 'Jag tror frestelsen är större än samvetet', darkness: 2, weights: w(2, 0, 1, 0, 1, 2) },
      { id: 'd', label: 'Samvete är lätt tills mörkret lönar sig', darkness: 3, weights: w(3, 1, 1, 1, 1, 3) },
    ],
  },
  {
    id: 'q17',
    type: 'forced',
    prompt: 'Vad är värre?',
    options: [
      { id: 'a', label: 'Att förlora kontrollen', darkness: 1, weights: w(1, 0, 1, 0, 0, 1) },
      { id: 'b', label: 'Att känna skuld', darkness: 2, weights: w(2, 0, 0, 1, 0, 2) },
      { id: 'c', label: 'Att stå utan övertag', darkness: 2, weights: w(2, 0, 1, 2, 1, 0) },
      { id: 'd', label: 'Att inte känna någonting alls', darkness: 3, weights: w(3, 0, 0, 0, 0, 4) },
    ],
  },
  {
    id: 'q18',
    type: 'scenario',
    prompt: 'Om du visste att ingen någonsin skulle få veta, hur långt hade du gått?',
    options: [
      { id: 'a', label: 'Inte längre än nu', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Längre än jag erkänner högt', darkness: 1, weights: w(1, 0, 1, 1, 0, 1) },
      { id: 'c', label: 'Längre än de flesta hade velat tro', darkness: 2, weights: w(2, 1, 2, 0, 1, 1) },
      { id: 'd', label: 'Längre än något borde få gå', darkness: 3, weights: w(3, 2, 2, 1, 1, 2) },
    ],
  },
  {
    id: 'q19',
    type: 'scale',
    prompt: 'Har du någon gång velat få någon att darra bara för att veta att du kan?',
    options: [
      { id: 'a', label: 'Nej', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Tanken har funnits', darkness: 1, weights: w(1, 1, 0, 0, 0, 0) },
      { id: 'c', label: 'Ja, det säger något om makt', darkness: 2, weights: w(2, 3, 0, 0, 0, 0) },
      { id: 'd', label: 'Ja, och jag vet hur det känns', darkness: 3, weights: w(3, 4, 1, 0, 0, 0) },
    ],
  },
  {
    id: 'q20',
    type: 'forced',
    prompt: 'Vad känns mest som dig i mörkret?',
    options: [
      { id: 'a', label: 'Leendet innan sveket', darkness: 2, weights: w(2, 0, 0, 4, 0, 0) },
      { id: 'b', label: 'Hungern efter svaghet', darkness: 2, weights: w(2, 0, 1, 0, 3, 0) },
      { id: 'c', label: 'Njutningen i obehaget', darkness: 3, weights: w(3, 4, 0, 0, 0, 0) },
      { id: 'd', label: 'Tomrummet där något mänskligt borde finnas', darkness: 3, weights: w(3, 0, 0, 0, 0, 4) },
    ],
  },
  {
    id: 'q21',
    type: 'scenario',
    prompt: 'Om blod var priset för att bli exakt den du vill vara — hade du betalat det?',
    options: [
      { id: 'a', label: 'Nej', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Jag hade försökt slippa priset', darkness: 1, weights: w(1, 0, 0, 1, 1, 0) },
      { id: 'c', label: 'Om vinsten var stor nog', darkness: 2, weights: w(2, 1, 2, 0, 1, 1) },
      { id: 'd', label: 'Ja, utan att se tillbaka', darkness: 3, weights: w(3, 1, 3, 0, 1, 2) },
    ],
  },
  {
    id: 'q22',
    type: 'scale',
    prompt: 'Hur mycket blod hade ditt perfekta liv varit värt?',
    options: [
      { id: 'a', label: 'Ingenting', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Mindre än jag tror', darkness: 1, weights: w(1, 0, 1, 0, 0, 1) },
      { id: 'c', label: 'Mer än jag skulle erkänna', darkness: 2, weights: w(2, 0, 2, 0, 1, 1) },
      { id: 'd', label: 'Så mycket som behövdes', darkness: 3, weights: w(3, 1, 3, 0, 1, 2) },
    ],
  },
  {
    id: 'q23',
    type: 'forced',
    prompt: 'Vad hade stoppat dig först?',
    options: [
      { id: 'a', label: 'Samvetet', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Rädslan', darkness: 1, weights: w(1, 0, 0, 0, 0, 1) },
      { id: 'c', label: 'Risken att åka fast', darkness: 2, weights: w(2, 0, 1, 1, 0, 2) },
      { id: 'd', label: 'Inget alls', darkness: 3, weights: w(3, 1, 2, 1, 1, 3) },
    ],
  },
  {
    id: 'q24',
    type: 'scenario',
    prompt: 'Om världen gav dig en enda natt utan konsekvenser — vem hade du varit när solen gick upp?',
    options: [
      { id: 'a', label: 'Jag hade fortfarande varit jag.', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Jag hade slutat låtsas.', darkness: 2, weights: w(2, 0, 1, 1, 0, 2) },
      { id: 'c', label: 'Jag hade blivit någon ingen borde möta ensam.', darkness: 3, weights: w(3, 1, 2, 0, 1, 1) },
      { id: 'd', label: 'Jag hade blivit den version av mig som aldrig borde se dagsljus.', darkness: 4, weights: w(4, 1, 2, 1, 1, 3) },
    ],
  },
  {
    id: 'q25',
    type: 'scale',
    prompt: 'Om ingen kunde stoppa dig, vem hade du blivit?',
    options: [
      { id: 'a', label: 'Någon bättre', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Någon mörkare än folk tror', darkness: 1, weights: w(1, 0, 0, 1, 0, 1) },
      { id: 'c', label: 'Någon andra hade lärt sig frukta', darkness: 2, weights: w(2, 1, 1, 0, 0, 1) },
      { id: 'd', label: 'Något världen inte borde släppt fram', darkness: 4, weights: w(4, 1, 2, 1, 1, 3) },
    ],
  },
  {
    id: 'q26',
    type: 'scenario',
    prompt: 'Om priset för allt du någonsin velat ha var halva mänskligheten — hade du betalat det?',
    options: [
      { id: 'a', label: 'Aldrig', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Jag hade letat efter en annan väg', darkness: 1, weights: w(1, 0, 0, 1, 0, 0) },
      { id: 'c', label: 'Jag hade tvekat, men förstått lockelsen', darkness: 2, weights: w(2, 0, 1, 0, 1, 1) },
      { id: 'd', label: 'Ja, om det gav mig allt', darkness: 4, weights: w(4, 1, 2, 1, 1, 3) },
    ],
  },
  {
    id: 'q27',
    type: 'forced',
    prompt: 'Vilket låter närmast sanningen?',
    options: [
      { id: 'a', label: 'Jag har fortfarande en gräns', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Min gräns flyttar sig när vinsten gör det', darkness: 2, weights: w(2, 0, 1, 1, 1, 1) },
      { id: 'c', label: 'Min gräns är mest till för andra att tro på', darkness: 3, weights: w(3, 0, 1, 3, 1, 1) },
      { id: 'd', label: 'Jag vet inte om jag längre har någon gräns', darkness: 4, weights: w(4, 1, 2, 1, 1, 3) },
    ],
  },
  {
    id: 'q28',
    type: 'scale',
    prompt: 'Är du god — eller bara rädd för konsekvenserna?',
    options: [
      { id: 'a', label: 'God', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Mest rädd för vad det gör med andra', darkness: 1, weights: w(1, 0, 0, 0, 0, 1) },
      { id: 'c', label: 'Kanske mer rädd för konsekvenserna än jag trott', darkness: 2, weights: w(2, 0, 1, 0, 1, 1) },
      { id: 'd', label: 'Konsekvenserna är det enda som bromsar mörkret', darkness: 4, weights: w(4, 1, 1, 1, 1, 3) },
    ],
  },
  {
    id: 'q29',
    type: 'scenario',
    prompt: 'Om ditt perfekta liv kostade någon annans sista andetag — hade du tagit det?',
    options: [
      { id: 'a', label: 'Nej', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Jag hade försökt fly från valet', darkness: 1, weights: w(1, 0, 0, 0, 0, 1) },
      { id: 'c', label: 'Jag hade velat säga nej men vet inte', darkness: 2, weights: w(2, 0, 1, 0, 1, 1) },
      { id: 'd', label: 'Ja, om det verkligen gav mig allt', darkness: 4, weights: w(4, 1, 2, 0, 1, 3) },
    ],
  },
  {
    id: 'q30',
    type: 'forced',
    prompt: 'Om världen gav dig en enda natt utan konsekvenser — vem hade du varit när solen gick upp?',
    options: [
      { id: 'a', label: 'Samma person. Bara tröttare.', darkness: 0, weights: w(0, 0, 0, 0, 0, 0) },
      { id: 'b', label: 'Någon kallare än folk tror.', darkness: 2, weights: w(2, 0, 1, 1, 0, 2) },
      { id: 'c', label: 'Någon andra hade skyddat sig från.', darkness: 3, weights: w(3, 1, 2, 0, 1, 2) },
      { id: 'd', label: 'Något som aldrig borde släppas ut i världen.', darkness: 5, weights: w(5, 2, 2, 1, 1, 4) },
    ],
  },
];

export const analysisSteps = [
  'Vi går igenom dina svar...',
  'Vi ser ett mönster.',
  'Det här borde nog ha stannat under ytan.',
  'Vi har sett tillräckligt.',
];

export const archetypes: Record<ResultKey, ResultProfile> = {
  antikrist: {
    key: 'antikrist',
    title: 'Antikrist',
    tag: 'Testets mörkaste nivå',
    intro: 'Det här är inte ett resultat för människor som bara gillar mörka tester och förbjudna tankar. Det här är ett resultat för någon som verkar märkligt bekväm med kyla, makt och konsekvenser som drabbar andra i stället för dig.',
    main: [
      'Om hela sanningen om dig låg öppen hade folk inte försökt förstå dig. De hade velat komma undan dig.',
      'Du läser Machiavelli som andra läser Bibeln — inte för att bli en bättre människa, utan för att slippa vara en. Där andra känner skuld, känner du mest irritation över att något fortfarande bromsar dig. Där andra tvekar, blir du lugn.',
      'Det farliga med dig är inte vrede. Det är frånvaron av den. Du behöver inte tappa kontrollen för att bli mörk. Du verkar som mörkast när du har full kontroll.',
      'Om hela ditt inre visades i dagsljus hade vissa kallat det mörker. Andra hade kallat det ett samhällsproblem.',
      'Du bär inte mörker som ett sår. Du bär det som ett verktyg. Det finns människor som gör fruktansvärda saker i panik. Och så finns det människor som du — de som skulle kunna göra dem med klar blick och stadig hand.',
    ],
    darkest: 'Det värsta med dig är inte att du vill gå längre än andra. Det är hur naturligt det verkar kännas när tanken väl finns där.',
    hidden: 'Du ser inte farlig ut när du rör dig genom världen. Du ser lugn ut. Det är just därför någon hade hunnit förstå dig för sent.',
    danger: 'Där andra kraschar i sitt mörker, verkar du kunna stå stilla i det. Det gör dig kallare än de flesta, och farligare än nästan alla.',
    truth: 'Om sanningen om dig kom ut skulle det inte sluta i avstånd. Det skulle sluta i flykt, lås och människor som undrar hur något så mörkt kunde gömma sig i fullt dagsljus.',
    share: 'Vissa får ett resultat. Du fick något som borde ha hållits under lås.',
  },
  sadisten: {
    key: 'sadisten',
    title: 'Sadisten',
    tag: 'När kontroll inte räcker — det måste kännas',
    intro: 'Du nöjer dig inte alltid med att vinna. Något i dig vill känna hur mycket av en annan människa som kan brytas ner innan det faktiskt tar stopp.',
    main: [
      'Det finns människor som råkar gå för långt. Och så finns det människor som du — de som ibland vill se exakt hur långt “för långt” faktiskt är.',
      'Du bär inte ditt mörker som vrede. Du bär det som nyfikenhet inför smärta, rädsla och det ögonblick då någon annan tappar all kontroll.',
      'För dig handlar makt inte bara om att stå över någon. Det handlar om att känna hur det ser ut i deras ögon när de inser det själva.',
    ],
    darkest: 'Din mörkaste sida är att du inte alltid nöjer dig med seger. Något i dig vill känna förlusten landa i någon annans kropp först.',
    hidden: 'Det farliga med dig syns sällan i första leendet. Det syns när du märker att någon redan är underlägsen — och väljer att gå ett steg längre ändå.',
    danger: 'Det som gör dig värre än de flesta är inte ilska. Det är att njutning ibland kliver in där andra människor hade känt stopp.',
    truth: 'Om sanningen om dig kom ut hade folk inte beskrivit dig som mörk. De hade beskrivit dig som någon som aldrig borde få tillgång till andras svaghet.',
    share: 'Vissa får en profil. Du fick något som luktar förnedring, kontroll och ren skadeglädje.',
  },
  slaktaren: {
    key: 'slaktaren',
    title: 'Slaktaren',
    tag: 'Rå förstörelse utan sentimentalitet',
    intro: 'Du känns inte farlig för att du låter högt. Du känns farlig för att något i dig verkar märkligt bekvämt med förstörelse när den väl fyller ett syfte.',
    main: [
      'Det finns ett mörker som smyger. Ditt mörker behöver inte alltid göra det. När det väl vaknar känns det som något som hellre avslutar än förhandlar.',
      'Du bär på en kall relation till våld, konsekvenser och det faktum att vissa saker inte går att laga när de väl krossats.',
      'Det värsta med dig är inte att du kan föreställa dig blod. Det är att du inte verkar rygga lika hårt som andra när tanken väl ligger där.',
    ],
    darkest: 'Din mörkaste sida är att du inte romantiserar brutalitet. Du bara väjer inte särskilt långt från den.',
    hidden: 'Andra missar att det inte är kaos som gör dig hotfull. Det är hur snabbt du kan acceptera förstörelse när den börjar kännas logisk.',
    danger: 'Det som gör dig farligare än de flesta är att du inte behöver mycket för att byta från människa till kraft.',
    truth: 'Om sanningen om dig kom ut hade folk insett att vissa människor inte bär knivar i händerna först. De bär dem i huvudet.',
    share: 'Det här är inte ett resultat man visar upp för att skryta. Det här är ett resultat man skickar för att skrämma någon.',
  },
  skuggregissoren: {
    key: 'skuggregissoren',
    title: 'Skuggregissören',
    tag: 'Leendet, lögnen och handen bakom allt',
    intro: 'Du behöver inte krossa folk öppet. Du placerar dem bara där de faller av sig själva, och låter dem tro att de valde det själva hela tiden.',
    main: [
      'Andra människor skapar kaos genom att explodera. Du skapar det genom att flytta en detalj, plantera en tanke och vänta på att resten ska rasa ihop av egen tyngd.',
      'För dig är förtroende inte alltid något heligt. Ibland känns det mer som ett handtag på en dörr du redan tänkt öppna.',
      'Det värsta med ditt mörker är inte att du ljuger. Det är att du kan få andra att kalla lögnen för sin egen idé.',
    ],
    darkest: 'Din mörkaste sida är att du kan använda värme som kamouflage. Där andra ser närhet ser du ibland bara möjligheter.',
    hidden: 'Folk missar dig för att du sällan ser ut som ett hot. Det är först efteråt de märker att någon hållit i trådarna hela tiden.',
    danger: 'Det som gör dig farligare än de flesta är att ditt mörker tänker flera steg längre än deras försvar.',
    truth: 'Om sanningen om dig kom ut hade vissa aldrig mer litat på sitt eget omdöme. De hade undrat hur mycket av deras liv som egentligen redan passerat genom dina händer.',
    share: 'Du känns inte mörk för att du lämnar blod. Du känns mörk för att du lämnar folk med känslan av att de själva öppnade dörren.',
  },
  asataren: {
    key: 'asataren',
    title: 'Asätaren',
    tag: 'När svaghet luktar vinst',
    intro: 'Du behöver inte skapa kaoset. Du väntar bara tills lukten av svaghet ligger i luften och går dit vinsten finns.',
    main: [
      'Det finns människor som kastar sig in i strid. Ditt mörker är smutsigare än så. Det väntar i utkanten, läser av, och tar det som återstår när andra redan är öppna.',
      'Du verkar ha en särskild känsla för när något håller på att brista — och ett nästan obehagligt lugn inför att utnyttja just den stunden.',
      'Det värsta med dig är inte hunger. Det är att du gärna låter någon annan blöda först och kallar det timing.',
    ],
    darkest: 'Din mörkaste sida är att du inte alltid behöver orsaka fallet själv. Du nöjer dig med att komma precis i tid för att vinna på det.',
    hidden: 'Andra missar att ditt mörker sällan bråkar om plats. Det väntar bara tills det finns något döende att äta av.',
    danger: 'Det som gör dig farligare än de flesta är att du aldrig behöver rusa. Du behöver bara läsa av när någon redan är öppen.',
    truth: 'Om sanningen om dig kom ut hade folk förstått att vissa människor inte söker offer. De söker lägen. Och du verkar känna lukten av dem på håll.',
    share: 'Det här är mörker som inte anfaller först. Det bara väntar tills någon annan fallit tillräckligt långt.',
  },
  denIhalige: {
    key: 'denIhalige',
    title: 'Den ihålige',
    tag: 'Tomheten där något mänskligt borde ha bott',
    intro: 'Det värsta med dig är inte mörkret. Det är tomrummet där något mänskligt borde ha funnits, och hur märkligt rent det verkar kännas där inne.',
    main: [
      'Du känns inte kall för att du spelar hård. Du känns kall för att vissa reaktioner som andra tar för givna verkar saknas helt när ljuset slocknar.',
      'Där andra människor beskriver skuld, värme eller samvete, verkar du ibland bara känna ett tyst utrymme där inget riktigt svarar tillbaka.',
      'Det gör dig inte bara mörk. Det gör dig svår att nå, svår att läsa och i värsta fall nästan omöjlig att bromsa när något i dig väl bestämt sig.',
    ],
    darkest: 'Din mörkaste sida är att du inte alltid behöver bli arg för att gå sönder inuti. Ibland är tomheten nog.',
    hidden: 'Andra missar att du kan se helt normal ut medan något bakom ögonen redan stängt av den mänskliga delen av rummet.',
    danger: 'Det som gör dig farligare än de flesta är inte våldet du kan tänka dig. Det är hur lite värme som verkar behövas för att stoppa dig.',
    truth: 'Om sanningen om dig kom ut hade vissa inte kallat dig ond. De hade kallat dig tom på ett sätt som känns värre än ondska, just för att inget verkar nå in.',
    share: 'Det här är inte bara mörker. Det är frånvaron av något som borde ha funnits där från början.',
  },
};

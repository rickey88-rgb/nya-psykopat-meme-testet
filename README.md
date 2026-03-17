# Psykopattestet – brutal demo i Next.js

Det här zip-paketet är en fristående Next.js-demo för **Psykopattestet.se**.

## Vad som finns i bygget
- brutal svart/röd indexsida
- demonisk hero med röda ögon
- mobil-först layout
- varningsruta före teststart
- 30 frågor med mix av:
  - mörka vanliga frågor
  - scenariofrågor
  - forced-choice
- 5-sekunders analyssida
- pre-paywall med låst copy
- post-paywall demo med resultatnamn + brutal resultatsida
- 6 resultat:
  - Antikrist
  - Sadisten
  - Slaktaren
  - Skuggregissören
  - Asätaren
  - Den ihålige

## Viktigt
- "Lås upp mitt resultat — 39 kr" är just nu **demo-läge** och låser bara upp resultatet direkt i klienten.
- Byt den knappen mot Stripe när du vill.
- Frågorna ligger i `lib/test-data.ts`.
- Resultattexterna ligger också i `lib/test-data.ts`.

## Kör lokalt
```bash
npm install
npm run dev
```

## Filer att börja i
- `app/page.tsx` – startsidan
- `app/test/page.tsx` – testflödet
- `components/TestExperience.tsx` – hela testmotorn
- `lib/test-data.ts` – frågor, resultatnamn, analyssteg, resultatsidor
- `lib/test-engine.ts` – enkel score/logik

## Småsaker att finslipa senare
- riktig betalning via Stripe
- bättre demonillustration eller riktig bild
- fler mikroanimationer
- slutkalibrering av poäng och fråga/resultat-matchning
- tracking / delningsknappar / pixel

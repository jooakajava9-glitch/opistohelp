# OpistoHelp 📚

**Siistimpi arkea – yhdessä.**

OpistoHelp on moderni verkkosovellus Reisjärven opiston opiskelijoille, joka mahdollistaa pienten tehtävien tarjoamisen ja varaamiseen rahaa vastaan, sekä yhtenäisen näkymän opiston asuntoleihin, tapahtumiin ja ilmoituksiin.

## 🎯 Pääominaisuudet

### 🏠 Etusivu
- Nopeakatsaus käyttäjän saldoon ja tehtäviin
- Uusimmat tehtävät ja tapahtumat
- Tärkeät ilmoitukset
- Opiston kartta asuntoloineen

### 🏢 Asuntolat & Huoneet
- Opiston kartta interaktiivisena SVG-visualisointina
- Asuntolat klikkautuvia kartalla
- Jokaisen asuntolan pohjapiirros huoneiden kanssa
- Huoneissa listatut tehtävät
- Asukastiedot ja huoneiden sijainnit

### 🛠️ Tehtävämarkkina
- **Selaa tehtäviä**: Suodattimet hinnan, asuntolan ja tilan perusteella
- **Luo tehtävä**: Aseta tehtävän nimi, kuvaus, hinta ja määräaika
- **Varaa tehtävä**: Näe kuka varasi ja tehdyt tehtävät
- **Hinta ja rahajärjestelmä**: Testiversio, ei oikeita rahansiirtoja
- **Arviointijärjestelmä**: Antaa/saa tähteä tehtävän jälkeen

### 📅 Tapahtumat
- Listaus tulevista tapahtumista
- Osallistumispainike ja osallistujamäärä
- Tapahtuman luominen (aika, paikka, kuvaus)
- Kategoriat: urheilu, pelit, sosiaalinen, opinnot, kulttuuri

### 📢 Ilmoitukset
- Opiston henkilökunnan julkaisemat ilmoitukset
- Tärkeät ilmoitukset merkitty ja kiinnitetty
- Filtrointi tärkeyden perusteella

### 👤 Profiili
- Käyttäjän nimi, profiilikuva ja bio
- Saldo ja ansaitut eurot
- Arvosana (tähdillä)
- Tehdyt ja varaamat tehtävät
- Tulevat tapahtumat
- Tilin asetukset (salasana, ilmoitukset, poista tili)

### 🛡️ Admin-paneeli
- Ylläpitäjien hallintapaneeli tärkeitä toimintoja varten
- Kojelauta: tilastot käyttäjistä, tehtävistä, rahaliikennesta
- Asuntolahallinto: lisää, muokkaa, poista asuntolat
- Käyttäjähallinto: näytä käyttäjät, estä tarvittaessa
- Sisällönhallinto: ilmoitukset ja tapahtumat

### 🔐 Kirjautuminen & Rekisteröityminen
- Kirjautuminen sähköpostilla ja salasanalla
- Rekisteröityminen nimellä ja sähköpostilla
- Salasanan näyttö/piilotus-painike

## 🎨 Käyttöliittymä

### Värimaailma
- **Tausta**: Tummansininen/musta (#0f1419)
- **Teksti**: Valkoinen
- **Pääväri**: Kirkkaan vihreä (#00ff88)
- **Kartalla**: SVG-visualisointi tumma tausta, vihreät rakennukset

### Suunnittelu
- Mobiiiliin optimoitu (iPhone-ensimmäinen suunnittelu)
- Responsive grid-järjestelmä
- Suuret, selkeät painikkeet
- Emoji-ikonit visuaalisille vihjeille

## 🔧 Teknologia

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Styling**: Tailwind CSS, mukautetut värit
- **State Management**: React hooks
- **Ikoni**: Lucide React, emoji-ikonit
- **Päivämäärät**: date-fns

## 📦 Projektin rakenne

```
opistohelp/
├── pages/
│   ├── index.js                 # Etusivu
│   ├── apartments.js            # Asuntolat-sivu
│   ├── apartment/[id].js        # Asuntolan yksityiskohdat
│   ├── room/[id]/[room].js      # Huoneen yksityiskohdat
│   ├── tasks.js                 # Tehtävämarkkina
│   ├── create-task.js           # Tehtävän luominen
│   ├── events.js                # Tapahtumat
│   ├── create-event.js          # Tapahtuman luominen
│   ├── announcements.js         # Ilmoitukset
│   ├── profile.js               # Profiili
│   ├── admin.js                 # Admin-paneeli
│   ├── login.js                 # Kirjautuminen
│   ├── _app.js                  # App wrapper
│   └── 404.js                   # 404-sivu
├── components/
│   ├── Layout.js                # Pääasiallinen layout
│   ├── Navigation.js            # Ylävalikko
│   ├── Hero.js                  # Pääsisältö
│   ├── QuickStats.js            # Nopeatilastot
│   ├── LatestTasks.js           # Viimeisimmät tehtävät
│   ├── UpcomingEvents.js        # Tulevat tapahtumat
│   └── Announcements.js         # Ilmoitukset
├── lib/
│   └── demoData.js              # Demotiedot
├── styles/
│   └── globals.css              # Globaali tyyli
├── public/                       # Staattiset tiedostot
├── next.config.js               # Next.js-konfiguraatio
├── tailwind.config.js           # Tailwind-konfiguraatio
├── package.json                 # Projektin riippuvuudet
└── README.md                    # Tämä tiedosto
```

## 🚀 Asennus ja käynnistys

### Vaatimukset
- Node.js 16+
- npm tai yarn

### Asennus

```bash
# Kloonaa repositorio
git clone https://github.com/jooakajava9-glitch/opistohelp.git
cd opistohelp

# Asenna riippuvuudet
npm install
# tai
yarn install
```

### Kehitys

```bash
npm run dev
# tai
yarn dev
```

Sovellus on saatavilla osoitteessa: `http://localhost:3000`

### Tuotanto

```bash
npm run build
npm run start
# tai
yarn build
yarn start
```

## 📊 Demotiedot

Sovellus sisältää valmiin demotiedon:

- **10 käyttäjää** (9 opiskelijaa + 1 admin)
- **4 asuntolaa** pohjapiirustuksineen (50 huonetta yhteensä)
- **15 tehtävää** eri hinnoilla ja tiloilla
- **8 tapahtumaa** eri kategorioissa
- **6 ilmoitusta** joista 2 kiinnitetty

Demotiedot ladataan automaattisesti sovelluksen käynnistäessä ja niitä käytetään kaikilla sivuilla.

## 🔐 Turvajärjestelmä (Beta)

- **Käyttäjänhallinto**: Käyttäjät voivat rekisteröityä ja kirjautua
- **Roolit**: Opiskelija ja admin
- **Admin-paneeli**: Vain ylläpitäjille tarkoitetut toiminnot
- **Salasanojen käsittely**: Salasana näytetään/piilotetaan kirjautumissivulla

## 💰 Rahajärjestelmä (Testiversio)

- Jokainen käyttäjä saa testisaldon
- Tehtävien suoritus lisää saldoa
- Ei todellisia rahansiirtoja
- Tulevaisuudessa integraatio maksujärjestelmään

## 🎯 Tulevat ominaisuudet

- [ ] Todellinen käyttäjän autentikointi (JWT/OAuth)
- [ ] Tietokanta (PostgreSQL/MongoDB)
- [ ] Todellinen maksupalvelu (Stripe/PayPal)
- [ ] Reaaliaikaiset ilmoitukset (WebSocket/Push)
- [ ] Kuvan lataus tehtäviin ja profiilikuviin
- [ ] Arviointijärjestelmän täydellinen toteutus
- [ ] Kalenterinäkymä
- [ ] Viestintäjärjestelmä käyttäjien välille
- [ ] Hakuhistoria
- [ ] Suosikit/merkityt tehtävät
- [ ] Mobiilisovellus (React Native)

## 📝 Käyttäjä-roolit

### 👤 Opiskelija
- Voi luoda tehtäviä
- Voi varata tehtäviä
- Voi osallistua tapahtumiin
- Voi nähdä ilmoitukset
- Omalla profiililla: saldo, tehtävät, arvosana

### 🛡️ Ylläpitäjä
- Pääsy admin-paneeliin
- Voi hallita asuntolat ja huoneet
- Voi hallita käyttäjiä (estää, nähdä tiedot)
- Voi julkaista ilmoituksia ja tapahtumia
- Voi nähdä tilastoja

## 🐛 Tunnetut ongelmat

- Demotiedot nollataan sivun lataamisen yhteydessä (ei pysyvää tietokantaa)
- Kuvan lataus ei vielä toteutettu
- Reaaliaikaiset ilmoitukset eivät vielä toimi

## 📞 Tuki

Ongelmista tai palautteesta ilmoita: opistohelp@reisjarviopisto.fi

## 📄 Lisenssi

MIT License - Katso LICENSE-tiedosto lisätiedoista.

## 👨‍💻 Tekijä

Luotu Reisjärven opiston opiskelijoille.

**OpistoHelp** - Siistimpi arkea – yhdessä. 🎓✨

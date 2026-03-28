# Metanoia — A Stress Relief & Wellness App

> **Second Year Mini Project** | Fr. Conceicao Rodrigues Institute of Technology, Vashi | University of Mumbai | 2021–22
> Built by Nidhi Shrivastav, Palak Wadhwa, Aaryan Rastogi & Atharva Suryavanshi

---

## What is Metanoia?

*Metanoia* (/ˌmɛtəˈnɔɪə/) means a fundamental change in character or perspective — a spiritual transformation. The name reflects the app's mission: helping users rediscover calm, clarity, and well-being.

Metanoia is a cross-platform mobile wellness application built with React Native and Expo. It was motivated by the mental health crisis that surged during and after the COVID-19 pandemic — a period when isolation, loss, and anxiety affected millions. According to surveys cited in our research, 77% of people experience stress that affects their physical health, and 48% have trouble sleeping due to stress.

The app provides a free, age-inclusive alternative to expensive wellness platforms like Calm and Headspace — combining guided meditation, sleep sounds, breathing exercises, a stress-relief game, and an AI chatbot companion called **Milo**.

---

## Features

### Home
- Time-based greeting (Good Morning / Afternoon / Evening / Night)
- Rotating inspirational quotes
- Quick-access cards to key features

### Meditation
- **Sessions** — Guided audio meditation tracks with a full music player (play/pause, seek, next/prev)
- **Workout** — Exercise and yoga video lessons (demo content)
- **Spiritual** — Bhagavad Gita shlokas and spiritual audio tracks

### Sleep
- **Sleep Player** — Calming nature sounds and lullabies (Spring, Mountains, Forest, Rain, Winter)
- **Zen Mode** — Customizable countdown timer (1–60 min) to encourage screen-free relaxation

### Self Care
- **Bubble Pop** — A simple, satisfying stress-relief game for all ages
- **Breathe** — Animated inhale/exhale breathing exercise with a 4-second cycle

### Chatbot — Milo
- Conversational companion that understands greetings, emotional states (anxiety, depression, sadness), and sleep problems
- Smart routing: suggests relevant app features based on user input (e.g. sleep issues → Sleep Player, anxiety → Zen Mode / Spiritual)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native 0.64 + Expo SDK 44 |
| Navigation | React Navigation 4 (Stack + Bottom Tabs) |
| Audio | Expo AV, React Native Track Player |
| Animations | Lottie, React Native Reanimated |
| UI Components | React Native Paper, React Native Elements |
| Fonts | Poppins, Cedarville Cursive, Beth Ellen |
| Platform | Android, iOS, Web |

---

## Getting Started

### Prerequisites
- Node.js (v14–v16 recommended; v17+ requires an extra flag — see below)
- npm
- [Expo Go](https://expo.dev/client) on your phone **or** an Android/iOS emulator

### Installation

```bash
git clone <your-repo-url>
cd Metanoia-App
npm install --legacy-peer-deps
```

### Running the App

**On Node.js v17 or higher (v18, v20, v24, etc.):**

```bash
NODE_OPTIONS=--openssl-legacy-provider npx expo-cli@5 start
```

**On Node.js v14–v16:**

```bash
npx expo-cli@5 start
```

This opens Expo DevTools in your browser with a QR code.

### Viewing the App

**On your phone** (must be on the same WiFi as your PC):
1. Install **Expo Go** from the App Store / Play Store
2. Scan the QR code from the terminal or Expo DevTools

> If Expo Go shows a manifest error (common with newer Expo Go versions), use the web option below instead.

**In the browser** (easiest):
- Click **"Run in web browser"** in the Expo DevTools sidebar, or open `http://localhost:19006`
- For a proper mobile view: press `F12` → Toggle Device Toolbar → select a phone (e.g. iPhone 12)

---

## Screenshots

<img src="assets/splashScreen.png" width=300/>

---

## Project Background

This was our **Second Year (SE) Mini Project** submitted to the University of Mumbai in the academic year 2021–22, supervised by **Mrs. Rakhi Kalantri**, Department of Computer Engineering, Fr. C. Rodrigues Institute of Technology, Vashi, Navi Mumbai.

A technical paper based on this project was published in a Scopus-indexed proceedings:

> **[Stress Relieving Application for Personal Wellbeing – Metanoia](https://link.springer.com/chapter/10.1007/978-981-19-9719-8_10)**
> 7th International Conference on Internet of Things and Connected Technologies (ICIoTCT 2022)
> Published in **Springer Nature — Lecture Notes in Networks and Systems (LNNS)**, 2023


---

## Known Limitations

- **Workout videos** use placeholder content — actual workout videos were planned for a future release
- Chatbot (Milo) is rule-based and does not use NLP or machine learning
- Audio playback may not work in standard Expo Go (native module limitation); web version works fully
- No user authentication or data persistence across sessions

---

## Feedback

Reach out at hinidhi12@gmail.com

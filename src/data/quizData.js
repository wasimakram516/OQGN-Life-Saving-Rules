const quizData = [
  {
    heading: 'Bypassing Safety Controls',
    question: 'Which of the following is a commitment statement for bypassing safety controls?',
    options: [
      { text: 'A: I inspect my fall protection equipment before use.', isCorrect: false },
      { text: 'B: I confirm the atmosphere has been tested and is monitored.', isCorrect: false },
      { text: 'C: I always wear a seatbelt while driving.', isCorrect: false },
      { text: 'D: I understand and use safety-critical equipment and procedures.', isCorrect: true },
    ],
  },
  {
    heading: 'Confined Space Entry',
    question: 'What should you do before entering a confined space?',
    options: [
      { text: 'A: I never cross barriers unless authorized.', isCorrect: false },
      { text: 'B: I position myself to avoid moving objects.', isCorrect: false },
      { text: 'C: I confirm the breathing apparatus is inspected and tested.', isCorrect: true },
      { text: 'D: I ensure all energy sources are identified.', isCorrect: false },
    ],
  },
  {
    heading: 'Driving',
    question: 'Which of these is a key commitment for following safe driving rules?',
    options: [
      { text: 'A: I tie off 100% to suitable anchor points.', isCorrect: false },
      { text: 'B: I do not use mobile phones or radios while driving.', isCorrect: true },
      { text: 'C: I confirm the atmosphere has been tested before starting work.', isCorrect: false },
      { text: 'D: I obtain authorization before overriding critical safety controls.', isCorrect: false },
    ],
  },
  {
    heading: 'Energy Isolation',
    question: 'What is a key action to verify energy isolation before work begins?',
    options: [
      { text: 'A: I use suitable anchor points when working at height.', isCorrect: false },
      { text: 'B: I ensure all flammable materials are removed.', isCorrect: false },
      { text: 'C: I confirm the work permit is valid.', isCorrect: false },
      { text: 'D: I check that there is zero energy and test for residual energy.', isCorrect: true },
    ],
  },
  {
    heading: 'Hot Work',
    question: 'How should you manage hot work activities?',
    options: [
      { text: 'A: I always wear my seatbelt.', isCorrect: false },
      { text: 'B: I never walk under a suspended load.', isCorrect: false },
      { text: 'C: I identify and control ignition sources.', isCorrect: true },
      { text: 'D: I ensure all energy sources are isolated.', isCorrect: false },
    ],
  },
  {
    heading: 'Line of Fire',
    question: 'What is a commitment statement for keeping yourself out of the line of fire?',
    options: [
      { text: 'A: I follow journey management requirements.', isCorrect: false },
      { text: 'B: I test the atmosphere before starting work.', isCorrect: false },
      { text: 'C: I confirm the permit to work is valid.', isCorrect: false },
      { text: 'D: I establish and obey barriers and exclusion zones.', isCorrect: true },
    ],
  },
  {
    heading: 'Mechanical Lifting Operation',
    question: 'What should be confirmed before starting a mechanical lifting operation?',
    options: [
      { text: 'A: I check all flammable materials are isolated.', isCorrect: false },
      { text: 'B: I confirm the load is securely rigged and bundled.', isCorrect: true },
      { text: 'C: I confirm hazardous energy sources are isolated.', isCorrect: false },
      { text: 'D: I inspect my fall protection equipment.', isCorrect: false },
    ],
  },
  {
    heading: 'Permit to Work (PTW)',
    question: 'What should you do when a permit to work is required?',
    options: [
      { text: 'A: I never walk or work under a suspended load.', isCorrect: false },
      { text: 'B: I maintain isolation effectiveness throughout the duration.', isCorrect: false },
      { text: 'C: I confirm the permit to work is valid and hazards are controlled.', isCorrect: true },
      { text: 'D: I ensure workers are competent to use fall protection equipment.', isCorrect: false },
    ],
  },
  {
    heading: 'Working at Height',
    question: 'How should you protect yourself when working at height?',
    options: [
      { text: 'A: I ensure all energy sources are identified.', isCorrect: false },
      { text: 'B: I position myself to avoid moving objects.', isCorrect: false },
      { text: 'C: I tie off 100% to suitable anchor points.', isCorrect: true },
      { text: 'D: I wear my seatbelt at all times.', isCorrect: false },
    ],
  },
  {
    heading: 'Fit for Duty',
    question: 'What is a key part of being fit for duty?',
    options: [
      { text: 'A: I secure tools to prevent dropped objects.', isCorrect: false },
      { text: 'B: I inform my supervisor if I or a coworker is unfit for work.', isCorrect: true },
      { text: 'C: I ensure a rescue plan is in place before entering a confined space.', isCorrect: false },
      { text: 'D: I obtain authorization before overriding safety-critical equipment.', isCorrect: false },
    ],
  },
];

export default quizData;

const fortuneTellerQuotes = ['Something you lost will turn up soon.',
    'I have learned never say never.',
    'I am not a fortune-teller.',
    'The one you love is closer than you think.',
    'A secret admirer will soon send you a sign of affection.',
    'Common sense is the best fortune teller.'];

const randomElement = fortuneTellerQuotes[Math.floor(Math.random() * fortuneTellerQuotes.length)];

console.log(`Your fortune quote for today: ${randomElement} `);
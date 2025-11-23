// Test: Da li middleware pravilno detektuje Googlebot?

function isCrawlerBot(userAgent) {
  const lowerUA = userAgent.toLowerCase();

  // Prvo proveri da li je normalan browser
  const browserPatterns = ['mozilla', 'chrome', 'safari', 'firefox', 'edge', 'opera'];
  const isBrowser = browserPatterns.some(pattern => lowerUA.includes(pattern));

  // Ako je browser, NIJE bot (čak i ako sadrži "bot" negde)
  if (isBrowser) {
    return false;
  }

  // Samo ako nije browser, proveri da li je bot
  const botPatterns = [
    'googlebot',
    'bingbot',
    'slurp', // Yahoo
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebookexternalhit',
    'twitterbot',
    'rogerbot',
    'linkedinbot',
    'embedly',
    'quora link preview',
    'showyoubot',
    'outbrain',
    'pinterest',
    'slackbot',
    'vkshare',
    'w3c_validator',
    'redditbot',
    'applebot',
    'whatsapp',
    'flipboard',
    'tumblr',
    'bitlybot',
    'skypeuripreview',
    'nuzzel',
    'discordbot',
    'qwantify',
    'pinterestbot',
    'seobility',
    'screaming frog',
    'semrush',
    'ahrefs',
    'moz',
  ];

  return botPatterns.some(pattern => lowerUA.includes(pattern));
}

// Test različitih User-Agent stringova
const testUserAgents = [
  {
    name: 'Googlebot Desktop',
    ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    expectedBot: true
  },
  {
    name: 'Googlebot Smartphone',
    ua: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    expectedBot: true
  },
  {
    name: 'Googlebot Image',
    ua: 'Googlebot-Image/1.0',
    expectedBot: true
  },
  {
    name: 'Chrome Browser',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    expectedBot: false
  },
  {
    name: 'Chrome Browser sa "bot" u URL-u',
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    expectedBot: false
  }
];

console.log('🤖 TEST BOT DETEKCIJE\n');
console.log('='.repeat(80));

let allPassed = true;

testUserAgents.forEach(test => {
  const result = isCrawlerBot(test.ua);
  const passed = result === test.expectedBot;

  console.log(`\n${passed ? '✅' : '❌'} ${test.name}`);
  console.log(`   Očekivano: ${test.expectedBot ? 'BOT' : 'BROWSER'}`);
  console.log(`   Detektovano: ${result ? 'BOT' : 'BROWSER'}`);
  console.log(`   UA: ${test.ua.substring(0, 80)}...`);

  if (!passed) allPassed = false;
});

console.log('\n' + '='.repeat(80));
console.log(`\n${allPassed ? '✅ SVI TESTOVI PROŠLI!' : '❌ NEKI TESTOVI NISU PROŠLI!'}\n`);

// VAŽNO: Proveravamo specifično Googlebot sa "Mozilla"
console.log('\n⚠️  KRITIČNA PROVERA:');
const googlebotWithMozilla = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
const hasGooglebot = googlebotWithMozilla.toLowerCase().includes('googlebot');
const hasMozilla = googlebotWithMozilla.toLowerCase().includes('mozilla');
const isBrowser = ['mozilla', 'chrome', 'safari', 'firefox', 'edge', 'opera'].some(
  pattern => googlebotWithMozilla.toLowerCase().includes(pattern)
);

console.log(`   Googlebot UA ima "googlebot": ${hasGooglebot}`);
console.log(`   Googlebot UA ima "mozilla": ${hasMozilla}`);
console.log(`   Detektovan kao browser: ${isBrowser}`);
console.log(`   Konačna detekcija: ${isCrawlerBot(googlebotWithMozilla) ? 'BOT ✅' : 'BROWSER ❌ PROBLEM!'}`);

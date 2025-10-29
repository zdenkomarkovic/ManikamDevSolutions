// Test script to check if messages are loading correctly

const fs = require('fs');
const path = require('path');

console.log('\n=== Testing Message Loading ===\n');

// Test loading English messages
try {
  const enPath = path.join(__dirname, 'lang', 'en.json');
  const enMessages = JSON.parse(fs.readFileSync(enPath, 'utf8'));

  console.log('✓ English messages loaded successfully');

  // Check for websiteDevelopment keys
  if (enMessages.websiteDevelopment) {
    console.log('✓ websiteDevelopment section found in English messages');

    // Check specific keys
    const keysToCheck = [
      'websiteDevelopment.hero.title',
      'websiteDevelopment.hero.subtitle',
      'websiteDevelopment.hero.badge1',
      'websiteDevelopment.hero.badge2',
      'websiteDevelopment.hero.badge3'
    ];

    keysToCheck.forEach(keyPath => {
      const keys = keyPath.split('.');
      let value = enMessages;

      for (const key of keys) {
        value = value[key];
        if (!value) break;
      }

      if (value) {
        console.log(`✓ ${keyPath}: "${value}"`);
      } else {
        console.log(`✗ ${keyPath}: NOT FOUND`);
      }
    });
  } else {
    console.log('✗ websiteDevelopment section NOT FOUND in English messages');
  }
} catch (error) {
  console.error('✗ Error loading English messages:', error.message);
}

console.log('\n--- Testing Serbian messages ---\n');

// Test loading Serbian messages
try {
  const srPath = path.join(__dirname, 'lang', 'sr.json');
  const srMessages = JSON.parse(fs.readFileSync(srPath, 'utf8'));

  console.log('✓ Serbian messages loaded successfully');

  // Check for websiteDevelopment keys
  if (srMessages.websiteDevelopment) {
    console.log('✓ websiteDevelopment section found in Serbian messages');
  } else {
    console.log('✗ websiteDevelopment section NOT FOUND in Serbian messages');
  }
} catch (error) {
  console.error('✗ Error loading Serbian messages:', error.message);
}

console.log('\n=== End of Test ===\n');
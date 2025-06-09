const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying multilingual setup...');

// Check files exist
const files = [
    'src/i18n.ts',
    'src/middleware.ts',
    'messages/en.json',
    'messages/pl.json', 
    'messages/de.json',
    'messages/fr.json'
];

let allGood = true;

files.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file}`);
    } else {
        console.log(`❌ ${file} - MISSING`);
        allGood = false;
    }
});

if (allGood) {
    console.log('\n🎉 All files present! Setup looks good.');
} else {
    console.log('\n⚠️  Some files are missing. Please check the setup.');
}

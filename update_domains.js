const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'index.php',
    'blog.html',
    'disclaimer.html',
    'privacy-policy.html',
    'terms-and-conditions.html',
    'thank-you.html'
];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Replace all arihant.city references with www.arihantcity.site
        const updatedContent = content.split('https://arihant.city').join('https://www.arihantcity.site');
        
        if (updatedContent !== content) {
            fs.writeFileSync(filePath, updatedContent, 'utf8');
            console.log(`Updated domains in ${file}`);
        }
    }
});

console.log("Domain updates complete!");

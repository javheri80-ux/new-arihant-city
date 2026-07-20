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
        
        // Normalize any old references to the official production domain
        let updatedContent = content;
        updatedContent = updatedContent.split('https://www.arihantcity.site').join('https://www.arihant.city');
        updatedContent = updatedContent.split('https://arihantcity.site').join('https://www.arihant.city');
        updatedContent = updatedContent.split('https://arihant.city').join('https://www.arihant.city');
        
        if (updatedContent !== content) {
            fs.writeFileSync(filePath, updatedContent, 'utf8');
            console.log(`Normalized domain in ${file}`);
        }
    }
});

console.log("Domain normalization complete!");

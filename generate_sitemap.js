const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.arihant.city';
const dateStr = new Date().toISOString().split('T')[0];

const rootPages = [
    { loc: '', priority: '1.0', changefreq: 'daily' },
    { loc: 'blog', priority: '0.8', changefreq: 'weekly' },
    { loc: '2-bhk-flat-in-bhiwandi', priority: '0.9', changefreq: 'weekly' },
    { loc: '2-bhk-flat-in-bhiwandi-price', priority: '0.9', changefreq: 'weekly' },
    { loc: '2-bhk-flat-in-bhiwandi-for-sale', priority: '0.9', changefreq: 'weekly' },
    { loc: '2-bhk-flat-in-anjur-phata-bhiwandi', priority: '0.9', changefreq: 'weekly' },
    { loc: 'ready-to-move-flats-in-bhiwandi', priority: '0.9', changefreq: 'weekly' },
    { loc: 'bhiwandi-1-bhk-flat', priority: '0.9', changefreq: 'weekly' },
    { loc: '1-bhk-flat-in-bhiwandi-for-sale', priority: '0.9', changefreq: 'weekly' },
    { loc: 'bhiwandi-1-bhk-flat-price', priority: '0.9', changefreq: 'weekly' },
    { loc: 'flats-in-bhiwandi', priority: '0.9', changefreq: 'weekly' },
    { loc: 'flats-for-sale-in-bhiwandi-millat-nagar', priority: '0.9', changefreq: 'weekly' },
    { loc: 'bhiwandi-flat-rate', priority: '0.9', changefreq: 'weekly' },
    { loc: 'commercial-property-in-bhiwandi', priority: '0.9', changefreq: 'weekly' },
    { loc: 'bhiwandi-property-rates-per-square-feet', priority: '0.9', changefreq: 'weekly' },
    { loc: 'property-in-bhiwandi-millat-nagar', priority: '0.9', changefreq: 'weekly' },
    { loc: 'olx-bhiwandi-property', priority: '0.9', changefreq: 'weekly' },
    { loc: 'bhiwandi-property-tax', priority: '0.9', changefreq: 'weekly' },
    { loc: 'property-in-bhiwandi', priority: '0.9', changefreq: 'weekly' },
    { loc: 'property-in-bhiwandi-for-sale', priority: '0.9', changefreq: 'weekly' },
    { loc: 'luxury-property-in-bhiwandi', priority: '0.9', changefreq: 'weekly' },
    { loc: 'privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { loc: 'terms-and-conditions', priority: '0.5', changefreq: 'yearly' },
    { loc: 'disclaimer', priority: '0.5', changefreq: 'yearly' }
];

// Scan blog directory for articles
const blogDir = path.join(__dirname, 'blog');
let blogPages = [];
if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir);
    files.forEach(file => {
        if (file.endsWith('.html')) {
            blogPages.push({
                loc: `blog/${file}`,
                priority: '0.7',
                changefreq: 'monthly'
            });
        }
    });
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Append root pages
rootPages.forEach(p => {
    const url = p.loc ? `${DOMAIN}/${p.loc}` : `${DOMAIN}/`;
    xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>\n`;
});

// Append blog pages
blogPages.forEach(p => {
    xml += `  <url>
    <loc>${DOMAIN}/${p.loc}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>\n`;
});

xml += `</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf8');
console.log("sitemap.xml generated successfully for domain: " + DOMAIN);

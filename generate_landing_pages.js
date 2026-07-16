const fs = require('fs');
const path = require('path');

const masterFile = path.join(__dirname, 'index.html');
if (!fs.existsSync(masterFile)) {
    console.error("Error: Master index.html not found!");
    process.exit(1);
}

const masterContent = fs.readFileSync(masterFile, 'utf8');

const pages = [
  {
    filename: '2-bhk-flat-in-bhiwandi.html',
    keyword: '2 bhk flat in bhiwandi',
    title: '2 BHK Flat in Bhiwandi – Luxury Flats in Arihant City Township',
    description: 'Looking for a premium 2 BHK flat in Bhiwandi? Arihant City offers luxury 2BHK residential flats with 20+ world-class amenities at the prime Kalyan-Bhiwandi Bypass. Download pricing & floor plans today!',
    keywords: '2 bhk flat in bhiwandi, 2bhk flats bhiwandi, arihant city 2bhk, buy 2 bhk flat in bhiwandi, residential project bhiwandi',
    h1: 'Premium 2 BHK Flat in Bhiwandi - Arihant City Downtown',
    h2: 'Arihant City 2 BHK Flat in Bhiwandi - Layout & Configuration'
  },
  {
    filename: '2-bhk-flat-in-bhiwandi-price.html',
    keyword: '2 bhk flat in bhiwandi price',
    title: '2 BHK Flat in Bhiwandi Price – Cost, Pricing List & Offers in Arihant City',
    description: 'Get the latest 2 BHK flat in Bhiwandi price list, payment schedules, and limited-time discounts for Arihant City. Premium 2BHK flats starting at competitive rates. Enquire now for current pricing!',
    keywords: '2 bhk flat in bhiwandi price, 2bhk price bhiwandi, arihant city 2bhk price, 2 bhk flats cost bhiwandi, property rates in bhiwandi',
    h1: 'Best 2 BHK Flat in Bhiwandi Price & Payment Plans',
    h2: 'Arihant City 2 BHK Flat in Bhiwandi Price Details'
  },
  {
    filename: '2-bhk-flat-in-bhiwandi-for-sale.html',
    keyword: '2 bhk flat in bhiwandi for sale',
    title: '2 BHK Flat in Bhiwandi for Sale – Buy Luxury Homes in Arihant City',
    description: 'Explore the finest 2 BHK flat in Bhiwandi for sale. Arihant City presents luxury 2BHK balcony homes on the ring-road touch Kalyan-Bhiwandi Bypass. RERA approved project, schedule a free site visit!',
    keywords: '2 bhk flat in bhiwandi for sale, buy 2bhk flat in bhiwandi, properties for sale in bhiwandi, new projects in bhiwandi for sale',
    h1: 'Luxury 2 BHK Flat in Bhiwandi for Sale - Arihant City',
    h2: '2 BHK Flat in Bhiwandi for Sale - Floor Plans & Details'
  },
  {
    filename: '2-bhk-flat-in-anjur-phata-bhiwandi.html',
    keyword: '2 BHK Flat in Anjur Phata Bhiwandi',
    title: '2 BHK Flat in Anjur Phata Bhiwandi – Premium Apartments in Arihant City',
    description: 'Discover luxury 2 BHK Flat in Anjur Phata Bhiwandi region at Arihant City. Experience premium living with modern gymnasium, pool, and unmatched expressway connectivity. Register for special pricing!',
    keywords: '2 BHK Flat in Anjur Phata Bhiwandi, 2bhk flat anjur phata, flats near anjur phata bhiwandi, arihant city anjur phata, properties near anjur phata',
    h1: 'Premium 2 BHK Flat in Anjur Phata Bhiwandi Region',
    h2: '2 BHK Flat in Anjur Phata Bhiwandi Region - Specifications'
  },
  {
    filename: 'ready-to-move-flats-in-bhiwandi.html',
    keyword: 'Ready to Move Flats in Bhiwandi',
    title: 'Ready to Move Flats in Bhiwandi – Immediate Possession Homes in Arihant City',
    description: 'Ready to move flats in Bhiwandi for sale. Secure your dream home at Arihant City with immediate occupancy, OC received status, and direct connectivity to Thane and Kalyan. Book your visit now!',
    keywords: 'Ready to Move Flats in Bhiwandi, ready possession flats bhiwandi, oc received flats bhiwandi, buy ready to move in flats bhiwandi',
    h1: 'Ready to Move Flats in Bhiwandi - Arihant City',
    h2: 'Ready to Move Flats in Bhiwandi - Pricing & Availability'
  }
];

pages.forEach(page => {
    let content = masterContent;

    // 1. Title tag
    content = content.replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`);

    // 2. Meta description (matches newlines/indentation)
    content = content.replace(/<meta name="description"[\s\S]*?content="[^"]*"[^>]*>/, 
        `<meta name="description" content="${page.description}" />`);

    // 3. Meta keywords
    content = content.replace(/<meta name="keywords"[\s\S]*?content="[^"]*"[^>]*>/, 
        `<meta name="keywords" content="${page.keywords}" />`);

    // 4. OG Title
    content = content.replace(/<meta property="og:title" content="[^"]*"[^>]*>/, 
        `<meta property="og:title" content="${page.title}" />`);

    // 5. OG Description
    content = content.replace(/<meta property="og:description"[\s\S]*?content="[^"]*"[^>]*>/, 
        `<meta property="og:description" content="${page.description}" />`);

    // 6. OG URL
    content = content.replace(/<meta property="og:url" content="[^"]*"[^>]*>/, 
        `<meta property="og:url" content="https://arihant.city/${page.filename}" />`);

    // 7. Twitter Title
    content = content.replace(/<meta name="twitter:title" content="[^"]*"[^>]*>/, 
        `<meta name="twitter:title" content="${page.title}" />`);

    // 8. Twitter Description
    content = content.replace(/<meta name="twitter:description"[\s\S]*?content="[^"]*"[^>]*>/, 
        `<meta name="twitter:description" content="${page.description}" />`);

    // 9. Canonical
    content = content.replace(/<link rel="canonical" href="[^"]*"[^>]*>/, 
        `<link rel="canonical" href="https://arihant.city/${page.filename}" />`);

    // 10. H1 tag (SEO main title)
    content = content.replace(/<h1 id="main-content" class="visually-hidden"[\s\S]*?>[\s\S]*?<\/h1>/, 
        `<h1 id="main-content" class="visually-hidden" style="position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0;">${page.h1}</h1>`);

    // 11. H2 tag (floor plan section title)
    content = content.replace(/<h2 class="section-title">Arihant City Floor Plans & Configurations<\/h2>/, 
        `<h2 class="section-title">${page.h2}</h2>`);

    fs.writeFileSync(path.join(__dirname, page.filename), content, 'utf8');
    console.log(`Generated page: ${page.filename} for keyword: "${page.keyword}"`);
});

console.log("All keyword landing pages generated successfully!");

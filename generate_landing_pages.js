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
    keywordTitle: '2 BHK Flat in Bhiwandi',
    title: '2 BHK Flat in Bhiwandi – Luxury Flats in Arihant City Township',
    description: 'Looking for a premium 2 BHK flat in Bhiwandi? Arihant City offers luxury 2BHK residential flats with 20+ world-class amenities at the prime Kalyan-Bhiwandi Bypass. Download pricing & floor plans today!',
    keywords: '2 bhk flat in bhiwandi, 2bhk flats bhiwandi, arihant city 2bhk, buy 2 bhk flat in bhiwandi, residential project bhiwandi',
    h1: 'Premium 2 BHK Flat in Bhiwandi - Arihant City Downtown',
    h2: 'Arihant City 2 BHK Flat in Bhiwandi - Layout & Configuration',
    p1: 'If you are looking to buy a premium <strong>2 BHK flat in Bhiwandi</strong>, <strong>Arihant City</strong> is the ideal destination to fulfill your dreams. A world-class township where modern amenities and nature coexist harmoniously. With its stunning architecture and excellent highway connectivity, this project has become the top choice for homebuyers looking for spacious 2 BHK configurations.',
    p2: 'Being a fully MahaRERA-approved project, your investment in a <strong>2 BHK flat in Bhiwandi</strong> here is completely secure. The premium configurations in this township offer an ultra-luxury lifestyle. Backed by the trust of the Arihant Group, owning a 2BHK home here is truly a royal experience.',
    faqs: [
      { q: "What is the size of a 2 BHK flat in Bhiwandi at Arihant City?", a: "A premium 2 BHK flat in Bhiwandi at Arihant City offers a spacious layout of 793 Sq.Ft. carpet area. Each home features king-size balconies, 10ft. ceiling heights, and open view ventilation." },
      { q: "Is Arihant City the best project for a 2 BHK flat in Bhiwandi?", a: "Yes, Arihant City is highly recommended for a 2 BHK flat in Bhiwandi due to its 32-acre mega township structure, 20+ luxury amenities, MahaRERA approval, and a 20-year delivery legacy by the Arihant Group." },
      { q: "What amenities does Arihant City offer?", a: "Arihant City offers swimming pool, gymnasium, clubhouse, landscaped gardens, 24/7 security, kids play area and more." },
      { q: "Is Arihant City RERA registered?", a: "Yes, Arihant City is a MahaRERA registered project. The RERA registration numbers include Phase-I: P51700010884 and Phase-II: P51700028429." }
    ]
  },
  {
    filename: '2-bhk-flat-in-bhiwandi-price.html',
    keyword: '2 bhk flat in bhiwandi price',
    keywordTitle: '2 BHK Flat in Bhiwandi Price',
    title: '2 BHK Flat in Bhiwandi Price – Cost, Pricing List & Offers in Arihant City',
    description: 'Get the latest 2 BHK flat in Bhiwandi price list, payment schedules, and limited-time discounts for Arihant City. Premium 2BHK flats starting at competitive rates. Enquire now for current pricing!',
    keywords: '2 bhk flat in bhiwandi price, 2bhk price bhiwandi, arihant city 2bhk price, 2 bhk flats cost bhiwandi, property rates in bhiwandi',
    h1: 'Best 2 BHK Flat in Bhiwandi Price & Payment Plans',
    h2: 'Arihant City 2 BHK Flat in Bhiwandi Price Details',
    p1: 'If you want to check the best <strong>2 BHK flat in Bhiwandi price</strong>, <strong>Arihant City</strong> offers premium homes at highly competitive and attractive rates. A world-class township where modern amenities and nature coexist harmoniously. With its stunning architecture and excellent connectivity, this project offers the most value-for-money pricing in the Thane region.',
    p2: 'Being a fully MahaRERA-approved project, your investment is completely secure. The premium 2BHK configurations offer an ultra-luxury lifestyle at a budget-friendly <strong>2 BHK flat in Bhiwandi price</strong>. Backed by the trust of the Arihant Group, buying your home here is a smart and transparent experience.',
    faqs: [
      { q: "What is the starting 2 BHK flat in Bhiwandi price at Arihant City?", a: "The starting 2 BHK flat in Bhiwandi price at Arihant City starts from ₹35 Lakhs onwards, depending on the layout, floor, and construction phase. Get detailed price sheets by clicking Enquiry Now." },
      { q: "Are there bank loan offers available for the 2 BHK flat in Bhiwandi price?", a: "Yes, because Arihant City is fully MahaRERA registered and has received OC for completed phases, nationalized banks offer quick loan approvals for the 2 BHK flat in Bhiwandi price list." },
      { q: "What are the location advantages of Arihant City?", a: "Arihant City is situated just 1 min from the Mumbai-Nashik Expressway and 2 mins from the upcoming Temghar Metro Station (Line 5)." },
      { q: "How can I download the cost sheet and pricing structure?", a: "You can download the full pricing sheet and dynamic cost breakdown of your 2 BHK flat in Bhiwandi by submitting the Enquiry Now form." }
    ]
  },
  {
    filename: '2-bhk-flat-in-bhiwandi-for-sale.html',
    keyword: '2 bhk flat in bhiwandi for sale',
    keywordTitle: '2 BHK Flat in Bhiwandi for Sale',
    title: '2 BHK Flat in Bhiwandi for Sale – Buy Luxury Homes in Arihant City',
    description: 'Explore the finest 2 BHK flat in Bhiwandi for sale. Arihant City presents luxury 2BHK balcony homes on the ring-road touch Kalyan-Bhiwandi Bypass. RERA approved project, schedule a free site visit!',
    keywords: '2 bhk flat in bhiwandi for sale, buy 2bhk flat in bhiwandi, properties for sale in bhiwandi, new projects in bhiwandi for sale',
    h1: 'Luxury 2 BHK Flat in Bhiwandi for Sale - Arihant City',
    h2: '2 BHK Flat in Bhiwandi for Sale - Floor Plans & Details',
    p1: 'If you are searching for a premium <strong>2 BHK flat in Bhiwandi for sale</strong>, <strong>Arihant City</strong> is the ideal township to establish your family. A world-class project where modern amenities and nature coexist harmoniously. With its stunning architecture and bypass connectivity, these apartments are the top choice for buyers looking for immediate or near-possession options.',
    p2: 'Being a fully MahaRERA-approved project, your booking of a <strong>2 BHK flat in Bhiwandi for sale</strong> is completely secure. The luxury 2BHK homes in this township offer an premium lifestyle. Backed by the trust of the Arihant Group, buying a home for sale here is a secure life investment.',
    faqs: [
      { q: "How do I book a 2 BHK flat in Bhiwandi for sale at Arihant City?", a: "To book a premium 2 BHK flat in Bhiwandi for sale, register via the contact form on this website. Our channel partner sales team will arrange a free pick-and-drop site visit and help block your unit." },
      { q: "What makes a 2 BHK flat in Bhiwandi for sale in Arihant City a good investment?", a: "Investing in a 2 BHK flat in Bhiwandi for sale here offers high capital appreciation due to the upcoming Metro Line 5 (Temghar Station is 2 mins away) and easy accessibility to Thane (20 mins)." },
      { q: "Is the project fully RERA compliant?", a: "Yes, Arihant City is MahaRERA approved. Registration numbers include Phase-I: P51700010884, D3 Tower: P51700022743, and Phase-II: P51700028429." },
      { q: "What configurations are available for sale?", a: "Apart from the popular 2 BHK Elite configurations, 1 BHK, 3 BHK (1+1 Jodi), and 4 BHK premium options are also available." }
    ]
  },
  {
    filename: '2-bhk-flat-in-anjur-phata-bhiwandi.html',
    keyword: '2 BHK Flat in Anjur Phata Bhiwandi',
    keywordTitle: '2 BHK Flat in Anjur Phata Bhiwandi',
    title: '2 BHK Flat in Anjur Phata Bhiwandi – Premium Apartments in Arihant City',
    description: 'Discover luxury 2 BHK Flat in Anjur Phata Bhiwandi region at Arihant City. Experience premium living with modern gymnasium, pool, and unmatched expressway connectivity. Register for special pricing!',
    keywords: '2 BHK Flat in Anjur Phata Bhiwandi, 2bhk flat anjur phata, flats near anjur phata bhiwandi, arihant city anjur phata, properties near anjur phata',
    h1: 'Premium 2 BHK Flat in Anjur Phata Bhiwandi Region',
    h2: '2 BHK Flat in Anjur Phata Bhiwandi Region - Specifications',
    p1: 'If you are searching for a premium <strong>2 BHK Flat in Anjur Phata Bhiwandi</strong> region, <strong>Arihant City</strong> offers the perfect blend of location comfort and luxury. A world-class township where modern amenities and nature coexist harmoniously. With its proximity to Anjur Phata, this project has become the top choice for working professionals and families.',
    p2: 'Being a fully MahaRERA-approved project, your investment in a <strong>2 BHK Flat in Anjur Phata Bhiwandi</strong> vicinity is completely secure. The spacious homes in this township offer an ultra-luxury lifestyle. Backed by the trust of the Arihant Group, living near Anjur Phata is a highly convenient and premium experience.',
    faqs: [
      { q: "How far is Arihant City from Anjur Phata Bhiwandi?", a: "Arihant City is located in close proximity to Anjur Phata Bhiwandi, situated on the main Kalyan-Bhiwandi Bypass, offering 1-minute access to expressways and metro lines." },
      { q: "Is a 2 BHK Flat in Anjur Phata Bhiwandi region suitable for Thane commuters?", a: "Yes, a 2 BHK Flat in Anjur Phata Bhiwandi area at Arihant City is ideal for Thane commuters, as Majiwada (Thane) is reachable in just 20 minutes via the expressway." },
      { q: "What amenities are available near Anjur Phata area in this project?", a: "The project includes a luxury clubhouse, swimming pool, state-of-the-art gym, landscaped gardens, 24/7 security, and close proximity to top schools and hospitals." },
      { q: "Are structural layouts RERA approved?", a: "Yes, Arihant City is RERA certified. It is fully compliant with MahaRERA guidelines for transparency and legal safety." }
    ]
  },
  {
    filename: 'ready-to-move-flats-in-bhiwandi.html',
    keyword: 'Ready to Move Flats in Bhiwandi',
    keywordTitle: 'Ready to Move Flats in Bhiwandi',
    title: 'Ready to Move Flats in Bhiwandi – Immediate Possession Homes in Arihant City',
    description: 'Ready to move flats in Bhiwandi for sale. Secure your dream home at Arihant City with immediate occupancy, OC received status, and direct connectivity to Thane and Kalyan. Book your visit now!',
    keywords: 'Ready to Move Flats in Bhiwandi, ready possession flats bhiwandi, oc received flats bhiwandi, buy ready to move in flats bhiwandi',
    h1: 'Ready to Move Flats in Bhiwandi - Arihant City',
    h2: 'Ready to Move Flats in Bhiwandi - Pricing & Availability',
    p1: 'If you are looking for ready possession or <strong>Ready to Move Flats in Bhiwandi</strong>, <strong>Arihant City</strong> is the ideal township to move into immediately. A world-class township with OC received for completed phases where modern amenities and community living coexist harmoniously. Skip the construction wait and move into your dream home today.',
    p2: 'Being a fully MahaRERA-approved development, your investment in these <strong>Ready to Move Flats in Bhiwandi</strong> is completely secure and transparent. The ready-to-occupy apartments offer an ultra-luxury lifestyle. Backed by the trust of the Arihant Group, moving in here is truly a royal experience.',
    faqs: [
      { q: "Does Arihant City offer ready to move flats in Bhiwandi?", a: "Yes, Arihant City has ready to move flats in Bhiwandi with Occupancy Certificate (OC) received for finished towers, allowing you to move in immediately without GST charges." },
      { q: "What is the benefit of buying ready to move flats in Bhiwandi over under-construction?", a: "Buying ready to move flats in Bhiwandi at Arihant City offers peace of mind, zero risk of delay, actual layout inspection, and immediate tax/rental benefits." },
      { q: "Can I get immediate bank loan approvals for ready possession flats?", a: "Yes, since OC is received, all major banks provide quick home loan approvals for our ready to move in flats." },
      { q: "Is pick-and-drop service available for site visits?", a: "Yes, we provide complimentary pick-up & drop-off service from key points in Thane and Kalyan for scheduled site visits." }
    ]
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

    // 10. H1 tag: Replace hidden H1 placeholder with empty div for skip-link compatibility
    content = content.replace(/<h1 id="main-content" class="visually-hidden"[\s\S]*?>[\s\S]*?<\/h1>/, 
        `<div id="main-content" class="visually-hidden"></div>`);

    // 11. H1 tag: Convert the main visible section title from H2 to H1
    content = content.replace(/<h2 class="section-title">Arihant City Floor Plans & Configurations<\/h2>/, 
        `<h1 class="section-title">${page.h2}</h1>`);

    // 12. Main Body Copy Paragraphs
    content = content.replace('If you are looking for a perfect home in the prime area of Kalyan and Bhiwandi, <strong>Arihant City</strong> is the ideal destination to fulfill your dreams. A world-class township where modern amenities and nature coexist harmoniously. With its stunning architecture and excellent highway connectivity, this project has become the top choice for homebuyers.', page.p1);
    content = content.replace('Being a fully MahaRERA-approved project, your investment here is completely secure. The premium 1BHK, 2BHK, and 3BHK apartments in this township offer an ultra-luxury lifestyle. Backed by the trust of the Arihant Group, living here is truly a royal experience.', page.p2);

    // 13. Product Schema Name & Description
    content = content.replace(
        /"name": "Arihant City Residential Flats",\s*"description": "[^"]*"/,
        `"name": "${page.keywordTitle} - Arihant City",\n      "description": "${page.description}"`
    );

    // 14. Breadcrumb Schema third item url and name
    content = content.replace(
        /{"@type": "ListItem", "position": 3, "name": "Arihant City", "item": "https:\/\/arihant.city\/#"}/,
        `{"@type": "ListItem", "position": 3, "name": "${page.keywordTitle}", "item": "https://arihant.city/${page.filename}"}`
    );

    // 15. Dynamic AEO / GEO FAQ Schema Generation
    const faqSchemaJSON = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": page.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    // Replace the default FAQPage schema block safely using precise FAQPage regex
    const faqSchemaRegex = /<script type="application\/ld\+json">\s*\{\s*"@context":\s*"https:\/\/schema.org",\s*"@type":\s*"FAQPage"[\s\S]*?<\/script>/;
    content = content.replace(faqSchemaRegex, `<script type="application/ld+json">\n    ${JSON.stringify(faqSchemaJSON, null, 2)}\n    </script>`);

    // 16. Dynamic HTML Accordion FAQ Generation
    let faqHtml = '';
    page.faqs.forEach(faq => {
        faqHtml += `
                <div class="faq-item">
                    <div class="faq-q"
                        onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
                        <span>${faq.q}</span>
                        <span>▼</span>
                    </div>
                    <div class="faq-a">${faq.a}</div>
                </div>`;
    });

    // Replace the default accordion container inside index.html
    const faqAccordionRegex = /<div class="faq-accordion">[\s\S]*?<\/div>\s*<\/section>/;
    content = content.replace(faqAccordionRegex, `<div class="faq-accordion">${faqHtml}\n            </div>\n        </section>`);

    fs.writeFileSync(path.join(__dirname, page.filename), content, 'utf8');
    console.log(`Generated page: ${page.filename} with visible H1 tag and correct schema.`);
});

console.log("All keyword landing pages optimized with visible H1 tags successfully!");

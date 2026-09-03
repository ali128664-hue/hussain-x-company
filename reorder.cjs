const fs = require('fs');
let content = fs.readFileSync('src/data/servicesData.ts', 'utf8');

// Find the services array boundaries
const startStr = 'export const services: Service[] = [';
const startIndex = content.indexOf(startStr) + startStr.length;
const endStr = '];\n\nexport const megaMenuCategories';
const endIndex = content.indexOf(endStr);

if (startIndex === -1 || endIndex === -1) {
  console.log('Could not find array boundaries');
  process.exit(1);
}

let arrayContent = content.substring(startIndex, endIndex);

// Split into individual objects. This is a bit tricky but since they are separated by "  },\n  {" we can do that.
// Let's use a safer approach: eval the array! 
// Wait, eval might fail if there are React icons or imports. But there are none, it's just pure JS objects.
// Let's just do a regex replace to move them to the top.

const smmRegex = /,\s*\{\s*id:\s*'social-media-marketing'[\s\S]*?(?=\},\s*\{\s*id:\s*'seo-services')\}/;
const seoRegex = /,\s*\{\s*id:\s*'seo-services'[\s\S]*?(?=\n\])/;

let smmMatch = arrayContent.match(smmRegex);
let seoMatch = arrayContent.match(seoRegex);

if (smmMatch && seoMatch) {
    // Remove them from the bottom
    arrayContent = arrayContent.replace(smmRegex, '');
    arrayContent = arrayContent.replace(seoRegex, '');
    
    // Clean up the commas
    let smmStr = smmMatch[0].replace(/^,\s*/, '') + ',';
    let seoStr = seoMatch[0].replace(/^,\s*/, '') + ',';
    
    // Change their numbers
    smmStr = smmStr.replace(/number:\s*'17'/, "number: '01'");
    seoStr = seoStr.replace(/number:\s*'18'/, "number: '02'");
    
    // Adjust numbers of the others (Optional but good)
    // For now just insert them at the top
    arrayContent = '\n  ' + smmStr + '\n  ' + seoStr + '\n' + arrayContent;
    
    // Replace in file
    let finalContent = content.substring(0, startIndex) + arrayContent + content.substring(endIndex);
    fs.writeFileSync('src/data/servicesData.ts', finalContent);
    console.log('Successfully moved SMM and SEO to top.');
} else {
    console.log('Could not match SMM or SEO blocks.');
}

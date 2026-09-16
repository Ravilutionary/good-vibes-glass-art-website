import readline from 'readline';
import { existsSync, mkdirSync, copyFileSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (query, defaultValue = '') => {
  return new Promise((resolve) => {
    const prompt = defaultValue ? `${query} (${defaultValue}): ` : `${query}: `;
    rl.question(prompt, (answer) => {
      resolve(answer.trim() || defaultValue);
    });
  });
};

async function main() {
  console.log('\n🚀 Smoke Shop Monorepo — New Client Generator\n');
  console.log('Answer the following prompts to scaffold a new client website:\n');

  const name = await ask('Store Name', 'High Tide Smoke & Glass');
  const slugDefault = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const id = await ask('Client Slug / ID', slugDefault);
  const legalName = await ask('Legal Business Name', `${name} LLC`);
  const shortName = await ask('Short Brand Name', name.split(' ')[0] || name);
  const city = await ask('City', 'Denver');
  const state = await ask('State', 'CO');
  const street = await ask('Street Address', '100 Main St');
  const zip = await ask('ZIP Code', '80202');
  const phone = await ask('Phone Number', '(303) 555-0199');
  const rawPhone = phone.replace(/[^0-9]/g, '');
  const intlPhone = `+1-${rawPhone.slice(0,3)}-${rawPhone.slice(3,6)}-${rawPhone.slice(6)}`;
  const email = await ask('Email', `info@${id}.com`);
  const siteUrl = await ask('Canonical Site URL', `https://${id}.com`);
  const theme = await ask('Theme Palette (neon-cyberpunk / luxury-gold / herbal-emerald)', 'luxury-gold');

  const targetDir = join(rootDir, 'src', 'clients', id);
  const templateConfigPath = join(rootDir, 'src', 'clients', '_template', 'config.ts');

  if (existsSync(targetDir)) {
    console.error(`\n❌ Error: Client directory "src/clients/${id}" already exists.`);
    rl.close();
    process.exit(1);
  }

  mkdirSync(targetDir, { recursive: true });

  let templateContent = readFileSync(templateConfigPath, 'utf-8');
  const replacements = {
    '%%CLIENT_ID%%': id,
    '%%STORE_NAME%%': name,
    '%%LEGAL_NAME%%': legalName,
    '%%SHORT_NAME%%': shortName,
    '%%TAGLINE%%': 'EXCLUSIVE SELECTION.',
    '%%TAGLINE_SUB%%': 'LOCAL FAVORITE.',
    '%%STREET%%': street,
    '%%CITY%%': city,
    '%%STATE%%': state,
    '%%ZIP%%': zip,
    '%%PHONE%%': phone,
    '%%RAW_PHONE%%': rawPhone,
    '%%INTL_PHONE%%': intlPhone,
    '%%EMAIL%%': email,
    '%%SITE_URL%%': siteUrl,
    '%%THEME%%': theme,
    '%%MAPS_URL%%': `https://maps.google.com/?q=${encodeURIComponent(`${street}, ${city}, ${state} ${zip}`)}`
  };

  for (const [placeholder, val] of Object.entries(replacements)) {
    templateContent = templateContent.replaceAll(placeholder, val);
  }

  writeFileSync(join(targetDir, 'config.ts'), templateContent, 'utf-8');

  console.log(`\n✅ Client created successfully!`);
  console.log(`📁 Config path: src/clients/${id}/config.ts`);
  console.log(`\nTo test this client locally:`);
  console.log(`  SITE_ID=${id} npm run dev`);
  console.log(`\nTo build this client:`);
  console.log(`  SITE_ID=${id} npm run build\n`);

  rl.close();
}

main().catch((err) => {
  console.error(err);
  rl.close();
  process.exit(1);
});

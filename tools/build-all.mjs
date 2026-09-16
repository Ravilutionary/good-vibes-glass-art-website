import { execSync } from 'child_process';
import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const clientsDir = join(rootDir, 'src', 'clients');

const clients = readdirSync(clientsDir).filter(f => !f.startsWith('_'));

console.log(`\n🏗️  Building all registered clients (${clients.length} total)...\n`);

for (const client of clients) {
  console.log(`========================================`);
  console.log(`📦 Building client: ${client}`);
  console.log(`========================================\n`);
  try {
    execSync(`SITE_ID=${client} npm run build`, { stdio: 'inherit', cwd: rootDir });
    console.log(`\n✅ Successfully built ${client}\n`);
  } catch (err) {
    console.error(`\n❌ Build failed for client ${client}`);
    process.exit(1);
  }
}

console.log(`🎉 All ${clients.length} client sites built successfully!`);

// Run with `npm run spellcheck -- {name of folder}`
// TODO proselint config
// TODO spellcheck append to dictionary (rather than overwriting)
// TODO sync rm -rf _copywriting
import { readFile } from 'fs/promises';
import fs from 'fs-extra';
import { exec } from 'child_process';
import TurndownService from 'turndown';
const turndownService = new TurndownService();

const args = process.argv.slice(2);
const file = `_copywriting/${args[0]}.md`;
const spell = exec(`spellchecker -f '${file}' -l en-CA --no-gitignore -d ./_utilities/dictionary.txt`);
const prose = exec(`proselint ${file}`);

const readTheFiles = async () => {
	const read = await readFile(`_site/${args[0]}/index.html`, 'utf8');
	return read;
};

const readFiles = await readTheFiles();

turndownService.remove('script');
const markdown = turndownService.turndown(readFiles)

async function testFile (f, md) {
  try {
    await fs.outputFile(f, md)
  } catch (err) {
    console.error(err)
  }
}

testFile(`_copywriting/${args[0]}.md`, markdown)
	.then(prose.stdout.pipe(process.stdout))
	.then(spell.stdout.pipe(process.stdout));
import {readFile,writeFile} from 'node:fs/promises';
const data=JSON.parse(await readFile(new URL('../data/rules.json',import.meta.url),'utf8'));
await writeFile(new URL('../data/rules.js',import.meta.url),'window.RULES_DATA = '+JSON.stringify(data)+';\n');
console.log(`Generated ${data.entries.length} terms`);

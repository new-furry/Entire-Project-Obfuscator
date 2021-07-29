const program = require('commander');
const { obfuscate } = require('./obfuscator');

program.version('0.0.1').description('Command to obfuscate a js file');

program
    .command('obfuscate <filename>')
    .alias('obf')
    .description('obfuscate filename')
    .action((filename) => obfuscate((filename)));

program.parse(process.argv);

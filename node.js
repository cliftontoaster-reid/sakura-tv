const fs = require('fs');
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('video id : ', name => {
    let url = 'http://www.youtube.com/watch?v=' + name
    ytdl('http://www.youtube.com/watch?v=' + name)
        .pipe(fs.createWriteStream('meteo/meteo.flv'));
    readline.close();
});

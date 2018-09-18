const fs = require('fs');
const path = require('path');
const parse = require('csv-parse/lib/sync');

const raw = fs.readFileSync(path.join(__dirname, 'Gaz_places_national.txt'))

const records = parse(raw, {columns: true, delimiter: '\t', trim: true});

const data = records.map((t) => {
  let words = t.split(' ');
  let name = words.slice(0, words.length - 1).join(' ');
  return {
    name: name,
    country: 'US', 
    adminCode: t.USPS, 
    population: parseFloat(t.POP10), 
    lat: parseFloat(t.INTPTLAT), 
    lon: parseFloat(t.INTPTLONG)
  }
});

module.exports = data;

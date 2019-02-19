// CALLBACK EXAMPLE 1
const printName = name => {
  console.log(name);
};

setTimeout(printName('Jeremy Jones'), 2000);

// CALLBACK EXAMPLE 2
const bands = [
  { name: 'Radiohead', nationality: 'British' },
  { name: 'Phish', nationality: 'American' },
  { name: 'Tool', nationality: 'American' },
  { name: 'Led Zeppelin', nationality: 'British' }
];

const filterBandsByCountry = (data, target, cb) => {
  for (let i in data) {
    if (data[i].nationality === target) {
      cb(data[i]);
    }
  }
};

filterBandsByCountry(bands, 'British', obj => {
  console.log(obj.name);
});

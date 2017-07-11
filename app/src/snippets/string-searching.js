{
  const str = 'Despacito, Quiero respirar tu cuello despacito'; // "slowly, i want to breathe your neck slowly"

  console.dir();
  console.info('string.startsWith()');
  console.dir();
  console.log(str.startsWith('Despacito'));
  console.log(str.startsWith('Quiero'));
  console.log(str.startsWith('Quiero', 11)); // 11 is the start position

  console.dir();
  console.info('string.endsWith()');
  console.dir();
  console.log(str.endsWith('despacito'));
  console.log(str.endsWith('Quiero'));
  console.log(str.endsWith('Quiero', 17)); // 17 is the string length
}

{
  const str = 'I\'ve been working on a cocktail called "Grounds For Divorce"';

  console.dir();
  console.info('string.includes()');
  console.dir();
  console.log(str.includes(`I${String.fromCodePoint(39)}ve been`));
  console.log(str.includes('cocktail', 60)); // 60 is where the search should begin
  console.log(str.includes('grounds for divorce'));
}

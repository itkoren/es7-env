const str = 'I\'ve been working on a cocktail called "Grounds For Divorce"';

console.log(str.includes('I\'ve been'));
console.log(str.includes('cocktail', 60)); // 60 is where the search should begin
console.log(str.includes('grounds for divorce'));

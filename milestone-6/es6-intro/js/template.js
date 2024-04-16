const person = 'Adam Sand';
const person1 = "Ben White";
const person2 = `Donald Trump`;

const multiLine = 'First Line text \n'+
'second line of code \n' + 
'third line of text \n' + 
'Fourth line of string'
// console.log(multiLine);

const newMultiLine = `First Line text
second line of code 
third line of text
Fourth line of string
`
// console.log(newMultiLine);

const a = 20;
const b = 30;
const nums = [78,98,45,12,6,444]

const summary = 'sum of : ' + a + ' and ' + b + ' is ' + (a+b);
// console.log(summary);

const newSummary = `sum of ${a} and ${b} is : ${a+b}`;
console.log(newSummary);

/*

        \n = Newline(It takes the cursor to the next line)
        ` `= Backtick(Template literals are enclosed by backtick(`) characters instead of double or single quotes , allow for the following : 1. multi-line strings 2. string interpolation)
        ' '= Single quotes
        "" = Double quotes
        /  = Forward slash
        \  = Backward slash
        ;  = semicolon

*/

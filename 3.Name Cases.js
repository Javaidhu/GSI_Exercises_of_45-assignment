var personName = '';
personName = prompt('what is your name?') || '';
var lowercase = personName.toLowerCase();
var uppercase = personName.toUpperCase();
var titlecase = personName.split('').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).
    toLowerCase(); }).join('');
if (personName !== null && personName !== '') {
    alert("hello ".concat(personName, ", Here are your name in:\n    LowerCase: ").concat(lowercase, "\n    UpperCase: ").concat(uppercase, "\n    TitleCase: ").concat(titlecase));
}
else {
    alert('please fill your name !');
}

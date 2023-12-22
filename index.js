
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  

  function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  

  function introductionWithLanguageOptionalOverride(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  

  const personName = 'Aki';
  const programmingLanguage = 'Ember.js';
  
  console.log(introduction(personName));
  console.log(introductionWithLanguage(personName, programmingLanguage)); 
  console.log(introductionWithLanguageOptional(personName)); 
  console.log(introductionWithLanguageOptionalOverride(personName, programmingLanguage));
  
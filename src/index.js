const messages = [
    "La vida es una lenteja, o la tomas o la dejas. Como tu hermana en la nevera :<",
    "Cojima Cabron",
    "El destino del genio es ser un incomprendido, pero no todo incomprendido es un genio. Y por eso nunca debes hacer un 'GIT RESET (ESTA TOTALMENTE PROHIBIDO)'",
    "COMMIT ALL THE FILES! Fokiu",
    "El genio se compone del dos por ciento de talento y del noventa y ocho por ciento de perseverante aplicación. Y por esa razon ella no te quiere >:",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "El genio comienza las grandes obras, pero sólo el trabajo las aca... (En efecto la acabo)",
    "Batman! (this commit has no parents)",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };
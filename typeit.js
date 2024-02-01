document.addEventListener("DOMContentLoaded", function () {
new TypeIt("#element", {
    strings: ["Vamos casar!", "O papa e a mamã não fazem nada em ordem!!", "Primeiro nasci eu, então eles decidiram batizar-me!! Ah desculpem não me apresentei :)", "Eu sou o Lorenzo, o mais novo da familia", "Então como nada está em ordem, decidi pegar as redeas da vida deles", "e no dia que eles escolheram para me batizar", "eu decidi que eles se vão casar!", "Cancela tudo o que tens para fazer e junta-te a nós neste dia especial..."],
    speed: 50,
    cursor: false,
    loop: false,
  })
  .go()
});


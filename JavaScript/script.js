// Identificão do ano
  if (ano < menorAno) {
    menorAno = ano;
    vinhoAntigo = nome;
  }

  console.log("Nome:", nome);
  console.log("Tipo:", tipo);
  console.log("Ano:", ano);
  console.log("Estoque:", quantidade);
  console.log("Classificação:", classificacao);

  continuar = prompt("Deseja cadastrar outro vinho? (s/n)");

  if (continuar === null) {
    continuar = "n";
  } else {
    continuar = continuar.trim().toLowerCase();
  }


// resuminho no final
alert(
  "Resumo final\n" +
    "Cadastros: " +
    totalCadastros +
    "\n" +
    "Estoques baixos: " +
    estoqueBaixo +
    "\n" +
    "Vinho com ano mais antigo: " +
    vinhoAntigo +
    " (" +
    (totalCadastros > 0 ? menorAno : "N/A") +
    ")",
);
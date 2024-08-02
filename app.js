const readline = require('readline-sync');

// Armazenamento de organizações
let organizacoes = [];

// Adicionar organização
function addOrganizacao(nome) {
  const organizacao = {
    id: organizacoes.length + 1, // ID único para a organização
    nome: nome,
    eventos: [],
  };
  organizacoes.push(organizacao);
  console.log(`Organização "${nome}" adicionada com sucesso.`);
}

// Alterar organização
function altOrganizacao(id, novoNome) {
  const organizacao = organizacoes.find((org) => org.id === id);

  if (organizacao) {
    organizacao.nome = novoNome;
    console.log(`Nome da organização alterado para "${novoNome}".`);
  } else {
    console.log("Organização não encontrada.");
  }
}

// Remover organização
function delOrganizacao(id) {
  const index = organizacoes.findIndex((org) => org.id === id);

  if (index !== -1) {
    organizacoes.splice(index, 1);
    console.log("Organização removida com sucesso.");
  } else {
    console.log("Organização não encontrada.");
  }
}

// Adicionar evento a uma organização
function addEvento(organizacaoId, nomeEvento, dataEvento) {
  const organizacao = organizacoes.find((org) => org.id === organizacaoId);

  if (organizacao) {
    const evento = {
      id: organizacao.eventos.length + 1, // ID único para o evento dentro da organização
      nome: nomeEvento,
      data: dataEvento,
      organizacaoId: organizacaoId,
    };
    organizacao.eventos.push(evento);
    console.log(`Evento "${nomeEvento}" adicionado à organização "${organizacao.nome}".`);
  } else {
    console.log("Organização não encontrada.");
  }
}

// Alterar nome de um evento
function altNomeEvento(organizacaoId, eventoId, novoNomeEvento) {
  const organizacao = organizacoes.find((org) => org.id === organizacaoId);

  if (organizacao) {
    const evento = organizacao.eventos.find((evt) => evt.id === eventoId);

    if (evento) {
      evento.nome = novoNomeEvento;
      console.log(`Nome do evento alterado para "${novoNomeEvento}".`);
    } else {
      console.log("Evento não encontrado.");
    }
  } else {
    console.log("Organização não encontrada.");
  }
}

// Alterar data de um evento
function altDataEvento(organizacaoId, eventoId, novaDataEvento) {
  const organizacao = organizacoes.find((org) => org.id === organizacaoId);

  if (organizacao) {
    const evento = organizacao.eventos.find((evt) => evt.id === eventoId);

    if (evento) {
      evento.data = novaDataEvento;
      console.log(`Data do evento alterada para "${novaDataEvento}".`);
    } else {
      console.log("Evento não encontrado.");
    }
  } else {
    console.log("Organização não encontrada.");
  }
}

// Remover evento de uma organização 
function delEvento(organizacaoId, eventoId) {
  const organizacao = organizacoes.find((org) => org.id === organizacaoId);

  if (organizacao) {
    const index = organizacao.eventos.findIndex((evt) => evt.id === eventoId);
    if (index !== -1) {
      organizacao.eventos.splice(index, 1);
      console.log("Evento removido com sucesso.");
    } else {
      console.log("Evento não encontrado.");
    }
  } else {
    console.log("Organização não encontrada.");
  }
}

// Listar organizações e eventos
function listarOrganizacoes() {
  if (organizacoes.length === 0) {
    console.log("Nenhuma organização cadastrada.");
  } else {
    organizacoes.forEach((org) => {
      console.log(`\nOrganização ID: ${org.id}, Nome: ${org.nome}`);
      if (org.eventos.length === 0) {
        console.log("  Nenhum evento cadastrado.");
      } else {
        org.eventos.forEach((evt) => {
          console.log(`  Evento ID: ${evt.id}, Nome: ${evt.nome}, Data: ${evt.data}`);
        });
      }
    });
  }
}

// Menu de opções
while (true) {
  console.log("\nMenu de opções:");
  console.log("1. Adicionar organização");
  console.log("2. Alterar nome da organização");
  console.log("3. Remover organização");
  console.log("4. Adicionar evento a uma organização");
  console.log("5. Alterar nome de um evento");
  console.log("6. Alterar data de um evento");
  console.log("7. Remover evento de uma organização");
  console.log("8. Listar organizações e eventos");
  console.log("0. Sair");

  let escolha = readline.question("Escolha uma opção: ");

  switch (escolha) {
    case '1':
      let nomeOrg = readline.question("Nome da organização: ");
      addOrganizacao(nomeOrg);
      listarOrganizacoes();
      break;

    case '2':
      let idOrgAlt = readline.questionInt("ID da organização a ser alterada: ");
      let novoNomeOrg = readline.question("Novo nome da organização: ");
      altOrganizacao(idOrgAlt, novoNomeOrg);
      listarOrganizacoes();
      break;

    case '3':
      let idOrgDel = readline.questionInt("ID da organização a ser removida: ");
      delOrganizacao(idOrgDel);
      listarOrganizacoes();
      break;

    case '4':
      let idOrgAddEvt = readline.questionInt("ID da organização: ");
      let nomeEvt = readline.question("Nome do evento: ");
      let dataEvt = readline.question("Data do evento: ");
      addEvento(idOrgAddEvt, nomeEvt, dataEvt);
      listarOrganizacoes();
      break;

    case '5':
      let idOrgAltEvt = readline.questionInt("ID da organização: ");
      let idEvtAlt = readline.questionInt("ID do evento a ser alterado: ");
      let novoNomeEvt = readline.question("Novo nome do evento: ");
      altNomeEvento(idOrgAltEvt, idEvtAlt, novoNomeEvt);
      listarOrganizacoes();
      break;

    case '6':
      let idOrgAltDtEvt = readline.questionInt("ID da organização: ");
      let idEvtAltDt = readline.questionInt("ID do evento a ser alterado: ");
      let novaDataEvt = readline.question("Nova data do evento: ");
      altDataEvento(idOrgAltDtEvt, idEvtAltDt, novaDataEvt);
      listarOrganizacoes();
      break;

    case '7':
      let idOrgDelEvt = readline.questionInt("ID da organização: ");
      let idEvtDel = readline.questionInt("ID do evento a ser removido: ");
      delEvento(idOrgDelEvt, idEvtDel);
      listarOrganizacoes();
      break;

    case '8':
      listarOrganizacoes();
      break;

    case '0':
      console.log("Saindo...");
      process.exit();

    default:
      console.log("Opção inválida. Tente novamente.");
      break;
  }
}

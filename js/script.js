const tbody = document.querySelector(".table-body");


function calcularImpostoDeRenda(salarioBruto) {
    let impostoDevido = 0;

    if (salarioBruto <= 2640) {
        impostoDevido = 0;
    } else if (salarioBruto <= 2826.65) {
        impostoDevido = (salarioBruto - 528) * 0.075;
    } else if (salarioBruto <= 3751.05) {
        impostoDevido = (salarioBruto - 528) * 0.15;
    } else if (salarioBruto <= 4664.68) {
        impostoDevido = (salarioBruto - 528) * 0.225;
    } else {
        impostoDevido = (salarioBruto - 528) * 0.275;
    }

    return impostoDevido;
}

let funcionarios = [
    {
        nomeCompleto: "João Silva",
        rg: "1234567-8",
        cpf: "123.456.789-10",
        dataNascimento: "1990-05-15",
        telefone: "(11) 98765-4321",
        email: "joao.silva@example.com",
        endereco: "Rua das Flores, 123, São Paulo"
    },
    {
        nomeCompleto: "Maria Oliveira",
        rg: "8765432-1",
        cpf: "987.654.321-10",
        dataNascimento: "1985-10-20",
        telefone: "(11) 12345-6789",
        email: "maria.oliveira@example.com",
        endereco: "Av. dos Sonhos, 456, Rio de Janeiro"
    },
    {
        nomeCompleto: "José Santos",
        rg: "9876543-2",
        cpf: "654.321.987-10",
        dataNascimento: "1982-03-25",
        telefone: "(11) 56789-1234",
        email: "jose.santos@example.com",
        endereco: "Rua das Estrelas, 789, Salvador"
    },
    {
        nomeCompleto: "Ana Costa",
        rg: "5432167-5",
        cpf: "321.987.654-10",
        dataNascimento: "1978-09-12",
        telefone: "(11) 23456-7890",
        email: "ana.costa@example.com",
        endereco: "Av. da Lua, 987, Florianópolis"
    },
    {
        nomeCompleto: "Carlos Pereira",
        rg: "6543218-4",
        cpf: "987.321.654-10",
        dataNascimento: "1995-07-30",
        telefone: "(11) 67890-1234",
        email: "carlos.pereira@example.com",
        endereco: "Rua das Ondas, 654, Porto Alegre"
    },
    {
        nomeCompleto: "Amanda Sousa",
        rg: "4321876-3",
        cpf: "789.654.321-10",
        dataNascimento: "1989-12-05",
        telefone: "(11) 34567-8901",
        email: "amanda.sousa@example.com",
        endereco: "Av. das Palmeiras, 123, Belo Horizonte"
    },
    {
        nomeCompleto: "Felipe Martins",
        rg: "3218765-2",
        cpf: "456.789.123-10",
        dataNascimento: "1987-06-18",
        telefone: "(11) 45678-9012",
        email: "felipe.martins@example.com",
        endereco: "Rua dos Girassóis, 345, Curitiba"
    },
    {
        nomeCompleto: "Laura Lima",
        rg: "8765432-1",
        cpf: "234.567.891-10",
        dataNascimento: "1993-04-22",
        telefone: "(11) 56789-0123",
        email: "laura.lima@example.com",
        endereco: "Av. dos Pássaros, 456, Recife"
    },
    {
        nomeCompleto: "Lucas Oliveira",
        rg: "7654321-9",
        cpf: "567.891.234-10",
        dataNascimento: "1984-08-09",
        telefone: "(11) 67890-1234",
        email: "lucas.oliveira@example.com",
        endereco: "Rua das Marés, 789, Fortaleza"
    },
    {
        nomeCompleto: "Carolina Silva",
        rg: "6543218-4",
        cpf: "678.912.345-10",
        dataNascimento: "1991-11-14",
        telefone: "(11) 78901-2345",
        email: "carolina.silva@example.com",
        endereco: "Av. das Árvores, 123, Manaus"
    },
    {
        nomeCompleto: "Fernando Almeida",
        rg: "5432187-5",
        cpf: "789.123.456-10",
        dataNascimento: "1980-02-28",
        telefone: "(11) 89012-3456",
        email: "fernando.almeida@example.com",
        endereco: "Rua das Pedras, 234, Brasília"
    },
    {
        nomeCompleto: "Juliana Santos",
        rg: "4321876-3",
        cpf: "891.234.567-10",
        dataNascimento: "1997-01-03",
        telefone: "(11) 90123-4567",
        email: "juliana.santos@example.com",
        endereco: "Av. das Flores, 345, Goiânia"
    },
    {
        nomeCompleto: "Rafaela Souza",
        rg: "3218765-2",
        cpf: "912.345.678-10",
        dataNascimento: "1986-05-16",
        telefone: "(11) 01234-5678",
        email: "rafaela.souza@example.com",
        endereco: "Rua dos Peixes, 456, Vitória"
    },
    {
        nomeCompleto: "Gabriel Costa",
        rg: "8765432-1",
        cpf: "234.567.891-10",
        dataNascimento: "1994-09-29",
        telefone: "(11) 12345-6789",
        email: "gabriel.costa@example.com",
        endereco: "Av. dos Lagos, 567, Natal"
    },
    {
        nomeCompleto: "Patrícia Fernandes",
        rg: "7654321-9",
        cpf: "345.678.912-10",
        dataNascimento: "1983-03-12",
        telefone: "(11) 23456-7890",
        email: "patricia.fernandes@example.com",
        endereco: "Rua das Montanhas, 678, João Pessoa"
    },
    {
        nomeCompleto: "Thiago Oliveira",
        rg: "6543218-4",
        cpf: "456.789.123-10",
        dataNascimento: "1990-12-07",
        telefone: "(11) 34567-8901",
        email: "thiago.oliveira@example.com",
        endereco: "Av. das Praias, 789, Porto Velho"
    },
    {
        nomeCompleto: "André Santos",
        rg: "5432187-5",
        cpf: "567.891.234-10",
        dataNascimento: "1979-07-21",
        telefone: "(11) 45678-9012",
        email: "andre.santos@example.com",
        endereco: "Rua dos Rios, 123, Teresina"
    },
    {
        nomeCompleto: "Renata Lima",
        rg: "4321876-3",
        cpf: "678.912.345-10",
        dataNascimento: "1996-04-05",
        telefone: "(11) 56789-0123",
        email: "renata.lima@example.com",
        endereco: "Av. das Águas, 456, Cuiabá"
    },
    {
        nomeCompleto: "Bruno Oliveira",
        rg: "3218765-2",
        cpf: "789.123.456-10",
        dataNascimento: "1988-11-28",
        telefone: "(11) 67890-1234",
        email: "bruno.oliveira@example.com",
        endereco: "Rua dos Ventos, 789, Florianópolis"
    },
    {
        nomeCompleto: "Isabela Costa",
        rg: "8765432-1",
        cpf: "891.234.567-10",
        dataNascimento: "1981-08-14",
        telefone: "(11) 78901-2345",
        email: "isabela.costa@example.com",
        endereco: "Av. das Estrelas, 123, Fortaleza"
    }
];


function valid_form(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("form-input");

    for(let input in inputs) {
        if(input.value == "" || input.value == undefined ) {
            alert("Preencha todos os campos!")
        } else {
            alert("Funcionario adicionado com sucesso")
        }
    }
}
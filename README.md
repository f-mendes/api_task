# API de Gerenciamento de Tarefas

Bem-vindo à API de Gerenciamento de Tarefas, desenvolvida como parte do Desafio 01 da trilha de Fundamentos do Node.js do Ignite. Esta API oferece funcionalidades para criar, listar, atualizar, excluir tarefas e marcar tarefas como concluídas. Além disso, há suporte para a importação em massa de tarefas por meio de um arquivo CSV.

## Como Usar
### Pré-requisitos
*Certifique-se de ter o Node.js instalado em seu ambiente.*

### Instalação

* Clone este repositório:

```
    git clone https://github.com/f-mendes/api_task.git

```

* Acesse o diretório do projeto:

```

    cd api_task

```
* Instale as dependências:

```
    npm install
```

* Inicie o servidor:

```

    npm run dev

```

__A API estará acessível em http://localhost:3333 por padrão. Certifique-se de que a porta 3333 esteja disponível.__

## Uso da API

### A API oferece as seguintes rotas e funcionalidades:

* POST - /tasks: Cria uma nova task. Envie uma requisição POST com o corpo contendo as propriedades title e description.

* GET - /tasks: Lista todas as tasks cadastradas.

* PUT - /tasks/:id: Atualiza uma task existente pelo ID. Envie uma requisição.

* DELETE - /tasks/:id: Remove uma task pelo ID.

* PATCH - /tasks/:id/complete: Marca uma task como concluída pelo ID.

### Importação em Massa por CSV

```
    node src/importing-csv.js
```

__Certifique-se que o arquivo .csv exista na raiz do projeto.__

### Considerações Adicionais

__Utilize propriedades *title* e *description* nas rotas POST e PUT.__
# Gerador de Senhas Aleatórias

Este projeto consiste em um gerador de senhas aleatórias, que permite ao usuário criar senhas personalizadas com base em critérios específicos. O sistema foi desenvolvido utilizando **Node.js** para o backend, e **HTML**, **CSS** e **JavaScript** para o frontend.

## Tecnologias Usadas

- **Node.js** com o framework **Express** para o backend.
- **HTML** para a estrutura da página web.
- **CSS** para o design da interface.
- **JavaScript** para manipulação do DOM e geração das senhas.

## Funcionalidade

O sistema permite que o usuário configure a senha gerada, escolhendo o tamanho da senha, e se ela deve incluir letras maiúsculas, números e caracteres especiais. Após o preenchimento do formulário, a senha é gerada aleatoriamente e exibida na tela.

## Como Rodar o Projeto

### 1. Clone o Repositório

Primeiro, clone este repositório para a sua máquina local:

```bash
git clone https://github.com/IcaroSenaDev/password-generator.git
cd password-generator
```

### 2. Instale as Dependências

Antes de rodar o projeto, é necessário instalar as dependências do Node.js. No terminal, execute o seguinte comando:

```bash
npm install
```

### 3. Rodando o servidor

Para iniciar o servidor, execute:

```bash
node app.js
```

### 4. Acessando a Página Web

Abra o navegador e acesse http://localhost:3000. A página exibirá um formulário onde você pode configurar os parâmetros para a geração de senhas.

### 5. Usando o Gerador de Senhas

- **Escolha o tamanho da senha utilizando o campo "Tamanho da senha".**
- **Marque as opções de incluir letras maiúsculas, números e caracteres especiais, conforme desejado.**
- **Clique no botão "Gerar Senha".**
- **A senha gerada será exibida logo abaixo do botão.**
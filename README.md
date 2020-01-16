# Atividade Entrevista Mconf

Aplicação Ruby on Rails para submissão e exibição de mensagens de texto. O usuário entra em uma página web, escreve uma mensagem em um campo de texto e clica em um botão para submeter.

A página tem duas seções:

Os campos de submissão (input de texto e botão de enviar) no topo;
Todas as mensagens já submetidas logo a baixo, uma após a outra. Cada mensagem é exibida no format: "data de submissão: mensagem".
Ao exibir a lista de mensagens na página, URLs são convertidas para links utilizando a biblioteca https://github.com/tenderlove/rails_autolink. 

Se o texto da mensagem contém a palavra "Mconf" (qualquer grafia da palavra, incluindo "MConf", "MCONF", "mcoNF"), converte para "Mconf" (exatamente nessa grafia), exibe em negrito e em uma cor sorteada entre as seguintes cores: #481E9D, #8D74C0, #CA4B57, #2B2D42, #1C77C3, #81B29A, #E98039

Enquanto o usuário está escrevendo sua mensagem (antes de submeter), se ele escrever a palavra "Mconf" (em qualquer grafia), muda a cor de fundo da página para uma cor aleatória na lista de cores acima. Se ele apagar a palavra "Mconf", volta a cor do fundo para a cor padrão.

## Requisitos

- Ruby on Rails - Versão 6.0 ou superior
- RVM ou RBENV - instalação e configuração do Ruby e das Gems
- NVM - instalação e configuração do NodeJS
- Yarn - instalação do webpack

## Instalação

Clone o repositório. Após, é necessário instalar as gems e inicializar o banco de dados com os seguintes comandos:
```bash
$ bundle install
$ rails db:migrate
```
Agora inicialize o servidor:
```bash
$ rails server
```
E a aplicação está rodando em `localhost:3000`.

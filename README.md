 
## Estacio| Missão Prática | Nível 5 | Mundo 2

## Descrição

 O objetivo e seguir os procedimentos para criar um
servidor baseado em Express e Mongoogse, com acesso ao banco de dados
MongoDB, além de utilizar diversas tecnologias para implementar o front-end,
tornando-se capacitado para lidar com plataformas de desenvolvimento
variadas, e satisfazendo às necessidades de um mercado cada vez mais
heterogêneo:

Utilizar o banco de dados MongoDB para a criação de repositório NoSQL
Implementar servidor baseado em Express e Mongoose
Implementar biblioteca cliente de acesso em Java Script
Utilizar front-ends baseados em React JS, Next JS e Angular
   
## Funcionamento
  
A Primeira parte da tarefa é se ter um servidor node com express que poderá estar conectado tanto a um banco mongoDB 
local como a um banco mongoDb de sua conta ao Atlas Database (https://www.mongodb.com/atlas/database) bastando apenas 
fornecer os dados necessários a conexão.

A segunda parte e adaptar os projetos da livraria em  React JS, Next Js e Angular para que possam consumir essa API fornecida pelo servidor 'express' 
   
## Procedimentos 

https://sway.office.com/W3QP981juMlvGPIv?ref=Link&loc=play

## Pré-requisitos
Antes de iniciar, verifique se você possui os seguintes requisitos:
- Navegador web atualizado (recomenda-se o Google Chrome, Mozilla Firefox ou Microsoft Edge)

- Ter o MongoDB instaldo localmente com um banco já definido a ser configurado em .env
                ou  ter conta https://www.mongodb.com/atlas/database com uma conexão ativa 

## Instalação

1. Clone o repositório: 

   git clone https://github.com/CalexPO/Mundo-2-Missao-Pratica_Nivel-5.git
      
2. Ativação dos aplicativos 
   
   2.1 Ativação do servidor 

      2.1.1  Navegue até o diretório do projeto
             
            . cd livro-servidor   
      
      2.1.2  instale as dependências 

            . npm install
      
            2.1.3 Configure connect string do banco de dados
             
             1) configurar arquivo .env na raiz do projeto(no mesmo nivel de package.JSON)
               
               Caso o banco ser acessado caso seja local, e necessite, defina usuario e senha 
               (USER e PWD), o banco é necessário e será definir em DATABASE  
                             
              2)  configurar arquivo setDB.js na raiz do projeto(no mesmo nivel de package.JSON)
                 
                 Nesse arquivo exitirá uma constante que definirá o tipo de acesso a ser feito

                  "1" ao mongo local sem usuario e senha  (default)
                  "2" para conexão local 
                  "3" para o mongo atlas
      
      2.1.4 ative o servidor    
            npm start
            
      2.1.5 certifique-se do funcionamento
            Abra o postman realize operações CRUD com seguinte end point
            http://localhost:3030/livros
         
   2.2. Ativação dos clientes 
  
     2.2.1 Cliente React JS
      . acessar a pasta 'livros-react' em 'clientes'
      . executar o comando npm install
      . executar o comando npm start
      . o app será executado em http://localhost:3003/
     
     2.2.2 Cliente Next JS
      . acessar a pasta 'livros-next' em 'clientes'
      . executar o comando npm install
      . executar o comando npm run dev
      . o app será executado em http://localhost:3005/
     
     2.2.3 Cliente Angular

      . acessar a pasta 'livros-angular' em 'clientes'
      . executar o comando npm install
      . executar o comando npm start
      . o app será executado em http://localhost:4200/ 
    
 

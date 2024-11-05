# NãoPod
*O NãoPod é um projeto desenvolvido para ajudar pessoas a superarem vícios como drogas, bebidas, cigarro eletrônico e outros. A plataforma permite que os usuários acompanhem seu progresso diário, semanal e mensal na luta contra o vício, oferecendo também uma comunidade de apoio onde é possível interagir e trocar experiências com outras pessoas. Além disso, o NaoPod proporciona relatórios detalhados sobre o progresso e ferramentas de motivação para ajudar na jornada de recuperação.*

## 🚀 Começando
*Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.*

### Consulte Implantação para saber como implantar o projeto.

### 📋 Pré-requisitos
```
Node.js (versão 14 ou superior)
```

```
SQLite3 (instalado localmente ou usando uma instância SQLite com um banco de dados de desenvolvimento)
```

```
Git (para clonar o repositório)
```

### 🔧 Instalação
Siga os passos abaixo para configurar o ambiente de desenvolvimento na sua máquina local.

Clone o repositório:

``` bash
git clone https://github.com/seu-usuario/naopod.git
```

``` bash
cd naopod
```

### Instale as dependências do frontend:

``` bash
cd frontend
npm install
```

Instale as dependências do backend:

```  bash
cd ../backend
npm install
```

Configure as variáveis de ambiente:

Crie um arquivo .env na pasta do backend com as seguintes variáveis de ambiente:

``` bash
SQLITE_DB_PATH=./db/naopod.db
JWT_SECRET=seu_segredo_aqui
``` 
*O SQLite usará o arquivo naopod.db para armazenar os dados no diretório db dentro do projeto.*

*Inicie o servidor backend:*

``` bash
cd backend
npm start
``` 

Inicie o frontend:

``` bash
cd ../frontend
npm start
``` 

*Acesse o site:*
 
*Abra o navegador e vá para http://localhost:3000 para ver o site em funcionamento.*
 
## ⚙️ Executando os testes
Para rodar os testes automatizados, siga os passos abaixo:

No diretório backend, execute:

``` bash
npm test
```

*No diretório frontend, execute:*

``` bash
npm test
``` 
*Esses comandos executarão os testes unitários e de integração configurados no projeto.*

### 🔩 Analisando os testes de ponta a ponta
*Os testes de ponta a ponta verificam a integração entre o frontend e o backend, garantindo que as funcionalidades, como o registro de usuários, contagem de dias e geração de relatórios, funcionem corretamente. Eles são importantes para validar o fluxo completo do usuário no sistema.*

*Exemplo de execução de teste:*

``` bash
npm run test:e2e
```

## ⌨️ E testes de estilo de codificação
*Os testes de estilo de codificação verificam se o código segue as convenções e padrões estabelecidos, ajudando a manter a consistência e qualidade do código ao longo do desenvolvimento. Utilizamos o ESLint para garantir que o código esteja em conformidade com as regras de estilo.*
 
*Exemplo de execução de verificação de estilo de código:*
``` bash
npm run lint
```

## 📦 Implantação
*Para implantar o NaoPod em um servidor de produção, siga os passos abaixo:*

*Configuração do banco de dados SQLite:*
 
*Certifique-se de criar um arquivo de banco de dados SQLite em produção ou usar um serviço que possibilite hospedar arquivos de banco de dados em servidores (dependendo da necessidade).
A variável de ambiente SQLITE_DB_PATH deve apontar para o caminho correto onde o arquivo .db será armazenado.
Configuração do servidor: Hospede o backend e frontend em serviços como Heroku, Netlify ou Vercel.*

*Variáveis de ambiente: Certifique-se de configurar corretamente as variáveis de ambiente nos serviços de produção, como o JWT_SECRET e o SQLITE_DB_PATH.*

## 🛠️ Construído com
- HTML -  HyperText Markup Language (Linguagem de Marcação de HiperTexto) 
- CSS - Cascading Style Sheets (Folha de Estilo em Cascatas)
- Node.js - Ambiente de execução JavaScript do lado do servidor
- Express.js - Framework para construir APIs RESTful
- SQLite3 - Banco de dados SQL leve para armazenamento local

## 📌 Versão
*Nós usamos o git para controle de versão. Para as versões disponíveis, observe as tags neste repositório.*

## ✒️ Autores
### Desenvolvedores  
- *Rian Pacheco* e *Rafael Amaral*
### Documentação 
- *Rafael Pires* , *Andrew Mike* e *Nickolas Galdino*

## 📄 Licença
*Este projeto está sob a licença MIT - veja o arquivo LICENSE.md para detalhes.*

## 🎁 Expressões de gratidão
* Conte a outras pessoas sobre este projeto 📢
* Convide alguém da equipe para uma cerveja 🍺
* Um agradecimento publicamente 🫂

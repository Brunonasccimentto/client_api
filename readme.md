-para criar o container com o banco de dados:
No terminal use os seguintes comandos:
docker pull brunonasccimentto/cliente-db:1.0
docker run -p 3306:3306 --name=server -d brunonasccimentto/cliente-db:1.0

O name TEM que ser server para manter o mesmo nome da conexão a api.

-Para criar o container da api e linkar ao container do banco de dados:
docker pull brunonasccimentto/clienteapi:1.5
docker run -p 3000:3000 -d --name [container-name] --link server:mysql brunonasccimentto/clienteapi:1.5    (as duas linhas são um comando só)

O container server deve estar rodando para fazer o link

Como usar a API:
Consultar todos os tipos de clientes:
GET http://localhost:3000/form/clientTypes
response:
[
{
"idtipo_cliente": 1,
"tipo": "padrao"
},
{
"idtipo_cliente": 2,
"tipo": "prioridade 1"
},
{
"idtipo_cliente": 3,
"tipo": "preferencial"
}
]


GET http://localhost:3000/form/find/email/mkj_586@gmail.com
response:
[
{
"idcliente": 11,
"nome": "bruno",
"telefone": "7621991263",
"email": "mkj_586@gmail.com",
"logradouro": "casa",
"numero": "92",
"complemento": "casa 92",
"bairro": "flores",
"cidade": "samambaia",
"uf": "df",
"cep": "72198821",
"idtipo_cliente": 1
}
]

GET http://localhost:3000/form/find/id/7
response:
[
{
"idcliente": 7,
"nome": "Leisha Llewellyn",
"telefone": "5258596208",
"email": "lllewellyn6@yolasite.com",
"logradouro": "Pass",
"numero": "92",
"complemento": "17th Floor",
"bairro": "Tony",
"cidade": "Dadiya",
"uf": "ES",
"cep": "98283309",
"idtipo_cliente": 3
}
]


POST http://localhost:3000/form/register
Content-Type: multipart/form-data;

Parâmetros exigidos:

nome varchar(100)
telefone varchar(100)
email varchar(100)
logradouro varchar(100)
numero varchar(100)
complemento varchar(100)
bairro varchar(100)
cidade varchar(100)
uf varchar(100)
cep varchar(100)
idtipo_cliente int


varchar(100) = aceita qualquer caracter até o limite de 100 caracteres.
int = numero de 1 a 3
 

Se tudo ocorreu bem a response será: cliente cadastrado com sucesso!

 


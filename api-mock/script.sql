-- cria o banco de dados onde vamos trabalhar --
create database sistema_produtos;

use sistema_produtos;

-- Cria a tabela 'produtos' com algumas colunas basicas

create table produtos (
id int auto_increment primary key, -- ID unico
    nome varchar(100) not null, -- nome do produto
    email varchar(120) not null, -- email (exemplo generico)
    telefone varchar(20), -- telefone
    cpf varchar(14), -- cpf
    endereco varchar(150) -- endereco simples 
);
-- inser dois registro
insert into produtos(nome, email, telefone, cpf, endereco) values
('Eduardo Ramos', 'edu.ramos@orutos.com', '11931831520', '323.234.428-93','Rua orutos F'),
('juliana Clara', 'juliana@oruts.com', '11931831521', '122.313.131-32', 'Rua orutos');

-- seleciona o registro 
select * from produtos where id = 1;
select * from produtos where id = 2;

-- Deleta o registro 
delete from produtos where id = 4;

-- Atualizar alguma informação 
update produtos
set nome = 'zeze campos dev'
where id = 5;

select * from produtos;
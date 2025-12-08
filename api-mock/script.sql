-- cria o banco de dados
create database copa_mundo;

use copa_mundo;

-- Cria a tabela 'selecoes' com 3 colunas
create table selecoes (
 id int auto_increment primary key, -- ID unico que aumenta automaticamente
 selecao varchar(100) not null, -- nome da selecao, texto até 100 caracteres
 grupo char(1) not null
);

select * from selecoes;

-- insere varias selecoes de uma vez na tabela
insert into selecoes (selecao, grupo) values
('Brasil', 'A'),
('frança', 'B'),
('ilhas de salomão', 'C'),
('nigéria','D'),
('Nova Zelandia', 'E'),
('Japão', 'C');

select * from selecoes;





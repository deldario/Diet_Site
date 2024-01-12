-- Tabella che contiene la lista degli utenti e le rispettive password
CREATE SEQUENCE users_id_seq;

CREATE TABLE Users (
  ID_user INT NOT NULL DEFAULT NEXTVAL('users_id_seq'),
  user_login VARCHAR(255) NOT NULL,
  psw VARCHAR(55) NOT NULL,
  user_type int NOT NULL, -- 0=Client, 1=Dr, 2=Admin
  PRIMARY KEY (ID_user)
);

INSERT INTO Users (user_login, psw, user_type)
VALUES ('admin', 'admin', 2);

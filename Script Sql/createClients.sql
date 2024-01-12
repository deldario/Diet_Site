-- Tabella che contiene la lista dei clienti con le relative pesature
CREATE SEQUENCE clients_id_seq;

CREATE TABLE Clients (
  ID_client INT NOT NULL DEFAULT NEXTVAL('clients_id_seq'),
  surname VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  date_of_birth  DATE NOT NULL,
  weights JSON, -- {"pesature":[{"data": x/x/xxxx, "peso": y}, {"data": x/x/xxxx, "peso": y}]}
  PRIMARY KEY (ID_client)
);

INSERT INTO Clients (surname, name, date_of_birth, weights)
VALUES ('De Leo', 'Dario', '1985-10-21', '{"pesature":[{"data": "2023-12-05", "peso": 75}]}');


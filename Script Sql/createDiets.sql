-- Tabella che contiene la lista delle diete
CREATE SEQUENCE diets_id_seq;

CREATE TABLE Diets (
  ID_diet INT NOT NULL DEFAULT NEXTVAL('diets_id_seq'),
  ID_client INT NOT NULL,
  insert_date  DATE NOT NULL,
  start_date  DATE NOT NULL,
  end_date  DATE NOT NULL,
  diet JSON,
  tot_calories DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (ID_diet)
);

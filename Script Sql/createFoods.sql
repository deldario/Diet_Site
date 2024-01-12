-- Tabella che contiene la lista dei cibi e le rispettive calorie ogni 100gr
CREATE SEQUENCE foods_id_seq;

CREATE TABLE Foods (
  ID_food INT NOT NULL DEFAULT NEXTVAL('foods_id_seq'),
  food VARCHAR(255) NOT NULL,
  calories DECIMAL(10,2) NOT NULL,
  carbo DECIMAL(10,2) NOT NULL,
  fat DECIMAL(10,2) NOT NULL,
  fibre DECIMAL(10,2) NOT NULL,
  protein DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (ID_food)
);

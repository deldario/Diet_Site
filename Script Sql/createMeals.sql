-- Tabella che contiene la lista dei pasti
CREATE SEQUENCE meals_id_seq;

CREATE TABLE Meals (
  ID_meal INT NOT NULL DEFAULT NEXTVAL('meals_id_seq'),
  meal VARCHAR(255) NOT NULL,
  PRIMARY KEY (ID_meal)
);

INSERT INTO Meals (meal)
VALUES
  ('Breakfast'),
  ('Snack'),
  ('Snack 2'),
  ('Lunch'),
  ('Afternoon snack'),
  ('Dinner');
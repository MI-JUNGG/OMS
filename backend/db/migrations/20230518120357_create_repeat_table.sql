-- migrate:up
CREATE TABLE repeat_type (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(10) NOT NULL
  );

-- migrate:down
DROP TABLE repeat_type;
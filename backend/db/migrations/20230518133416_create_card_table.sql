-- migrate:up
CREATE TABLE card (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  repeat_id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  color VARCHAR(30) NOT NULL,
  start_date datetime NOT NULL,
  end_date datetime NOT NULL,
  deadline datetime NULL,
  memo VARCHAR(255) NULL,
  link VARCHAR(255) NULL
  );

-- migrate:down
DROP TABLE card;
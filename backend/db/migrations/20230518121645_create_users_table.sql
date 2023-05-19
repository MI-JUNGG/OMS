-- migrate:up
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  social_type_id INT NOT NULL,
  social_id VARCHAR(30) NULL,
  nickname VARCHAR(15) NOT NULL,
  email VARCHAR(40) NOT NULL,
  password VARCHAR(255) NOT NULL,
  create_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

-- migrate:down
DROP TABLE users;
-- migrate:up
ALTER TABLE users MODIFY password VARCHAR(255) NOT NULL;

-- migrate:down


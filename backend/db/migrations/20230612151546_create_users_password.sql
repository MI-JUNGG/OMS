-- migrate:up
ALTER TABLE users MODIFY password VARCHAR(255) NULL;

-- migrate:down


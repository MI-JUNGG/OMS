-- migrate:up
ALTER TABLE users MODIFY social_id VARCHAR(255) NULL;

-- migrate:down


-- migrate:up
ALTER TABLE card ADD start_date datetime NOT NULL;
ALTER TABLE card ADD end_date datetime NOT NULL;
ALTER TABLE card ADD deadline datetime NULL;

-- migrate:down


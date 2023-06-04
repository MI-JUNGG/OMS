-- migrate:up
ALTER TABLE card MODIFY start_date VARCHAR(100);
ALTER TABLE card MODIFY end_date VARCHAR(100);

-- migrate:down


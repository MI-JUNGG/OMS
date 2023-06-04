-- migrate:up
ALTER TABLE card MODIFY start_date datetime NULL;
ALTER TABLE card MODIFY end_date datetime NULL;

-- migrate:down


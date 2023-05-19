-- migrate:up
ALTER TABLE card ALTER COLUMN text_style SET DEFAULT 'regular';
ALTER TABLE card ALTER COLUMN text_style_color SET DEFAULT 'dark';

-- migrate:down


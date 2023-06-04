-- migrate:up
ALTER TABLE mypage MODIFY COLUMN color_palette_id INT DEFAULT 1;

-- migrate:down


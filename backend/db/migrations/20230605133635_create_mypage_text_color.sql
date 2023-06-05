-- migrate:up
ALTER TABLE mypage CHANGE text_style_color text_color VARCHAR(30) NULL DEFAULT 'dark';

-- migrate:down


-- migrate:up
ALTER TABLE mypage MODIFY main_color VARCHAR(30) NULL;
ALTER TABLE mypage MODIFY background_color VARCHAR(30) NULL;

-- migrate:down


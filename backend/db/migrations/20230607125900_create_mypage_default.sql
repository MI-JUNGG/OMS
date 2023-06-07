-- migrate:up
ALTER TABLE mypage MODIFY main_color VARCHAR(30) NULL DEFAULT '#547AFF';
ALTER TABLE mypage MODIFY background_color VARCHAR(30) NULL DEFAULT '#F3F6FF';


-- migrate:down


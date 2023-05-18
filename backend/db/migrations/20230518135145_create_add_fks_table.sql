-- migrate:up
ALTER TABLE users ADD FOREIGN KEY (social_type_id) REFERENCES social_type (id) ON UPDATE CASCADE;
ALTER TABLE card ADD FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE CASCADE;
ALTER TABLE card ADD FOREIGN KEY (repeat_id) REFERENCES repeat_type (id) ON UPDATE CASCADE;
ALTER TABLE mypage ADD FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE CASCADE;
ALTER TABLE mypage ADD FOREIGN KEY (color_palette_id) REFERENCES color_palette (id) ON UPDATE CASCADE;
-- migrate:down


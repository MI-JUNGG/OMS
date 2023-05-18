-- migrate:up
CREATE TABLE card (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  repeat_id INT NOT NULL,
  color_palette_id INT NOT NULL DEFAULT 1,
  main_color VARCHAR(30) NOT NULL DEFAULT '#547AFF',
  background_color VARCHAR(30) NOT NULL DEFAULT '#F3F6FF',
  text_style VARCHAR(10) NOT NULL,
  text_style_color VARCHAR(30) NOT NULL
  );

-- migrate:down
DROP TABLE card;
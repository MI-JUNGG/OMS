-- migrate:up
CREATE TABLE color_palette (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  color1 VARCHAR(10) NOT NULL,
  color2 VARCHAR(10) NOT NULL,
  color3 VARCHAR(10) NOT NULL,
  color4 VARCHAR(10) NOT NULL,
  color5 VARCHAR(10) NOT NULL,
  color6 VARCHAR(10) NOT NULL
  );

-- migrate:down
DROP TABLE color_palette;
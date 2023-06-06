-- migrate:up
 ALTER TABLE color_palette MODIFY color1 VARCHAR(10) NULL;
 ALTER TABLE color_palette MODIFY color2 VARCHAR(10) NULL;
 ALTER TABLE color_palette MODIFY color3 VARCHAR(10) NULL;
 ALTER TABLE color_palette MODIFY color4 VARCHAR(10) NULL;
 ALTER TABLE color_palette MODIFY color5 VARCHAR(10) NULL;
 ALTER TABLE color_palette MODIFY color6 VARCHAR(10) NULL;
 ALTER TABLE color_palette MODIFY color7 VARCHAR(10) NULL;
-- migrate:down


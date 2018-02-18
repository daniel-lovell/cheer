SELECT 'This script should not be run using massive.'
;

DROP TABLE IF EXISTS cheers
;

CREATE TABLE IF NOT EXISTS cheers (
  id SERIAL PRIMARY KEY
  , name TEXT UNIQUE NOT NULL
  , description TEXT NOT NULL
)
;

INSERT INTO cheers (name, description)
VALUES
('The Politician', 'Pat yourself on the back.'),
('The Almost Cheer', 'Start to do a single clap of your hand, but miss at the last moment.')
;
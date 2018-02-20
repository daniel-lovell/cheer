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
('The Almost', 'Start to do a single clap of your hand, but miss at the last moment.'),
('The Bacon', 'Slam a human-sized frying pan onto the floor, hop in it, and start sizzling like bacon (make sizzle noises and wiggle body).'),
('The Big Hand', 'Hold out one hand, fingers open as much as possible, in the air.'),
('The Round of Applause', 'Clap while moving the claps around and imaginary circle.'),
('The Unlucky Duck', 'Simulate a duck quacking and flying through the air. Pretend to pull out a shotgun and shoot the spot in the air where your hand just was. Resume the flight path, but this time the duck is diving toward the floor.')
;
SELECT * FROM cheers WHERE id NOT IN ($1:csv) ORDER BY random() LIMIT 1;

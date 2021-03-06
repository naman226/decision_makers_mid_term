DROP TABLE IF EXISTS choices CASCADE;
CREATE TABLE choices (
  id SERIAL PRIMARY KEY NOT NULL,
  poll_id INTEGER REFERENCES polls(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  result_count INTEGER NOT NULL DEFAULT 0
);

INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Hiking', 'We will go hike the Grouse Grind', 0);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Beach day', 'We will go to Kits Beach and spend the day lying in the sun', 0);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Skiing', 'We will go up to Whistler and spend the day skiing, but mostly waiting in chairlift lines', 0);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Brewery Tour', 'We will walk around East Vancouver and visit as many craft breweries as we can', 0);

INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'Mexico', 'All-inclusive Resort Vacation', 7);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'Alaskan Cruise', 'All-inclusive Alaskan Cruise with stops along the Alaskan Coast', 22);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'France', 'A 7 night trip starting in Paris and travelling to the south of France', 14);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'Tofino', '10 days stay in Tofino, relaxing, surfing and escaping the day to day grind', 17);

INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'R & B', '', 0);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Top-40', '', 0);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Country', '', 0);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Rock', '', 0);

INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Comedy', '', 7);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Drama', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Action', '', 10);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Not Applicable', '', 16);


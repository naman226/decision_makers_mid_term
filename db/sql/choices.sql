DROP TABLE IF EXISTS choices CASCADE;
CREATE TABLE choices (
  id SERIAL PRIMARY KEY NOT NULL,
  poll_id INTEGER REFERENCES polls(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  result_count INTEGER NOT NULL DEFAULT 0
);

INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Hiking', 'We will go hike the Grouse Grind', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Beach day', 'We will go to Kits Beach and spend the day lying in the sun', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Skiing', 'We will go up to Whistler and spend the day skiing, but mostly waiting in chairlift lines', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Brewery Tour', 'We will walk around East Vancouver and visit as many craft breweries as we can', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Hiking', 'We will go hike the Grouse Grind', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Beach day', 'We will go to Kits Beach and spend the day lying in the sun', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Skiing', 'We will go up to Whistler and spend the day skiing, but mostly waiting in chairlift lines', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Brewery Tour', 'We will walk around East Vancouver and visit as many craft breweries as we can', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Hiking', 'We will go hike the Grouse Grind', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Beach day', 'We will go to Kits Beach and spend the day lying in the sun', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Skiing', 'We will go up to Whistler and spend the day skiing, but mostly waiting in chairlift lines', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Brewery Tour', 'We will walk around East Vancouver and visit as many craft breweries as we can', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Hiking', 'We will go hike the Grouse Grind', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Beach day', 'We will go to Kits Beach and spend the day lying in the sun', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Skiing', 'We will go up to Whistler and spend the day skiing, but mostly waiting in chairlift lines', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Brewery Tour', 'We will walk around East Vancouver and visit as many craft breweries as we can', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Hiking', 'We will go hike the Grouse Grind', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Beach day', 'We will go to Kits Beach and spend the day lying in the sun', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Skiing', 'We will go up to Whistler and spend the day skiing, but mostly waiting in chairlift lines', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Brewery Tour', 'We will walk around East Vancouver and visit as many craft breweries as we can', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Hiking', 'We will go hike the Grouse Grind', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Beach day', 'We will go to Kits Beach and spend the day lying in the sun', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Skiing', 'We will go up to Whistler and spend the day skiing, but mostly waiting in chairlift lines', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (1, 'Brewery Tour', 'We will walk around East Vancouver and visit as many craft breweries as we can', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'Mexico', 'All-inclusive Resort Vacation', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'Alaskan Cruise', 'All-inclusive Alaskan Cruise with stops along the Alaskan Coast', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'France', 'A 7 night trip starting in Paris and travelling to the south of France', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'Tofino', '10 days stay in Tofino, relaxing, surfing and escaping the day to day grind', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'Mexico', 'All-inclusive Resort Vacation', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'Alaskan Cruise', 'All-inclusive Alaskan Cruise with stops along the Alaskan Coast', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'France', 'A 7 night trip starting in Paris and travelling to the south of France', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'Tofino', '10 days stay in Tofino, relaxing, surfing and escaping the day to day grind', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES(2, 'Mexico', 'All-inclusive Resort Vacation', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'Alaskan Cruise', 'All-inclusive Alaskan Cruise with stops along the Alaskan Coast', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'France', 'A 7 night trip starting in Paris and travelling to the south of France', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'Tofino', '10 days stay in Tofino, relaxing, surfing and escaping the day to day grind', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'Mexico', 'All-inclusive Resort Vacation', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'Alaskan Cruise', 'All-inclusive Alaskan Cruise with stops along the Alaskan Coast', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'France', 'A 7 night trip starting in Paris and travelling to the south of France', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (2, 'Tofino', '10 days stay in Tofino, relaxing, surfing and escaping the day to day grind', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'R & B', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Top-40', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Country', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Rock', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Top-40', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'R & B', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Country', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Rock', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Top-40', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'R & B', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Country', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Rock', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Top-40', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'R & B', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Country', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Rock', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Top-40', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'R & B', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Country', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Rock', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Top-40', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'R & B', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Country', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Rock', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Top-40', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'R & B', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Country', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Rock', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Top-40', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'R & B', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Country', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Rock', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Top-40', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'R & B', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Country', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (3, 'Rock', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Comedy', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Drama', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Action', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Not Applicable', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Comedy', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Drama', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Action', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Not Applicable', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Comedy', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Drama', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Action', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Not Applicable', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Comedy', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Drama', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Action', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Not Applicable', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Comedy', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Drama', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES(4, 'Action', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Not Applicable', '', 4);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Comedy', '', 3);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Drama', '', 2);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Action', '', 1);
INSERT INTO choices (poll_id, name, description, result_count)
VALUES (4, 'Not Applicable', '', 4);

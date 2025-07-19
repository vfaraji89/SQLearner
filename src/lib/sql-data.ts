export interface Question {
  id: number;
  question: string;
  answer: string;
  query?: string;
  tableName?: string[];
}

export interface Category {
  id: number;
  title: string;
  questions: Question[];
}

export const sqlDecks: Category[] = [
  {
    id: 1,
    title: 'Foundational Concepts & Definitions',
    questions: [
      {
        id: 1,
        question: 'What is a relational database (RDBMS)?',
        answer:
          'A database that stores data in a structured format using rows and columns in tables. Relationships between tables are defined using keys.',
      },
      {
        id: 2,
        question: 'What is a Primary Key?',
        answer:
          'A constraint that uniquely identifies each record in a table. It must contain unique values and cannot contain NULL values.',
      },
      {
        id: 3,
        question: 'What is a Foreign Key?',
        answer:
          "A key used to link two tables together. It's a field (or collection of fields) in one table that refers to the Primary Key in another table.",
      },
      {
        id: 4,
        question: 'What is a Unique Key?',
        answer:
          'A constraint that ensures all values in a column are unique. Unlike a Primary Key, a Unique Key constraint can accept one NULL value.',
      },
      {
        id: 5,
        question: 'What is the difference between WHERE and HAVING?',
        answer:
          'WHERE filters rows before any aggregations are performed. HAVING filters groups after aggregations are performed using GROUP BY.',
      },
      {
        id: 6,
        question: 'What is the difference between UNION and UNION ALL?',
        answer:
          'Both combine the result sets of two or more SELECT statements. UNION removes duplicate rows, while UNION ALL includes all rows, including duplicates. UNION ALL is faster.',
      },
      {
        id: 7,
        question: 'What is the difference between DELETE, TRUNCATE, and DROP?',
        answer:
          'DELETE is a DML command that removes rows from a table based on a WHERE clause. It is slower as it removes rows one by one and logs each deletion.\nTRUNCATE is a DDL command that removes all rows from a table quickly. It does not use a WHERE clause and is not logged row by row, making it faster.\nDROP is a DDL command that removes the entire table, including its structure, data, and indexes.',
      },
      {
        id: 8,
        question: 'What is an index, and why is it useful?',
        answer:
          'An index is a special lookup table that the database search engine can use to speed up data retrieval. It works like an index in a book, allowing the database to find rows without scanning the entire table.',
      },
      {
        id: 9,
        question: 'What is normalization?',
        answer:
          'The process of organizing columns and tables in a relational database to minimize data redundancy and improve data integrity.',
      },
      {
        id: 10,
        question: 'What is a CTE (Common Table Expression)?',
        answer:
          "A temporary, named result set that you can reference within a SELECT, INSERT, UPDATE, or DELETE statement. It helps break down complex queries and improves readability. It's defined using the WITH clause.",
      },
      {
        id: 11,
        question: 'What is a View?',
        answer:
          "A virtual table based on the result-set of an SQL statement. It contains rows and columns, just like a real table, but it doesn't store the data itself. Views are often used for security or to simplify complex queries.",
      },
      {
        id: 12,
        question: 'What is a self-join?',
        answer:
          "A join in which a table is joined with itself. It's useful for querying hierarchical data or comparing rows within the same table.",
      },
      {
        id: 13,
        question: 'What is the default order of ORDER BY?',
        answer: 'Ascending (ASC).',
      },
      {
        id: 14,
        question: 'What is the order of execution of a typical SQL query?',
        answer: '1. FROM (and JOINs), 2. WHERE, 3. GROUP BY, 4. HAVING, 5. SELECT, 6. ORDER BY, 7. LIMIT.',
      },
      {
        id: 15,
        question: 'What is casting?',
        answer: 'Converting a value from one data type to another, for example, using CAST(column AS INTEGER).',
      },
      {
        id: 16,
        question: 'How do you handle NULL values when you want to treat them as a specific value (e.g., 0)?',
        answer: "Using the COALESCE() function. COALESCE(column_name, 0) will return the value of the column if it's not NULL, or 0 if it is NULL.",
      },
      {
        id: 17,
        question: 'What is the difference between COUNT(*) and COUNT(column_name)?',
        answer: 'COUNT(*) counts all rows in the table. COUNT(column_name) counts all non-NULL values in that specific column.',
      },
      {
        id: 18,
        question: 'What is a transaction?',
        answer: 'A sequence of operations performed as a single logical unit of work. All of the operations must succeed for the transaction to be successful.',
      },
      {
        id: 19,
        question: 'What are the ACID properties?',
        answer: 'Atomicity, Consistency, Isolation, Durability. They are guarantees for reliable transaction processing.',
      },
      {
        id: 20,
        question: 'What is the difference between a subquery and a join?',
        answer: 'Both combine data from multiple tables. A JOIN is often more readable and can be more performant as the database optimizer is designed for them. A subquery is a query nested inside another query and can sometimes be less efficient, but it can be useful for complex logic that is difficult to express with a join.',
      },
    ],
  },
  {
    id: 2,
    title: 'Basic SELECT and Filtering',
    questions: [
      {
        id: 21,
        question: 'Select all columns for all clicks.',
        answer: 'Selects all columns and rows from the `clicks` table.',
        query: 'SELECT * FROM clicks;',
        tableName: ['clicks'],
      },
      {
        id: 22,
        question: 'Select only the user_id and country for all clicks.',
        answer: 'Selects only the specified `user_id` and `country` columns.',
        query: 'SELECT user_id, country FROM clicks;',
        tableName: ['clicks'],
      },
      {
        id: 23,
        question: "Select all clicks from the country 'DE' (Germany).",
        answer: "The `WHERE` clause filters rows to include only those where the `country` column is 'DE'.",
        query: "SELECT * FROM clicks WHERE country = 'DE';",
        tableName: ['clicks'],
      },
      {
        id: 24,
        question: "Select all clicks that are not from 'DE'.",
        answer: "Uses `!=` or `<>` to exclude rows from 'DE'.",
        query: "SELECT * FROM clicks WHERE country != 'DE';",
        tableName: ['clicks'],
      },
      {
        id: 25,
        question: "Select clicks from 'DE' that occurred after '2023-10-01'.",
        answer: 'The `AND` operator combines two conditions in the `WHERE` clause.',
        query: "SELECT * FROM clicks WHERE country = 'DE' AND timestamp > '2023-10-01';",
        tableName: ['clicks'],
      },
      {
        id: 26,
        question: "Select clicks from either 'DE' or 'US'.",
        answer: 'The `IN` operator is a shorthand for multiple `OR` conditions.',
        query: "SELECT * FROM clicks WHERE country IN ('DE', 'US');",
        tableName: ['clicks'],
      },
      {
        id: 27,
        question: "Select all clicks except those from 'DE' and 'US'.",
        answer: 'The `NOT IN` operator excludes all values in the provided list.',
        query: "SELECT * FROM clicks WHERE country NOT IN ('DE', 'US');",
        tableName: ['clicks'],
      },
      {
        id: 28,
        question: 'Select a unique list of countries where clicks have been recorded.',
        answer: '`DISTINCT` removes duplicate rows from the result set.',
        query: 'SELECT DISTINCT country FROM clicks;',
        tableName: ['clicks'],
      },
      {
        id: 29,
        question: 'Select all clicks where the campaign_id is unknown (NULL).',
        answer: 'Use `IS NULL` to check for NULL values, not `= NULL`.',
        query: 'SELECT * FROM clicks WHERE campaign_id IS NULL;',
        tableName: ['clicks'],
      },
      {
        id: 30,
        question: 'Select all clicks where the campaign_id is known (not NULL).',
        answer: 'Use `IS NOT NULL` to find rows that have a value in a column.',
        query: 'SELECT * FROM clicks WHERE campaign_id IS NOT NULL;',
        tableName: ['clicks'],
      },
      {
        id: 31,
        question: 'Select the 100 most recent clicks.',
        answer: '`ORDER BY` sorts the results, and `LIMIT` restricts the number of rows returned.',
        query: 'SELECT * FROM clicks ORDER BY timestamp DESC LIMIT 100;',
        tableName: ['clicks'],
      },
      {
        id: 32,
        question: 'Select all clicks from campaigns with IDs between 500 and 600.',
        answer: '`BETWEEN` is inclusive, meaning it includes both 500 and 600.',
        query: 'SELECT * FROM clicks WHERE campaign_id BETWEEN 500 AND 600;',
        tableName: ['clicks'],
      },
      {
        id: 33,
        question: "Select all clicks where the user_id ends with 'ABC'.",
        answer: "The `%` in a `LIKE` pattern is a wildcard for zero or more characters.",
        query: "SELECT * FROM clicks WHERE user_id LIKE '%ABC';",
        tableName: ['clicks'],
      },
      {
        id: 34,
        question: "Select all clicks where the user_id has '123' anywhere in it.",
        answer: 'Using `%` on both sides of the string finds it anywhere in the value.',
        query: "SELECT * FROM clicks WHERE user_id LIKE '%123%';",
        tableName: ['clicks'],
      },
      {
        id: 35,
        question: "Select all clicks where country starts with 'U' and is 2 characters long.",
        answer: "The `_` in a `LIKE` pattern is a wildcard for a single character.",
        query: "SELECT * FROM clicks WHERE country LIKE 'U_';",
        tableName: ['clicks'],
      },
      {
        id: 36,
        question: "Assign a new name 'click_time' to the timestamp column in the output.",
        answer: 'The `AS` keyword creates an alias for a column name.',
        query: 'SELECT timestamp AS click_time FROM clicks;',
        tableName: ['clicks'],
      },
      {
        id: 37,
        question: 'Count the total number of clicks.',
        answer: '`COUNT(*)` is an aggregate function that counts the total number of rows.',
        query: 'SELECT COUNT(*) FROM clicks;',
        tableName: ['clicks'],
      },
      {
        id: 38,
        question: 'Count the number of distinct users who have clicked.',
        answer: '`COUNT(DISTINCT ...)` counts only the unique occurrences of a value.',
        query: 'SELECT COUNT(DISTINCT user_id) FROM clicks;',
        tableName: ['clicks'],
      },
      {
        id: 39,
        question: 'Find the earliest and latest click timestamp in the table.',
        answer: '`MIN()` and `MAX()` are aggregate functions to find the minimum and maximum values in a column.',
        query: 'SELECT MIN(timestamp) AS earliest_click, MAX(timestamp) AS latest_click FROM clicks;',
        tableName: ['clicks'],
      },
      {
        id: 40,
        question: "Select clicks from 'DE', 'US', or 'FR', and order them by country.",
        answer: 'Combines filtering with `IN` and sorting with `ORDER BY`.',
        query: "SELECT * FROM clicks WHERE country IN ('DE', 'US', 'FR') ORDER BY country;",
        tableName: ['clicks'],
      },
    ],
  },
  {
    id: 3,
    title: 'Aggregation & Grouping',
    questions: [
      {
        id: 41,
        question: 'Count the total number of bookings for each user_id.',
        answer: '`GROUP BY` groups rows with the same `user_id` so `COUNT` can be applied to each group.',
        query: 'SELECT user_id, COUNT(booking_id) AS number_of_bookings FROM bookings GROUP BY user_id;',
        tableName: ['bookings'],
      },
      {
        id: 42,
        question: 'Calculate the total booking_value for each user_id.',
        answer: '`SUM()` is an aggregate function that calculates the total of a numeric column for each group.',
        query: 'SELECT user_id, SUM(booking_value) AS total_spent FROM bookings GROUP BY user_id;',
        tableName: ['bookings'],
      },
      {
        id: 43,
        question: 'Calculate the average booking_value per booking for each hotel_id.',
        answer: '`AVG()` calculates the average value for each group defined by `GROUP BY`.',
        query: 'SELECT hotel_id, AVG(booking_value) AS avg_booking_value FROM bookings GROUP BY hotel_id;',
        tableName: ['bookings'],
      },
      {
        id: 44,
        question: 'Find the total booking_value for each day.',
        answer: 'Groups all bookings by their `booking_date` to sum up the daily values.',
        query: 'SELECT booking_date, SUM(booking_value) FROM bookings GROUP BY booking_date;',
        tableName: ['bookings'],
      },
      {
        id: 45,
        question: 'List the hotels that have received more than 50 bookings.',
        answer: '`HAVING` is used to filter groups after aggregation, unlike `WHERE` which filters rows before.',
        query: 'SELECT hotel_id, COUNT(*) FROM bookings GROUP BY hotel_id HAVING COUNT(*) > 50;',
        tableName: ['bookings'],
      },
      {
        id: 46,
        question: 'List the users whose total spending is over $1000.',
        answer: 'Filters the grouped users based on their total `SUM(booking_value)`.',
        query: 'SELECT user_id, SUM(booking_value) FROM bookings GROUP BY user_id HAVING SUM(booking_value) > 1000;',
        tableName: ['bookings'],
      },
      {
        id: 47,
        question: 'Find the date with the highest total booking_value.',
        answer: 'Groups by date, calculates sum, then orders by that sum in descending order and takes the first row.',
        query: 'SELECT booking_date, SUM(booking_value) FROM bookings GROUP BY booking_date ORDER BY SUM(booking_value) DESC LIMIT 1;',
        tableName: ['bookings'],
      },
      {
        id: 48,
        question: 'Count the number of bookings per user per hotel.',
        answer: '`GROUP BY` can take multiple columns to create more granular groups.',
        query: 'SELECT user_id, hotel_id, COUNT(*) FROM bookings GROUP BY user_id, hotel_id;',
        tableName: ['bookings'],
      },
      {
        id: 49,
        question: 'For each hotel, find the value of its most expensive booking.',
        answer: '`MAX()` finds the highest booking value within each hotel group.',
        query: 'SELECT hotel_id, MAX(booking_value) FROM bookings GROUP BY hotel_id;',
        tableName: ['bookings'],
      },
      {
        id: 50,
        question: 'Calculate the total number of unique users who made a booking each day.',
        answer: 'Combines `GROUP BY` with `COUNT(DISTINCT ...)` to get a daily count of unique users.',
        query: 'SELECT booking_date, COUNT(DISTINCT user_id) AS unique_users FROM bookings GROUP BY booking_date;',
        tableName: ['bookings'],
      },
      {
        id: 51,
        question: 'List hotels that had a total booking value of more than $10,000 in a single day.',
        answer: 'Groups by both date and hotel to check the daily value per hotel, then filters with `HAVING`.',
        query: 'SELECT booking_date, hotel_id, SUM(booking_value) FROM bookings GROUP BY booking_date, hotel_id HAVING SUM(booking_value) > 10000;',
        tableName: ['bookings'],
      },
      {
        id: 52,
        question: 'Create a "power_user" flag for users with more than 5 bookings.',
        answer: 'A `CASE` statement allows for conditional logic within a `SELECT` clause, like an if-then-else statement.',
        query: "SELECT user_id, CASE WHEN COUNT(*) > 5 THEN 'power_user' ELSE 'regular_user' END AS user_segment FROM bookings GROUP BY user_id;",
        tableName: ['bookings'],
      },
      {
        id: 53,
        question: 'Find the number of users who made exactly 1 booking.',
        answer: 'A subquery is used here. The inner query finds all users with 1 booking, and the outer query counts them.',
        query: 'SELECT COUNT(*) FROM (SELECT user_id FROM bookings GROUP BY user_id HAVING COUNT(*) = 1) AS single_bookers;',
        tableName: ['bookings'],
      },
      {
        id: 54,
        question: 'Calculate the total booking value for bookings made in October 2023.',
        answer: 'Filters by a date range in the `WHERE` clause before aggregating with `SUM`.',
        query: "SELECT SUM(booking_value) FROM bookings WHERE booking_date >= '2023-10-01' AND booking_date < '2023-11-01';",
        tableName: ['bookings'],
      },
      {
        id: 55,
        question: 'Calculate the average number of bookings per user.',
        answer: 'Uses a subquery to first count bookings per user, then calculates the average of those counts.',
        query: 'SELECT AVG(booking_count) FROM (SELECT COUNT(booking_id) as booking_count FROM bookings GROUP BY user_id) AS user_counts;',
        tableName: ['bookings'],
      },
      {
        id: 56,
        question: 'List the top 5 users by total booking value.',
        answer: 'Groups, sums, orders by the sum descending, and limits the result.',
        query: 'SELECT user_id, SUM(booking_value) AS total_value FROM bookings GROUP BY user_id ORDER BY total_value DESC LIMIT 5;',
        tableName: ['bookings'],
      },
      {
        id: 57,
        question: 'Calculate the total number of bookings and average booking value for each month.',
        answer: "`DATE_TRUNC` is a useful function to truncate a date to a specified part (like 'month').",
        query: "SELECT DATE_TRUNC('month', booking_date) AS month, COUNT(*), AVG(booking_value) FROM bookings GROUP BY month;",
        tableName: ['bookings'],
      },
      {
        id: 58,
        question: 'Find the hotels where the average booking value is less than $150.',
        answer: 'Filters groups of hotels based on their average booking value.',
        query: 'SELECT hotel_id, AVG(booking_value) FROM bookings GROUP BY hotel_id HAVING AVG(booking_value) < 150;',
        tableName: ['bookings'],
      },
      {
        id: 59,
        question: 'How many days had more than 1000 total bookings?',
        answer: 'A subquery finds the days with more than 1000 bookings, and the outer query counts how many such days exist.',
        query: 'SELECT COUNT(*) FROM (SELECT booking_date, COUNT(*) FROM bookings GROUP BY booking_date HAVING COUNT(*) > 1000) AS busy_days;',
        tableName: ['bookings'],
      },
      {
        id: 60,
        question: 'For each user, show their first and last booking date.',
        answer: '`MIN` and `MAX` can be used on date fields to find the earliest and latest dates within each group.',
        query: 'SELECT user_id, MIN(booking_date) AS first_booking, MAX(booking_date) AS last_booking FROM bookings GROUP BY user_id;',
        tableName: ['bookings'],
      },
    ],
  },
  {
    id: 4,
    title: 'Joins',
    questions: [
      {
        id: 61,
        question: 'For every click, show the click_id and the signup_date of the user who made the click.',
        answer: '`JOIN` (or `INNER JOIN`) combines rows from two tables where the key in both tables matches.',
        query: 'SELECT c.click_id, u.signup_date FROM clicks c JOIN users u ON c.user_id = u.user_id;',
        tableName: ['clicks', 'users'],
      },
      {
        id: 62,
        question: 'Show the campaign_name for every click.',
        answer: 'Links clicks to campaigns to retrieve the campaign name.',
        query: 'SELECT c.click_id, camp.campaign_name FROM clicks c JOIN campaigns camp ON c.campaign_id = camp.campaign_id;',
        tableName: ['clicks', 'campaigns'],
      },
      {
        id: 63,
        question: 'Count the number of clicks for each campaign_name.',
        answer: 'First joins clicks and campaigns, then groups by campaign name to count clicks for each.',
        query: 'SELECT camp.campaign_name, COUNT(c.click_id) FROM clicks c JOIN campaigns camp ON c.campaign_id = camp.campaign_id GROUP BY camp.campaign_name;',
        tableName: ['clicks', 'campaigns'],
      },
      {
        id: 64,
        question: 'Show all users and the number of clicks they have made. Include users who have never clicked.',
        answer: '`LEFT JOIN` returns all rows from the left table (users) and matched rows from the right table (clicks). If there is no match, the right side columns are NULL.',
        query: 'SELECT u.user_id, COUNT(c.click_id) FROM users u LEFT JOIN clicks c ON u.user_id = c.user_id GROUP BY u.user_id;',
        tableName: ['users', 'clicks'],
      },
      {
        id: 65,
        question: 'Find the users who have clicked but have no signup_date in the users table.',
        answer: 'A `LEFT JOIN` followed by `WHERE u.user_id IS NULL` is a common pattern to find rows in one table that do not have a match in another.',
        query: 'SELECT DISTINCT c.user_id FROM clicks c LEFT JOIN users u ON c.user_id = u.user_id WHERE u.user_id IS NULL;',
        tableName: ['clicks', 'users'],
      },
      {
        id: 66,
        question: 'Calculate the total number of clicks for each marketing channel.',
        answer: 'Joins through the campaigns table to access the channel information, then groups by it.',
        query: 'SELECT camp.channel, COUNT(*) FROM clicks c JOIN campaigns camp ON c.campaign_id = camp.campaign_id GROUP BY camp.channel;',
        tableName: ['clicks', 'campaigns'],
      },
      {
        id: 67,
        question: "List all three tables' information for every click.",
        answer: 'You can chain multiple `JOIN` clauses to combine more than two tables.',
        query: 'SELECT u.user_id, u.signup_date, c.click_id, camp.campaign_name, camp.channel FROM users u JOIN clicks c ON u.user_id = c.user_id JOIN campaigns camp ON c.campaign_id = camp.campaign_id;',
        tableName: ['users', 'clicks', 'campaigns'],
      },
      {
        id: 68,
        question: 'Find campaigns that have received zero clicks.',
        answer: 'This `LEFT JOIN` pattern finds campaigns that have no corresponding entry in the clicks table.',
        query: 'SELECT camp.campaign_name FROM campaigns camp LEFT JOIN clicks c ON camp.campaign_id = c.campaign_id WHERE c.click_id IS NULL;',
        tableName: ['campaigns', 'clicks'],
      },
      {
        id: 69,
        question: 'For each user, list the name of every campaign they have clicked on.',
        answer: '`DISTINCT` ensures that we only list each campaign name once per user, even if they clicked it multiple times.',
        query: 'SELECT DISTINCT c.user_id, camp.campaign_name FROM clicks c JOIN campaigns camp ON c.campaign_id = camp.campaign_id ORDER BY c.user_id;',
        tableName: ['clicks', 'campaigns'],
      },
      {
        id: 70,
        question: "Find the name of each employee and their manager's name.",
        answer: 'A self-join is when a table is joined to itself. Here, we treat the employees table as two separate tables: one for the employee (`e`) and one for the manager (`m`).',
        query: 'SELECT e.name AS employee_name, m.name AS manager_name FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;',
        tableName: ['employees'],
      },
      {
        id: 71,
        question: 'List all channels and the count of unique users who clicked on a campaign in that channel.',
        answer: 'Joins and groups by channel, then counts the distinct users within each channel group.',
        query: 'SELECT camp.channel, COUNT(DISTINCT c.user_id) FROM clicks c JOIN campaigns camp ON c.campaign_id = camp.campaign_id GROUP BY camp.channel;',
        tableName: ['clicks', 'campaigns'],
      },
      {
        id: 72,
        question: 'Find the top 3 channels by number of total clicks.',
        answer: 'Aggregates by channel, then orders the results to find the top performers.',
        query: 'SELECT camp.channel, COUNT(*) AS click_count FROM clicks c JOIN campaigns camp ON c.campaign_id = camp.campaign_id GROUP BY camp.channel ORDER BY click_count DESC LIMIT 3;',
        tableName: ['clicks', 'campaigns'],
      },
      {
        id: 73,
        question: 'For each user, find out how many days passed between their signup and their first click.',
        answer: 'A Common Table Expression (CTE) `first_clicks` is used to find the first click date for each user. Then, this CTE is joined back to the users table to calculate the difference.',
        query: 'WITH first_clicks AS (SELECT user_id, MIN(timestamp) as first_click_date FROM clicks GROUP BY user_id) SELECT u.user_id, (fc.first_click_date - u.signup_date) AS days_to_first_click FROM users u JOIN first_clicks fc ON u.user_id = fc.user_id;',
        tableName: ['users', 'clicks'],
      },
      {
        id: 74,
        question: "Find the average number of clicks per user for the 'TikTok' channel.",
        answer: 'A CTE filters for only TikTok clicks and counts them per user. The outer query then finds the average of these counts.',
        query: "WITH tiktok_clicks AS (SELECT user_id, COUNT(*) AS click_count FROM clicks c JOIN campaigns camp ON c.campaign_id = camp.campaign_id WHERE camp.channel = 'TikTok' GROUP BY user_id) SELECT AVG(click_count) FROM tiktok_clicks;",
        tableName: ['clicks', 'campaigns'],
      },
      {
        id: 75,
        question: "Which campaign had the most clicks on '2023-10-01'?",
        answer: 'Filters for a specific day, joins to get campaign name, groups by name, orders by count, and takes the top one.',
        query: "SELECT camp.campaign_name FROM clicks c JOIN campaigns camp ON c.campaign_id = camp.campaign_id WHERE c.timestamp::date = '2023-10-01' GROUP BY camp.campaign_name ORDER BY COUNT(*) DESC LIMIT 1;",
        tableName: ['clicks', 'campaigns'],
      },
      {
        id: 76,
        question: 'Find users who signed up but never clicked.',
        answer: 'Another example of the `LEFT JOIN`/`IS NULL` pattern to find non-matching records.',
        query: 'SELECT u.user_id FROM users u LEFT JOIN clicks c ON u.user_id = c.user_id WHERE c.click_id IS NULL;',
        tableName: ['users', 'clicks'],
      },
      {
        id: 77,
        question: 'List campaigns that have clicks from more than 100 unique users.',
        answer: 'Joins and groups, then uses `HAVING COUNT(DISTINCT ...)` to filter the campaign groups.',
        query: 'SELECT camp.campaign_name FROM campaigns camp JOIN clicks c ON camp.campaign_id = c.campaign_id GROUP BY camp.campaign_name HAVING COUNT(DISTINCT c.user_id) > 100;',
        tableName: ['campaigns', 'clicks'],
      },
      {
        id: 78,
        question: 'What is the most common channel for users who signed up in September 2023?',
        answer: 'A multi-table join that first filters users by signup date, then groups by channel to find the most frequent one.',
        query: "SELECT camp.channel FROM users u JOIN clicks c ON u.user_id = c.user_id JOIN campaigns camp ON c.campaign_id = camp.campaign_id WHERE u.signup_date >= '2023-09-01' AND u.signup_date < '2023-10-01' GROUP BY camp.channel ORDER BY COUNT(*) DESC LIMIT 1;",
        tableName: ['users', 'clicks', 'campaigns'],
      },
      {
        id: 79,
        question: "What's the output of a CROSS JOIN between users and campaigns?",
        answer: 'It would produce a row for every possible combination of a user and a campaign (Cartesian product). It might represent a list of all potential campaign exposures for every user.',
      },
      {
        id: 80,
        question: 'Write a query to produce the total number of users and total number of campaigns.',
        answer: 'Two separate subqueries in the `SELECT` list can be used to count rows from different tables in a single result.',
        query: 'SELECT (SELECT COUNT(*) FROM users) AS user_count, (SELECT COUNT(*) FROM campaigns) AS campaign_count;',
        tableName: ['users', 'campaigns'],
      },
    ],
  },
  {
    id: 5,
    title: 'Window Functions & Advanced Analytics',
    questions: [
      {
        id: 81,
        question: 'Rank campaigns by number of clicks.',
        answer: '`RANK()` is a window function that assigns a rank to each row within a partition of a result set. The `OVER` clause specifies how to partition and order the rows.',
        query: 'SELECT campaign_name, COUNT(*) AS num_clicks, RANK() OVER (ORDER BY COUNT(*) DESC) AS campaign_rank FROM clicks c JOIN campaigns camp ON c.campaign_id = camp.campaign_id GROUP BY campaign_name;',
        tableName: ['clicks', 'campaigns'],
      },
      {
        id: 82,
        question: 'Find the second booking for every user.',
        answer: '`ROW_NUMBER()` assigns a unique sequential integer to rows. `PARTITION BY user_id` restarts the numbering for each user.',
        query: 'WITH NumberedBookings AS (SELECT *, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY booking_date ASC) as booking_num FROM bookings) SELECT * FROM NumberedBookings WHERE booking_num = 2;',
        tableName: ['bookings'],
      },
      {
        id: 83,
        question: 'For each click, show the timestamp of the previous click by the same user.',
        answer: '`LAG(column, offset)` is a window function that provides access to a row at a specified physical offset that comes before the current row.',
        query: 'SELECT user_id, timestamp, LAG(timestamp, 1) OVER (PARTITION BY user_id ORDER BY timestamp) AS previous_click_time FROM clicks;',
        tableName: ['clicks'],
      },
      {
        id: 84,
        question: "Calculate the time difference between a user's consecutive clicks.",
        answer: 'Combines `LAG()` with a simple subtraction to find the time delta between events.',
        query: 'SELECT user_id, timestamp, (timestamp - LAG(timestamp, 1) OVER (PARTITION BY user_id ORDER BY timestamp)) AS time_since_last_click FROM clicks;',
        tableName: ['clicks'],
      },
      {
        id: 85,
        question: 'Calculate the running total of booking value for each user over time.',
        answer: '`SUM()` used as a window function calculates a cumulative sum. `ORDER BY booking_date` defines the order of accumulation.',
        query: 'SELECT user_id, booking_date, booking_value, SUM(booking_value) OVER (PARTITION BY user_id ORDER BY booking_date) AS running_total FROM bookings;',
        tableName: ['bookings'],
      },
      {
        id: 86,
        question: 'Calculate a 7-day moving average of total booking value.',
        answer: 'The `ROWS BETWEEN` clause defines a window frame (e.g., the last 7 rows) for the aggregate function to operate on.',
        query: 'WITH daily_sales AS (SELECT booking_date, SUM(booking_value) as total_value FROM bookings GROUP BY booking_date) SELECT booking_date, total_value, AVG(total_value) OVER (ORDER BY booking_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS seven_day_moving_avg FROM daily_sales;',
        tableName: ['bookings'],
      },
      {
        id: 87,
        question: 'For each channel, rank campaigns by their total cost.',
        answer: '`PARTITION BY c.channel` in the `OVER` clause makes the `RANK()` function restart for each marketing channel.',
        query: 'WITH campaign_costs AS (SELECT campaign_id, SUM(cost) as total_cost FROM campaign_performance GROUP BY campaign_id) SELECT c.channel, c.campaign_name, cc.total_cost, RANK() OVER (PARTITION BY c.channel ORDER BY cc.total_cost DESC) as rank_in_channel FROM campaigns c JOIN campaign_costs cc ON c.campaign_id = cc.campaign_id;',
        tableName: ['campaigns', 'campaign_performance'],
      },
      {
        id: 88,
        question: "What's the difference between RANK() and DENSE_RANK()?",
        answer: 'If there is a tie, RANK() will skip the next rank(s) (e.g., 1, 2, 2, 4). DENSE_RANK() will not skip ranks (e.g., 1, 2, 2, 3).',
      },
      {
        id: 89,
        question: 'Find the top 2 most expensive bookings for each hotel.',
        answer: 'Uses a CTE with `RANK()` partitioned by hotel to find the rank of each booking by value, then selects the top 2 from the result.',
        query: 'WITH RankedBookings AS (SELECT *, RANK() OVER (PARTITION BY hotel_id ORDER BY booking_value DESC) as rnk FROM bookings) SELECT * FROM RankedBookings WHERE rnk <= 2;',
        tableName: ['bookings'],
      },
      {
        id: 90,
        question: "Calculate the percentage of a user's total spending that each booking represents.",
        answer: "The `SUM() OVER (PARTITION BY user_id)` calculates the total for each user on every row for that user, allowing a percentage to be calculated.",
        query: 'SELECT user_id, booking_id, booking_value, booking_value * 100.0 / SUM(booking_value) OVER (PARTITION BY user_id) AS pct_of_total FROM bookings;',
        tableName: ['bookings'],
      },
      {
        id: 91,
        question: 'Identify user sessions (clicks no more than 30 mins apart).',
        answer: 'A very advanced query that uses `LAG` to find the time since the last click, flags new sessions, and then uses a cumulative `SUM` to assign a unique ID to each session.',
        query: `WITH click_lags AS (
  SELECT
    user_id,
    timestamp,
    LAG(timestamp) OVER (PARTITION BY user_id ORDER BY timestamp) as prev_ts
  FROM clicks
),
session_starts AS (
  SELECT
    user_id,
    timestamp,
    CASE WHEN (timestamp - prev_ts) > INTERVAL '30 minutes' OR prev_ts IS NULL THEN 1 ELSE 0 END AS is_new_session
  FROM click_lags
)
SELECT
  user_id,
  timestamp,
  SUM(is_new_session) OVER (PARTITION BY user_id ORDER BY timestamp) AS session_id
FROM session_starts;`,
        tableName: ['clicks'],
      },
      {
        id: 92,
        question: 'For each click, show the channel of the next click by the same user.',
        answer: '`LEAD(column, offset)` is a window function that provides access to a row at a specified physical offset that comes after the current row.',
        query: 'SELECT user_id, c.channel, LEAD(c.channel, 1) OVER (PARTITION BY cl.user_id ORDER BY cl.timestamp) AS next_channel FROM clicks cl JOIN campaigns c ON cl.campaign_id = c.campaign_id;',
        tableName: ['clicks', 'campaigns'],
      },
      {
        id: 93,
        question: 'Categorize users into spending tiers (low, medium, high) based on their total booking value percentiles.',
        answer: '`NTILE(n)` is a window function that divides the rows in a partition into `n` ranked groups (or buckets).',
        query: 'WITH user_spending AS (SELECT user_id, SUM(booking_value) AS total_spent FROM bookings GROUP BY user_id) SELECT user_id, total_spent, NTILE(3) OVER (ORDER BY total_spent) AS spending_tier FROM user_spending;',
        tableName: ['bookings'],
      },
      {
        id: 94,
        question: 'For each day, what is the percentage change in total bookings from the previous day?',
        answer: 'Calculates daily bookings, uses `LAG` to get the previous day`s bookings on the same row, then calculates the percentage change.',
        query: 'WITH daily_bookings AS (SELECT booking_date, COUNT(*) as num_bookings FROM bookings GROUP BY booking_date), daily_lags AS (SELECT *, LAG(num_bookings, 1, 0) OVER (ORDER BY booking_date) as prev_day_bookings FROM daily_bookings) SELECT booking_date, (num_bookings - prev_day_bookings) * 100.0 / prev_day_bookings AS pct_change FROM daily_lags;',
        tableName: ['bookings'],
      },
      {
        id: 95,
        question: 'Find the first campaign a user ever clicked on.',
        answer: 'Uses `ROW_NUMBER()` to identify the first click for each user based on timestamp.',
        query: 'WITH numbered_clicks AS (SELECT *, ROW_NUMBER() OVER(PARTITION BY user_id ORDER BY timestamp) AS rn FROM clicks) SELECT user_id, campaign_id FROM numbered_clicks WHERE rn = 1;',
        tableName: ['clicks'],
      },
      {
        id: 96,
        question: 'Which campaigns are in the top 10% by number of clicks?',
        answer: '`CUME_DIST()` (cumulative distribution) calculates the relative position of a value in a set of values. `_>= 0.9` filters for the top 10%.',
        query: 'WITH campaign_clicks AS (SELECT campaign_id, COUNT(*) as click_count FROM clicks GROUP BY campaign_id) SELECT campaign_id, click_count FROM campaign_clicks WHERE CUME_DIST() OVER (ORDER BY click_count) >= 0.9;',
        tableName: ['clicks'],
      },
      {
        id: 97,
        question: 'Calculate the cumulative distribution of campaign clicks.',
        answer: '`CUME_DIST()` shows the proportion of rows with a value less than or equal to the current row`s value.',
        query: 'WITH campaign_clicks AS (SELECT campaign_id, COUNT(*) as click_count FROM clicks GROUP BY campaign_id) SELECT campaign_id, click_count, CUME_DIST() OVER (ORDER BY click_count) as cumulative_distribution FROM campaign_clicks;',
        tableName: ['clicks'],
      },
      {
        id: 98,
        question: 'Find the user_id and booking_value for the median booking value.',
        answer: '`PERCENTILE_CONT(0.5)` is an inverse distribution function that assumes a continuous distribution model to find the median (50th percentile).',
        query: 'SELECT user_id, booking_value FROM (SELECT user_id, booking_value, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY booking_value) OVER () as median_val FROM bookings) as sub WHERE booking_value = median_val;',
        tableName: ['bookings'],
      },
      {
        id: 99,
        question: 'Last Click Attribution: For each booking, find the campaign of the last click before the booking.',
        answer: 'This is a complex real-world problem. It typically requires joining bookings to clicks where the click happened before the booking, and then using window functions to find the most recent of those clicks for each booking.',
      },
      {
        id: 100,
        question: 'First and Last Click User Journey: For every user who booked, show their first and last touch channels.',
        answer: 'Another complex problem. It involves finding all clicks for users who booked, ranking them, and then pivoting the results to show the first and last channel in one row.',
      },
    ],
  },
];

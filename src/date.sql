SELECT *
  , YEAR(date) * 10000 + MONTH(date) * 100 + DAY(date) AS date_number
FROM my_table
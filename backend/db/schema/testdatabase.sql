SELECT
daycare.name Name,
--daycare.rating Rating,
enrolment.year,
enrolment.month,
count(enrolment.daycare_id) as Spots
-- CASE
-- WHEN (daycare_profile.max_capacity) - count(enrolment.daycare_id) = 0 THEN 'FULL'
-- WHEN daycare_profile.max_capacity - count(enrolment.daycare_id) > 0 THEN
-- daycare_profile.max_capacity - count(enrolment.daycare_id)
-- END Vacancy
FROM enrolment
INNER JOIN daycare ON enrolment.daycare_id = daycare.id
INNER JOIN daycare_profile ON daycare_profile.daycare_id = daycare.id
GROUP BY daycare.name, enrolment.year, enrolment.month, daycare_profile.max_capacity;
-- testing git add

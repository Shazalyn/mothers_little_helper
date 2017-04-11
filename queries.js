     <input type="hidden" name="child_id" value="{{id}}">

INSERT INTO eat(day, eat_time, formula, milk) VALUES('04/05/2017', '12:01', '10', '2'),
  [data.day, data.eat_time, data.formula, data.milk, data.child_id]

SELECT * FROM sleep WHERE child_id ='4';
SELECT * FROM go WHERE child_id ='4';

SELECT * FROM go WHERE child_id ='3' AND poo = true;
SELECT * FROM sleep WHERE child_id ='3';

SELECT * FROM eat WHERE child_id ='3';


SELECT * FROM eat WHERE child_id ='3';
SELECT formula , SUM(*);
FROM eat WHERE  child_id ='3'


// below finds the total consumption fo formul for the child
SELECT sum(formula)AS total_for_child_id_3
FROM eat WHERE child_id = '3';

SELECT sum(formula)AS total_for_child_id_3
FROM eat WHERE child_id = '3' AND day = '2017-04-07';

SELECT sum(formula + milk)AS total_for_child_id_3
FROM eat WHERE child_id = '3' AND day = '2017-04-07';


SELECT sum(formula + milk)AS total_for_child_id_3
FROM eat WHERE child_id = '3' AND day = '2017-04-07';


// not working
SELECT sum(sleep_end + sleep_start)AS total_for_child_id_4
FROM sleep WHERE child_id = '4';




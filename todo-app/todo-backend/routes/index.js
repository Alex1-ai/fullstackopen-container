const express = require('express');
const router = express.Router();
const redis = require('../redis')
const { promisify } = require('util');
const configs = require('../util/config')




// Promisify Redis functions
// const getAsync = promisify(redis.get).bind(redis);
// const setAsync = promisify(redis.set).bind(redis);

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++
  // Increment the todo counter in Redis
  // const visit = parseInt(await redis.getAsync('added_todos')) || 0
  // console.log(visit)
  // // await redis.setAsync('added_todos', (await redis.getAsync('added_todos')) + 1);
  // await redis.setAsync('added_todos', (visit) + 1);

  // // Get the current value of the todo counter
  // const addedTodos = parseInt(await redis.getAsync('added_todos')) || 0;

  res.send({
    ...configs,
    visits
  });
  // visits++

  // res.send({
  //   ...configs,
  //   visits
  // });
});

module.exports = router;


router.get('/statistics', async(req, res) => {

  const todoNumber = await redis.getAsync('added_todos');

  console.log('todonumber',todoNumber);

  if(!todoNumber){
      res.send({ added_todos: 0 });
  } else {
    res.send({ added_todos: Number(todoNumber) });
  }
})

module.exports = router;
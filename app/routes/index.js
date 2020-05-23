// Module Imports
const express = require('express')
const router = express.Router();
const config = require('../../bin/configuration')

/*
 * Setup routes for index
 */

router.get('/', (req, res) => {
  res.render('index')
})




// Router Configuration
router.use('/task', require('./task-routes'));
router.use('/autouser', require('./user-routes'));
/*
 * Handle 404 error
 */
router.use('*', (req, res) => {
  res.status(404).json({
    errors: {
      msg: 'URL_NOT_FOUND'
    }
  })
})

module.exports = router

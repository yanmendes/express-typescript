import { Router } from 'express'

export default Router()
  .get('/', (req, res, next) => {
    console.log('Here is your request', req)
    console.log('Here is your response', res)
    console.log('You can use next to skip a middleware', next)
  })

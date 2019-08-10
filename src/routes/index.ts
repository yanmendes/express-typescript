import { Router } from 'express'

import foo from './foo'

export default Router()
  .use('/foo', foo)

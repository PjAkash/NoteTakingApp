import { Pool } from 'pg'
// import { Pool } from 'pg'
import { connectionString } from './constants'

export const db = new Pool({
    connectionString: connectionString
})
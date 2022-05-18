import { Low, Memory } from 'lowdb'

const db = new Low(new Memory())
await db.read()

export default db

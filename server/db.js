const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'krill',
    password: 'aH6&uJ4*rN9$cT2&',
    host: 'todoapp-qln30-postgresql.todoapp-qln30.svc.cluster.local',
    port: 5432,
    database: 'todoapp'
})

module.exports = pool;
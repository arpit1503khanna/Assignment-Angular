import { Pool} from "pg";

const pool = new Pool({
    user:'arpit',
    host:'localhost',
    database:'arpit',
    password:'test123',
    port: 5432
})

// module.exports = pool;
export default pool;


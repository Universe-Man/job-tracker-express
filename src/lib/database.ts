import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL_POOL,
  ssl: { rejectUnauthorized: false },
});

export default pool;






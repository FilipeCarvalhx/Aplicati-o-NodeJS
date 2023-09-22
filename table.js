import {sql} from "./db";

sql`
CREATE TABLE videos (
    id  TEXT, PRIMARY KEY
    title   TEXT,
    description  TEXT,
    duration   INTEGER
)
`
.then(()=>{
    console.log('table criada');
})
// index.js

import { say } from 'cowsay';
import "dotenv/config";

const name = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(
    say({
        text: `hello, I'm ${name} from ${campus}`,
        e: "oO",
        T: "U",
    })
)

import { say } from 'cowsay';
import "dotenv/config";

const myName = process.env.MY_NAME;
const myCampus = process.env.MY_CAMPUS;

console.log(
    say({
        text: `hello, I'm ${myName} from ${myCampus}`,
        e: "oO",
        T: "U",
    })
)

import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
    await client.hSet('car', {
        brand: 'Toyota',
        color: 'Green'
    });

    const car = await client.hGetAll('car');
    console.log(car);
}
run();
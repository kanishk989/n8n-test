// LinkedIn Job Scraper
// Your scraper code goes here

import { Actor } from 'apify';

await Actor.init();

const input = await Actor.getInput();

console.log('Input:', input);

// TODO: Implement scraping logic

await Actor.exit();
import { FullConfig } from '@playwright/test';
import { sauceVisualSetup } from "@saucelabs/visual-playwright";


export default async function globalSetup(config: FullConfig){
    console.log(`SAUCE_USERNAME: ${process.env.SAUCE_USERNAME}`);
    await sauceVisualSetup();
}

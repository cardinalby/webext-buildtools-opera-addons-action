import * as ghActions from '@actions/core';
import puppeteer from "puppeteer";

async function run(): Promise<void> {
    try {
        const debugModeEnabled = Boolean(process.env.DEBUG_UPLOAD_OPERA_EXTENSION);
        const browser = await puppeteer.launch({
            headless: !debugModeEnabled,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        try {
            await runImpl(browser);
        } finally {
            if (!debugModeEnabled) {
                await browser.close();
            }
        }
    } catch (error) {
        ghActions.setFailed(error.message);
    }
}

async function runImpl(browser: puppeteer.Browser) {
    const page = await browser.newPage();

    await page.goto(ghActions.getInput('url'));
    const selector = await page.waitForSelector(ghActions.getInput('selector'));
    const text = await selector.evaluate(el => el.textContent);

    ghActions.info(ghActions.getInput('selector') + ' contents: ' + text);
    ghActions.setOutput('elementText', text);
}

// noinspection JSIgnoredPromiseFromCall
run();
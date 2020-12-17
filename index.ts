import { launch } from 'puppeteer'
import * as expect from 'expect'

;(async () => {
    const browser = await launch({
        headless: false,
        args: ['--window-size=1440,900'],
        // devtools: true,
    })
    const page = await browser.newPage()
    await page.setViewport({ width: 1440, height: 770 })

    const URL = 'http://thebase.in/'
    await page.goto(URL)
    expect(page.url()).toBe(URL)

    await browser.close()
})()


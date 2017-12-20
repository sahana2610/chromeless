const { Chromeless } = require('../dist/src/index')

async function run() {
  const chromeless = new Chromeless({
    launchChrome: false,
    cdp: { port: 9222 },
    debug: true,
  })

  const screenshot = await chromeless
    .click('a')
    .wait(5000)
    .screenshot()
    .wait(45000)

  console.log(screenshot) // prints local file path

  await chromeless.end()
}

run().catch(console.error.bind(console))

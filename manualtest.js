'use strict'

/*
    Developers notice:

    Just a test file for a manual test
*/

const console = require('./main')
console.setup({
    silent:    false,
    colors:    true,
    renderKid: true,
})
console.setup({
    silent:    false,
    colors:    true,
    renderKid: true,
})

console.log('hia')
console.warn('hia')
console.error('hia')
console.info('hia')
console.log(() => {
    // this is a cool function
    return 'test'
})
console.log(/ab+c/)
console.trace()
console.fatal('oops, fake fatal error!')
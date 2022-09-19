async function test() {
  await new Promise((r) => setTimeout(r, 6000)).then(() => console.log('done'))

  console.log('wait')
}
async function antest() {
  await new Promise((r) => setTimeout(r, 3000)).then(() =>
    console.log('an done')
  )

  console.log(' an wait')
}
test()
antest()

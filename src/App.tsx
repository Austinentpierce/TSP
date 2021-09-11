import React from 'react'

export function App() {
  for (let step = 0; step < 5; step++) {
    console.log(`Walking east ${step} step`)
  }

  for (let thing = 0; thing < 500; thing++) {
    console.log(`The thing is ${thing}`)
  }
  let n = 0
  while (n < 500) {
    n++
  }
  console.log(n)
  return <div>Hello, World</div>
}

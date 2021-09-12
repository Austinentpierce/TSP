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

  // const colors = ['red', 'green', 'blue']
  // colors.forEach(function (color, index) {
  //   console.log(`The color at position ${index} is ${color}`)
  // })

  const colors = ['red', 'blue', 'green']

  const lengths = []

  colors.forEach(function (color) {
    const lengthOfColor = color.length

    lengths.push(lengthOfColor)
  })

  console.log(lengths)

  const uppercased = []

  colors.forEach(function (color) {
    const uppercase = color.toUpperCase()

    uppercased.push(uppercase)
  })

  console.log(uppercased)
  return <div>Hello, World</div>
}

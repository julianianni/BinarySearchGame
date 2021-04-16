//objective: guess a number in range 0 to 100000 using binary search showing many attempts i did it
//query selectors
const high = document.querySelector('.btn-big')
const low = document.querySelector('.btn-low')
const guessed = document.querySelector('.guessed')
const notGuessed = document.querySelector('.not-guessed')
const result = document.querySelector('.result')
const start = document.querySelector('.start')
const totalAttempts = document.querySelector('.totalattempts')
const started = document.querySelector('.started')
const endGame = document.querySelector('.end-game')
const attemptsTitle = document.querySelector('.attempts')

//global values
let max = 1000000
let min = 0
let middle = Math.floor((max + min) / 2)
let tries = 0

///handle clicks
guessed.addEventListener('click', () => {
  started.style.display = 'none'
  start.style.display = 'block'
  endGame.style.display = 'block'
  totalAttempts.style.display = 'none'
  attemptsTitle.style.display = 'none'
  endGame.innerHTML = `Your number is ${middle} 
  and i found it in ${tries} attempts`
})

low.addEventListener('click', () => {
  max = middle
  middle = Math.floor((max + min) / 2)
  result.innerHTML = middle
  tries++
  totalAttempts.innerHTML = tries
})

high.addEventListener('click', () => {
  min = middle
  middle = Math.floor((max + min) / 2)
  result.innerHTML = middle
  tries++
  totalAttempts.innerHTML = tries
})

//start Game
start.addEventListener('click', () => {
  endGame.style.display = 'none'
  started.style.display = 'block'
  start.style.display = 'none'
  totalAttempts.style.display = 'block'
  attemptsTitle.style.display = 'block'
  max = 1000000
  min = 0
  middle = Math.floor((max + min) / 2)
  tries = 0
  result.innerHTML = middle
  tries++
  totalAttempts.innerHTML = tries
})

//binarysearch Algorithm - only to understand the logic; not used in the game

// const binarySearch2 = (arr, target) => {
//   let izq = 0
//   let der = arr.length - 1
//   let medio = Math.floor((izq + der) / 2)

//   while (arr[medio] !== target && der >= izq) {
//     if (arr[medio] > target) der = medio - 1
//     else izq = medio + 1
//     medio = Math.floor((izq + der) / 2)
//   }
//   return arr[medio] === target ? medio : -1
// }

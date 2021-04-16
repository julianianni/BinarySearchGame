# BinarySearchGame
The idea is to guess a NUMBER a person thinks using the binary search algorithm and find it in as few attempts as possible 
This is a vanilla JS project

# The basic binary search algorithm for finding a number in a sorted array with a target number
const binarySearch2 = (arr, target) => {
  let izq = 0
  let der = arr.length - 1
  let medio = Math.floor((izq + der) / 2)

  while (arr[medio] !== target && der >= izq) {
    if (arr[medio] > target) der = medio - 1
    else izq = medio + 1
    medio = Math.floor((izq + der) / 2)
  }
  return arr[medio] === target ? medio : -1
}


PS: apologize front-end devs for the awfull CSS and html structure! :)


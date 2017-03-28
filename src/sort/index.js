const a = [2,5000,500]

function sort(arr) {
  if (!arr || arr.length === 0) return []
  const sortedArr = []
  for (const a of arr) {
    sortedArr[a - 1] = a
  }
  for (let i = sortedArr.length; i--;) {
    if (!sortedArr[i]) {
      sortedArr.splice(i, 1)
    }
  }
  return sortedArr
}

console.log(sort(a))
export const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}
export const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (err) {
    return undefined
  }
}

export const formatDifficulty = (difficulty) => {
  switch (difficulty) {
    case 'easy':
      return '🐣'; // Hatching baby chicken
    case 'intermediate':
      return '🐤'; // Baby chicken
    case 'hard':
      return '🐓'; // Adult chicken
    default:
      return 'n/a';
  }
}
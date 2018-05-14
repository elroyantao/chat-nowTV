export const compareByTimestamp = (a, b) => {
  const dateA = new Date(a.timestamp)
  const dateB = new Date(b.timestamp)
  
  return dateA - dateB
}
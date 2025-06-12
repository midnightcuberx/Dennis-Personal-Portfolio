export const formatDate = (date: Date | string): string => {
  const d = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
  }
  return d.toLocaleDateString('en-nz', options)
}

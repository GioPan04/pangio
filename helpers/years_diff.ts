/// Get diff in years between two dates
export default function year_diff(first: Date, second: Date): number {
  const diff = first.getTime() - second.getTime();
  const yearsDate = new Date(diff);

  return Math.abs(yearsDate.getUTCFullYear() - 1970);
}
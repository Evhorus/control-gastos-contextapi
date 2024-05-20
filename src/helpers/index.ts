// formatero de moneda

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(amount);
}

// formateo de fechas
export function formatDate(dateStr: string): string {
  const [fecha] = dateStr.split(", ");

  const [day, month, year] = fecha.split("/").map(Number);

  const dateObj = new Date(year, month - 1, day);

  if (isNaN(dateObj.getTime())) {
    throw new RangeError("Invalid time value");
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("es-CO", options).format(dateObj);
}

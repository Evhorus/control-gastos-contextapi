// formatero de moneda

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(amount);
}

// formateo de fechas
export function formatDate(dateStr: string): string {
  const dateObj = new Date(dateStr);
  // Verificar si la fecha es válida
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

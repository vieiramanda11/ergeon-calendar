export const getPrevDates = (date: Date, days: number) => {
  return new Array(days).fill(null).map((_, i) => {
    const prevDate = new Date(date);
    prevDate.setDate(date.getDate() - i - 1);
    return prevDate;
  });
};

export const getNextDates = (date: Date, days: number) => {
  return new Array(days).fill(null).map((_, i) => {
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + i + 1);
    return nextDate;
  });
};

export const getInitialDates = (date = new Date()) => {
  const prevDates = getPrevDates(date, 3);
  const nextDates = getNextDates(date, 3);
  return [...prevDates, date, ...nextDates];
};

export const sortByDate = (dates: Date[]) => {
  return dates.sort((a, b) => a.getTime() - b.getTime());
};

export const getTitle = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  });
};

export const getDay = (date: Date, weekday: "long" | "short") => {
  return date
    .toLocaleDateString("en-US", {
      weekday
    })
    .toUpperCase();
};

export const isEqualDate = (date: Date, selected: Date) => {
  return (
    date.getDate() === selected.getDate() &&
    date.getMonth() === selected.getMonth() &&
    date.getFullYear() === selected.getFullYear()
  );
};

export const isToday = (date: Date) => {
  return isEqualDate(date, new Date());
};

export const isCurrentMonth = (date: Date, current: Date) => {
  return (
    date.getMonth() === current.getMonth() &&
    date.getFullYear() === current.getFullYear()
  );
};

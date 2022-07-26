import { Key, useEffect, useState } from 'react';
import { CalendarHeader } from './CalendarHeader';
import { CalendarWrapper, DaysWrapper } from './styles';
import {
  getDay,
  getInitialDates,
  getNextDates,
  getPrevDates,
  getTitle,
  isCurrentMonth,
  isEqualDate,
  isToday,
  sortByDate,
} from '../../utils';

interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  weekday?: 'long' | 'short';
  onSelect?: (date: Date) => void;
}

const INITIAL_DATE = new Date();

export const Calendar = ({
  defaultValue = INITIAL_DATE,
  value,
  weekday = 'short',
  onSelect,
}: CalendarProps) => {
  const [date, setDate] = useState(defaultValue);
  const [title, setTitle] = useState(getTitle(defaultValue));
  const [days, setDays] = useState(sortByDate(getInitialDates(defaultValue)));

  useEffect(() => {
    if (value && !isEqualDate(date, value)) {
      setDate(value);
      setTitle(getTitle(value));
      setDays(sortByDate(getInitialDates(value)));
    }
  }, [date, value]);

  useEffect(() => {
    if (days.every((day) => !isCurrentMonth(new Date(title), day))) {
      setTitle(getTitle(days[0]));
    }
  }, [days, title]);

  const handlePrev = () => {
    setDays((prev: Date[]) => sortByDate(getPrevDates(prev[0], 7)));
  };

  const handleNext = () => {
    setDays((prev: string | any[]) => sortByDate(getNextDates(prev[prev.length - 1], 7)));
  };

  const handleSelect = (day: Date) => {
    setDate(day);
    setTitle(getTitle(day));
    onSelect?.(day);
  };

  return (
    <CalendarWrapper>
      <CalendarHeader onPrev={handlePrev} onNext={handleNext} title={title} />
      <DaysWrapper>
        {days.map((day: Date, i: Key | null | undefined) => (
          <div
            key={i}
            className={`day${isEqualDate(date, day) ? ' selected' : ''}${
              isToday(day) ? ' today' : ''
            }${!isCurrentMonth(new Date(title), day) ? ' old' : ''}`}
            onClick={() => handleSelect(day)}
          >
            {day.getDate()}
            <span>{getDay(day, weekday)}</span>
          </div>
        ))}
      </DaysWrapper>
    </CalendarWrapper>
  );
};

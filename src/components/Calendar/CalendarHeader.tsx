import React from 'react';
import ArrowLeft from '../icons/ArrowLeft.icon';
import ArrowRight from '../icons/ArrowRight.icon';
import { HeaderWrapper } from './styles';

interface CalendarHeaderProps {
  onPrev: () => void;
  onNext: () => void;
  title: string;
}

export const CalendarHeader = ({ onPrev, onNext, title }: CalendarHeaderProps) => (
  <HeaderWrapper>
    <button className="nav-btn" onClick={onPrev}>
      <ArrowLeft />
    </button>
    <h2 className="title">{title}</h2>
    <button className="nav-btn" onClick={onNext}>
      <ArrowRight />
    </button>
  </HeaderWrapper>
);

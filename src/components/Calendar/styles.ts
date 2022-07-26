import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 100%;
  display: block;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3rem 1fr 3rem;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  margin-bottom: 1rem;
  .nav-btn {
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
  }

  .title {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
  }
`;

export const DaysWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;

  .day {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    padding: 0.5rem;
    margin: 0;
    cursor: pointer;
    position: relative;
    border-radius: 0.5rem;
    transition: all 0.2s ease-in-out;

    span {
      font-size: 0.75rem;
      color: #999;
      display: block;
    }

    &:hover {
      background-color: #f5f0f0;
    }

    &.today {
      &:after {
        content: '';
        position: absolute;
        bottom: 0.25rem;
        right: 0.5rem;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: #add8e6;
      }
    }

    &.selected {
      color: #fff;
      background-color: #add8e6;

      span {
        color: #fff;
      }
    }

    &.old {
      color: #999;
    }
  }
`;

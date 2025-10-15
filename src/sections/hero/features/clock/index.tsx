import { useEffect, useState } from 'react';
import { ClientOnly } from 'vite-react-ssg/single-page';
import { difference, location, time, wrapper } from './style.css';

export function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const timeDifference = getTimeDifference();

  const formatter = new Intl.DateTimeFormat('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Seoul',
  });

  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date());

    const now = new Date();
    const msUntilNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeoutId = setTimeout(() => {
      updateTime();
      const intervalId = setInterval(updateTime, 60000);

      return () => clearInterval(intervalId);
    }, msUntilNextMinute);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={wrapper}>
      <span className={location}>I’m living in Seoul.</span>
      <ClientOnly>
        {() => (
          <>
            <span className={time}>{formatter.format(currentTime)}</span>
            <span className={difference}>
              {timeDifference === 0
                ? 'We are in the same timezone!'
                : `(${timeDifference})`}
            </span>
          </>
        )}
      </ClientOnly>
    </div>
  );
}

function getTimeDifference() {
  const localOffsetMinutes = new Date().getTimezoneOffset();
  const kstOffsetMinutes = -9 * 60;

  const diffMinutes = kstOffsetMinutes - localOffsetMinutes;
  const diffHours = diffMinutes / 60;

  return diffHours;
}

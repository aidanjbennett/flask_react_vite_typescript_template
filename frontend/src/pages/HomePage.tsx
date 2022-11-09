import { useEffect, useState } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time')
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="center">Hello from Flask + React + Typescript + Vite</h1>
      <p className="center">The current time is {currentTime}.</p>
    </div>
  );
}

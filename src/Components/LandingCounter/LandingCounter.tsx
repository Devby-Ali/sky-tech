import React, { useEffect, useState } from "react";

export default function LandingCounter({ count }: {count: number}) {
  const [courseCounter, setCourseCounter] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCourseCounter((prevCount) => prevCount + 1);
    }, 1);

    if (courseCounter === count) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [courseCounter, count]);

  return <span className="font-EstedadBold font-bold mt-4 sm:mt-6 text-3xl sm:text-4xl">{courseCounter}</span>;
}

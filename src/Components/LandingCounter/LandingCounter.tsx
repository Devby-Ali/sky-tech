import React, { useEffect, useState } from "react";

const LandingCounter = ({ count }: { count: number }): React.JSX.Element => {
  const [courseCounter, setCourseCounter] = useState<number>(0);

  useEffect(() => {
    const counterHandler = async () => {
      try {
      } catch (error) {
        console.error("Error landing counter infos:", error);
      }
    };
    counterHandler();

    const interval = setInterval(() => {
      setCourseCounter((prevCount) => prevCount + 1);
    }, 1);

    if (courseCounter === count) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [courseCounter, count]);

  return (
    <span className="font-EstedadBold font-bold mt-4 sm:mt-6 text-3xl sm:text-4xl">
      {courseCounter}
    </span>
  );
};
export default LandingCounter;

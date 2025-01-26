import { FC } from 'react';

const StrikeGraph: FC = () => {
  return (
    <div className="space-y-0.5">
      {new Array(7).fill(0).map((_, index) => (
        <div key={`row-${index}`} className="flex space-x-0.5">
          {new Array(50).fill(0).map((_, j) => (
            <div key={`row-${index}-${j}`} className="h-4 w-4 rounded-md bg-gray-300/70" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default StrikeGraph;

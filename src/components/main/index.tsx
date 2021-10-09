import React from "react";

import { Button } from "@components";

export const Main: React.FC = () => {
  return (
    <div className="text-center font-light py-5 bg-gray-700">
      <div className="container mx-auto">
        <h1 data-test="main-heading" className="text-white text-8xl mb-2">
          Self Improvement
        </h1>
        <p className="text-lg text-white mb-3">
          Everyday 30 minutes to create a good habit.
        </p>
        <Button type="button">
          <a
            data-test="docs-btn-anchor"
            href="#"
            target="_blank"
          >
            Make your self Improvement Plan
          </a>
        </Button>
      </div>
    </div>
  );
};

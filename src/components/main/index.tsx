import React from "react";
import Link from "next/link";

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
          <Link href="/mygoals" data-test="docs-btn-anchor">
            <a>Make my Goals</a>
          </Link>
        </Button>
      </div>
    </div>
  );
};

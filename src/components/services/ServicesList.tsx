import React from "react";
import Link from "next/link";

import { Button } from "@components"
import { BadgeIcon } from "@components/icons"

import data from "@public/meta.json";

const ServicesList: React.FC = () => {
  return (
    <div className="flex-1 container my-8 max-w-screen-lg mx-auto p-5">
      <div className="block text-center p-10">
        <h2 className="text-xl font-semibold mb-2">Services</h2>
        <p className="m-0">Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(data?.plugins ?? []).map((plugin) => (
          <div key={plugin.name}
            className="col-span-1 rounded-md border border-gray-300 p-2"
            data-testid="container"
          >
            <div className="flex flex-col items-center justify-center filter drop-shadow-xl shadow-lg col-span-1 rounded-md p-4">
              <div className="rounded-full h-12 w-12 flex items-center justify-center bg-black">
                <BadgeIcon/>
              </div>
              <h2 className="text-xl font-semibold mb-2">{plugin.name}</h2>
              <p className="m-0">{plugin.description}</p>
              <Link href="/mygoals" data-test="docs-btn-anchor">
                <Button type="button">
                  <a>Use it</a>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServicesList;

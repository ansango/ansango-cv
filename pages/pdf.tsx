import type { NextPage } from "next";

import dynamic from "next/dynamic";
import { Suspense } from "react";

import type { FC } from "react";

const DynamicPDF = dynamic(() => import("../components/Doc2"), {
  ssr: false,
});

const Pdf: NextPage = () => {
  return (
    <div>
      <DynamicPDF />
    </div>
  );
};

export default Pdf;

import React from "react";
import { useParams } from "react-router-dom";

function Page({ pages }) {
  const { slug } = useParams();
  const page = pages.find((page) => page.slug === slug);
  return (
    <div>
      <h1>{page.name}</h1>
      <h2>{page.meta.title}</h2>
      <button className="btn btn--primary">test</button>
      <button className="btn btn--secondary">test</button>
    </div>
  );
}

export default Page;

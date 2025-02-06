"use client";

import { useState } from "react";

export default function ShowMore({ text, limit = 30 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p className="text-slate-500">
        {isExpanded ? text : text.slice(0, limit) + "..."}
      </p>
      {text.length > limit && (
        <button
          className="mt-2 text-blue-500 font-medium hover:underline"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}

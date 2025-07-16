"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const activeFilter = params.get("capacity") || "all";

  function handleFilter(filter) {
    const searchParams = new URLSearchParams(params);
    searchParams.set("capacity", filter);
    router.replace(`${pathname}?${searchParams.toString()}`, { scroll: false });
  }
  return (
    <div className="border-primary-50 mb-5 flex items-center justify-start border md:justify-end">
      <Button
        filter="all"
        activeFilter={activeFilter}
        onClick={() => handleFilter("all")}
      >
        All
      </Button>
      <Button
        filter="small"
        activeFilter={activeFilter}
        onClick={() => handleFilter("small")}
      >
        1&mdash;3
      </Button>
      <Button
        filter="meduim"
        activeFilter={activeFilter}
        onClick={() => handleFilter("meduim")}
      >
        4&mdash;7
      </Button>
      <Button
        filter="large"
        activeFilter={activeFilter}
        onClick={() => handleFilter("large")}
      >
        8+
      </Button>
    </div>
  );
}

export default Filter;

function Button({ filter, activeFilter, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`text-primary-200 hover:bg-primary-800 focus:ring-primary-500 cursor-pointer px-5 py-2 text-sm focus:ring-2 focus:outline-none md:text-base ${
        activeFilter === filter ? "bg-primary-800" : ""
      }`}
    >
      {children}
    </button>
  );
}

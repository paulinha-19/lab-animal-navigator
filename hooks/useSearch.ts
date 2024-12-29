import { useState } from "react";
import { DATA } from "@/data/az-list";

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.length >= 3) {
      const results: string[] = [];
      DATA.forEach((section) => {
        section.items.forEach((item) => {
          if (item.toLowerCase().includes(query.toLowerCase())) {
            results.push(item);
          }
        });
      });
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  };

  return { searchQuery, setSearchQuery, filteredData, handleSearch };
};
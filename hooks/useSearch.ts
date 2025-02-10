import { useState } from "react";
import { DATA } from "@/data/az-list";

interface SearchResultItem {
  label: string;
  urls: { name: string; url: string }[];
}

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<SearchResultItem[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.length >= 3) {
      const results: SearchResultItem[] = [];
      DATA.forEach((section) => {
        section.items.forEach((item) => {
          if (item.label.toLowerCase().includes(query.toLowerCase())) {
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
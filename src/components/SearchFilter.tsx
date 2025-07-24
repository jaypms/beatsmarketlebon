import React from "react";

interface SearchFilterProps {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  statusFilter: string;
  onStatusFilterChange: (value: string) => void;
  statuses: string[];
  placeholder?: string;
}

export default function SearchFilter({
  searchTerm,
  onSearchTermChange,
  statusFilter,
  onStatusFilterChange,
  statuses,
  placeholder = "Rechercher...",
}: SearchFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        placeholder={placeholder}
        className="px-3 py-2 rounded bg-[#1A1B1F] border border-gray-600 text-white focus:border-pink-500 flex-grow min-w-[200px]"
      />

      <select
        value={statusFilter}
        onChange={(e) => onStatusFilterChange(e.target.value)}
        className="px-3 py-2 rounded bg-[#1A1B1F] border border-gray-600 text-white focus:border-pink-500"
      >
        <option value="">Tous statuts</option>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
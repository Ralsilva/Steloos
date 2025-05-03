import { useState } from "react";
import { useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [_, navigate] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/estorias?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="relative mb-10 max-w-2xl mx-auto">
      <form onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder="Procurar estórias..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-4 pl-12 pr-4 text-lg bg-white border-none rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-primary h-auto"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-4">
          <Search className="text-primary h-5 w-5" />
        </div>
      </form>
    </div>
  );
}

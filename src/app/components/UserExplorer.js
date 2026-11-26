"use client";
import { useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
export default function UserExplorer({ users }) {
  const [search, setSearch] = useState("");
  const visibleUsers = users.filter((user) =>
    `${user.firstName + user.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <Card users={visibleUsers} />
    </div>
  );
}

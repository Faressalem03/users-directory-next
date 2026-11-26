"use client";
import styles from "./SearchBar.module.css";
export default function SearchBar({search, setSearch}) {
  return (
    <div className={styles.SearchBar}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Enter name"
      ></input>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import UserExplorer from "./components/UserExplorer";

export default async function Home() {
  const response = await fetch("https://dummyjson.com/users?limit=9");
  const data = await response.json();
  const users = data.users;

  return (
    <div className={styles.container}>
      <h1>User directory</h1>
      <UserExplorer users={users} />
    </div>
  );
}

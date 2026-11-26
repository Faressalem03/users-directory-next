import styles from './Card.module.css'
import Link from "next/link";

export default function Cards({ users }) {
  if (users.length === 0) return <p className={styles.message}>No users found</p>;
  return (
    <div className={styles.grid}>
      {users.map((user) => {
        return (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className={styles.link}
          >
            <div className={styles.card}>
              <img src={user.image} alt={user.firstName} />
              <div>
                <h3>{user.firstName + " " + user.lastName}</h3>
                <p className={styles.email}>{user.email}</p>
                <p className={styles.company}>{user.company.name}</p>
                <p className={styles.city}>{user.address.city}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

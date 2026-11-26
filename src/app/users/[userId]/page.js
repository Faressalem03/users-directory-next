import styles from "./page.module.css";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { userId } = await params;
  const response = await fetch(`https://dummyjson.com/users/${userId}`);
  const user = await response.json();
  return { title: `${user.firstName} ${user.lastName} ` };
}

export default async function UserDetails({params}) {
  const {userId} = await params;
  const res = await fetch(`https://dummyjson.com/users/${userId}`);
  const user = await res.json();
  return (
    <div className={styles.page}>
      <Link href="/" className={styles.back}>
        ← Back to all users
      </Link>

      <div className={styles.card}>
        <div className={styles.header}>
          <img src={user.image} alt={user.firstName} className={styles.photo} />
          <div>
            <h1 className={styles.name}>
              {user.firstName} {user.lastName}
            </h1>
            <p className={styles.role}>
              {user.company.title} at {user.company.name}
            </p>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.row}>
            <span className={styles.label}>Email</span>
            <span>{user.email}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Phone</span>
            <span>{user.phone}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Age</span>
            <span>{user.age}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Department</span>
            <span>{user.company.department}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>University</span>
            <span>{user.university}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Address</span>
            <span>
              {user.address.address}, {user.address.city}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


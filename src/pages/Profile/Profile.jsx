import styles from "./Profile.module.css";

export default function Profile() {
  // Sample user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    tasksCompleted: 15,
    rating: "4.8/5",
  };

  return (
    <div className={styles.profile}>
      <h1>Your Profile</h1>
      <div className={styles.profileInfo}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Tasks Completed:</strong> {user.tasksCompleted}</p>
        <p><strong>Rating:</strong> {user.rating}</p>
      </div>
    </div>
  );
}
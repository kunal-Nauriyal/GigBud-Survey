import styles from "./TaskListings.module.css";

export default function TaskListings() {
  // Sample data for tasks
  const tasks = [
    {
      id: 1,
      title: "Buy Groceries",
      description: "Need someone to buy groceries from XYZ store.",
      price: "$20",
      location: "New York",
    },
    {
      id: 2,
      title: "Clean House",
      description: "Looking for someone to clean a 2BHK apartment.",
      price: "$50",
      location: "Los Angeles",
    },
    {
      id: 3,
      title: "Fix Leaky Faucet",
      description: "Need a plumber to fix a leaky faucet in the kitchen.",
      price: "$30",
      location: "Chicago",
    },
  ];

  return (
    <div className={styles.taskListings}>
      <h1>Available Tasks</h1>
      <div className={styles.taskGrid}>
        {tasks.map((task) => (
          <div key={task.id} className={styles.taskCard}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p><strong>Price:</strong> {task.price}</p>
            <p><strong>Location:</strong> {task.location}</p>
            <a href={`/tasks/${task.id}`}>View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
}
import { useParams } from "react-router-dom";
import styles from "./TaskDetails.module.css";

// Sample data for tasks
const tasks = [
  {
    id: 1,
    title: "Buy Groceries",
    description: "Need someone to buy groceries from XYZ store.",
    price: "$20",
    location: "New York",
    employer: "John Doe",
    deadline: "2023-12-31",
  },
  {
    id: 2,
    title: "Clean House",
    description: "Looking for someone to clean a 2BHK apartment.",
    price: "$50",
    location: "Los Angeles",
    employer: "Jane Smith",
    deadline: "2023-12-25",
  },
  {
    id: 3,
    title: "Fix Leaky Faucet",
    description: "Need a plumber to fix a leaky faucet in the kitchen.",
    price: "$30",
    location: "Chicago",
    employer: "Mike Johnson",
    deadline: "2023-12-20",
  },
];

export default function TaskDetails() {
  const { id } = useParams(); // Get the task ID from the URL
  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return <div>Task not found!</div>;
  }

  return (
    <div className={styles.taskDetails}>
      <h1>{task.title}</h1>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Price:</strong> {task.price}</p>
      <p><strong>Location:</strong> {task.location}</p>
      <p><strong>Employer:</strong> {task.employer}</p>
      <p><strong>Deadline:</strong> {task.deadline}</p>
      <button>Apply for Task</button>
    </div>
  );
}
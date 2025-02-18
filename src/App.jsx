import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AuthProvider} from "./context/AuthContext"; // Import AuthProvider for global state

// Import Components
import AboutSection from "./Components/AboutSection/AboutSection"; // Corrected import path
import PopularTasks from "./Components/PopularTasks/PopularTasks"; // Corrected import path
import Footer from "./Components/Footer/Footer";
import FormSection from "./Components/Form/FormSection"; // Import FormSection

// Import Pages
import Home from "./pages/Home/Home";
import TaskListings from "./pages/TaskListings/TaskListings";
import TaskDetails from "./pages/TaskDetailss/TaskDetails"; // Corrected typo in folder name
import Services from "./pages/Services/Services";
import Profile from "./pages/Profile/Profile";
import HowItWorks from "./pages/HowItWorks/HowItWorks";

function App() {
  return (
    <div>
      <AuthProvider> {/* Wrap the app with AuthProvider for global state */}
        <Router>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Task Listings Page */}
            <Route path="/tasks" element={<TaskListings />} />

            {/* Task Details Page */}
            <Route path="/tasks/:id" element={<TaskDetails />} />

            {/* Services Page */}
            <Route path="/services" element={<Services />} />

            {/* Profile Page */}
            <Route path="/profile" element={<Profile />} />

            {/* How It Works Page */}
            <Route path="/how-it-works" element={<HowItWorks />} />

           
          
          </Routes>
        </Router>
      </AuthProvider>

      {/* Common Components */}
      <AboutSection />
      <PopularTasks />
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;
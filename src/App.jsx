import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/Jobpage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

function App() {
  const addJobSubmit = async (add) => {
    const res = await fetch("https://react-project-api.onrender.com/job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(add),
    });
    return;
  };
  const deleteJob = async (id) => {
    const res = await fetch(`https://react-project-api.onrender.com/job/${id}`, {
      method: "DELETE",
    });
    return;
  };
  const updateJobSubmit = async (update, id) => {
    const res = await fetch(`https://react-project-api.onrender.com/job/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    });
    return;
  };
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/job" element={<JobsPage />} />
        <Route
          path="/add-job"
          element={<AddJobPage addJobSubmit={addJobSubmit} />}
        />
        <Route
          path="/job/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/job/edit/:id"
          element={<EditJobPage updateJobSubmit={updateJobSubmit} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

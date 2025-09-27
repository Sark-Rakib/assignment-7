import React, { use } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgImage from "../../../assets/vector1.png";
import bgImage2 from "../../../assets/vector2.png";

const Banner = ({ customerPromise }) => {
  const initialData = use(customerPromise);

  const [customerData, setCustomerData] = useState(initialData);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  // Task status
  const handleCardClick = (customer) => {
    if (!inProgressTasks.find((t) => t.id === customer.id)) {
      setInProgressTasks([...inProgressTasks, customer]);
      setInProgressCount(inProgressCount + 1);

      const updatedCustomerData = customerData.filter(
        (t) => t.id !== customer.id
      );
      setCustomerData(updatedCustomerData);
      toast.info("In-Progress", {
        position: "top-right",
      });
    }
  };

  // move task to resolved
  const handleComplete = (taskId) => {
    const task = inProgressTasks.find((t) => t.id === taskId);
    if (!task) return;

    // Remove from In-progress
    const updatedInProgress = inProgressTasks.filter((t) => t.id !== taskId);
    setInProgressTasks(updatedInProgress);
    setInProgressCount(inProgressCount - 1);

    // Add resolved list
    setResolvedTasks([...resolvedTasks, { ...task, status: "Resolved" }]);
    setResolvedCount(resolvedCount + 1);

    // Remove from customer rickets list
    const updatedCustomerData = customerData.filter((t) => t.id !== taskId);
    setCustomerData(updatedCustomerData);

    toast.success("Task Completed", {
      position: "top-right",
    });
  };

  return (
    <>
      <div className="bg-[#d4d4d9] max-w-[1280px] mx-auto p-6">
        {/* Banner */}
        <div className="relative max-w-[1280px] mx-auto text-center p-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[200px]">
          {/* In-Progress */}
          <div className="relative rounded-lg p-6 text-white shadow-md overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-purple-500/80 to-purple-400/80"></div>
            <div
              className="absolute top-0 left-0 right-0 bottom-0 bg-cover"
              style={{
                backgroundImage: `url(${bgImage}),  url(${bgImage2})`,
                backgroundPosition: "left center, right center",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "200px, 200px",
              }}
            ></div>
            <div className="relative z-10">
              <div className="text-sm text-center">In-Progress</div>
              <div className="text-4xl font-bold mt-2">{inProgressCount}</div>
            </div>
          </div>

          {/* Resolved */}
          <div className="relative rounded-lg p-6 text-white shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/80 to-teal-500/80"></div>
            <div
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage: `url(${bgImage}),url(${bgImage2})`,
                backgroundPosition: "left center, right center",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "200px, 200px",
              }}
            ></div>
            <div className="relative z-10">
              <div className="text-sm text-center">Resolved</div>
              <div className="text-4xl font-bold mt-2">{resolvedCount}</div>
            </div>
          </div>
        </div>

        {/* Tickets Section */}
        <h1 className="p-6 font-bold text-[#34485A]">Customer Ticket</h1>
        <div className="max-w-[1280px] mx-auto mt-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left column - Customer Tickets */}
          <div className="sm:grid-cols-2 gap-4 md:col-span-2 grid grid-cols-1">
            {customerData.map((customer) => (
              <div
                key={customer.id}
                className="p-4 cursor-pointer"
                onClick={() => handleCardClick(customer)}
              >
                <div className="card bg-base-100 shadow-sm w-full">
                  <div className="card-body flex flex-col justify-between h-full">
                    <div className="flex justify-between items-center">
                      <h2 className="card-title">{customer.title}</h2>
                      <h1
                        className={
                          customer.status === "Open"
                            ? "bg-[#B9F8CF] rounded-full px-5 py-1 text-[#0B5E06] font-bold flex items-center"
                            : "bg-[#F8F3B9] rounded-full px-3 py-1 text-[#9C7700] font-bold"
                        }
                      >
                        {customer.status}
                      </h1>
                    </div>

                    <p className="mt-2 text-gray-600">{customer.description}</p>

                    <div className="flex justify-arround items-center md:flex-row justify-between mt-4 text-sm">
                      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                        <span className="text-[#627382]">{customer.id}</span>
                        <span
                          className={
                            customer.priority === "HIGH"
                              ? "text-[#F83044]"
                              : customer.priority === "MEDIUM"
                              ? "text-[#FEBB0C]"
                              : "text-[#02A53B]"
                          }
                        >
                          {customer.priority}
                        </span>
                      </div>

                      <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-2 md:mt-0">
                        <span className="text-[#627382]">
                          {customer.customer}
                        </span>
                        <span className="text-[#627382]">
                          {customer.createdAt}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div>
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Task Status</h2>
              {inProgressTasks.length === 0 && (
                <p className="text-[#627382]">
                  Select a ticket to add to Task Status
                </p>
              )}
              <div className="space-y-2">
                {inProgressTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex justify-between items-center bg-[#E0E7FF] p-2 rounded shadow"
                  >
                    <span className="font-semibold">{task.title}</span>
                    <button
                      className="bg-[#02A53B] text-white px-3 py-1 rounded hover:bg-green-400"
                      onClick={() => handleComplete(task.id)}
                    >
                      Complete
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Resolved List */}
            <div className=" rounded-lg  mt-6">
              <h2 className="text-xl font-bold mb-4">Resolved Tasks</h2>
              {resolvedTasks.length === 0 && (
                <p className="text-[#627382]">No resolved tasks yet</p>
              )}
              <div className="space-y-2">
                {resolvedTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex justify-between items-center bg-[#E0E7FF] p-2 rounded shadow"
                  >
                    <span className="font-semibold p-2">{task.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Banner;

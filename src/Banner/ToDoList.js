import React, { useState } from "react";
import { useQuery } from "react-query";

const ToDoList = () => {
  const [line, setLine] = useState(false);
  const {
    data: ToDo,
    isLoading,
    error,
    refetch,
  } = useQuery("repoData", () =>
    fetch("http://localhost:5000/allToDo").then((res) => res.json())
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleComplete = (id) => {
    refetch();
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/allToDo/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {console.log(data)
    refetch()});
  };

  console.log(ToDo);
  return (
    <div>
      <h4 className="text-center text-xl font-bold text-green-700 m-2">
        You have {ToDo.length} task
      </h4>
      <div class="overflow-x-auto">
        <table class="table mx-auto w-[95%] px-20">
          <thead>
            <tr>
              <th></th>
              <th>Task list</th>
              <th>Have you complete?</th>
              <th>Want to delete?</th>
            </tr>
          </thead>
          {ToDo.map((t) => (
            <tbody key={t._id}>
              <tr>
                <th>1</th>
                <td
                  style={{
                    textDecoration: line ? "line-through" : "underline",
                  }}
                >
                  {t.TaskName}
                </td>
                <td>
                  <button
                    onClick={() => handleComplete(t._id)}
                    className="btn bg-gradient-to-r from-cyan-500 to-green-700 border-0 mx-2"
                    type="button"
                  >
                    Complete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(t._id)}
                    className="btn bg-gradient-to-r from-red-500 to-orange-700 border-0 mx-2 btn-error font-bold"
                    type=""
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ToDoList;

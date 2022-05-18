import { useForm } from "react-hook-form";
import React, { useState } from "react";
import ToDoList from "./ToDoList";
import { useQuery } from "react-query";

const BannerSection = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
const [dataList,setDataList] = useState([]);

  const onSubmit = (toDo) => {
      setDataList(toDo)
    fetch("http://localhost:5000/allTodo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toDo),
    }).then((res) => {
        console.log(res);
       return res.json()
    });
  };

  return (
    <div class="card bg-base-100 lg:w-[60%] mx-auto shadow-xl">
      <h2 className="mt-10 text-center text-2xl font-bold uppercase">
        My To Do
      </h2>
      <div class="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("TaskName", { required: true })}
            type="text"
            placeholder="Task Name"
            class="input mb-3 border-accent mr-2 w-full max-w-full"
          />
          <p className="text-red-500">
            {" "}
            {errors.TaskName?.type === "required" && "Task name is required"}
          </p>
          {/* --------------description------------ */}
          <textarea
            {...register("description", { required: true })}
            type="text"
            placeholder="Type here"
            class="textarea my-3 textarea-accent mr-2 w-full max-w-full"
          />
          <p className="text-red-500">
            {errors.description && "Last name is required"}
          </p>
          <input
            type="submit"
            className="btn btn-accent mx-auto w-full"
            value={"Add To Do"}
          />
        </form>
      </div>
      <ToDoList></ToDoList>
    </div>
  );
};

export default BannerSection;

"use client";

import { useEffect, useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
  priority: string;
  deadline: string | null;
};

const API_URL = "https://task-manager-api-dm3j.onrender.com";

export default function TaskManagerPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");

  async function fetchTasks() {
    const response = await fetch(`${API_URL}/tasks`);
    const data = await response.json();
    setTasks(data);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function createTask() {
    if (title.trim() === "") {
      return;
    }

    await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        priority: priority,
        deadline: deadline || null,
      }),
    });

    setTitle("");
    setPriority("Medium");
    setDeadline("");
    fetchTasks();
  }

  async function markCompleted(task: Task) {
    await fetch(`${API_URL}/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: task.title,
        completed: true,
        priority: task.priority,
        deadline: task.deadline,
      }),
    });

    fetchTasks();
  }

  async function deleteTask(taskId: number) {
    await fetch(`${API_URL}/tasks/${taskId}`, {
      method: "DELETE",
    });

    fetchTasks();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Full-Stack Project
        </p>

        <h1 className="mb-6 text-5xl font-bold">Task Manager</h1>

        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          This project connects a Next.js frontend with a FastAPI backend,
          Render deployment, and Neon PostgreSQL database.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Add New Task</h2>

          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="Enter task title"
            />

            <select
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <input
              type="date"
              value={deadline}
              onChange={(event) => setDeadline(event.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />

            <button
              onClick={createTask}
              className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Add Task
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Tasks</h2>

          {tasks.length === 0 ? (
            <p className="text-slate-400">No tasks found.</p>
          ) : (
            <ul className="space-y-3">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="rounded-xl border border-slate-700 bg-slate-950 p-4"
                >
                  <p className="font-semibold">{task.title}</p>

                  <p className="mt-1 text-sm text-slate-400">
                    Status: {task.completed ? "Completed" : "Pending"}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Priority: {task.priority}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Deadline: {task.deadline ? task.deadline : "No deadline"}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3">
                    {!task.completed && (
                      <button
                        onClick={() => markCompleted(task)}
                        className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                      >
                        Mark Completed
                      </button>
                    )}

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="rounded-lg border border-red-700 px-4 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-950"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
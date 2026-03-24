import React, { useEffect, useState, useMemo } from "react";
import { getTasks } from "../services/taskService";
import { usePageAction } from "../context/PageActionContext";
import Modal from "../components/common/Modal";
import TaskForm from "../components/tasks/TaskForm";

function TaskLists() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Global Action Registration
    const { setAction } = usePageAction();

    // Filter & Search & Pagination States
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [sortConfig, setSortConfig] = useState({ key: "title", direction: "asc" });
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    useEffect(() => {
        // Register the "Open Modal" action to the Global Layout Button
        setAction(() => () => setIsModalOpen(true));

        // Cleanup on unmount
        return () => setAction(null);
    }, [setAction]);

    useEffect(() => {
        const fetchTasks = async () => {
            setLoading(true);
            try {
                const response = await getTasks();
                if (response.data.success) {
                    setTasks(response.data.data || []);
                } else {
                    setError(response.data.message || "Failed to load tasks");
                }
            }
            catch (err) {
                console.error("Failed to fetch tasks", err);
                setError("Network error: check if API is running.");
            } finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, []);

    const handleCreateTask = (newTaskData) => {
        // Logic to send to API will go here
        console.log("Creating new task:", newTaskData);
        alert(`Task "${newTaskData.title}" created locally! (Connecting to API next...)`);
        
        // Temporarily add to local state to show it works
        const newTask = {
            ...newTaskData,
            id: Math.random() // Temp ID
        };
        setTasks(prev => [newTask, ...prev]);
        setIsModalOpen(false);
    };

    // ── Client-side Logic (Filtering, Sorting, Pagination) ─────────
    const filteredTasks = useMemo(() => {
        return tasks.filter(task => {
            const matchesSearch = task.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                task.description?.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === "all" || task.status.toString() === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [tasks, searchTerm, statusFilter]);

    const sortedTasks = useMemo(() => {
        return [...filteredTasks].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === "asc" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === "asc" ? 1 : -1;
            }
            return 0;
        });
    }, [filteredTasks, sortConfig]);

    const paginatedTasks = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        return sortedTasks.slice(startIndex, startIndex + pageSize);
    }, [sortedTasks, currentPage]);

    const totalPages = Math.ceil(sortedTasks.length / pageSize);

    const requestSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case 0: return <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-full uppercase tracking-wider">To Do</span>;
            case 1: return <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">In Progress</span>;
            case 2: return <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full uppercase tracking-wider">Completed</span>;
            default: return status;
        }
    };

    if (loading) return <div className="p-8"><h2>Loading tasks...</h2></div>;
    if (error) return <div className="p-8"><h2 className="text-red-500 font-bold">Error: {error}</h2></div>;

    return (
        <div className="flex flex-col gap-6">
            
            {/* Controls Section */}
            <div className="flex flex-wrap items-center gap-4 bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-gray-100 shadow-sm">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                    className="flex-1 min-w-[200px] px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                />

                <select
                    value={statusFilter}
                    onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                    className="px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none bg-white font-medium"
                >
                    <option value="all">All Statuses</option>
                    <option value="0">To Do</option>
                    <option value="1">In Progress</option>
                    <option value="2">Completed</option>
                </select>

                <div className="text-sm font-medium text-gray-500">
                    Total: <span className="text-gray-900">{sortedTasks.length}</span> {sortedTasks.length === 1 ? 'task' : 'tasks'}
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50/50">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => requestSort("title")}>
                                Task {sortConfig.key === "title" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                            </th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => requestSort("status")}>
                                Status {sortConfig.key === "status" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                            </th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => requestSort("priority")}>
                                Priority {sortConfig.key === "priority" ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
                            </th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Due Date</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {paginatedTasks.length > 0 ? (
                            paginatedTasks.map((task) => (
                                <tr key={task.id} className="hover:bg-gray-50/80 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-800">{task.title}</div>
                                        <div className="text-xs text-gray-400 mt-0.5 max-w-xs truncate">
                                            {task.description}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{getStatusLabel(task.status)}</td>
                                    <td className="px-6 py-4">
                                        {task.priority === 1 ? (
                                            <span className="flex items-center gap-1.5 text-rose-600 font-bold text-sm">
                                                <span className="text-lg">🔥</span> High
                                            </span>
                                        ) : (
                                            <span className="text-gray-500 font-medium text-sm">Normal</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                                        {task.dueDate ? new Date(task.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : "No Date"}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="px-4 py-1.5 text-sm font-bold text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-600 hover:text-white transition-all">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-20 text-center text-gray-400 font-medium">
                                    No tasks found matching your criteria.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-2">
                    <button
                        className="p-2 w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 hover:text-indigo-600 hover:border-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => p - 1)}
                    >
                        ←
                    </button>
                    <div className="flex gap-1.5 mx-2">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                className={`w-10 h-10 flex items-center justify-center rounded-xl border font-bold text-sm transition-all shadow-sm
                                    ${currentPage === i + 1 
                                        ? "bg-indigo-600 border-indigo-600 text-white" 
                                        : "bg-white border-gray-200 text-gray-600 hover:border-indigo-400"
                                    }`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                    <button
                        className="p-2 w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 hover:text-indigo-600 hover:border-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => p + 1)}
                    >
                        →
                    </button>
                </div>
            )}

            {/* Modal for Creating Task */}
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                title="Add New Task"
            >
                <TaskForm 
                    onSubmit={handleCreateTask} 
                    onCancel={() => setIsModalOpen(false)} 
                />
            </Modal>
        </div>
    );
}

export default TaskLists;
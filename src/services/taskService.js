import api from "./api";

// Real API Integration - Connected to .NET Backend
export const getTasks = async () => {
    // Standard response structure from your ApiResponse<T> wrapper
    return await api.get("/tasks");
};

export const createTask = async (taskData) => {
    // Standard POST to CreateTaskItemDto
    return await api.post("/tasks", taskData);
};

export const updateTask = async (id, taskData) => {
    return await api.put(`/tasks/${id}`, taskData);
};

export const deleteTask = async (id) => {
    return await api.delete(`/tasks/${id}`);
};

export const getTaskById = async (id) => {
    return await api.get(`/tasks/${id}`);
};
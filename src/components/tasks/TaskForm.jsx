import React, { useState } from 'react';

export default function TaskForm({ onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 0, // To Do default
        priority: 0, // Normal default
        dueDate: new Date().toISOString().split('T')[0]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'status' || name === 'priority' ? parseInt(value) : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Task Title</label>
                <input 
                    type="text" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    required 
                    placeholder="What needs to be done?"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                />
            </div>

            <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
                <textarea 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    rows="3"
                    placeholder="Add details..."
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Status</label>
                    <select 
                        name="status" 
                        value={formData.status} 
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    >
                        <option value={0}>To Do</option>
                        <option value={1}>In Progress</option>
                        <option value={2}>Completed</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Priority</label>
                    <select 
                        name="priority" 
                        value={formData.priority} 
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                    >
                        <option value={0}>Normal</option>
                        <option value={1}>High</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Due Date</label>
                <input 
                    type="date" 
                    name="dueDate" 
                    value={formData.dueDate} 
                    onChange={handleChange} 
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                />
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-50 mt-6">
                <button 
                    type="button" 
                    onClick={onCancel}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all"
                >
                    Cancel
                </button>
                <button 
                    type="submit"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all"
                >
                    Create Task
                </button>
            </div>
        </form>
    );
}

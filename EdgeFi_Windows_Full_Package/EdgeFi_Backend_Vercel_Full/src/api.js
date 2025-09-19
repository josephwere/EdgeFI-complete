// src/api.js

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPackages() {
  try {
    const response = await fetch(${API_URL}/api/packages);
    if (!response.ok) {
      throw new Error(HTTP error! status: ${response.status});
    }
    const data = await response.json();
    return data; // Array of packages
  } catch (error) {
    console.error("Error fetching packages:", error);
    return []; // Return empty array on error
  }
}

export async function fetchUsers() {
  try {
    const response = await fetch(${API_URL}/api/users);
    if (!response.ok) {
      throw new Error(HTTP error! status: ${response.status});
    }
    const data = await response.json();
    return data; // Array of users
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

// Add more backend calls here as needed

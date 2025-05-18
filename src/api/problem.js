import httpClient from "./httpClient";

export async function getProblems() {
    const res = await httpClient.get("/problem");
    if (!res) {
        throw new Error("Failed to fetch problems");
    }
    return res;
}

export async function createProblem(data) {
    const res = await httpClient.post("/problem/create", data);
    if (!res) {
        throw new Error("Failed to create problem");
    }
    return res;
}
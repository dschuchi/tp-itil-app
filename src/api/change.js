import httpClient from "./httpClient";

export async function getChanges() {
    const res = await httpClient.get("/change");
    if (!res) {
        throw new Error("Failed to fetch changes");
    }
    return res;
}

export async function createChange(data) {
    const res = await httpClient.post("/change/create", data);
    if (!res) {
        throw new Error("Failed to create change");
    }
    return res;
}
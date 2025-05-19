import httpClient from "./httpClient";

export async function getIncidents() {
    const res = await httpClient.get("/incident");
    if (!res) {
        throw new Error("Failed to fetch incidents");
    }
    return res;
}

export async function createIncident(data) {
    const res = await httpClient.post("/incident/create", data);
    if (!res) {
        throw new Error("Failed to create incident");
    }
    return res;
}
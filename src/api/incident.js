import httpClient from "./httpClient";

export async function getIncidents() {
    const res = await httpClient.get("/incident/getincidents");
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

export async function getIncident(id) {
    const res = await httpClient.get(`/incident/${id}`);
    if (!res) {
        throw new Error("Failed to fetch incident");
    }
    return res;
}

export async function updateIncident(id, data) {
    const res = await httpClient.patch(`/incident/${id}`, data);
    if (!res) {
        throw new Error("Failed to patch incident");
    }
    return res;
}

export async function getIncidentComments(idIncident) {
    const res = await httpClient.get(`/incident/${idIncident}/comments`);
    if (!res) {
        throw new Error("Failed to fetch incident comments");
    }
    return res;
}

export async function postIncidentComment(idIncident, comment) {
    const res = await httpClient.post(`/incident/${idIncident}/comments`, comment);
    if (!res) {
        throw new Error("Failed to post incident comments");
    }
    return res;
}

export async function deleteIncident(idIncident) {
const res = await httpClient.delete(`/incident/${idIncident}`);
    if (!res) {
        throw new Error("Failed to delete incident");
    }
    return res;
}
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

export async function getChange(id) {
    const res = await httpClient.get(`/change/${id}`);
    if (!res) {
        throw new Error("Failed to fetch change");
    }
    return res;
}

export async function updateChange(id, data) {
    const res = await httpClient.patch(`/change/${id}`, data);
    if (!res) {
        throw new Error("Failed to update change");
    }
    return res;
}

export async function deleteChange(idChange) {
    const res = await httpClient.delete(`/change/${idChange}?changeId=${idChange}`);
    if (!res) {
        throw new Error("Failed to delete change");
    }
    return res;
}

export async function getChangeComments(idChange) {
    const res = await httpClient.get(`/change/${idChange}/comment`);
    if (!res) {
        throw new Error("Failed to fetch change comments");
    }
    return res;
}

export async function postChangeComment(idChange, comment) {
    const res = await httpClient.post(`/change/${idChange}/comment?comment=${comment}`);
    if (!res) {
        throw new Error("Failed to post change comments");
    }
    return res;
}

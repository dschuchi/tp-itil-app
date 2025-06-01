import httpClient from "./httpClient";

export async function getConfigItems() {
    const res = await httpClient.get("/configuration/items");
    if (!res) {
        throw new Error("Failed to fetch incidents");
    }
    return res;
}

export async function createConfigItem(data) {
    const res = await httpClient.post("/configuration/create", data);
    if (!res) {
        throw new Error("Failed to create configuration item");
    }
    return res;
}

export async function getConfigItem(id) {
    const res = await httpClient.get(`/configuration/item/${id}`);
    if (!res) {
        throw new Error("Failed to fetch config item");
    }
    return res;
}

export async function deleteConfigItem(id) {
    const res = await httpClient.delete(`/configuration/item/${id}`);
    if (!res) {
        throw new Error("Failed to delete config item");
    }
    return res;
}

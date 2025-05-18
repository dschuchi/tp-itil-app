import httpClient from "./httpClient";

export async function getConfigItems() {
    const res = await httpClient.get("/configuration/items");
    if (!res) {
        throw new Error("Failed to fetch incidents");
    }
    return res;
}
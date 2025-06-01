import httpClient from "./httpClient";

export async function getIncidentsMetrics() {
    const res = await httpClient.get("/metrics/incidents");
    if (!res) {
        throw new Error("Failed to fetch incidents metrics");
    }
    return res;
}

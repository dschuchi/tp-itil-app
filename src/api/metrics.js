import httpClient from "./httpClient";

export async function getIncidentsMetrics(days) {
    const res = await httpClient.get(`/metrics/incidents/${days}`);
    if (!res) {
        throw new Error("Failed to fetch incidents metrics");
    }
    return res;
}

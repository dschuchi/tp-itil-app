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

export async function getProblem(id) {
    const res = await httpClient.get(`/problem/${id}`);
    if (!res) {
        throw new Error("Failed to fetch problem");
    }
    return res;
}

export async function getProblemComments(idProblem) {
    const res = await httpClient.get(`/problem/${idProblem}/comments`);
    if (!res) {
        throw new Error("Failed to fetch problem comments");
    }
    return res;
}

export async function postProblemComment(idProblem, comment) {
    const res = await httpClient.post(`/problem/${idProblem}/comments`, comment);
    if (!res) {
        throw new Error("Failed to post problem comments");
    }
    return res;
}
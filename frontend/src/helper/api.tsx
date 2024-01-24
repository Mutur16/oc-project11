const apiRoute = "http://localhost:3001/api";

export async function login(email: string, password: string): Promise<LoginResponse | ErrorResponse> {
    const response = await fetch(`${apiRoute}/v1/user/login`, {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: { "Content-Type": "application/json" }
    });

    return await response.json()
}

export async function getUserData(token : string) {
    const response = await fetch(`${apiRoute}/v1/user/profile`, {
        method: "POST",
        headers: { "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` }
    });

    return await response.json()
}

type LoginResponse = {
    status: 200,
    message: string,
    body: LoginToken,
}

type LoginToken = {
    token: string
}

type ErrorResponse = {
    status: 400,
    message: string,
}

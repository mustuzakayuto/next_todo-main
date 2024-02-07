import { Todo } from "../models/Todo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getTodos = async () => {
    //TODO: API URL設定
    const url = API_URL + "todo/get";
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error)
    }
}

export const postTodos = async (todos: Todo[]) => {
    if (!todos) return;
    //TODO: API URL設定
    const url = API_URL + "todo/add";
    const data = JSON.stringify(todos);
    //TODO: APIで保存し、データを返す
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        });

        if (response.ok) {
            // 保存が成功した場合、APIからの応答を返す
            return await response.json();
        } else {
            // 保存が失敗した場合、エラーレスポンスを処理する
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error('Failed to save data to the API');
        }
    } catch (error) {
        console.error('Error during API request:', error);
        throw new Error('Failed to communicate with the API');
    }
}

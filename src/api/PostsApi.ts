import { IPost, Posts } from "../models";
import { BASE_URL, defaultConfig } from "./config";

export const getPosts = async (): Promise<Posts> => {
	const url = `${BASE_URL}/posts`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

export const getPost = async (postId: string): Promise<IPost> => {
	const url = `${BASE_URL}/posts/${postId}`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

export const updatePost = async (body: IPost): Promise<IPost> => {
	const url = `${BASE_URL}/posts/${body.id}`;
	const config = {
		...defaultConfig,
		method: "PUT",
		body: JSON.stringify(body),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export const patchPost = async (body: IPost): Promise<IPost> => {
	const url = `${BASE_URL}/posts/${body.id}`;
	const config = {
		...defaultConfig,
		method: "PATCH",
		body: JSON.stringify(body),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export const deletePost = async (postId: string): Promise<void> => {
	const url = `${BASE_URL}/posts/${postId}`;
	const config = {
		...defaultConfig,
		method: "DELETE",
	};
	const response = await fetch(url, config);
	await response.json();
};

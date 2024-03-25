import { appFetch, fetchConfig } from "./appFetch";

export const getPosts = (state, onSuccess, onErrors) => {
	appFetch(
		`/posts/?page=${state.page}&size=${state.size}`,
		fetchConfig("GET"),
		onSuccess,
		onErrors,
	);
};

export const postPosts = (post, onSuccess, onErrors) => {
	appFetch(`/posts/`, fetchConfig("POST", post), onSuccess, onErrors);
};

export const deletePost = (postId, onSuccess, onErrors) => {
	appFetch(`/posts/${postId}`, fetchConfig("DELETE"), onSuccess, onErrors);
};

export const editPost = (postId, post, onSuccess, onErrors) => {
	appFetch(`/posts/${postId}`, fetchConfig("PUT", post), onSuccess, onErrors);
};

export const getNRates = (postId, onSuccess, onErrors) => {
	appFetch(
		`/posts/nrates/${postId}`,
		fetchConfig("GET"),
		(countedRates) => {
			onSuccess(countedRates);
		},
		onErrors,
	);
};

export const getDidUserVote = (postId, onSuccess, onErrors) => {
	appFetch(
		`/posts/userrates/${postId}`,
		fetchConfig("GET"),
		(vote) => {
			onSuccess(vote);
		},
		onErrors,
	);
};

export const ratePost = (postId, rate, onSuccess, onErrors) => {
	appFetch(
		`/posts/${postId}/like/${rate}`,
		fetchConfig("POST"),
		onSuccess,
		onErrors,
	);
};

export const stillValid = (postId) => {
	appFetch(
		`/posts/${postId}/stillvalid`,
		fetchConfig("PATCH"),
	);	
};

export const createComment = (postId, comment, onSuccess, onErrors) => {
	appFetch(
		`/posts/${postId}/comment`,
		fetchConfig("POST", comment),
		onSuccess,
		onErrors,
	);
};

export const replyComment = (
	postId,
	comment,
	parentId,
	onSuccess,
	onErrors,
) => {
	appFetch(
		`/posts/${postId}/comment/${parentId}/reply`,
		fetchConfig("POST", comment),
		onSuccess,
		onErrors,
	);
};

export const deletePostComment = (postId, commentId, onSuccess, onErrors) => {
	appFetch(
		`/posts/${postId}/comment/${commentId}`,
		fetchConfig("DELETE"),
		onSuccess,
		onErrors,
	);
};

export const getPostComments = (postId, onSuccess, onErrors) => {
	appFetch(
		`/posts/${postId}/comments`,
		fetchConfig("GET"),
		(comments) => {
			onSuccess(comments);
		},
		onErrors,
	);
};

export const followPost = (postId, onSuccess, onErrors) => {
	appFetch(
		`/posts/${postId}/follow`,
		fetchConfig("POST"),
		onSuccess,
		onErrors,
	);
};

export const getPostFollows = (postId, onSuccess, onErrors) => {
	appFetch(
		`/posts/${postId}/follows`,
		fetchConfig("GET"),
		onSuccess,
		onErrors,
	);
};

export const deleteFollow = (postId, followId, onSuccess, onErrors) => {
	appFetch(
		`/posts/${postId}/follow/${followId}`,
		fetchConfig("DELETE"),
		onSuccess,
		onErrors,
	);
};

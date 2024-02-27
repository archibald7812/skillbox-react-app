import PostsList from "../../components/PostsList/PostsList";
import styles from "./styles.module.scss";
import { FC } from "react";

const PostsPage: FC = () => {
	return (
		<div className={styles.root}>
			<h1>Posts</h1>
			<PostsList />
		</div>
	);
};

export default PostsPage;

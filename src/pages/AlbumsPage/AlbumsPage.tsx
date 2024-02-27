import AlbumsList from "../../components/AlbumsList/AlbumsList";
import styles from "./styles.module.scss";
import { FC } from "react";

const AlbumsPage: FC = () => {
	return (
		<div className={styles.root}>
			<h1>Albums</h1>
			<AlbumsList />
		</div>
	);
};

export default AlbumsPage;

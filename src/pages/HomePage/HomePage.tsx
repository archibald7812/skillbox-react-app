import styles from "./styles.module.scss";
import { FC } from "react";

export const HomePage: FC = () => {
	return (
		<div className={styles.root}>
			<h1>Home</h1>
			<p>
				Эта практическое задание поможет вам применить свои знания по
				оптимизации загрузки страницы
			</p>
		</div>
	);
};

export default HomePage;

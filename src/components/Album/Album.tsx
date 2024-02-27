import { FC, useCallback, useEffect, useState } from "react";
import { Photos } from "../../models";
import Api from "../../api/api";
import styles from "./index.module.scss";

type Props = {
	albumId: number;
};

const Album: FC<Props> = ({ albumId }: Props) => {
	const [data, setData] = useState<Photos>([]);

	const getData = useCallback(async (): Promise<void> => {
		const data = await Api.getPhotos(albumId);
		setData(data);
	}, [albumId]);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<div className={styles.root}>
			{data.map((photo) => (
				<div className={styles.container}>
					<img src={photo.url} className={styles.img} />
				</div>
			))}
		</div>
	);
};

export default Album;

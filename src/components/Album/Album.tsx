import { Carousel } from "antd";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { Photos } from "../../models";
import Api from "../../api/api";
import styles from "./index.module.scss";
import { CarouselRef } from "antd/es/carousel";

type Props = {
	albumId: number;
};

const Album: FC<Props> = ({ albumId }: Props) => {
	const [data, setData] = useState<Photos>([]);
	const slider = useRef<CarouselRef>(null);

	const next = () => {
		slider?.current?.next();
	};

	const prev = () => {
		slider?.current?.prev();
	};

	const getData = useCallback(async (): Promise<void> => {
		const data = await Api.getPhotos(albumId);
		setData(data);
	}, [albumId]);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<div className={styles.root}>
			<Carousel dots={false} ref={slider}>
				{data.map((photo) => (
					<div className={styles.container}>
						<img src={photo.url} className={styles.img} />
					</div>
				))}
			</Carousel>
			<div className={styles.navigation}>
				<span className={styles.span} onClick={prev}>
					Prev
				</span>
				<span className={styles.span} onClick={next}>
					Next
				</span>
			</div>
		</div>
	);
};

export default Album;

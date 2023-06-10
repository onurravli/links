import styles from "@/styles/Container.module.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export default function Container({
	title,
	url,
	icon,
}: {
	title: string;
	url: string;
	icon: string;
}) {
	return (
		<Link className={styles.link} href={url} rel={"noopener noreferrer"} target={"_blank"}>
			<div className={styles.container}>
				<Image className={styles.icon} src={icon} alt={title} width={200} height={200} />
				<div className={styles.title}>
					<p style={montserrat.style}>{title}</p>
				</div>
			</div>
		</Link>
	);
}

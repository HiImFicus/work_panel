import {
	Code,
	createStyles,
	Group,
	Navbar,
	ScrollArea,
	Text,
} from "@mantine/core";
import { IconListDetails } from "@tabler/icons-react";

import { LinksGroup } from "./NavbarLinksGroup";

const useStyles = createStyles((theme) => ({
	navbar: {
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
		paddingBottom: 0,
	},

	header: {
		padding: theme.spacing.md,
		marginLeft: -theme.spacing.md,
		marginRight: -theme.spacing.md,
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		borderBottom: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
		backgroundImage: `linear-gradient(-60deg, ${
			theme.colors[theme.primaryColor][4]
		} 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
	},

	text: {
		color: theme.white,
	},

	version: {
		backgroundColor: theme.primaryColor,
		color: theme.white,
		fontWeight: 700,
	},

	links: {
		marginLeft: -theme.spacing.md,
		marginRight: -theme.spacing.md,
	},

	linksInner: {
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
	},

	footer: {
		padding: theme.spacing.md,
		marginLeft: -theme.spacing.md,
		marginRight: -theme.spacing.md,
		borderTop: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
		backgroundImage: `linear-gradient(-60deg, ${
			theme.colors[theme.primaryColor][4]
		} 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
	},
}));

interface NavbarNestedProps {
	linksData?: {
		label: string;
		icon: React.FC<any>;
		links: { label: string; link: string }[];
		initiallyOpened: boolean;
	}[];
	version: string;
}

export default function NavbarNested({
	linksData,
	version,
}: NavbarNestedProps) {
	const { classes } = useStyles();
	const links = linksData?.map((item) => (
		<LinksGroup {...item} key={item.label} />
	));

	return (
		//todo height useState set
		<Navbar mih="100vh" width={{ sm: 300 }} px="md" className={classes.navbar}>
			<Navbar.Section className={classes.header}>
				<Group position="apart">
					<IconListDetails color="white" />
					<Text className={classes.text}>My Work Panel</Text>
				</Group>
			</Navbar.Section>

			<Navbar.Section grow className={classes.links} component={ScrollArea}>
				<div className={classes.linksInner}>{links}</div>
			</Navbar.Section>

			<Navbar.Section className={classes.footer}>
				<Group position="apart">
					<Code className={classes.version}>{version}</Code>
					<Text className={classes.text}>Powered by Ficus.</Text>
				</Group>
			</Navbar.Section>
		</Navbar>
	);
}

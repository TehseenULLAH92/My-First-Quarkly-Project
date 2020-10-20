import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Box, Image, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="Top Banner" background="url(https://images.unsplash.com/photo-1600239267151-50bbd103b5f0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) center/cover no-repeat fixed,#000000" height="600px" display="flex">
			<Override slot="SectionContent" align-self="auto" display="flex" transition="all --transitionDuration-normal --transitionTimingFunction-easeInOut 5s" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
				quarkly-title="Top Navbar"
			>
				<Box quarkly-title="Left Side Block">
					<Text
						margin="0"
						md-margin="0px 0 20px 0"
						text-align="left"
						font="--lead"
						quarkly-title="Logo Text"
					>
						<Strong>
							<Link
								href="#"
								text-transform="uppercase"
								text-decoration-line="initial"
								font="700 28px/30px --fontFamily-sans"
								letter-spacing="2px"
								color="#ffffff"
							>
								Integrio
							</Link>
						</Strong>
					</Text>
				</Box>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
					quarkly-title="Center Menu Block"
				>
					<Override
						slot="link"
						text-decoration="none"
						color="--light"
						padding="6px 12px"
						font="700 16px/24px --fontFamily-sans"
						text-transform="uppercase"
					/>
					<Override
						slot="link-active"
						color="--light"
						text-decoration-line="underline"
						font="700 16px/24px --fontFamily-sans"
						text-transform="uppercase"
					/>
					<Override slot="item" padding="6px" display="inline-block" color="#ffffff" />
					<Override slot="link-index">
						Home
					</Override>
					<Override slot="link-404">
						Company
					</Override>
				</Menu>
				<Box quarkly-title="Right Side Block" margin="0px 0px 0px 0px" padding="3px 10px 3px 10px">
					<Image
						width="25px"
						height="25px"
						min-width="25px"
						min-height="25px"
						src="https://uploads.quarkly.io/5f8c1c483d84d4001ec3b164/images/shopping-cart1-p-130x130q80.png?v=2020-10-20T09:46:07.646Z"
						quarkly-title="Search"
						margin="0 10px 0"
					/>
					<Image
						width="25px"
						height="25px"
						min-width="25px"
						min-height="25px"
						src="https://uploads.quarkly.io/5f8c1c483d84d4001ec3b164/images/search-3-xxl.png?v=2020-10-20T13:41:34.941Z"
						quarkly-title="Cart"
						margin="0px 10px 0px"
					/>
				</Box>
			</Box>
			<Box
				display="block"
				quarkly-title="Banner Text Section"
				margin="200px 0px 0px 0px"
				align-items="center"
				padding="0 0 0 0"
				flex-direction="row"
				justify-content="start"
				hover-border-radius="3px"
			>
				<Text
					quarkly-title="Heading One"
					color="#ffffff"
					font="normal 18px/1.5 --fontFamily-sans"
					display="inline"
					margin="0 0px 0 0px"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						display="inline"
					>
						We are giving you the best!
					</Strong>
					{"\n\n"}
				</Text>
				<Text
					quarkly-title="IT Products"
					display="block"
					as="h1"
					color="#ffffff"
					font="700 72px sans-serif"
					letter-spacing={0}
					margin="0 0px 0 0px"
				>
					<Strong text-indent="0" margin="0px 0px 0px 0px" font="700 72px/0 sans-serif">
						IT Products{"\n\n"}
					</Strong>
				</Text>
				<Text color="#ffffff" font="18px --fontFamily-sans" margin="0 0px 0 0px" as="h5">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						in the Shortest Time.
					</Strong>
					{"\n\n"}
				</Text>
				<Box quarkly-title="Button Section" margin="15px 0px 0px 0px" padding="0px 0px 0px 0px">
					<Button
						font="normal 500 16px/1.5 --fontFamily-sans"
						margin="10px 0px 0px 0px"
						hover-background="#004f89"
						border-width="1px"
						border-style="none"
						border-color="#e1dfdf"
						border-radius="3px"
						hover-border-radius="3px"
					>
						Learn More
					</Button>
					<Button
						font="normal 500 16px/1.5 --fontFamily-sans"
						margin="10px 0px 0px 15px"
						hover-background="#004f89"
						padding="8px 20px 8px 20px"
						border-width="1px"
						border-radius="3px"
						background="rgba(0, 119, 204, 0)"
						border-color="#a2a2a2"
						border-style="solid"
					>
						Go to Next
					</Button>
				</Box>
			</Box>
		</Section>
		<Section quarkly-title="Services">
			<Box quarkly-title="Main Wrapper" display="grid">
				<Box
					quarkly-title="Item"
					display="block"
					grid-column="1"
					padding="20px"
					text-align="justify"
				>
					<Text quarkly-title="Paragraph" font="16px/1.4 sans-serif">
						<Strong font="normal 700 18px --fontFamily-sans">
							Product{" "}
							<br />
							Engineering
							<br />
						</Strong>
						<br />
						This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.{"\n\n"}
					</Text>
				</Box>
				<Box quarkly-title="Item" grid-column="2" text-align="justify" padding="20px">
					<Text quarkly-title="Paragraph" font="16px/1.4 sans-serif">
						<Strong font="normal 700 18px --fontFamily-sans">
							UI/UX
							<br />
							Strategy
							<br />
						</Strong>
						<br />
						This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.{"\n\n"}
					</Text>
				</Box>
				<Box quarkly-title="Item" grid-column="3" text-align="justify" padding="20px">
					<Text quarkly-title="Paragraph" font="16px/1.4 sans-serif">
						<Strong font="normal 700 18px --fontFamily-sans" text-align="justify">
							Big Data
							<br />
							& Analytics
							<br />
							{" "}
							<br />
						</Strong>
						This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.{"\n\n"}
					</Text>
				</Box>
			</Box>
		</Section>
		<Box quarkly-title="Overlay Block" />
	</Theme>;
});
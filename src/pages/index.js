import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Box, Image } from "@quarkly/widgets";
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
		<Section quarkly-title="Top Banner" background="url(https://images.unsplash.com/photo-1600239267151-50bbd103b5f0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) center/cover no-repeat fixed,#000000" height="600px">
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
		</Section>
	</Theme>;
});
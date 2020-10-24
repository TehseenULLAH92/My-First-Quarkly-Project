import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Box, Image, Button, Em, Span, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, StackItem, Stack, Section } from "@quarkly/components";
import { BsPlus } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="Top Banner Section" background="#000000 url(https://uploads.quarkly.io/5f8c05d441c25f001ec3f0f9/images/home-3-rev-04.png?v=2020-10-21T20:25:50.483Z) 50%/contain no-repeat" height="650px" display="flex">
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
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f8c05d441c25f001ec3f0f9/images/logo_03.png?v=2020-10-23T19:20:27.248Z) 0% 0% /auto repeat scroll padding-box"
					>
						<Strong>
							<Link
								href="#"
								text-transform="uppercase"
								text-decoration-line="initial"
								font="700 28px/30px --fontFamily-sans"
								letter-spacing="2px"
								color="#ffffff"
								padding="5px 0px 5px 0px"
								margin="0px 0px"
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
			<Stack quarkly-title="Banner Two Col" align-self="auto" display="flex">
				{"    "}
				<StackItem width="50%" display="flex" quarkly-title="Item">
					{"        "}
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
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" quarkly-title="Item">
					{"        "}
					<Box quarkly-title="Tag Line" align-self="flex-end" margin="450px 0px 0px 250px">
						<Text font="--lead" margin="0px 0px 0px 0px" display="inline" color="#ffffff">
							- There is only one boss.
							<br />
							the{" "}
							<Em>
								customer
							</Em>
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			quarkly-title="Services Section"
			background="#1C1C1C"
			color="#ffffff"
			padding="24px 0 120px 0"
			border-color="rgba(255, 255, 255, 0)"
		>
			<Stack quarkly-title="Main Wrapper" margin="-16px -16px">
				{"    "}
				<StackItem width="33.33%" display="flex" quarkly-title="Wrapper Item">
					{"        "}
					<Box
						quarkly-title="Item"
						display="block"
						grid-column="1"
						padding="10px"
						text-align="justify"
						margin="0 0px"
					>
						<Text quarkly-title="Title" font="normal 500 36px/1.2 --fontFamily-sans" padding="20px" margin="0 0px">
							Products{" "}
							<br />
							engineering{"\n\n\n\n"}
						</Text>
						<Text
							quarkly-title="Paragraph"
							font="normal 400 16px/1.4 --fontFamily-sans"
							padding="20px"
							margin="0 0px"
							text-align="left"
						>
							This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.{"\n\n"}
						</Text>
						<Text
							quarkly-title="Sub Heading"
							font="normal 400 18px/1.4 --fontFamily-sans"
							padding="20px"
							margin="0 0px"
							text-align="left"
						>
							<Strong>
								PRODUCT DEVELOPMENT
								<br />
								PRODUCT CONSULTATION
								<br />
								ARCHITECTURE DESIGN{"\n\n\n\n"}
							</Strong>
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" quarkly-title="Wrapper Item">
					{"        "}
					<Box
						quarkly-title="Item"
						display="block"
						grid-column="1"
						padding="10px"
						text-align="justify"
						margin="0 0px"
					>
						<Text quarkly-title="Title" font="normal 500 36px/1.2 --fontFamily-sans" padding="20px" margin="0 0px">
							UI/UX
							<br />
							STRATEGY{"\n\n\n\n\n\n"}
						</Text>
						<Text
							quarkly-title="Paragraph"
							font="normal 400 16px/1.4 --fontFamily-sans"
							padding="20px"
							margin="0 0px"
							text-align="left"
						>
							This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.{"\n\n"}
						</Text>
						<Text
							quarkly-title="Sub Heading"
							font="normal 400 18px/1.4 --fontFamily-sans"
							padding="20px"
							margin="0 0px"
							text-align="left"
						>
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								<Strong>
									{"\n"}BRAND DEVELOPMENT
									<br />
									TECHNOLOGY PROTOTYPING
									<br />
									BRAND INTEGRATION{"\n\n"}
								</Strong>
								{"\n\n\n\n"}
							</Span>
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" quarkly-title="Wrapper Item">
					{"        "}
					<Box
						quarkly-title="Item"
						display="block"
						grid-column="1"
						padding="10px"
						text-align="justify"
						margin="0 0px"
					>
						<Text quarkly-title="Title" font="normal 500 36px/1.2 --fontFamily-sans" padding="20px" margin="0 0px">
							BIG DATA
							<br />
							& ANALYTICE{"\n\n\n\n\n\n"}
						</Text>
						<Text
							quarkly-title="Paragraph"
							font="normal 400 16px/1.4 --fontFamily-sans"
							padding="20px"
							margin="0 0px"
							text-align="left"
						>
							This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.{"\n\n"}
						</Text>
						<Text
							quarkly-title="Sub Heading"
							font="normal 400 18px/1.4 --fontFamily-sans"
							padding="20px"
							margin="0 0px"
							text-align="left"
						>
							<Strong>
								{"\n"}ETL/DATA MANAGEMENT
								<br />
								ANALYTICAL DEVELOPMENT
								<br />
								STREAM PROCESSING{"\n\n"}
							</Strong>
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section quarkly-title="Overlay Section" background="#1C1C1C" border-width={0}>
			<Box
				quarkly-title="Overlay Block"
				background="#075af7 linear-gradient(-50deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%) 0% 0%/cover no-repeat"
				position="relative"
				width="880px"
				height="200px"
				margin="-115px auto 0px"
				display="flex"
			>
				<Box
					quarkly-title="Overlay Item One"
					width="25%"
					height="150px"
					display="grid"
					align-self="center"
				>
					<Icon
						category="bs"
						icon={BsPlus}
						color="#a6f306"
						font="700 36px --fontFamily-sansHeavy"
						align-self="end"
						justify-self="end"
						margin="0px 40px 0px 0px"
					/>
					<Text
						quarkly-title="Item Heading"
						display="block"
						font="700 40px --fontFamily-sans"
						color="#ffffff"
						align-self="center"
						justify-self="center"
						margin="0 0px 0 0px"
					>
						350{"\n\n"}
					</Text>
					<Text
						quarkly-title="Item Heading"
						color="#ffffff"
						font="16px --fontFamily-sans"
						display="block"
						justify-self="center"
						align-self="center"
						margin="0 0px 10px 0px"
					>
						<Strong>
							{"\n"}Demonstration{"\n\n"}
						</Strong>
					</Text>
				</Box>
				<Box
					quarkly-title="Overlay Item One"
					width="25%"
					height="150px"
					display="grid"
					align-self="center"
				>
					<Icon
						category="bs"
						icon={BsPlus}
						color="#a6f306"
						font="700 36px --fontFamily-sansHeavy"
						align-self="end"
						justify-self="end"
						margin="0px 40px 0px 0px"
					/>
					<Text
						quarkly-title="Item Heading"
						display="block"
						font="700 40px --fontFamily-sans"
						color="#ffffff"
						align-self="center"
						justify-self="center"
						margin="0 0px 0 0px"
					>
						285
					</Text>
					<Text
						quarkly-title="Item Heading"
						color="#ffffff"
						font="16px --fontFamily-sans"
						display="block"
						justify-self="center"
						align-self="center"
						margin="0 0px 10px 0px"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{"\n"}Projects Completed
						</Strong>
					</Text>
				</Box>
				<Box
					quarkly-title="Overlay Item One"
					width="25%"
					height="150px"
					display="grid"
					align-self="center"
				>
					<Icon
						category="bs"
						icon={BsPlus}
						color="#a6f306"
						font="700 36px --fontFamily-sansHeavy"
						align-self="end"
						justify-self="end"
						margin="0px 40px 0px 0px"
					/>
					<Text
						quarkly-title="Item Heading"
						display="block"
						font="700 40px --fontFamily-sans"
						color="#ffffff"
						align-self="center"
						justify-self="center"
						margin="0 0px 0 0px"
					>
						190
					</Text>
					<Text
						quarkly-title="Item Heading"
						color="#ffffff"
						font="16px --fontFamily-sans"
						display="block"
						justify-self="center"
						align-self="center"
						margin="0 0px 10px 0px"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{"\n"}Happy Clients
						</Strong>
					</Text>
				</Box>
				<Box
					quarkly-title="Overlay Item One"
					width="25%"
					height="150px"
					display="grid"
					align-self="center"
				>
					<Icon
						category="bs"
						icon={BsPlus}
						color="#a6f306"
						font="700 36px --fontFamily-sansHeavy"
						align-self="end"
						justify-self="end"
						margin="0px 40px 0px 0px"
					/>
					<Text
						quarkly-title="Item Heading"
						display="block"
						font="700 40px --fontFamily-sans"
						color="#ffffff"
						align-self="center"
						justify-self="center"
						margin="0 0px 0 0px"
					>
						100%
					</Text>
					<Text
						quarkly-title="Item Heading"
						color="#ffffff"
						font="16px --fontFamily-sans"
						display="block"
						justify-self="center"
						align-self="center"
						margin="0 0px 10px 0px"
					>
						<Strong>
							On-Time Delivery
						</Strong>
					</Text>
				</Box>
			</Box>
		</Section>
		<Section quarkly-title="Who We Are Section" background="--color-dark">
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Box margin="0px" padding="50px 120px 50px 50px" quarkly-title="Left Box">
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="block"
							quarkly-title="Sub Heading"
							color="#122bfd"
						>
							<Strong>
								who we are{" \n\n"}
							</Strong>
						</Text>
						<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block" quarkly-title="Sub Heading">
							<Strong color="#ffffff" font="normal 900 28px/1.2 --fontFamily-sans">
								Custom IT Solutions
								<br />
								for You Business{"\n\n"}
							</Strong>
						</Text>
						<Text
							font="normal 300 16px/1.5 --fontFamily-sans"
							margin="5px 0px 0px 0px"
							display="block"
							quarkly-title="Sub Heading"
							color="#ffffff"
							padding="0px 0 0px 0px"
						>
							<Strong>
								{"\n"}We are a boutique digital transformation consultancy and development company.{"\n\n"}
							</Strong>
							{"\n        "}
						</Text>
						<Text
							font="normal 300 16px/1.5 --fontFamily-sans"
							margin="0px 0px 0px"
							display="block"
							quarkly-title="Sub Heading"
							color="#ffffff"
							padding="0px 0 0px 0px"
						>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								font="normal 300 14px/0 --fontFamily-sans"
								padding="0 0px 0px 0px"
								margin="20px 0px 0px 0px"
							>
								{"\n\n"}Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy and software development company that provides cutting edge engineering solutions.{"\n\n\n\n"}
							</Strong>
							{"\n        "}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					<Box quarkly-title="Right Box">
						<Image width="100%" height="400px" src="https://uploads.quarkly.io/5f8c1c483d84d4001ec3b164/images/home-3_03.png?v=2020-10-24T11:43:01.974Z" />
					</Box>
					{"        "}{"    "}
				</StackItem>
			</Stack>
		</Section>
	</Theme>;
});
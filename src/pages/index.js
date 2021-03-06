import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Box, Image, Button, Em, Span, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, StackItem, Stack, Section, SocialMedia } from "@quarkly/components";
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
								IT Products
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
							engineering
						</Text>
						<Text
							quarkly-title="Paragraph"
							font="normal 400 16px/1.4 --fontFamily-sans"
							padding="20px"
							margin="0 0px"
							text-align="left"
						>
							This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.
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
								ARCHITECTURE DESIGN
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
							STRATEGY
						</Text>
						<Text
							quarkly-title="Paragraph"
							font="normal 400 16px/1.4 --fontFamily-sans"
							padding="20px"
							margin="0 0px"
							text-align="left"
						>
							This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.
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
									BRAND DEVELOPMENT
									<br />
									TECHNOLOGY PROTOTYPING
									<br />
									BRAND INTEGRATION
								</Strong>
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
							& ANALYTICE
						</Text>
						<Text
							quarkly-title="Paragraph"
							font="normal 400 16px/1.4 --fontFamily-sans"
							padding="20px"
							margin="0 0px"
							text-align="left"
						>
							This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.
						</Text>
						<Text
							quarkly-title="Sub Heading"
							font="normal 400 18px/1.4 --fontFamily-sans"
							padding="20px"
							margin="0 0px"
							text-align="left"
						>
							<Strong>
								ETL/DATA MANAGEMENT
								<br />
								ANALYTICAL DEVELOPMENT
								<br />
								STREAM PROCESSING
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
						350
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
							Demonstration
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
							Projects Completed
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
							Happy Clients
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
		<Section
			quarkly-title="Who We Are Section"
			background="--color-dark"
			position="relative"
			top={0}
			height="800px"
		>
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
								who we are{" "}
							</Strong>
						</Text>
						<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block" quarkly-title="Sub Heading">
							<Strong color="#ffffff" font="normal 900 28px/1.2 --fontFamily-sans" margin="10px 0px 0px">
								Custom IT Solutions
								<br />
								for You Business
							</Strong>
						</Text>
						<Text
							font="normal 300 16px/1.5 --fontFamily-sans"
							margin="10px 0px 0px 0px"
							display="block"
							quarkly-title="Sub Heading"
							color="#ffffff"
							padding="0px 0 0px 0px"
						>
							<Strong>
								We are a boutique digital transformation consultancy and development company.
							</Strong>
							{"        "}
						</Text>
						<Text
							font="normal 300 16px/1.5 --fontFamily-sans"
							margin="20px 0px 0px"
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
								margin="60px 0px 0px 0px"
							>
								Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy and software development company that provides cutting edge engineering solutions.
							</Strong>
							{"        "}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					<Box quarkly-title="Right Box">
						<Image width="100%" src="https://uploads.quarkly.io/5f8c1c483d84d4001ec3b164/images/home-3_03.png?v=2020-10-24T11:43:01.974Z" height="500px" />
					</Box>
					{"            "}
				</StackItem>
			</Stack>
			<Stack margin="-16px -16px -20px -16px" position="absolute" top="75%">
				{"    "}
				<StackItem
					width="31%"
					display="flex"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f8c05d441c25f001ec3f0f9/images/home-03_services_2.jpg?v=2020-10-23T18:37:31.915Z) 0% 0% /cover repeat scroll padding-box"
					height="400px"
					margin="0px 20px 0px"
				>
					{"        "}
					<Text font="normal 500 35px/1.2 --fontFamily-sans" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
						Cross-Industry
						<br />
						Expertise
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="31%" display="flex" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f8c05d441c25f001ec3f0f9/images/home-03_services_1.jpg?v=2020-10-23T19:00:35.185Z) 0% 0% /auto repeat scroll padding-box">
					{"        "}
					<Text font="normal 500 35px/1.2 --fontFamily-sans" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
						Deep Expertise &
						<br />
						Leadership
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="31%" display="flex" background="#3486fe linear-gradient(90deg,#0c1bae 0%,#3486fe 100%) 0% 0% /auto repeat scroll padding-box" margin="0px 0px 0px 25px">
					{"        "}
					<Box>
						<Text font="normal 600 38px/1.2 --fontFamily-sans" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
							Dedicated IT
							<br />
							Solution
							<br />
							<br />
						</Text>
						<Text
							font="normal 200 22px/1.2 --fontFamily-sans"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#ffffff"
							width="350px"
						>
							We have the technology and industry expertise to develop solutions that can connect people and businesses across a variety of mobile devices.
							<Link
								href="http://integrio.wgl-demo.net/home-3/#"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							/>
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section quarkly-title="Clients Section" background="#1C1C1C" height="380px">
			<Box
				width="880px"
				height="120px"
				top="234px"
				display="flex"
				align-self="center"
				margin="230px 0px 0px 0px"
			>
				<Box width="150px" height="90px">
					<Image width="100%" height="100%" src="https://images.unsplash.com/photo-1572094382897-21abe88fb269?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000" />
				</Box>
				<Box width="150px" height="90px">
					<Image width="93%" height="100%" src="https://images.unsplash.com/photo-1505489435671-80a165c60816?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000" />
				</Box>
				<Box width="150px" height="90px">
					<Image width="100%" height="100%" src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000" />
				</Box>
				<Box width="150px" height="90px">
					<Image width="100%" height="100%" src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000" />
				</Box>
				<Box width="150px" height="90px">
					<Image width="100%" height="100%" src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000" />
				</Box>
				<Box width="150px" height="90px">
					<Image width="100%" height="100%" src="https://images.unsplash.com/photo-1560880745-5f9e76672613?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000" display="flex" />
				</Box>
			</Box>
		</Section>
		<Section color="--dark" background="#1C1C1C" quarkly-title="Awards Section">
			<Text
				as="h2"
				font="normal 500 30px/1.2 --fontFamily-sans"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#3486fe"
				text-align="center"
				text-transform="uppercase"
			>
				WE MAKE CONNECTIONS
			</Text>
			<Text
				as="h2"
				font="normal 900 66px/1.2 --fontFamily-sans"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#ffffff"
				text-align="center"
			>
				Awards that we have{" "}
			</Text>
			<Text
				as="h2"
				font="normal 500 18px/1.2 --fontFamily-sans"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#ffffff"
				text-align="center"
			>
				We are a boutique digital transformation consultancy and{" "}
				<br />
				development company.
			</Text>
			<Stack margin="20px -16px -16px -16px">
				{"    "}
				<StackItem width="24%" display="flex" padding="16px 0 16px 0">
					<Override
						slot="StackItemContent"
						display="inline-block"
						height="50px"
						text-align="justify"
						align-self="center"
					/>
					{"        "}
					<Text
						as="h3"
						font="--headline3"
						margin="10px 0"
						color="#ffffff"
						text-align="center"
						display="flex"
						align-self="center"
					>
						site of the monthe:{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="60%" display="flex" padding="16px 0 16px 0">
					{"        "}
					<Text
						as="p"
						font="--lead"
						margin="10px 0"
						color="--light"
						text-align="justify"
						display="inline"
					>
						This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="15%" display="flex" align-self="center">
					<Button align-self="center" width="150px">
						View All
					</Button>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="20px -16px -16px -16px">
				{"    "}
				<StackItem width="24%" display="flex" padding="16px 0 16px 0">
					<Override slot="StackItemContent" display="inline-block" height="50px" text-align="justify" />
					{"        "}
					<Text
						as="h3"
						font="--headline3"
						margin="10px 0"
						color="#ffffff"
						text-align="center"
						display="inline"
						align-self="center"
					>
						site of the monthe:{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="60%" display="flex" padding="16px 0 16px 0">
					{"        "}
					<Text
						as="p"
						font="--lead"
						margin="10px 0"
						color="--light"
						text-align="justify"
						display="inline"
					>
						This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="15%" display="flex">
					<Button align-self="center" width="150px">
						View All
					</Button>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="20px -16px -16px -16px">
				{"    "}
				<StackItem width="24%" display="flex" padding="16px 0 16px 0">
					<Override slot="StackItemContent" display="inline-block" height="50px" text-align="justify" />
					{"        "}
					<Text
						as="h3"
						font="--headline3"
						margin="10px 0"
						color="#ffffff"
						text-align="center"
						display="inline"
						align-self="center"
					>
						site of the monthe:{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="60%" display="flex" padding="16px 0 16px 0">
					{"        "}
					<Text
						as="p"
						font="--lead"
						margin="10px 0"
						color="--light"
						text-align="justify"
						display="inline"
					>
						This is Dummy text for lorem ipsum and you are watching this dummy text for lorem ipsum and a lorem ipsum is good text facilities in this text world. Highly appreciated for this nice tool, like it much and good all this good.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="15%" display="flex">
					<Button align-self="center" width="150px">
						View All
					</Button>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			color="--light"
			padding="150px 0"
			sm-padding="40px 0"
			position="static"
			background="--color-dark url(https://uploads.quarkly.io/5f8c05d441c25f001ec3f0f9/images/Home_3-footer-1.jpg?v=2020-10-21T19:29:40.904Z)"
			height="600px"
			quarkly-title="Focus And Business Section"
		>
			<Override slot="SectionContent" text-align="center" />
			<Box quarkly-title="Focus And Business Box" height="900px">
				<Text text-align="center" font="30px/2 --fontFamily-sans">
					We Take Care of Your Technology{" "}
				</Text>
				<Text text-align="center" font="--headline1" text-transform="uppercase" margin="0 0px 0 0px">
					focus on your
					<br />
					{" "}business
				</Text>
				<Button
					width="140px"
					text-align="center"
					position="relative"
					font="normal 300 16px/1.5 --fontFamily-sans"
					padding="20 24px"
					margin="50px 0px 0px 0px"
					background="--color-primary linear-gradient(90deg,#0c1bae 0%,#3486fe 100%)"
				>
					contact us
				</Button>
			</Box>
			<Box
				align-self="center"
				display="flex"
				width="100%"
				height="550px"
				background="rgba(15, 15, 15, 0.3)"
				margin="200px 0px 20px 0px"
				quarkly-title="Top Footer Box"
			>
				<Box display="block" width="200px" margin="0px 20px 0px 200px" quarkly-title="Logo and About Item">
					<Text
						height="25px"
						width="100%"
						color="#f5f0f0"
						font="600 22px sans-serif"
						text-transform="uppercase"
						text-align="left"
					>
						INTEGRIO
					</Text>
					<Text width="100%" height="100px" color="#ffffff" text-align="justify">
						He this is adf and this is my test whole this is my test whole this my si te so no response row from the support still.{" "}
					</Text>
					<SocialMedia
						facebook="https://www.facebook.com/quarklyapp/"
						twitter="https://twitter.com/quarklyapp"
						youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
						vkontakte="https://vk.com/quarklyapp"
						telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
						padding="0 0px 0 0px"
						margin="0px 0px 0 0px"
					>
						<Override
							slot="link"
							border-radius="50%"
							color="--grey"
							hover-color="--light"
							background="transparent"
							hover-background="transparent"
							margin="0 8px"
						/>
					</SocialMedia>
				</Box>
				<Box display="block" width="200px" margin="0px 20px 0px 0px" quarkly-title="Contact Item">
					<Text
						height="25px"
						width="100%"
						color="#f5f0f0"
						font="600 22px sans-serif"
						text-transform="uppercase"
						text-align="left"
					>
						CONTACT US
					</Text>
					<Text width="100%" height="100px" color="#ffffff" text-align="justify">
						He this is adf and this is my test whole this is my test whole this my si te so no response row from the support still.{" "}
					</Text>
				</Box>
				<Box display="block" width="200px" margin="0px 20px 0px 0px" quarkly-title="Services Item">
					<Text
						height="25px"
						width="100%"
						color="#f5f0f0"
						font="600 22px sans-serif"
						text-transform="uppercase"
						text-align="left"
					>
						SERVICES
					</Text>
					<Text width="100%" height="100px" color="#ffffff" text-align="justify">
						He this is adf and this is my test whole this is my test whole this my si te so no response row from the support still.{" "}
					</Text>
				</Box>
				<Box display="block" width="200px" quarkly-title="Recent News Item">
					<Text
						height="25px"
						width="100%"
						color="#f5f0f0"
						font="600 22px sans-serif"
						text-transform="uppercase"
						text-align="left"
					>
						RECENT NEWS
					</Text>
					<Box display="flex" quarkly-title="News Item" margin="5px 0px 5px 0px" padding="0 0px 0 0px">
						<Image width="64px" height="64px" src="https://images.unsplash.com/photo-1603482011932-089d2b06ab18?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000" />
						<Text height="43px" width="100%" margin="12px 0px 16px 15px" color="#f3e9e9">
							Some text are good here, so nice of you
						</Text>
					</Box>
					<Box display="flex" quarkly-title="News Item">
						<Image width="64px" height="64px" src="https://images.unsplash.com/photo-1603482011932-089d2b06ab18?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000" />
						<Text height="43px" width="100%" margin="12px 0px 16px 15px" color="#f3e9e9">
							Some text are good here, so nice of you
						</Text>
					</Box>
					<Box display="flex" quarkly-title="News Item">
						<Image width="64px" height="64px" src="https://images.unsplash.com/photo-1603482011932-089d2b06ab18?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000" />
						<Text height="43px" width="100%" margin="12px 0px 16px 15px" color="#f3e9e9">
							Some text are good here, so nice of you
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-darkL2" quarkly-title="Footer Section">
			<Box width="880px" height="40px" align-self="center" display="flex">
				<Box width="50%">
					<Text color="#919191" font="14px sans-serif">
						Copyright @2020 All right Reserved.{" "}
					</Text>
				</Box>
				<Box width="50%">
					<Text text-align="right" color="#787777" font="14px sans-serif">
						Privacy Policy | Terms and Condition | Developed by:{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Tehseen Khan
						</Strong>
					</Text>
				</Box>
			</Box>
		</Section>
	</Theme>;
});
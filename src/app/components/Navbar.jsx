import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
		<nav>
			<ul
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
				}}
			>
				<Link href={"/"}>Home</Link>
				<Link href={"/About"}>About</Link>
				<Link href={"/Dogs"}>Dogs (test Loading)</Link>
				<Link href={"/About/Us"}>About Us</Link>
				<Link href={"/About/Someone"}>About Someone</Link>
				<Link href={"/ListOfPosts"}>Posts</Link>
				<Link href={"/ListOfPostsWithError"}>Posts with Error</Link>
			</ul>
		</nav>
	);
}

export default Navbar

import Image from "next/image";

const getPostsData = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	return response.json();
};
const getUsersData = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	return response.json();
};
const getDogImg = async () => {
	const response = await fetch(
		"https://dog.ceo/api/breeds/image/random",
		{
			cache: "no-store",
		} /**To make not to store the image and return it always*/
	);
	return response.json();
};
const getDogImg2 = async () => {
	const response = await fetch("https://dog.ceo/api/breeds/image/random", {
		next: { revalidate: 3 /** keep data stored and after 3s if there any request or user refresh the page (after 3s) get new data */ },
	});
	return response.json();
};

async function ListOfPost() {
	const [posts, users, dogImg, dogImg2] = await Promise.all([
		getPostsData(),
		getUsersData(),
		getDogImg(),
		getDogImg2(),
	]);
	return (
		<div>
			<h1>Welcome in Posts page</h1>
			{posts.map((post) => (
				<ul key={post.id}>
					<li>{post.title}</li>
					<li>{post.body}</li>
				</ul>
			))}
			{users &&
				users.map((user) => (
					<ol key={user.id}>
						<li>{user.id}</li>
						<li>{user.name}</li>
					</ol>
				))}
			<Image src={dogImg.message} alt="Dog" width={300} height={300} />
			<Image src={dogImg2.message} alt="Dog" width={300} height={300} />
		</div>
	);
}

export default ListOfPost;

import Image from "next/image";

const getDogImg = async () => {
	const response = await fetch(
		"https://dog.ceo/api/breeds/image/random",
		{
			cache: "no-store",
		} /**To make not to store the image and return it always*/
	);
	return response.json();
};
async function Dog() {
    const  dogImg = await getDogImg();
  return (
		<div>
			<Image src={dogImg.message} alt="Dog" width={300} height={300} />
		</div>
	);
}

export default Dog;

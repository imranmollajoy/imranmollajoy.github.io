import fs from 'fs';
import path from 'path';
import fsExtra from 'fs-extra';

const fsPromises = fs.promises;
// const targetDir = 'static/blog';
// const postsDir = 'src/routes/blog';

async function copyImagesToPublic(images, slug, postsDir, targetDir) {
	console.log(slug);
	for (const image of images) {
		await fsPromises.copyFile(
			`${postsDir}/${slug}/images/${image}`,
			`${targetDir}/${slug}/images/${image}`
		);
	}
}

async function createPostImageFoldersForCopy(targetDir, postsDir) {
	await fsExtra.emptyDir(targetDir);

	// Get every post folder: post-one, post-two etc.
	const postSlugs = await fsPromises.readdir(postsDir);

	for (const slug of postSlugs) {
		const allowedImageFileExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

		// Check if there is a .md file in the post folder
		const hasMdFile = await fsPromises
			.stat(`${postsDir}/${slug}/+page.svx`)
			.then((stat) => stat.isFile())
			.catch(() => false);
		const hasImagesFolder = await fsPromises
			.stat(`${postsDir}/${slug}/images`)
			.then((stat) => stat.isDirectory())
			.catch(() => false);
		if (hasMdFile && hasImagesFolder) {
			// Read all files inside current post folder
			const postDirFiles = await fsPromises.readdir(`${postsDir}/${slug}/images`);
			// Filter out files with allowed file extension (images)
			const images = postDirFiles.filter((file) =>
				allowedImageFileExtensions.includes(path.extname(file))
			);

			if (images.length) {
				// Create a folder for images of this post inside public
				await fsPromises.mkdir(`${targetDir}/${slug}`);
				// Create the 'images' folder inside the post folder inside the 'targetDir' directory
				await fsPromises.mkdir(`${targetDir}/${slug}/images`);
				await copyImagesToPublic(images, slug, postsDir, targetDir);
			}
		}
	}
}

createPostImageFoldersForCopy('static/blog', 'src/routes/blog');
createPostImageFoldersForCopy('static/portfolio', 'src/routes/portfolio');

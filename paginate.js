// import fs from 'fs';
// import matter from 'gray-matter';
// const GET = async () => {
// 	const dir = './src/data/blogs';
// 	const outputDir = './src/data/paginated';
// 	const paginateCount = 10;

// 	var allFiles = [];
// 	// scan the dir
// 	fs.readdir(dir, function (err, files) {
// 		allFiles = files
// 			.map(function (fileName) {
// 				return {
// 					name: fileName,
// 					time: fs.statSync(dir + '/' + fileName).mtime.getTime()
// 				};
// 			})
// 			.sort(function (a, b) {
// 				return a.time - b.time;
// 			})
// 			.map(function (v) {
// 				return v.name;
// 			});
// 		console.log(allFiles);
// 	});

// 	// create the paginated dir
// 	if (!fs.existsSync(outputDir)) {
// 		fs.mkdirSync(outputDir);
// 	}

// 	// paginate the files
// 	for (let i = 0; i < allFiles.length; i += paginateCount) {
// 		const page = allFiles.slice(i, i + paginateCount);
// 		const fileName = `${outputDir}/${i + 1}.json`;
// 		fs.writeFileSync(fileName, JSON.stringify(page));
// 	}
// };
// GET();

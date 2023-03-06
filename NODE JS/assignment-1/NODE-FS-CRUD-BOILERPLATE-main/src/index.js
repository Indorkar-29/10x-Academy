const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		const data= await fs.writeFile(fileName,fileContent);
		console.log(data);
	}catch(err){
		console.log(err);
	}
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		const data= await fs.readFile(fileName,{encoding:"utf-8"});
		console.log(data);
	}catch(err){
		console.log(err);
	}
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try{
		const data =await fs.appendFile(fileName,fileContent);
		console.log(data);
	}catch(err){
		console.log(err);
	}
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	try{
		const data=await fs.unlink(fileName);
		console.log(data);
	}catch(err){
		console.log(err);
	}
}


//myFileWriter("temp.txt","Hello I am new Text File,");
// myFileUpdater("temp.txt"," Now updated successfully.");
// myFileReader("temp.txt");
//myFileDeleter("temp.txt");

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
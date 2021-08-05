exports.mod = (mod_info) => {
    //Profile Mod
	let profileDir = internal.path.resolve(__dirname, "DevProfile");
	let files = fileIO.readDir(profileDir);
	let profile = {}
	for(let index in files){
		let file = files[index]
		let fileName = file.split('.')[0]
		let fullPath = internal.path.resolve(profileDir, file)
		profile[fileName] = fullPath
	}
    db.profile["DevProfile"] = profile
}

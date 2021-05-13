function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let numOfSongs = arr.shift();
    let typeOfSong = arr.pop();
    let allSongs = [];
    for (let i = 0; i < numOfSongs; i++) {
        let [typeList, name, time] = arr[i].split("_");
        allSongs.push(new Song(typeList, name,time));
    }
    typeOfSong === "all" 
    ? allSongs.forEach(element => {
        console.log(element.name)
    })
    : allSongs.forEach(element => {
        if (element.typeList === typeOfSong){
            console.log(element.name)
        }
    });
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);

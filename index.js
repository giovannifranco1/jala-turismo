function mudaWallpaper(wallpaper){
    console.log(wallpaper)
    document.getElementById('body').style.backgroundImage = `url('${wallpaper.src}')` 
}
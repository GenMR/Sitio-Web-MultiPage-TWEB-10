viewer.container.addEventListener("click", function(){

    const intersects = viewer.raycaster.intersectObject(panorama);
    
    if(intersects.length > 0){
    
    const p = intersects[0].point;
    
    const x = p.x.toFixed(2);
    const y = p.y.toFixed(2);
    const z = p.z.toFixed(2);
    
    alert(x + "," + y + "," + z);
    
    console.log(
    "infospot.position.set(" +
    x + "," +
    y + "," +
    z +
    ");"
    );
    
    }
    
    });


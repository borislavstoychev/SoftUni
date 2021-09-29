function cookingNumbers(x,...params){
    let actions = {
        'chop': x => x/2,
        'dice': x => Math.sqrt(x),
        'spice': x => x+1,
        'bake': x => x*3,
        'fillet': x => x*0.8 
    }
    params.forEach((command) => {
        let action = actions[command];
        x = action(Number(x));
        console.log(x);
    })
}

cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

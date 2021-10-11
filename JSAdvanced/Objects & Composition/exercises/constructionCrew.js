function constructionCrew(obj){
    let hidrate = (w, e, a) => w*e*a;
    if (obj.dizziness){
        obj.levelOfHydrated += hidrate(obj.weight, obj.experience, 0.1);
        obj.dizziness = false;
    };
    return obj;
};


console.log(constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }))
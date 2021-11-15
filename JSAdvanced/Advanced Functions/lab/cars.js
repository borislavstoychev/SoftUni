function cars(data) {
   const vehicleBuilder = () => {
       const vehicles = {};

       return {
           create: (name, inherit, parent) => {
               vehicles[name] = inherit ? Object.create(vehicles[parent]) : {};
           },
           set: (name, key, value) => (vehicles[name][key] = value),
           print: (name) => {
               const logs = [];
               for (const key in vehicles[name]) {
                   logs.push(`${key}:${vehicles[name][key]}`);
               }

               console.log(logs.join(","));
           },
       };
   };

   const factory = vehicleBuilder();
   data.map((x) => x.split(" ")).forEach(([command, ...args]) => factory[command].apply(null, args));
}

cars(['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat'])
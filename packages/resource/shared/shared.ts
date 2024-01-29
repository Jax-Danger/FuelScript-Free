import {Vector3} from "fivem-js";
/* Below are the vehicle classes defined by number.
0: Compacts  
1: Sedans  
2: SUVs  
3: Coupes  
4: Muscle  
5: Sports Classics  
6: Sports  
7: Super  
8: Motorcycles  
9: Off-road  
10: Industrial  
11: Utility  
12: Vans  
13: Cycles  
14: Boats  
15: Helicopters  
16: Planes  
17: Service  
18: Emergency  
19: Military  
20: Commercial  
21: Trains  
22: Open Wheel
*/


const Config: ServerConfig = { // ONLY ALOWED TO CHANGE THE VALUES IN THIS SECTION
    Stations: [ // Gas station blips
        {
            enabled: true, // True to enable blips, false to disable
            name: "Gas Stations", // Name of the blip
            blipCoords: {x: 265.0395, y: -1259.3495, z: 29.1429 }, // Blip location
            RefuelCoords: [
                new Vector3(265.1181, -1253.5607, 30.9261), // Middle Pump 1
                new Vector3(265.0422, -1262.0728, 30.7873), // Middle Pump 2
                new Vector3(264.9783, -1268.6564, 30.5343),// Middle Pump 3
                new Vector3(256.5269, -1268.5942, 30.5064),// Left Pump 1
                new Vector3(256.4744, -1261.3785, 30.3539),// Left Pump 2
                new Vector3(256.4152, -1253.5364, 30.6070),// Left Pump 3
                new Vector3(273.9043, -1253.4998, 30.3853),// Right Pump 1
                new Vector3(273.7555, -1261.1971, 30.3862),// Right Pump 2
                new Vector3(273.8336, -1268.4907, 30.4550),// Right Pump 3
                // etc...
            ],
            sprite: 361, // Blip sprite
            color: 1, // Blip color
            scale: 0.8, // Blip scale
            FuelType: ["Regular", "Super"], // Fuel types available at the gas station
        },
        // add more following the same format
    ],
    GasTypes: [ // Fuel types
        {
            name: "Regular", // Regular car fuel
            consumptionRate: 0.01, // How much fuel is consumed per tick
        },
        {
            name: "Super", // Super car fuel
            consumptionRate: 0.04, // How much fuel is consumed per tick
        },
        {
            name: "Diesel", // Semi Truck fuel
            consumptionRate: 0.03, // How much fuel is consumed per tick
        },
        {
            name: 'Aviation', // Airplane fuel
            consumptionRate: 0.04, // How much fuel is consumed per tick
        },
        // Do NOT add any more. This is the maximum amount of fuel types allowed
    ],
    VehCategories: [ // Vehicle categories
        {
            vehclass: 0, // Compacts  
            FuelType: "Regular", // Fuel type
        },
        {
            vehclass: 1, // Sedans
            FuelType: "Regular", // Fuel type
        },
        {
            vehclass: 2, // SUVs
            FuelType: "Regular", // Fuel type
        },
        {
            vehclass: 3, // Coupes
            FuelType: "Regular", // Fuel type
        },
        {
            vehclass: 4, // Muscle
            FuelType: "Regular", // Fuel type
        },
        {
            vehclass: 5, // Sports Classics
            FuelType: "Super", // Fuel type
        },
        {
            vehclass: 6, // Sports
            FuelType: "Super", // Fuel type
        },
        {
            vehclass: 7, // Super
            FuelType: "Super", // Fuel type
        },
        {
            vehclass: 8, // Motorcycles
            FuelType: "Regular", // Fuel type
        },
        {
            vehclass: 9, // Off-road
            FuelType: "Regular", // Fuel type
        },
        {
            vehclass: 10, // Industrial
            FuelType: "Diesel", // Fuel type
        },
        {
            vehclass: 11, // Utility
            FuelType: "Regular", // Fuel type
        },
        {
            vehclass: 12, // Vans
            FuelType: "Regular", // Fuel type
        },
        //Skip Bicycles
        {
            vehclass: 14, // Boats
            FuelType: "Regular", // Fuel type
        },
        {
            vehclass: 15, // Helicopters
            FuelType: "Aviation", // Fuel type
        },
        {
            vehclass: 16, // Planes
            FuelType: "Aviation", // Fuel type
        },
        {
            vehclass: 17, // Service
            FuelType: "Regular", // Fuel type
        },
        {
            vehclass: 18, // Emergency
            FuelType: "Regular", // Fuel type
        },
        {
            vehclass: 19, // Military
            FuelType: "Regular", // Fuel type
        },
        {
            vehclass: 20, // Commercial
            FuelType: "Regular", // Fuel type
        },
        // Skip Trains
        {
            vehclass: 22, // Open Wheel
            FuelType: "Super", // Fuel type
        },
        // add more following the same format
    ],
    CustomCars: [ // If you want to change a specific car's fuel type, add it here. Generally used specifically for addon vehicles.
        {
            model: "rmodgt63", // Model name
            FuelType: "Super", // Fuel type
        },
    ],
    debug: false, // Set to true to enable debug mode. This will print out more information in the console.
    fuelTransfer: true, // Set to true to enable fuel transfer from vehicles/steal fuel from vehicles
};

/*DO NOT TOUCH BELOW THIS LINE
//////////////////////////////////
*/
interface Stations {
    enabled: boolean;
    name: string;
    blipCoords: {x: number, y: number, z: number};
    RefuelCoords: Vector3[];
    sprite: number;
    color: number;
    scale: number;
    FuelType: string[];
}[];
interface GasTypes {
    name: string;
    consumptionRate: number;
}[];
interface VehCategories {
    vehclass: number;
    FuelType: string;
}[];
interface CustomCars {
    model: string;
    FuelType: string;
}[];
interface ServerConfig { // Template of the config file. Do NOT change this
    Stations: Stations[];
    GasTypes: GasTypes[];
    VehCategories: VehCategories[];
    CustomCars: CustomCars[];
    debug: boolean;
    fuelTransfer: boolean;
}
export default Config;

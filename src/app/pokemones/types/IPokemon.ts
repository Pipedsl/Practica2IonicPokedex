export interface IPokemon {
    id: number;
    name: string;
    type: "Fuego" | "Agua" | "Neutral" | "Hoja";
    damage: number;
    defense: number;
    photo: string;
    enRecuperación: boolean;
}
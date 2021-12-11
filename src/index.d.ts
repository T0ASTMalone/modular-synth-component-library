export interface ContainerWall {
    rotation: number[],
    position: number[],
    dimensions: number[]
}

export interface Container {
    name: string,
    numberOfWalls: number,
    walls: ContainerWall[],
}

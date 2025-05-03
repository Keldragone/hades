export interface DaedalusHammer {
    id: string;
    name: string;
    description: string;
    availabilityTest: () => boolean;
    iconPath: string;
};

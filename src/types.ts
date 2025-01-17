export interface Character {
    lines: string[];
    width: number;
    height: number;
    def: string;
}

export type Dictionary = Record<string, Character>;

export interface Option {
    spacing?: number;
    maxLineWidth?: number;
    color?: string;
    silent?: boolean;
}

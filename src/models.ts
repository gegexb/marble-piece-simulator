export type PieceDimensions = {
  length: number;
  width: number;
  thickness: number;
};

export type EdgeTreatment = 'none' | 'chamfer' | 'rounding' | 'gluing';

export interface Edge {
  id: string;
  length: number;
  treatment: EdgeTreatment;
}

export type OpeningType = 'undertop' | 'top-2cm' | 'top-3cm' | 'basin' | 'recessed';

export interface Opening {
  id: string;
  type: OpeningType;
  dimensions: { x: number; y: number };
  offset: { x: number; y: number };
}

export interface Piece {
  dimensions: PieceDimensions;
  quantity: number;
  edges: Edge[];
  openings: Opening[];
}

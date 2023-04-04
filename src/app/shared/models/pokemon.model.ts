export interface Pokemon {
  name: string;
  id: number | null;
  types?: string;
  imageUrl: string;
  description?: string;
}

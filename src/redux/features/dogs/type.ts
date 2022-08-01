export type DogState = DogObject[];

export interface DogObject {
  breeds: DogData[];
  id?: string;
  url: string;
  width?: number;
  height?: number;
}

export interface DogData {
  weight?: Weight;
  height?: Height;
  id?: number;
  name?: string;
  bred_for?: string;
  breed_group?: string;
  life_span?: string;
  temperament?: string;
  reference_image_id?: string;
  country_code?: string;
}

export interface Weight {
  imperial: string;
  metric: string;
}

export interface Height {
  imperial: string;
  metric: string;
}

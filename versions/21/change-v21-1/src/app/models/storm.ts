export interface Storm {
  name: string;
  location: string //'beach' | 'mountain' | 'city' | 'countryside';
}

export const initValue: Storm = {
  name: '',
  location: 'city',
};

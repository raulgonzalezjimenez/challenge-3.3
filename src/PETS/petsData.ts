type Pets = {
  id: number;
  name: string;
  specie: string;
  isAdopted: boolean;
};

export const petsList: Pets[] = [
  { id: 1, name: 'mirto', specie: 'pastor aleman', isAdopted: true },
  { id: 1, name: 'milo', specie: 'beagle', isAdopted: false },
  { id: 1, name: 'kiwi', specie: 'boxer', isAdopted: true },
  { id: 1, name: 'hades', specie: 'breton', isAdopted: false },
];

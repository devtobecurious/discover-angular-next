export type ConfigGame = {
  lifePoints: number
};

export function getDefaultGameConfig(): ConfigGame {
  return {
    lifePoints: 100
  };
}

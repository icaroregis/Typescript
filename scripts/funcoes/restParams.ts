function teste(...rest: string[]): string[] {
  const array = [...rest];
  return array;
}

function somarRenda(...meses: (number | string)[]): number | string {
  return meses.reduce(
    (rendaTotal: number | string, rendaAtual: number | string) =>
      Number(rendaTotal) + Number(rendaAtual),
    0,
  );
}

console.log(somarRenda(250, 780, 695, 2000, 6500));

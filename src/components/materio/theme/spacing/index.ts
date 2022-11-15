type ReturnType = {
  readonly spacing: (factor: number) => string;
};

const functions: ReturnType = {
  spacing: (factor: number) => `${0.25 * factor}rem`,
};

export default functions;

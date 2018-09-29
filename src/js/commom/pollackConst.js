/**Constantes */

const percentual = {
  percentualGorduraParam1: 4.95,
  percentualGorduraParam2: 4.5,
  fatorPesoOsseo: 0.712
};

const male = {
  seteDobras: {
    param1: 1.112,
    param2: 0.00043499,
    param3: 0.00000055,
    param4: 0.00028826
  },
  tresDobras: {
    param1: 1.10938,
    param2: 0.0008267,
    param3: 0.0000016,
    param4: 0.0002574
  },
  dobras: {
    param1: 'peitoral',
    param2: 'abdominal',
    param3: 'coxa'
  },
  residual: 0.241
};
const female = {
  seteDobras: {
    param1: 1.097,
    param2: 0.00046971,
    param3: 0.0000005623,
    param4: 0.00012828
  },
  tresDobras: {
    param1: 1.0994921,
    param2: 0.0009929,
    param3: 0.0000023,
    param4: 0.0001392
  },
  dobras: {
    param1: 'tricipital',
    param2: 'supra_iliaca',
    param3: 'coxa'
  },
  residual: 0.209
};
const pollack = {
  percentual: percentual,
  male: male,
  female: female
};

export default pollack;

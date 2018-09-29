const evaliationParams = {
  Male: [
    {
      faixa: [18, 25],
      excelente: {
        perc_min: 4,
        perc_max: 9
      },
      bom: {
        perc_min: 10,
        perc_max: 12
      },
      media: {
        perc_min: 13,
        perc_max: 16
      },
      acima: {
        perc_min: 17,
        perc_max: 21
      },
      excessivo: {
        perc_min: 22,
        perc_max: 28
      }
    },
    {
      faixa: [26, 35],
      excelente: {
        perc_min: 8,
        perc_max: 13
      },
      bom: {
        perc_min: 14,
        perc_max: 17
      },
      media: {
        perc_min: 18,
        perc_max: 21
      },
      acima: {
        perc_min: 22,
        perc_max: 25
      },
      excessivo: {
        perc_min: 26,
        perc_max: 30
      }
    },
    {
      faixa: [36, 45],

      excelente: {
        perc_min: 10,
        perc_max: 16
      },
      bom: {
        perc_min: 17,
        perc_max: 20
      },
      media: {
        perc_min: 21,
        perc_max: 33
      },
      acima: {
        perc_min: 24,
        perc_max: 27
      },
      excessivo: {
        perc_min: 28,
        perc_max: 32
      }
    },
    {
      faixa: [46, 55],
      excelente: {
        perc_min: 12,
        perc_max: 18
      },
      bom: {
        perc_min: 19,
        perc_max: 22
      },
      media: {
        perc_min: 23,
        perc_max: 35
      },
      acima: {
        perc_min: 26,
        perc_max: 28
      },
      excessivo: {
        perc_min: 29,
        perc_max: 34
      }
    },
    {
      faixa: [56, 65],
      excelente: {
        perc_min: 13,
        perc_max: 19
      },
      bom: {
        perc_min: 20,
        perc_max: 22
      },
      media: {
        perc_min: 23,
        perc_max: 26
      },
      acima: {
        perc_min: 27,
        perc_max: 29
      },
      excessivo: {
        perc_min: 30,
        perc_max: 35
      }
    }
  ],
  Female: [
    {
      faixa: [
        {
          min: '18',
          max: '25',
          perc: []
        }
      ]
    }
  ]
};

export default evaliationParams;

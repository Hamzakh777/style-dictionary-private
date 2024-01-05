// const parsecolor = (spectrum) => {
//     const res = { color: { core: {} } };

//     for (const [colorName, hues] of Object.entries(spectrum )) {
//         res.color.core[colorName] = {};
//         for(const [hue, colorVal] of Object.entries(hues)) {
//             res.color.core[colorName][hue] = {
//                 value: colorVal
//             }
//         }
//     }

//     console.log(JSON.stringify(res));
// }
const xxxLarge = {
    fontSize: {
      display1: 54,
      title1: 38,
      title2: 34,
      title3: 30,
      title4: 28,
      headline1: 22,
      body1: 22,
      label1: 20,
      label2: 20,
      caption1: 18,
      caption2: 18,
      legal1: 17,
    },
    lineHeight: {
      display1: 44,
      title1: 48,
      title2: 44,
      title3: 36,
      title4: 32,
      headline1: 28,
      body1: 28,
      label1: 28,
      label2: 28,
      caption1: 24,
      caption2: 24,
      legal1: 20,
    },
  };
  
  
  
  

const parse = (space, tokenName, sub) => {
  const res = { [tokenName]: { [sub]: {} } };

  for (const [key, val] of Object.entries(space)) {
    res[tokenName][sub][key] = { weight: { value: val } };
  }

  console.log(JSON.stringify(res));
};

const parseTypo = (prop1, prop2, sub1, sub2) => {
    const res = {
        "font": {
          "typography": {
            "display1": {
              "weight": { "value": "{font.weight.black}" },
              "text-transform": { "value": "uppercase" },
              "font-size": { "value": "50px" },
              "line-height": { "value": "44px" }
            },
            "title1": {
              "weight": { "value": "{font.weight.bold}" },
              "text-transform": { "value": "none" },
              "font-size": { "value": "34px" },
              "line-height": { "value": "44px" }
            },
            "title2": {
              "weight": { "value": "{font.weight.bold}" },
              "text-transform": { "value": "none" },
              "font-size": { "value": "30px" },
              "line-height": { "value": "36px" }
            },
            "title3": {
              "weight": { "value": "{font.weight.bold}" },
              "text-transform": { "value": "none" },
              "font-size": { "value": "26px" },
              "line-height": { "value": "32px" }
            },
            "title4": {
              "weight": { "value": "{font.weight.bold}" },
              "text-transform": { "value": "none" },
              "font-size": { "value": "22px" },
              "line-height": { "value": "24px" }
            },
            "headline1": {
              "weight": { "value": "{font.weight.semibold}" },
              "text-transform": { "value": "none" },
              "font-size": { "value": "18px" },
              "line-height": { "value": "24px" }
            },
            "body1": {
              "weight": { "value": "{font.weight.regular}" },
              "text-transform": { "value": "none" },
              "font-size": { "value": "18px" },
              "line-height": { "value": "24px" }
            },
            "label1": {
              "weight": { "value": "{font.weight.semibold}" },
              "text-transform": { "value": "none" },
              "font-size": { "value": "16px" },
              "line-height": { "value": "20px" }
            },
            "label2": {
              "weight": { "value": "{font.weight.regular}" },
              "text-transform": { "value": "none" },
              "font-size": { "value": "16px" },
              "line-height": { "value": "20px" }
            },
            "caption1": {
              "weight": { "value": "{font.weight.semibold}" },
              "text-transform": { "value": "none" },
              "font-size": { "value": "14px" },
              "line-height": { "value": "20px" }
            },
            "caption2": {
              "weight": { "value": "{font.weight.regular}" },
              "text-transform": { "value": "none" },
              "font-size": { "value": "14px" },
              "line-height": { "value": "20px" }
            },
            "legal1": {
              "weight": { "value": "{font.weight.semibold}" },
              "text-transform": { "value": "none" },
              "font-size": { "value": "13px" },
              "line-height": { "value": "16px" }
            }
          }
        }
      };
  
    for (const [key, val] of Object.entries(prop1)) {
      res.font.typography[key][sub1] = { value: `${val}px` } ;
    }
    for (const [key, val] of Object.entries(prop2)) {
      res.font.typography[key][sub2] = { value: `${val}px` } ;
    }
  
    console.log(JSON.stringify(res));
  };

  parseTypo(xxxLarge.fontSize, xxxLarge.lineHeight, "font-size", "line-height");

const test = {
  font: {
    "font-size": {
      display1: { weight: { value: 48 } },
      title1: { weight: { value: 32 } },
      title2: { weight: { value: 28 } },
      title3: { weight: { value: 24 } },
      title4: { weight: { value: 20 } },
      headline1: { weight: { value: 16 } },
      body1: { weight: { value: 16 } },
      label1: { weight: { value: 14 } },
      label2: { weight: { value: 14 } },
      caption1: { weight: { value: 12 } },
      caption2: { weight: { value: 12 } },
      legal1: { weight: { value: 11 } },
    },
  },
};

// parsecolor(darkSpectrum);

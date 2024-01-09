const StyleDictionaryPackage = require("style-dictionary");
const { makeSdTailwindConfig } = require("sd-tailwindcss-transformer");

const colorModes = ["light", "dark"];
const scaleModes = [
  "medium",
  "xSmall",
  "small",
  "large",
  "xLarge",
  "xxLarge",
  "xxxLarge",
];
const DEFAULT_COLOR_MODE = "light";
const DEFAULT_SCALE_MODE = "medium";

function getStyleDictionaryConfig(
  brand,
  platform = "web",
  mode = DEFAULT_COLOR_MODE,
) {
  const allScalesModesMinusDefault = scaleModes.filter(
    (mode) => mode !== DEFAULT_SCALE_MODE
  );

  // This is saying find all files in the token folder
  // that does not have color mode tags (dark) as no tag is considered light 
  // and all scale modes except DEFAULT_SCALE_MODE
  let source = [
    `tokens/brands/${brand}/!(*.${colorModes
      .concat(allScalesModesMinusDefault)
      .join(`|*.`)}).json`,
    `tokens/globals/**/!(*.${colorModes
      .concat(allScalesModesMinusDefault)
      .join(`|*.`)}).json`,
    `tokens/platforms/${platform}/!(*.${colorModes
      .concat(allScalesModesMinusDefault)
      .join(`|*.`)}).json`,
  ];
  let include = [];
  let webCssFiles = {
    destination: `variables.css`,
    format: `css/variables`,
    options: {
      outputReferences: true,
    },
  };

  if (mode !== "light") {
    source = [
      // Kind of the opposite of above, this will find any files
      // that have the file extension .dark.json5
      `tokens/brands/${brand}/*.${mode}.json`,
      `tokens/globals/**/*.${mode}.json`,
      `tokens/platforms/${platform}/*.${mode}.json`,
    ];
    include = [
      `tokens/brands/${brand}/!(*.${colorModes
        .concat(allScalesModesMinusDefault)
        .join(`|*.`)}).json`,
      `tokens/globals/**/!(*.${colorModes
        .concat(allScalesModesMinusDefault)
        .join(`|*.`)}).json`,
      `tokens/platforms/${platform}/!(*.${colorModes
        .concat(allScalesModesMinusDefault)
        .join(`|*.`)}).json`,
    ];
    webCssFiles = {
      destination: `variables-${mode}.css`,
      format: `css/variables`,
      // only outputting the tokens from files with 'mode' in the filepath
      filter: (token) => token.filePath.indexOf(`.${mode}`) > -1,
      options: {
        outputReferences: true,
        selector: `.${mode}`,
      },
    };
  }

  return {
    source: source,
    include: include,
    platforms: {
      web: {
        transformGroup: "web",
        buildPath: `build/web/${brand}/`,
        files: [webCssFiles],
      },
    },
  };
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

["default", "brand-1", "brand-2"].map(function (brand) {
  console.log("\n==============================================");

  const modes = colorModes.concat(scaleModes).map((mode) => {
    console.log(`\nProcessing: [web] [${mode}] [${brand}]`);

    StyleDictionaryPackage.extend(
      getStyleDictionaryConfig(brand, "web", mode)
    ).buildAllPlatforms();
  });

  console.log(`\nProcessing: [web] [dark] [${brand}] =>>>>>>> Tailwind`);


  const allScalesModesMinusDefault = scaleModes.filter(
    (mode) => mode !== DEFAULT_SCALE_MODE
  );

  // This is saying find all files in the token folder
  // that does not have color mode tags (dark)
  // and all scale modes except DEFAULT_SCALE_MODE
  let source = [
    `tokens/brands/${brand}/!(*.${colorModes
      .concat(allScalesModesMinusDefault)
      .join(`|*.`)}).json`,
    `tokens/globals/**/!(*.${colorModes
      .concat(allScalesModesMinusDefault)
      .join(`|*.`)}).json`,
    `tokens/platforms/web/!(*.${colorModes
      .concat(allScalesModesMinusDefault)
      .join(`|*.`)}).json`,
  ];
  const sdConfig = makeSdTailwindConfig({
    type: "all",
    isVariables: true,
    buildPath: `build/web/${brand}/`,
    source: source,
  });

  sdConfig.platforms["web"] = {
    transformGroup: "web",
    buildPath: `build/web/${brand}/`,
    files: [
      {
        destination: "tailwind.css",
        format: "css/variables",
        options: {
          outputReferences: true,
        },
      },
    ],
  };

  StyleDictionaryPackage.extend(sdConfig).buildAllPlatforms();

  console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");

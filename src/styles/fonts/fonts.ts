import {
  Google_Sans_Code,
  JetBrains_Mono,
  Jura,
  Poppins,
  Roboto,
  Titan_One,
} from "next/font/google";

export const roboto = Roboto({ subsets: ["latin"] });

export const titanOne = Titan_One({ weight: ["400"] });

export const poppins = Poppins({ weight: ["100", "200", "400", "500"] });

export const jura = Jura({ weight: ["300", "400", "500", "600", "700"] });

export const jetBrainsMono = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const sansCode = Google_Sans_Code({
  weight: ["300", "400", "500", "600", "700"],
});

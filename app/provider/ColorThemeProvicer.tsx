import { createContext, useContext, useEffect, useState } from "react"

export const themes = {
    t3chat: {
        name: "T3 Chat",
        css: {
            light: `
        :root {
          --background: oklch(0.9754 0.0084 325.6414);
          --foreground: oklch(0.3257 0.1161 325.0372);
          --card: oklch(0.9754 0.0084 325.6414);
          --card-foreground: oklch(0.3257 0.1161 325.0372);
          --popover: oklch(1.0000 0 0);
          --popover-foreground: oklch(0.3257 0.1161 325.0372);
          --primary: oklch(0.5316 0.1409 355.1999);
          --primary-foreground: oklch(1.0000 0 0);
          --secondary: oklch(0.8696 0.0675 334.8991);
          --secondary-foreground: oklch(0.4448 0.1341 324.7991);
          --muted: oklch(0.9395 0.0260 331.5454);
          --muted-foreground: oklch(0.4924 0.1244 324.4523);
          --accent: oklch(0.8696 0.0675 334.8991);
          --accent-foreground: oklch(0.4448 0.1341 324.7991);
          --destructive: oklch(0.5248 0.1368 20.8317);
          --destructive-foreground: oklch(1.0000 0 0);
          --border: oklch(0.8568 0.0829 328.9110);
          --input: oklch(0.8517 0.0558 336.6002);
          --ring: oklch(0.5916 0.2180 0.5844);
          --chart-1: oklch(0.6038 0.2363 344.4657);
          --chart-2: oklch(0.4445 0.2251 300.6246);
          --chart-3: oklch(0.3790 0.0438 226.1538);
          --chart-4: oklch(0.8330 0.1185 88.3461);
          --chart-5: oklch(0.7843 0.1256 58.9964);
          --sidebar: oklch(0.9360 0.0288 320.5788);
          --sidebar-foreground: oklch(0.4948 0.1909 354.5435);
          --sidebar-primary: oklch(0.3963 0.0251 285.1962);
          --sidebar-primary-foreground: oklch(0.9668 0.0124 337.5228);
          --sidebar-accent: oklch(0.9789 0.0013 106.4235);
          --sidebar-accent-foreground: oklch(0.3963 0.0251 285.1962);
          --sidebar-border: oklch(0.9383 0.0026 48.7178);
          --sidebar-ring: oklch(0.5916 0.2180 0.5844);
        }
      `,
            dark: `
        .dark {
          --background: oklch(0.2409 0.0201 307.5346);
          --foreground: oklch(0.8398 0.0387 309.5391);
          --card: oklch(0.2803 0.0232 307.5413);
          --card-foreground: oklch(0.8456 0.0302 341.4597);
          --popover: oklch(0.1548 0.0132 338.9015);
          --popover-foreground: oklch(0.9647 0.0091 341.8035);
          --primary: oklch(0.4607 0.1853 4.0994);
          --primary-foreground: oklch(0.8560 0.0618 346.3684);
          --secondary: oklch(0.3137 0.0306 310.0610);
          --secondary-foreground: oklch(0.8483 0.0382 307.9613);
          --muted: oklch(0.2634 0.0219 309.4748);
          --muted-foreground: oklch(0.7940 0.0372 307.1032);
          --accent: oklch(0.3649 0.0508 308.4911);
          --accent-foreground: oklch(0.9647 0.0091 341.8035);
          --destructive: oklch(0.2258 0.0524 12.6119);
          --destructive-foreground: oklch(1.0000 0 0);
          --border: oklch(0.3286 0.0154 343.4461);
          --input: oklch(0.3387 0.0195 332.8347);
          --ring: oklch(0.5916 0.2180 0.5844);
          --chart-1: oklch(0.5316 0.1409 355.1999);
          --chart-2: oklch(0.5633 0.1912 306.8561);
          --chart-3: oklch(0.7227 0.1502 60.5799);
          --chart-4: oklch(0.6193 0.2029 312.7422);
          --chart-5: oklch(0.6118 0.2093 6.1387);
          --sidebar: oklch(0.1893 0.0163 331.0475);
          --sidebar-foreground: oklch(0.8607 0.0293 343.6612);
          --sidebar-primary: oklch(0.4882 0.2172 264.3763);
          --sidebar-primary-foreground: oklch(1.0000 0 0);
          --sidebar-accent: oklch(0.2337 0.0261 338.1961);
          --sidebar-accent-foreground: oklch(0.9674 0.0013 286.3752);
          --sidebar-border: oklch(0 0 0);
          --sidebar-ring: oklch(0.5916 0.2180 0.5844);
        }
      `,
        },
    },
    doom64: {
        name: "Doom 64",
        css: {
            light: `
        :root {
          --background: oklch(0.8452 0 0);
          --foreground: oklch(0.2393 0 0);
          --card: oklch(0.7572 0 0);
          --card-foreground: oklch(0.2393 0 0);
          --popover: oklch(0.7572 0 0);
          --popover-foreground: oklch(0.2393 0 0);
          --primary: oklch(0.5016 0.1887 27.4816);
          --primary-foreground: oklch(1.0000 0 0);
          --secondary: oklch(0.4955 0.0896 126.1858);
          --secondary-foreground: oklch(1.0000 0 0);
          --muted: oklch(0.7826 0 0);
          --muted-foreground: oklch(0.4091 0 0);
          --accent: oklch(0.5880 0.0993 245.7394);
          --accent-foreground: oklch(1.0000 0 0);
          --destructive: oklch(0.7076 0.1975 46.4558);
          --destructive-foreground: oklch(0 0 0);
          --border: oklch(0.4313 0 0);
          --input: oklch(0.4313 0 0);
          --ring: oklch(0.5016 0.1887 27.4816);
          --chart-1: oklch(0.5016 0.1887 27.4816);
          --chart-2: oklch(0.4955 0.0896 126.1858);
          --chart-3: oklch(0.5880 0.0993 245.7394);
          --chart-4: oklch(0.7076 0.1975 46.4558);
          --chart-5: oklch(0.5656 0.0431 40.4319);
          --sidebar: oklch(0.7572 0 0);
          --sidebar-foreground: oklch(0.2393 0 0);
          --sidebar-primary: oklch(0.5016 0.1887 27.4816);
          --sidebar-primary-foreground: oklch(1.0000 0 0);
          --sidebar-accent: oklch(0.5880 0.0993 245.7394);
          --sidebar-accent-foreground: oklch(1.0000 0 0);
          --sidebar-border: oklch(0.4313 0 0);
          --sidebar-ring: oklch(0.5016 0.1887 27.4816);
          --font-sans: "Oxanium", sans-serif;
          --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          --font-mono: "Source Code Pro", monospace;
          --radius: 0px;
          --shadow-2xs: 0px 2px 4px 0px hsl(0 0% 0% / 0.20);
          --shadow-xs: 0px 2px 4px 0px hsl(0 0% 0% / 0.20);
          --shadow-sm: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 1px 2px -1px hsl(0 0% 0% / 0.40);
          --shadow: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 1px 2px -1px hsl(0 0% 0% / 0.40);
          --shadow-md: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 2px 4px -1px hsl(0 0% 0% / 0.40);
          --shadow-lg: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 4px 6px -1px hsl(0 0% 0% / 0.40);
          --shadow-xl: 0px 2px 4px 0px hsl(0 0% 0% / 0.40), 0px 8px 10px -1px hsl(0 0% 0% / 0.40);
          --shadow-2xl: 0px 2px 4px 0px hsl(0 0% 0% / 1.00);
        }
      `,
            dark: `
        .dark {
          --background: oklch(0.2178 0 0);
          --foreground: oklch(0.9067 0 0);
          --card: oklch(0.2850 0 0);
          --card-foreground: oklch(0.9067 0 0);
          --popover: oklch(0.2850 0 0);
          --popover-foreground: oklch(0.9067 0 0);
          --primary: oklch(0.6083 0.2090 27.0276);
          --primary-foreground: oklch(1.0000 0 0);
          --secondary: oklch(0.6423 0.1467 133.0145);
          --secondary-foreground: oklch(0 0 0);
          --muted: oklch(0.2645 0 0);
          --muted-foreground: oklch(0.7058 0 0);
          --accent: oklch(0.7482 0.1235 244.7492);
          --accent-foreground: oklch(0 0 0);
          --destructive: oklch(0.7839 0.1719 68.0943);
          --destructive-foreground: oklch(0 0 0);
          --border: oklch(0.4091 0 0);
          --input: oklch(0.4091 0 0);
          --ring: oklch(0.6083 0.2090 27.0276);
          --chart-1: oklch(0.6083 0.2090 27.0276);
          --chart-2: oklch(0.6423 0.1467 133.0145);
          --chart-3: oklch(0.7482 0.1235 244.7492);
          --chart-4: oklch(0.7839 0.1719 68.0943);
          --chart-5: oklch(0.6471 0.0334 40.7963);
          --sidebar: oklch(0.1913 0 0);
          --sidebar-foreground: oklch(0.9067 0 0);
          --sidebar-primary: oklch(0.6083 0.2090 27.0276);
          --sidebar-primary-foreground: oklch(1.0000 0 0);
          --sidebar-accent: oklch(0.7482 0.1235 244.7492);
          --sidebar-accent-foreground: oklch(0 0 0);
          --sidebar-border: oklch(0.4091 0 0);
          --sidebar-ring: oklch(0.6083 0.2090 27.0276);
          --font-sans: "Oxanium", sans-serif;
          --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          --font-mono: "Source Code Pro", monospace;
          --radius: 0px;
          --shadow-2xs: 0px 2px 5px 0px hsl(0 0% 0% / 0.30);
          --shadow-xs: 0px 2px 5px 0px hsl(0 0% 0% / 0.30);
          --shadow-sm: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 1px 2px -1px hsl(0 0% 0% / 0.60);
          --shadow: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 1px 2px -1px hsl(0 0% 0% / 0.60);
          --shadow-md: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 2px 4px -1px hsl(0 0% 0% / 0.60);
          --shadow-lg: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 4px 6px -1px hsl(0 0% 0% / 0.60);
          --shadow-xl: 0px 2px 5px 0px hsl(0 0% 0% / 0.60), 0px 8px 10px -1px hsl(0 0% 0% / 0.60);
          --shadow-2xl: 0px 2px 5px 0px hsl(0 0% 0% / 1.50);
        }
      `,
        },
    },
    "elegant-luxury": {
        name: "Elegant Luxury",
        css: {
            light: `
        :root {
          --background: oklch(0.9779 0.0042 56.3756);
          --foreground: oklch(0.2178 0 0);
          --card: oklch(0.9779 0.0042 56.3756);
          --card-foreground: oklch(0.2178 0 0);
          --popover: oklch(0.9779 0.0042 56.3756);
          --popover-foreground: oklch(0.2178 0 0);
          --primary: oklch(0.4650 0.1470 24.9381);
          --primary-foreground: oklch(1.0000 0 0);
          --secondary: oklch(0.9625 0.0385 89.0943);
          --secondary-foreground: oklch(0.4847 0.1022 75.1153);
          --muted: oklch(0.9431 0.0068 53.4442);
          --muted-foreground: oklch(0.4444 0.0096 73.6390);
          --accent: oklch(0.9619 0.0580 95.6174);
          --accent-foreground: oklch(0.3958 0.1331 25.7230);
          --destructive: oklch(0.4437 0.1613 26.8994);
          --destructive-foreground: oklch(1.0000 0 0);
          --border: oklch(0.9355 0.0324 80.9937);
          --input: oklch(0.9355 0.0324 80.9937);
          --ring: oklch(0.4650 0.1470 24.9381);
          --chart-1: oklch(0.5054 0.1905 27.5181);
          --chart-2: oklch(0.4650 0.1470 24.9381);
          --chart-3: oklch(0.3958 0.1331 25.7230);
          --chart-4: oklch(0.5553 0.1455 48.9975);
          --chart-5: oklch(0.4732 0.1247 46.2007);
          --sidebar: oklch(0.9431 0.0068 53.4442);
          --sidebar-foreground: oklch(0.2178 0 0);
          --sidebar-primary: oklch(0.4650 0.1470 24.9381);
          --sidebar-primary-foreground: oklch(1.0000 0 0);
          --sidebar-accent: oklch(0.9619 0.0580 95.6174);
          --sidebar-accent-foreground: oklch(0.3958 0.1331 25.7230);
          --sidebar-border: oklch(0.9355 0.0324 80.9937);
          --sidebar-ring: oklch(0.4650 0.1470 24.9381);
          --font-sans: Poppins, sans-serif;
          --font-serif: Libre Baskerville, serif;
          --font-mono: IBM Plex Mono, monospace;
          --radius: 0.375rem;
          --shadow-2xs: 1px 1px 16px -2px hsl(0 63% 18% / 0.06);
          --shadow-xs: 1px 1px 16px -2px hsl(0 63% 18% / 0.06);
          --shadow-sm: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 1px 2px -3px hsl(0 63% 18% / 0.12);
          --shadow: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 1px 2px -3px hsl(0 63% 18% / 0.12);
          --shadow-md: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 2px 4px -3px hsl(0 63% 18% / 0.12);
          --shadow-lg: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 4px 6px -3px hsl(0 63% 18% / 0.12);
          --shadow-xl: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 8px 10px -3px hsl(0 63% 18% / 0.12);
          --shadow-2xl: 1px 1px 16px -2px hsl(0 63% 18% / 0.30);
        }
      `,
            dark: `
        .dark {
          --background: oklch(0.2161 0.0061 56.0434);
          --foreground: oklch(0.9699 0.0013 106.4238);
          --card: oklch(0.2685 0.0063 34.2976);
          --card-foreground: oklch(0.9699 0.0013 106.4238);
          --popover: oklch(0.2685 0.0063 34.2976);
          --popover-foreground: oklch(0.9699 0.0013 106.4238);
          --primary: oklch(0.5054 0.1905 27.5181);
          --primary-foreground: oklch(0.9779 0.0042 56.3756);
          --secondary: oklch(0.4732 0.1247 46.2007);
          --secondary-foreground: oklch(0.9619 0.0580 95.6174);
          --muted: oklch(0.2685 0.0063 34.2976);
          --muted-foreground: oklch(0.8687 0.0043 56.3660);
          --accent: oklch(0.5553 0.1455 48.9975);
          --accent-foreground: oklch(0.9619 0.0580 95.6174);
          --destructive: oklch(0.6368 0.2078 25.3313);
          --destructive-foreground: oklch(1.0000 0 0);
          --border: oklch(0.3741 0.0087 67.5582);
          --input: oklch(0.3741 0.0087 67.5582);
          --ring: oklch(0.5054 0.1905 27.5181);
          --chart-1: oklch(0.7106 0.1661 22.2162);
          --chart-2: oklch(0.6368 0.2078 25.3313);
          --chart-3: oklch(0.5771 0.2152 27.3250);
          --chart-4: oklch(0.8369 0.1644 84.4286);
          --chart-5: oklch(0.7686 0.1647 70.0804);
          --sidebar: oklch(0.2161 0.0061 56.0434);
          --sidebar-foreground: oklch(0.9699 0.0013 106.4238);
          --sidebar-primary: oklch(0.5054 0.1905 27.5181);
          --sidebar-primary-foreground: oklch(0.9779 0.0042 56.3756);
          --sidebar-accent: oklch(0.5553 0.1455 48.9975);
          --sidebar-accent-foreground: oklch(0.9619 0.0580 95.6174);
          --sidebar-border: oklch(0.3741 0.0087 67.5582);
          --sidebar-ring: oklch(0.5054 0.1905 27.5181);
          --font-sans: Poppins, sans-serif;
          --font-serif: Libre Baskerville, serif;
          --font-mono: IBM Plex Mono, monospace;
          --radius: 0.375rem;
          --shadow-2xs: 1px 1px 16px -2px hsl(0 63% 18% / 0.06);
          --shadow-xs: 1px 1px 16px -2px hsl(0 63% 18% / 0.06);
          --shadow-sm: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 1px 2px -3px hsl(0 63% 18% / 0.12);
          --shadow: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 1px 2px -3px hsl(0 63% 18% / 0.12);
          --shadow-md: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 2px 4px -3px hsl(0 63% 18% / 0.12);
          --shadow-lg: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 4px 6px -3px hsl(0 63% 18% / 0.12);
          --shadow-xl: 1px 1px 16px -2px hsl(0 63% 18% / 0.12), 1px 8px 10px -3px hsl(0 63% 18% / 0.12);
          --shadow-2xl: 1px 1px 16px -2px hsl(0 63% 18% / 0.30);
        }
      `,
        },
    },
    "midnight-bloom": {
        name: "Midnight Bloom",
        css: {
            light: `
                :root {
                  --background: oklch(0.9821 0 0);
                  --foreground: oklch(0.3211 0 0);
                  --card: oklch(1.0000 0 0);
                  --card-foreground: oklch(0.3211 0 0);
                  --popover: oklch(1.0000 0 0);
                  --popover-foreground: oklch(0.3211 0 0);
                  --primary: oklch(0.5676 0.2021 283.0838);
                  --primary-foreground: oklch(1.0000 0 0);
                  --secondary: oklch(0.8214 0.0720 249.3482);
                  --secondary-foreground: oklch(0.3211 0 0);
                  --muted: oklch(0.8202 0.0213 91.6163);
                  --muted-foreground: oklch(0.5382 0 0);
                  --accent: oklch(0.6475 0.0642 117.4260);
                  --accent-foreground: oklch(1.0000 0 0);
                  --destructive: oklch(0.6368 0.2078 25.3313);
                  --destructive-foreground: oklch(1.0000 0 0);
                  --border: oklch(0.8699 0 0);
                  --input: oklch(0.8699 0 0);
                  --ring: oklch(0.5676 0.2021 283.0838);
                  --chart-1: oklch(0.5676 0.2021 283.0838);
                  --chart-2: oklch(0.5261 0.1705 314.6534);
                  --chart-3: oklch(0.3390 0.1793 301.6848);
                  --chart-4: oklch(0.6746 0.1414 261.3380);
                  --chart-5: oklch(0.5880 0.0993 245.7394);
                  --sidebar: oklch(0.9821 0 0);
                  --sidebar-foreground: oklch(0.3211 0 0);
                  --sidebar-primary: oklch(0.5676 0.2021 283.0838);
                  --sidebar-primary-foreground: oklch(1.0000 0 0);
                  --sidebar-accent: oklch(0.6475 0.0642 117.4260);
                  --sidebar-accent-foreground: oklch(1.0000 0 0);
                  --sidebar-border: oklch(0.8699 0 0);
                  --sidebar-ring: oklch(0.5676 0.2021 283.0838);
                  --font-sans: Montserrat, sans-serif;
                  --font-serif: Playfair Display, serif;
                  --font-mono: Source Code Pro, monospace;
                  --radius: 0.5rem;
                  --shadow-2xs: 0px 5px 10px -2px hsl(0 0% 0% / 0.05);
                  --shadow-xs: 0px 5px 10px -2px hsl(0 0% 0% / 0.05);
                  --shadow-sm: 0px 5px 10px -2px hsl(0 0% 0% / 0.10), 0px 1px 2px -3px hsl(0 0% 0% / 0.10);
                  --shadow: 0px 5px 10px -2px hsl(0 0% 0% / 0.10), 0px 1px 2px -3px hsl(0 0% 0% / 0.10);
                  --shadow-md: 0px 5px 10px -2px hsl(0 0% 0% / 0.10), 0px 2px 4px -3px hsl(0 0% 0% / 0.10);
                  --shadow-lg: 0px 5px 10px -2px hsl(0 0% 0% / 0.10), 0px 4px 6px -3px hsl(0 0% 0% / 0.10);
                  --shadow-xl: 0px 5px 10px -2px hsl(0 0% 0% / 0.10), 0px 8px 10px -3px hsl(0 0% 0% / 0.10);
                  --shadow-2xl: 0px 5px 10px -2px hsl(0 0% 0% / 0.25);
                }
              `,
            dark: `
                .dark {
                  --background: oklch(0.2303 0.0125 264.2926);
                  --foreground: oklch(0.9219 0 0);
                  --card: oklch(0.3210 0.0078 223.6661);
                  --card-foreground: oklch(0.9219 0 0);
                  --popover: oklch(0.3210 0.0078 223.6661);
                  --popover-foreground: oklch(0.9219 0 0);
                  --primary: oklch(0.5676 0.2021 283.0838);
                  --primary-foreground: oklch(1.0000 0 0);
                  --secondary: oklch(0.3390 0.1793 301.6848);
                  --secondary-foreground: oklch(0.9219 0 0);
                  --muted: oklch(0.3867 0 0);
                  --muted-foreground: oklch(0.7155 0 0);
                  --accent: oklch(0.6746 0.1414 261.3380);
                  --accent-foreground: oklch(0.9219 0 0);
                  --destructive: oklch(0.6368 0.2078 25.3313);
                  --destructive-foreground: oklch(1.0000 0 0);
                  --border: oklch(0.3867 0 0);
                  --input: oklch(0.3867 0 0);
                  --ring: oklch(0.5676 0.2021 283.0838);
                  --chart-1: oklch(0.5676 0.2021 283.0838);
                  --chart-2: oklch(0.5261 0.1705 314.6534);
                  --chart-3: oklch(0.3390 0.1793 301.6848);
                  --chart-4: oklch(0.6746 0.1414 261.3380);
                  --chart-5: oklch(0.5880 0.0993 245.7394);
                  --sidebar: oklch(0.2303 0.0125 264.2926);
                  --sidebar-foreground: oklch(0.9219 0 0);
                  --sidebar-primary: oklch(0.5676 0.2021 283.0838);
                  --sidebar-primary-foreground: oklch(1.0000 0 0);
                  --sidebar-accent: oklch(0.6746 0.1414 261.3380);
                  --sidebar-accent-foreground: oklch(0.9219 0 0);
                  --sidebar-border: oklch(0.3867 0 0);
                  --sidebar-ring: oklch(0.5676 0.2021 283.0838);
                  --font-sans: Montserrat, sans-serif;
                  --font-serif: Playfair Display, serif;
                  --font-mono: Source Code Pro, monospace;
                  --radius: 0.5rem;
                  --shadow-2xs: 0px 5px 10px -2px hsl(0 0% 0% / 0.05);
                  --shadow-xs: 0px 5px 10px -2px hsl(0 0% 0% / 0.05);
                  --shadow-sm: 0px 5px 10px -2px hsl(0 0% 0% / 0.10), 0px 1px 2px -3px hsl(0 0% 0% / 0.10);
                  --shadow: 0px 5px 10px -2px hsl(0 0% 0% / 0.10), 0px 1px 2px -3px hsl(0 0% 0% / 0.10);
                  --shadow-md: 0px 5px 10px -2px hsl(0 0% 0% / 0.10), 0px 2px 4px -3px hsl(0 0% 0% / 0.10);
                  --shadow-lg: 0px 5px 10px -2px hsl(0 0% 0% / 0.10), 0px 4px 6px -3px hsl(0 0% 0% / 0.10);
                  --shadow-xl: 0px 5px 10px -2px hsl(0 0% 0% / 0.10), 0px 8px 10px -3px hsl(0 0% 0% / 0.10);
                  --shadow-2xl: 0px 5px 10px -2px hsl(0 0% 0% / 0.25);
                }
              `,
        },
    },
    default : {
        name: "Modern Minimal",
        css: {
            light: `:root {
            --background: oklch(1.0000 0 0);
            --foreground: oklch(0.3211 0 0);
            --card: oklch(1.0000 0 0);
            --card-foreground: oklch(0.3211 0 0);
            --popover: oklch(1.0000 0 0);
            --popover-foreground: oklch(0.3211 0 0);
            --primary: oklch(0.6231 0.1880 259.8145);
            --primary-foreground: oklch(1.0000 0 0);
            --secondary: oklch(0.9670 0.0029 264.5419);
            --secondary-foreground: oklch(0.4461 0.0263 256.8018);
            --muted: oklch(0.9846 0.0017 247.8389);
            --muted-foreground: oklch(0.5510 0.0234 264.3637);
            --accent: oklch(0.9514 0.0250 236.8242);
            --accent-foreground: oklch(0.3791 0.1378 265.5222);
            --destructive: oklch(0.6368 0.2078 25.3313);
            --destructive-foreground: oklch(1.0000 0 0);
            --border: oklch(0.9276 0.0058 264.5313);
            --input: oklch(0.9276 0.0058 264.5313);
            --ring: oklch(0.6231 0.1880 259.8145);
            --chart-1: oklch(0.6231 0.1880 259.8145);
            --chart-2: oklch(0.5461 0.2152 262.8809);
            --chart-3: oklch(0.4882 0.2172 264.3763);
            --chart-4: oklch(0.4244 0.1809 265.6377);
            --chart-5: oklch(0.3791 0.1378 265.5222);
            --sidebar: oklch(0.9846 0.0017 247.8389);
            --sidebar-foreground: oklch(0.3211 0 0);
            --sidebar-primary: oklch(0.6231 0.1880 259.8145);
            --sidebar-primary-foreground: oklch(1.0000 0 0);
            --sidebar-accent: oklch(0.9514 0.0250 236.8242);
            --sidebar-accent-foreground: oklch(0.3791 0.1378 265.5222);
            --sidebar-ring: oklch(0.6231 0.1880 259.8145);
            --font-sans: Inter, sans-serif;
            --font-serif: Source Serif 4, serif;
            --font-mono: JetBrains Mono, monospace;
            --radius: 0.375rem;
            --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
            --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
            --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
            --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
            --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
            --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
            --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
            --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
            --sidebar-border: oklch(0.9276 0.0058 264.5313);
            }`,
            dark: `.dark {
                --foreground: oklch(0.9219 0 0);
                --card: oklch(0.2686 0 0);
                --card-foreground: oklch(0.9219 0 0);
                --popover: oklch(0.2686 0 0);
                --popover-foreground: oklch(0.9219 0 0);
                --primary: oklch(0.6231 0.1880 259.8145);
                --primary-foreground: oklch(1.0000 0 0);
                --secondary: oklch(0.2686 0 0);
                --secondary-foreground: oklch(0.9219 0 0);
                --muted: oklch(0.2686 0 0);
                --muted-foreground: oklch(0.7155 0 0);
                --accent: oklch(0.3791 0.1378 265.5222);
                --accent-foreground: oklch(0.8823 0.0571 254.1284);
                --destructive: oklch(0.6368 0.2078 25.3313);
                --destructive-foreground: oklch(1.0000 0 0);
                --border: oklch(0.3715 0 0);
                --input: oklch(0.3715 0 0);
                --ring: oklch(0.6231 0.1880 259.8145);
                --chart-1: oklch(0.7137 0.1434 254.6240);
                --chart-2: oklch(0.6231 0.1880 259.8145);
                --chart-3: oklch(0.5461 0.2152 262.8809);
                --chart-4: oklch(0.4882 0.2172 264.3763);
                --chart-5: oklch(0.4244 0.1809 265.6377);
                --sidebar: oklch(0.2046 0 0);
                --sidebar-foreground: oklch(0.9219 0 0);
                --sidebar-primary: oklch(0.6231 0.1880 259.8145);
                --sidebar-primary-foreground: oklch(1.0000 0 0);
                --sidebar-accent: oklch(0.3791 0.1378 265.5222);
                --sidebar-accent-foreground: oklch(0.8823 0.0571 254.1284);
                --sidebar-border: oklch(0.3715 0 0);
                --sidebar-ring: oklch(0.6231 0.1880 259.8145);
                --font-sans: Inter, sans-serif;
                --font-serif: Source Serif 4, serif;
                --font-mono: JetBrains Mono, monospace;
                --radius: 0.375rem;
                --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
                --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
                --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
                --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
                --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
                --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
                --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
                --background: oklch(0.2046 0 0);
                --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
            }`,
        },
    },
    "northern-lights": {
        name: "Northern Lights",
        css: {
            light: `:root {
                --foreground: oklch(0.3211 0 0);
                --card: oklch(1.0000 0 0);
                --card-foreground: oklch(0.3211 0 0);
                --popover: oklch(1.0000 0 0);
                --popover-foreground: oklch(0.3211 0 0);
                --primary: oklch(0.6487 0.1538 150.3071);
                --primary-foreground: oklch(1.0000 0 0);
                --secondary: oklch(0.6746 0.1414 261.3380);
                --secondary-foreground: oklch(1.0000 0 0);
                --muted: oklch(0.8828 0.0285 98.1033);
                --muted-foreground: oklch(0.5382 0 0);
                --accent: oklch(0.8269 0.1080 211.9627);
                --accent-foreground: oklch(0.3211 0 0);
                --destructive: oklch(0.6368 0.2078 25.3313);
                --destructive-foreground: oklch(1.0000 0 0);
                --border: oklch(0.8699 0 0);
                --input: oklch(0.8699 0 0);
                --ring: oklch(0.6487 0.1538 150.3071);
                --chart-1: oklch(0.6487 0.1538 150.3071);
                --chart-2: oklch(0.6746 0.1414 261.3380);
                --chart-3: oklch(0.8269 0.1080 211.9627);
                --chart-4: oklch(0.5880 0.0993 245.7394);
                --chart-5: oklch(0.5905 0.1608 148.2409);
                --sidebar: oklch(0.9824 0.0013 286.3757);
                --sidebar-foreground: oklch(0.3211 0 0);
                --sidebar-primary: oklch(0.6487 0.1538 150.3071);
                --sidebar-primary-foreground: oklch(1.0000 0 0);
                --sidebar-accent: oklch(0.8269 0.1080 211.9627);
                --sidebar-accent-foreground: oklch(0.3211 0 0);
                --sidebar-border: oklch(0.8699 0 0);
                --sidebar-ring: oklch(0.6487 0.1538 150.3071);
                --font-sans: Plus Jakarta Sans, sans-serif;
                --font-serif: Source Serif 4, serif;
                --font-mono: JetBrains Mono, monospace;
                --radius: 0.5rem;
                --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
                --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
                --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
                --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
                --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
                --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
                --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
                --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
                --background: oklch(0.9824 0.0013 286.3757);
            }`,
            dark: `.dark {
                --background: oklch(0.2303 0.0125 264.2926);
                --card: oklch(0.3210 0.0078 223.6661);
                --card-foreground: oklch(0.9219 0 0);
                --popover: oklch(0.3210 0.0078 223.6661);
                --popover-foreground: oklch(0.9219 0 0);
                --primary: oklch(0.6487 0.1538 150.3071);
                --primary-foreground: oklch(1.0000 0 0);
                --secondary: oklch(0.5880 0.0993 245.7394);
                --secondary-foreground: oklch(0.9219 0 0);
                --muted: oklch(0.3867 0 0);
                --muted-foreground: oklch(0.7155 0 0);
                --accent: oklch(0.6746 0.1414 261.3380);
                --accent-foreground: oklch(0.9219 0 0);
                --destructive: oklch(0.6368 0.2078 25.3313);
                --destructive-foreground: oklch(1.0000 0 0);
                --border: oklch(0.3867 0 0);
                --input: oklch(0.3867 0 0);
                --ring: oklch(0.6487 0.1538 150.3071);
                --chart-1: oklch(0.6487 0.1538 150.3071);
                --chart-2: oklch(0.5880 0.0993 245.7394);
                --chart-3: oklch(0.6746 0.1414 261.3380);
                --chart-4: oklch(0.8269 0.1080 211.9627);
                --foreground: oklch(0.9219 0 0);
                --chart-5: oklch(0.5905 0.1608 148.2409);
                --sidebar: oklch(0.2303 0.0125 264.2926);
                --sidebar-foreground: oklch(0.9219 0 0);
                --sidebar-primary: oklch(0.6487 0.1538 150.3071);
                --sidebar-primary-foreground: oklch(1.0000 0 0);
                --sidebar-accent: oklch(0.6746 0.1414 261.3380);
                --sidebar-accent-foreground: oklch(0.9219 0 0);
                --sidebar-border: oklch(0.3867 0 0);
                --sidebar-ring: oklch(0.6487 0.1538 150.3071);
                --font-sans: Plus Jakarta Sans, sans-serif;
                --font-serif: Source Serif 4, serif;
                --font-mono: JetBrains Mono, monospace;
                --radius: 0.5rem;
                --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
                --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
                --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
                --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
                --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
                --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
                --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
                --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
            }`,
        },
    },
    "ocean-breeze": {
        name: "Ocean Breeze",
        css: {
            light: `:root {
  --background: oklch(0.9751 0.0127 244.2507);
  --foreground: oklch(0.3729 0.0306 259.7328);
  --card: oklch(1.0000 0 0);
  --card-foreground: oklch(0.3729 0.0306 259.7328);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.3729 0.0306 259.7328);
  --primary: oklch(0.7227 0.1920 149.5793);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9514 0.0250 236.8242);
  --secondary-foreground: oklch(0.4461 0.0263 256.8018);
  --muted: oklch(0.9670 0.0029 264.5419);
  --muted-foreground: oklch(0.5510 0.0234 264.3637);
  --accent: oklch(0.9505 0.0507 163.0508);
  --accent-foreground: oklch(0.3729 0.0306 259.7328);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.9276 0.0058 264.5313);
  --input: oklch(0.9276 0.0058 264.5313);
  --ring: oklch(0.7227 0.1920 149.5793);
  --chart-1: oklch(0.7227 0.1920 149.5793);
  --chart-2: oklch(0.6959 0.1491 162.4796);
  --chart-3: oklch(0.5960 0.1274 163.2254);
  --chart-4: oklch(0.5081 0.1049 165.6121);
  --chart-5: oklch(0.4318 0.0865 166.9128);
  --sidebar: oklch(0.9514 0.0250 236.8242);
  --sidebar-foreground: oklch(0.3729 0.0306 259.7328);
  --sidebar-primary: oklch(0.7227 0.1920 149.5793);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.9505 0.0507 163.0508);
  --sidebar-accent-foreground: oklch(0.3729 0.0306 259.7328);
  --sidebar-border: oklch(0.9276 0.0058 264.5313);
  --sidebar-ring: oklch(0.7227 0.1920 149.5793);
  --font-sans: DM Sans, sans-serif;
  --font-serif: Lora, serif;
  --font-mono: IBM Plex Mono, monospace;
  --radius: 0.5rem;
  --shadow-2xs: 0px 4px 8px -1px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0px 4px 8px -1px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10);
  --shadow: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10);
  --shadow-md: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 2px 4px -2px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 4px 6px -2px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 8px 10px -2px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0px 4px 8px -1px hsl(0 0% 0% / 0.25);
}`,
            dark: `.dark {
  --background: oklch(0.2077 0.0398 265.7549);
  --foreground: oklch(0.8717 0.0093 258.3382);
  --card: oklch(0.2795 0.0368 260.0310);
  --card-foreground: oklch(0.8717 0.0093 258.3382);
  --popover: oklch(0.2795 0.0368 260.0310);
  --popover-foreground: oklch(0.8717 0.0093 258.3382);
  --primary: oklch(0.7729 0.1535 163.2231);
  --primary-foreground: oklch(0.2077 0.0398 265.7549);
  --secondary: oklch(0.3351 0.0331 260.9120);
  --secondary-foreground: oklch(0.7118 0.0129 286.0665);
  --muted: oklch(0.2795 0.0368 260.0310);
  --muted-foreground: oklch(0.5510 0.0234 264.3637);
  --accent: oklch(0.3729 0.0306 259.7328);
  --accent-foreground: oklch(0.7118 0.0129 286.0665);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(0.2077 0.0398 265.7549);
  --border: oklch(0.4461 0.0263 256.8018);
  --input: oklch(0.4461 0.0263 256.8018);
  --ring: oklch(0.7729 0.1535 163.2231);
  --chart-1: oklch(0.7729 0.1535 163.2231);
  --chart-2: oklch(0.7845 0.1325 181.9120);
  --chart-3: oklch(0.7227 0.1920 149.5793);
  --chart-4: oklch(0.6959 0.1491 162.4796);
  --chart-5: oklch(0.5960 0.1274 163.2254);
  --sidebar: oklch(0.2795 0.0368 260.0310);
  --sidebar-foreground: oklch(0.8717 0.0093 258.3382);
  --sidebar-primary: oklch(0.7729 0.1535 163.2231);
  --sidebar-primary-foreground: oklch(0.2077 0.0398 265.7549);
  --sidebar-accent: oklch(0.3729 0.0306 259.7328);
  --sidebar-accent-foreground: oklch(0.7118 0.0129 286.0665);
  --sidebar-border: oklch(0.4461 0.0263 256.8018);
  --sidebar-ring: oklch(0.7729 0.1535 163.2231);
  --font-sans: DM Sans, sans-serif;
  --font-serif: Lora, serif;
  --font-mono: IBM Plex Mono, monospace;
  --radius: 0.5rem;
  --shadow-2xs: 0px 4px 8px -1px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0px 4px 8px -1px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10);
  --shadow: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10);
  --shadow-md: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 2px 4px -2px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 4px 6px -2px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 8px 10px -2px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0px 4px 8px -1px hsl(0 0% 0% / 0.25);
}`,
        },
    },
    "pastel-dreams": {
        name: "Pastel Dreams",
        css: {
            light: `:root {
  --background: oklch(0.9689 0.0090 314.7819);
  --foreground: oklch(0.3729 0.0306 259.7328);
  --card: oklch(1.0000 0 0);
  --card-foreground: oklch(0.3729 0.0306 259.7328);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.3729 0.0306 259.7328);
  --primary: oklch(0.7090 0.1592 293.5412);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9073 0.0530 306.0902);
  --secondary-foreground: oklch(0.4461 0.0263 256.8018);
  --muted: oklch(0.9464 0.0327 307.1745);
  --muted-foreground: oklch(0.5510 0.0234 264.3637);
  --accent: oklch(0.9376 0.0260 321.9388);
  --accent-foreground: oklch(0.3729 0.0306 259.7328);
  --destructive: oklch(0.8077 0.1035 19.5706);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.9073 0.0530 306.0902);
  --input: oklch(0.9073 0.0530 306.0902);
  --ring: oklch(0.7090 0.1592 293.5412);
  --chart-1: oklch(0.7090 0.1592 293.5412);
  --chart-2: oklch(0.6056 0.2189 292.7172);
  --chart-3: oklch(0.5413 0.2466 293.0090);
  --chart-4: oklch(0.4907 0.2412 292.5809);
  --chart-5: oklch(0.4320 0.2106 292.7591);
  --sidebar: oklch(0.9073 0.0530 306.0902);
  --sidebar-foreground: oklch(0.3729 0.0306 259.7328);
  --sidebar-primary: oklch(0.7090 0.1592 293.5412);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.9376 0.0260 321.9388);
  --sidebar-accent-foreground: oklch(0.3729 0.0306 259.7328);
  --sidebar-border: oklch(0.9073 0.0530 306.0902);
  --sidebar-ring: oklch(0.7090 0.1592 293.5412);
  --font-sans: Open Sans, sans-serif;
  --font-serif: Source Serif 4, serif;
  --font-mono: IBM Plex Mono, monospace;
  --radius: 1.5rem;
  --shadow-2xs: 0px 8px 16px -4px hsl(0 0% 0% / 0.04);
  --shadow-xs: 0px 8px 16px -4px hsl(0 0% 0% / 0.04);
  --shadow-sm: 0px 8px 16px -4px hsl(0 0% 0% / 0.08), 0px 1px 2px -5px hsl(0 0% 0% / 0.08);
  --shadow: 0px 8px 16px -4px hsl(0 0% 0% / 0.08), 0px 1px 2px -5px hsl(0 0% 0% / 0.08);
  --shadow-md: 0px 8px 16px -4px hsl(0 0% 0% / 0.08), 0px 2px 4px -5px hsl(0 0% 0% / 0.08);
  --shadow-lg: 0px 8px 16px -4px hsl(0 0% 0% / 0.08), 0px 4px 6px -5px hsl(0 0% 0% / 0.08);
  --shadow-xl: 0px 8px 16px -4px hsl(0 0% 0% / 0.08), 0px 8px 10px -5px hsl(0 0% 0% / 0.08);
  --shadow-2xl: 0px 8px 16px -4px hsl(0 0% 0% / 0.20);
}
`,
            dark: `.dark {
  --background: oklch(0.2161 0.0061 56.0434);
  --foreground: oklch(0.9299 0.0334 272.7879);
  --card: oklch(0.2805 0.0309 307.2326);
  --card-foreground: oklch(0.9299 0.0334 272.7879);
  --popover: oklch(0.2805 0.0309 307.2326);
  --popover-foreground: oklch(0.9299 0.0334 272.7879);
  --primary: oklch(0.7874 0.1179 295.7538);
  --primary-foreground: oklch(0.2161 0.0061 56.0434);
  --secondary: oklch(0.3416 0.0444 308.8496);
  --secondary-foreground: oklch(0.8717 0.0093 258.3382);
  --muted: oklch(0.2805 0.0309 307.2326);
  --muted-foreground: oklch(0.7137 0.0192 261.3246);
  --accent: oklch(0.3858 0.0509 304.6383);
  --accent-foreground: oklch(0.8717 0.0093 258.3382);
  --destructive: oklch(0.8077 0.1035 19.5706);
  --destructive-foreground: oklch(0.2161 0.0061 56.0434);
  --border: oklch(0.3416 0.0444 308.8496);
  --input: oklch(0.3416 0.0444 308.8496);
  --ring: oklch(0.7874 0.1179 295.7538);
  --chart-1: oklch(0.7874 0.1179 295.7538);
  --chart-2: oklch(0.7090 0.1592 293.5412);
  --chart-3: oklch(0.6056 0.2189 292.7172);
  --chart-4: oklch(0.5413 0.2466 293.0090);
  --chart-5: oklch(0.4907 0.2412 292.5809);
  --sidebar: oklch(0.3416 0.0444 308.8496);
  --sidebar-foreground: oklch(0.9299 0.0334 272.7879);
  --sidebar-primary: oklch(0.7874 0.1179 295.7538);
  --sidebar-primary-foreground: oklch(0.2161 0.0061 56.0434);
  --sidebar-accent: oklch(0.3858 0.0509 304.6383);
  --sidebar-accent-foreground: oklch(0.8717 0.0093 258.3382);
  --sidebar-border: oklch(0.3416 0.0444 308.8496);
  --sidebar-ring: oklch(0.7874 0.1179 295.7538);
  --font-sans: Open Sans, sans-serif;
  --font-serif: Source Serif 4, serif;
  --font-mono: IBM Plex Mono, monospace;
  --radius: 1.5rem;
  --shadow-2xs: 0px 8px 16px -4px hsl(0 0% 0% / 0.04);
  --shadow-xs: 0px 8px 16px -4px hsl(0 0% 0% / 0.04);
  --shadow-sm: 0px 8px 16px -4px hsl(0 0% 0% / 0.08), 0px 1px 2px -5px hsl(0 0% 0% / 0.08);
  --shadow: 0px 8px 16px -4px hsl(0 0% 0% / 0.08), 0px 1px 2px -5px hsl(0 0% 0% / 0.08);
  --shadow-md: 0px 8px 16px -4px hsl(0 0% 0% / 0.08), 0px 2px 4px -5px hsl(0 0% 0% / 0.08);
  --shadow-lg: 0px 8px 16px -4px hsl(0 0% 0% / 0.08), 0px 4px 6px -5px hsl(0 0% 0% / 0.08);
  --shadow-xl: 0px 8px 16px -4px hsl(0 0% 0% / 0.08), 0px 8px 10px -5px hsl(0 0% 0% / 0.08);
  --shadow-2xl: 0px 8px 16px -4px hsl(0 0% 0% / 0.20);
}`,
        },
    },
    "starry-night": {
        name: "Starry Night",
        css: {
            light: `:root {
  --background: oklch(0.9755 0.0045 258.3245);
  --foreground: oklch(0.2558 0.0433 268.0662);
  --card: oklch(0.9341 0.0132 251.5628);
  --card-foreground: oklch(0.2558 0.0433 268.0662);
  --popover: oklch(0.9856 0.0278 98.0540);
  --popover-foreground: oklch(0.2558 0.0433 268.0662);
  --primary: oklch(0.4815 0.1178 263.3758);
  --primary-foreground: oklch(0.9856 0.0278 98.0540);
  --secondary: oklch(0.8567 0.1164 81.0092);
  --secondary-foreground: oklch(0.2558 0.0433 268.0662);
  --muted: oklch(0.9202 0.0080 106.5563);
  --muted-foreground: oklch(0.4815 0.1178 263.3758);
  --accent: oklch(0.6896 0.0714 234.0387);
  --accent-foreground: oklch(0.9856 0.0278 98.0540);
  --destructive: oklch(0.2611 0.0376 322.5267);
  --destructive-foreground: oklch(0.9856 0.0278 98.0540);
  --border: oklch(0.7791 0.0156 251.1926);
  --input: oklch(0.6896 0.0714 234.0387);
  --ring: oklch(0.8567 0.1164 81.0092);
  --chart-1: oklch(0.4815 0.1178 263.3758);
  --chart-2: oklch(0.8567 0.1164 81.0092);
  --chart-3: oklch(0.6896 0.0714 234.0387);
  --chart-4: oklch(0.7791 0.0156 251.1926);
  --chart-5: oklch(0.2611 0.0376 322.5267);
  --sidebar: oklch(0.9341 0.0132 251.5628);
  --sidebar-foreground: oklch(0.2558 0.0433 268.0662);
  --sidebar-primary: oklch(0.4815 0.1178 263.3758);
  --sidebar-primary-foreground: oklch(0.9856 0.0278 98.0540);
  --sidebar-accent: oklch(0.8567 0.1164 81.0092);
  --sidebar-accent-foreground: oklch(0.2558 0.0433 268.0662);
  --sidebar-border: oklch(0.7791 0.0156 251.1926);
  --sidebar-ring: oklch(0.8567 0.1164 81.0092);
  --font-sans: Libre Baskerville, serif;
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0.5rem;
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
}`,
            dark: `.dark {
  --background: oklch(0.2204 0.0198 275.8439);
  --foreground: oklch(0.9366 0.0129 266.6974);
  --card: oklch(0.2703 0.0407 281.3036);
  --card-foreground: oklch(0.9366 0.0129 266.6974);
  --popover: oklch(0.2703 0.0407 281.3036);
  --popover-foreground: oklch(0.9097 0.1440 95.1120);
  --primary: oklch(0.4815 0.1178 263.3758);
  --primary-foreground: oklch(0.9097 0.1440 95.1120);
  --secondary: oklch(0.9097 0.1440 95.1120);
  --secondary-foreground: oklch(0.2703 0.0407 281.3036);
  --muted: oklch(0.2703 0.0407 281.3036);
  --muted-foreground: oklch(0.6243 0.0412 262.0375);
  --accent: oklch(0.8469 0.0524 264.7751);
  --accent-foreground: oklch(0.2204 0.0198 275.8439);
  --destructive: oklch(0.5280 0.1200 357.1130);
  --destructive-foreground: oklch(0.9097 0.1440 95.1120);
  --border: oklch(0.3072 0.0287 281.7681);
  --input: oklch(0.4815 0.1178 263.3758);
  --ring: oklch(0.9097 0.1440 95.1120);
  --chart-1: oklch(0.4815 0.1178 263.3758);
  --chart-2: oklch(0.9097 0.1440 95.1120);
  --chart-3: oklch(0.6896 0.0714 234.0387);
  --chart-4: oklch(0.6243 0.0412 262.0375);
  --chart-5: oklch(0.5280 0.1200 357.1130);
  --sidebar: oklch(0.2703 0.0407 281.3036);
  --sidebar-foreground: oklch(0.9366 0.0129 266.6974);
  --sidebar-primary: oklch(0.4815 0.1178 263.3758);
  --sidebar-primary-foreground: oklch(0.9097 0.1440 95.1120);
  --sidebar-accent: oklch(0.9097 0.1440 95.1120);
  --sidebar-accent-foreground: oklch(0.2703 0.0407 281.3036);
  --sidebar-border: oklch(0.3072 0.0287 281.7681);
  --sidebar-ring: oklch(0.9097 0.1440 95.1120);
  --font-sans: Libre Baskerville, serif;
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0.5rem;
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
}
`,
        },
    },
    "supabase": {
        name: "Supabase",
        css: {
            light: `:root {
  --background: oklch(0.9911 0 0);
  --foreground: oklch(0.2046 0 0);
  --card: oklch(0.9911 0 0);
  --card-foreground: oklch(0.2046 0 0);
  --popover: oklch(0.9911 0 0);
  --popover-foreground: oklch(0.4386 0 0);
  --primary: oklch(0.8348 0.1302 160.9080);
  --primary-foreground: oklch(0.2626 0.0147 166.4589);
  --secondary: oklch(0.9940 0 0);
  --secondary-foreground: oklch(0.2046 0 0);
  --muted: oklch(0.9461 0 0);
  --muted-foreground: oklch(0.2435 0 0);
  --accent: oklch(0.9461 0 0);
  --accent-foreground: oklch(0.2435 0 0);
  --destructive: oklch(0.5523 0.1927 32.7272);
  --destructive-foreground: oklch(0.9934 0.0032 17.2118);
  --border: oklch(0.9037 0 0);
  --input: oklch(0.9731 0 0);
  --ring: oklch(0.8348 0.1302 160.9080);
  --chart-1: oklch(0.8348 0.1302 160.9080);
  --chart-2: oklch(0.6231 0.1880 259.8145);
  --chart-3: oklch(0.6056 0.2189 292.7172);
  --chart-4: oklch(0.7686 0.1647 70.0804);
  --chart-5: oklch(0.6959 0.1491 162.4796);
  --sidebar: oklch(0.9911 0 0);
  --sidebar-foreground: oklch(0.5452 0 0);
  --sidebar-primary: oklch(0.8348 0.1302 160.9080);
  --sidebar-primary-foreground: oklch(0.2626 0.0147 166.4589);
  --sidebar-accent: oklch(0.9461 0 0);
  --sidebar-accent-foreground: oklch(0.2435 0 0);
  --sidebar-border: oklch(0.9037 0 0);
  --sidebar-ring: oklch(0.8348 0.1302 160.9080);
  --font-sans: Outfit, sans-serif;
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: monospace;
  --radius: 0.5rem;
  --shadow-2xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.09);
  --shadow-xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.09);
  --shadow-sm: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 1px 2px -1px hsl(0 0% 0% / 0.17);
  --shadow: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 1px 2px -1px hsl(0 0% 0% / 0.17);
  --shadow-md: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 2px 4px -1px hsl(0 0% 0% / 0.17);
  --shadow-lg: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 4px 6px -1px hsl(0 0% 0% / 0.17);
  --shadow-xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 8px 10px -1px hsl(0 0% 0% / 0.17);
  --shadow-2xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.43);
  --tracking-normal: 0.025em;
}`,
            dark: `.dark {
  --background: oklch(0.1822 0 0);
  --foreground: oklch(0.9288 0.0126 255.5078);
  --card: oklch(0.2046 0 0);
  --card-foreground: oklch(0.9288 0.0126 255.5078);
  --popover: oklch(0.2603 0 0);
  --popover-foreground: oklch(0.7348 0 0);
  --primary: oklch(0.4365 0.1044 156.7556);
  --primary-foreground: oklch(0.9213 0.0135 167.1556);
  --secondary: oklch(0.2603 0 0);
  --secondary-foreground: oklch(0.9851 0 0);
  --muted: oklch(0.2393 0 0);
  --muted-foreground: oklch(0.7122 0 0);
  --accent: oklch(0.3132 0 0);
  --accent-foreground: oklch(0.9851 0 0);
  --destructive: oklch(0.3123 0.0852 29.7877);
  --destructive-foreground: oklch(0.9368 0.0045 34.3092);
  --border: oklch(0.2809 0 0);
  --input: oklch(0.2603 0 0);
  --ring: oklch(0.8003 0.1821 151.7110);
  --chart-1: oklch(0.8003 0.1821 151.7110);
  --chart-2: oklch(0.7137 0.1434 254.6240);
  --chart-3: oklch(0.7090 0.1592 293.5412);
  --chart-4: oklch(0.8369 0.1644 84.4286);
  --chart-5: oklch(0.7845 0.1325 181.9120);
  --sidebar: oklch(0.1822 0 0);
  --sidebar-foreground: oklch(0.6301 0 0);
  --sidebar-primary: oklch(0.4365 0.1044 156.7556);
  --sidebar-primary-foreground: oklch(0.9213 0.0135 167.1556);
  --sidebar-accent: oklch(0.3132 0 0);
  --sidebar-accent-foreground: oklch(0.9851 0 0);
  --sidebar-border: oklch(0.2809 0 0);
  --sidebar-ring: oklch(0.8003 0.1821 151.7110);
  --font-sans: Outfit, sans-serif;
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: monospace;
  --radius: 0.5rem;
  --shadow-2xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.09);
  --shadow-xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.09);
  --shadow-sm: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 1px 2px -1px hsl(0 0% 0% / 0.17);
  --shadow: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 1px 2px -1px hsl(0 0% 0% / 0.17);
  --shadow-md: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 2px 4px -1px hsl(0 0% 0% / 0.17);
  --shadow-lg: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 4px 6px -1px hsl(0 0% 0% / 0.17);
  --shadow-xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.17), 0px 8px 10px -1px hsl(0 0% 0% / 0.17);
  --shadow-2xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.43);
}`,
        },
    },
    "tangerine": {
        name: "Tangerine",
        css: {
            light: `:root {
  --background: oklch(0.9383 0.0042 236.4993);
  --foreground: oklch(0.3211 0 0);
  --card: oklch(1.0000 0 0);
  --card-foreground: oklch(0.3211 0 0);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.3211 0 0);
  --primary: oklch(0.6397 0.1720 36.4421);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9670 0.0029 264.5419);
  --secondary-foreground: oklch(0.4461 0.0263 256.8018);
  --muted: oklch(0.9846 0.0017 247.8389);
  --muted-foreground: oklch(0.5510 0.0234 264.3637);
  --accent: oklch(0.9119 0.0222 243.8174);
  --accent-foreground: oklch(0.3791 0.1378 265.5222);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.9022 0.0052 247.8822);
  --input: oklch(0.9700 0.0029 264.5420);
  --ring: oklch(0.6397 0.1720 36.4421);
  --chart-1: oklch(0.7156 0.0605 248.6845);
  --chart-2: oklch(0.7875 0.0917 35.9616);
  --chart-3: oklch(0.5778 0.0759 254.1573);
  --chart-4: oklch(0.5016 0.0849 259.4902);
  --chart-5: oklch(0.4241 0.0952 264.0306);
  --sidebar: oklch(0.9030 0.0046 258.3257);
  --sidebar-foreground: oklch(0.3211 0 0);
  --sidebar-primary: oklch(0.6397 0.1720 36.4421);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.9119 0.0222 243.8174);
  --sidebar-accent-foreground: oklch(0.3791 0.1378 265.5222);
  --sidebar-border: oklch(0.9276 0.0058 264.5313);
  --sidebar-ring: oklch(0.6397 0.1720 36.4421);
  --font-sans: Inter, sans-serif;
  --font-serif: Source Serif 4, serif;
  --font-mono: JetBrains Mono, monospace;
  --radius: 0.75rem;
  --shadow-2xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.25);
}
`,
            dark: `.dark {
  --background: oklch(0.2598 0.0306 262.6666);
  --foreground: oklch(0.9219 0 0);
  --card: oklch(0.3106 0.0301 268.6365);
  --card-foreground: oklch(0.9219 0 0);
  --popover: oklch(0.2900 0.0249 268.3986);
  --popover-foreground: oklch(0.9219 0 0);
  --primary: oklch(0.6397 0.1720 36.4421);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.3095 0.0266 266.7132);
  --secondary-foreground: oklch(0.9219 0 0);
  --muted: oklch(0.3095 0.0266 266.7132);
  --muted-foreground: oklch(0.7155 0 0);
  --accent: oklch(0.3380 0.0589 267.5867);
  --accent-foreground: oklch(0.8823 0.0571 254.1284);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.3843 0.0301 269.7337);
  --input: oklch(0.3843 0.0301 269.7337);
  --ring: oklch(0.6397 0.1720 36.4421);
  --chart-1: oklch(0.7156 0.0605 248.6845);
  --chart-2: oklch(0.7693 0.0876 34.1875);
  --chart-3: oklch(0.5778 0.0759 254.1573);
  --chart-4: oklch(0.5016 0.0849 259.4902);
  --chart-5: oklch(0.4241 0.0952 264.0306);
  --sidebar: oklch(0.3100 0.0283 267.7408);
  --sidebar-foreground: oklch(0.9219 0 0);
  --sidebar-primary: oklch(0.6397 0.1720 36.4421);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.3380 0.0589 267.5867);
  --sidebar-accent-foreground: oklch(0.8823 0.0571 254.1284);
  --sidebar-border: oklch(0.3843 0.0301 269.7337);
  --sidebar-ring: oklch(0.6397 0.1720 36.4421);
  --font-sans: Inter, sans-serif;
  --font-serif: Source Serif 4, serif;
  --font-mono: JetBrains Mono, monospace;
  --radius: 0.75rem;
  --shadow-2xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0px 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.10), 0px 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0px 1px 3px 0px hsl(0 0% 0% / 0.25);
}`,
        },
    },
    twitter: {
        name: "Twitter",
        css: {
            light: `:root {
  --background: oklch(1.0000 0 0);
  --foreground: oklch(0.1884 0.0128 248.5103);
  --card: oklch(0.9784 0.0011 197.1387);
  --card-foreground: oklch(0.1884 0.0128 248.5103);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.1884 0.0128 248.5103);
  --primary: oklch(0.6723 0.1606 244.9955);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.1884 0.0128 248.5103);
  --secondary-foreground: oklch(1.0000 0 0);
  --muted: oklch(0.9222 0.0013 286.3737);
  --muted-foreground: oklch(0.1884 0.0128 248.5103);
  --accent: oklch(0.9392 0.0166 250.8453);
  --accent-foreground: oklch(0.6723 0.1606 244.9955);
  --destructive: oklch(0.6188 0.2376 25.7658);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.9317 0.0118 231.6594);
  --input: oklch(0.9809 0.0025 228.7836);
  --ring: oklch(0.6818 0.1584 243.3540);
  --chart-1: oklch(0.6723 0.1606 244.9955);
  --chart-2: oklch(0.6907 0.1554 160.3454);
  --chart-3: oklch(0.8214 0.1600 82.5337);
  --chart-4: oklch(0.7064 0.1822 151.7125);
  --chart-5: oklch(0.5919 0.2186 10.5826);
  --sidebar: oklch(0.9784 0.0011 197.1387);
  --sidebar-foreground: oklch(0.1884 0.0128 248.5103);
  --sidebar-primary: oklch(0.6723 0.1606 244.9955);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.9392 0.0166 250.8453);
  --sidebar-accent-foreground: oklch(0.6723 0.1606 244.9955);
  --sidebar-border: oklch(0.9271 0.0101 238.5177);
  --sidebar-ring: oklch(0.6818 0.1584 243.3540);
  --font-sans: Open Sans, sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: Menlo, monospace;
  --radius: 1.3rem;
  --shadow-2xs: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-xs: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-sm: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 1px 2px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 1px 2px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-md: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 2px 4px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-lg: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 4px 6px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-xl: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 8px 10px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-2xl: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
}`,
            dark: `.dark {
  --background: oklch(0 0 0);
  --foreground: oklch(0.9328 0.0025 228.7857);
  --card: oklch(0.2097 0.0080 274.5332);
  --card-foreground: oklch(0.8853 0 0);
  --popover: oklch(0 0 0);
  --popover-foreground: oklch(0.9328 0.0025 228.7857);
  --primary: oklch(0.6692 0.1607 245.0110);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.9622 0.0035 219.5331);
  --secondary-foreground: oklch(0.1884 0.0128 248.5103);
  --muted: oklch(0.2090 0 0);
  --muted-foreground: oklch(0.5637 0.0078 247.9662);
  --accent: oklch(0.1928 0.0331 242.5459);
  --accent-foreground: oklch(0.6692 0.1607 245.0110);
  --destructive: oklch(0.6188 0.2376 25.7658);
  --destructive-foreground: oklch(1.0000 0 0);
  --border: oklch(0.2674 0.0047 248.0045);
  --input: oklch(0.3020 0.0288 244.8244);
  --ring: oklch(0.6818 0.1584 243.3540);
  --chart-1: oklch(0.6723 0.1606 244.9955);
  --chart-2: oklch(0.6907 0.1554 160.3454);
  --chart-3: oklch(0.8214 0.1600 82.5337);
  --chart-4: oklch(0.7064 0.1822 151.7125);
  --chart-5: oklch(0.5919 0.2186 10.5826);
  --sidebar: oklch(0.2097 0.0080 274.5332);
  --sidebar-foreground: oklch(0.8853 0 0);
  --sidebar-primary: oklch(0.6818 0.1584 243.3540);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(0.1928 0.0331 242.5459);
  --sidebar-accent-foreground: oklch(0.6692 0.1607 245.0110);
  --sidebar-border: oklch(0.3795 0.0220 240.5943);
  --sidebar-ring: oklch(0.6818 0.1584 243.3540);
  --font-sans: Open Sans, sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: Menlo, monospace;
  --radius: 1.3rem;
  --shadow-2xs: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-xs: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-sm: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 1px 2px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 1px 2px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-md: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 2px 4px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-lg: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 4px 6px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-xl: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00), 0px 8px 10px -1px hsl(202.8169 89.1213% 53.1373% / 0.00);
  --shadow-2xl: 0px 2px 0px 0px hsl(202.8169 89.1213% 53.1373% / 0.00);
}`,
        },
    },
    // "twitter": {
    //     name: "Twitter",
    //     css: {
    //         light:``,
    //         dark:``,
    //     },
    // },


} as const;

export type Theme = keyof typeof themes;

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
    theme: "default",
    setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ColorThemeProvider({
    children,
    defaultTheme = "default",
    storageKey = "ui-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return defaultTheme;
        const stored = localStorage.getItem(storageKey) as Theme;
        return stored && stored in themes ? stored : defaultTheme;
    });

    useEffect(() => {
        const root = document.documentElement;
        const isDark = root.classList.contains("dark");
        const selectedTheme = themes[theme];
        const themeCss = isDark ? selectedTheme.css.dark : selectedTheme.css.light;

        const styleElement = document.createElement("style");
        styleElement.innerHTML = themeCss;
        document.head.appendChild(styleElement);

        return () => {
            document.head.removeChild(styleElement);
        };
    }, [theme]);

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === "attributes" &&
                    mutation.attributeName === "class"
                ) {
                    const root = document.documentElement;
                    const isDark = root.classList.contains("dark");
                    const selectedTheme = themes[theme];
                    const themeCss = isDark
                        ? selectedTheme.css.dark
                        : selectedTheme.css.light;

                    const styleElement = document.createElement("style");
                    styleElement.innerHTML = themeCss;
                    document.head.appendChild(styleElement);

                    return () => {
                        document.head.removeChild(styleElement);
                    };
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, [theme]);

    const value = {
        theme,
        setTheme: (newTheme: Theme) => {
            if (typeof window !== "undefined") {
                localStorage.setItem(storageKey, newTheme);
            }
            setTheme(newTheme);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
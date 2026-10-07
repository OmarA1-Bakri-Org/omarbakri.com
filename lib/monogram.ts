export type MonogramVariant = "refined" | "compact";

export const MONOGRAM_GOLD = "#C4A265";

// Approved vector geometry, shared by browser SVGs and generated PNG assets.
export const MONOGRAM_PATHS = {
  refined: [
    { d: "M75 15C107 15 126 52 126 100C126 148 107 185 75 185C43 185 24 148 24 100C24 52 43 15 75 15Z", width: 3.6 },
    { d: "M49 104L75 36L101 104M56 93H97M75 93V162M75 96C103 96 108 121 75 127C112 128 109 160 75 160", width: 4.5 },
  ],
  compact: [
    { d: "M75 17C107 17 125 53 125 100C125 147 107 183 75 183C43 183 25 147 25 100C25 53 43 17 75 17Z", width: 5.5 },
    { d: "M49 104L75 40L101 104M56 94H98M75 94V159M75 98C103 98 108 122 75 127C111 129 108 157 75 157", width: 6 },
  ],
} as const;

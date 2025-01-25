export const certificateCriteria = {
  Income: [
    "Income Certificate",
    "1. Ration Card",
    "2. Aadhar Card",
    "3. Land Tax",
  ],
  Possession: [
    "Possession Certificate",
    "1. Aadharam",
    "2. Land Tax",
    "3. Aadhar",
  ],
  "Community /caste": [
    "Community /Caste Certificate",
    "1. Aadhar",
    "2. School Certificate (SSLC)",
    "3. Father's School Certificate",
    "4. Birth Certificate",
    "5. Ration Card",
  ],
  "Nativity /domicile": [
    "Nativity /Domicile Certificate",
    "1. Aadhar",
    "2. School Certificate",
    "3. Ration Card",
    "4. Birth Certificate",
  ],
} as const;

export type CertificateOptions = keyof typeof certificateCriteria;

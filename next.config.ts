import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 används för skärmbilderna i casen, där text och tunna linjer
    // annars blir suddiga. Övriga bilder kör på standardvärdet 75.
    qualities: [75, 90],
  },
};

export default nextConfig;

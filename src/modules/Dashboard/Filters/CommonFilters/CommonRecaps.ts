export const countryRecap = () => "Země ČR";
export const categoryTypeRecap = (category: string) => `katergorie ${category}`;
export const districtTypeRecap = (district: string) => `oblast ${district}`;
export const areaTypeRecap = (area: [string, string | undefined]) => {
  let recap = "";

  if (area[0]) recap += `od ${area[0]} m2`;
  if (area[1]) recap += ` ${area[0] ? " " : ""}do ${area[1]} m2`;

  return recap;
};

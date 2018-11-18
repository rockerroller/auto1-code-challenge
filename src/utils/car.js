import { capitalize } from '.';

export function getLabelName(item) {
  if (!item) {
    return null;
  }

  const { manufacturerName, modelName } = item;
  return `${manufacturerName} ${modelName}`;
}

export function getLabelInfo(item) {
  if (!item) {
    return null;
  }

  const { stockNumber, color, mileage, fuelType } = item;
  return `Stock # ${stockNumber} - ` +
    `${mileage.number.toLocaleString('pt-BR')} ${mileage.unit.toUpperCase()} - ` +
    `${capitalize(fuelType)} - ` +
    `${capitalize(color)}`;
}

import categoryMap from '../constants/categoryMap';

export function getMappedCategory(category: string) {
  if (category in categoryMap) {
    return categoryMap[category as keyof typeof categoryMap];
  }
  return category;
}

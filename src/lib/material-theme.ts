/**
 * Main utilities for Material Theme integration
 */

import { IDefaults } from "../../typings/interfaces/defaults";

export const materialThemes = [
  'Inscist',
  'Inscist High Contrast',
  'Inscist Darker',
  'Inscist Darker High Contrast',
  'Inscist Palenight',
  'Inscist Palenight High Contrast',
  'Inscist Ocean',
  'Inscist Ocean High Contrast',
  'Inscist Lighter',
  'Inscist Lighter High Contrast'
];

export const isMaterialTheme = (currentThemeId: string): boolean =>
  materialThemes.includes(currentThemeId);

export const getThemeIconVariant = (defaults: IDefaults, currentThemeId: string): string | undefined => {
  const found = Object.keys(defaults.themeIconVariants)
    .find(variant => currentThemeId.includes(variant));

  return found ? found.toLowerCase() : undefined;
};

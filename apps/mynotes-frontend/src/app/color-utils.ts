export type ColorTone = 'black' | 'white';

export class ColorUtils {
  static getOppositeTone(hex: string): ColorTone {
    const LUMINANCE_THRESHOLD = 186;

    if (hex.startsWith('#')) hex = hex.slice(1);

    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const luminance = r * 0.299 + g * 0.587 + b * 0.114;
    const tone = luminance > LUMINANCE_THRESHOLD ? 'black' : 'white';

    return tone;
  }
}

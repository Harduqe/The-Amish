export type ImageFormat = 'avif' | 'webp';

export function pexelsImageUrl(
  source: string,
  width: number,
  aspectRatio: number,
  format?: ImageFormat,
): string {
  const url = new URL(source);
  url.searchParams.set('w', String(width));
  url.searchParams.set('h', String(Math.round(width / aspectRatio)));
  if (format) url.searchParams.set('fm', format);
  else url.searchParams.delete('fm');
  return url.toString();
}

export function pexelsSrcSet(
  source: string,
  widths: number[],
  aspectRatio: number,
  format?: ImageFormat,
): string {
  return widths
    .map((width) => `${pexelsImageUrl(source, width, aspectRatio, format)} ${width}w`)
    .join(', ');
}

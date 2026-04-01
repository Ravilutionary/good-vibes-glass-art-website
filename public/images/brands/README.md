# Brand Logos

Place your brand logo images in this folder. 

For the best visual appearance in the Brand Slider, we recommend:
- Using **transparent PNGs** or **SVGs**.
- Keeping the logos roughly the same height (e.g., `100px` tall).
- Using white or light-colored logos since the website has a dark theme.

### How to update the Brand Slider:

1. Upload your images to this folder (`public/images/brands/`).
2. Open `src/components/sections/BrandSlider.astro`.
3. Replace the text placeholders in the `brands` array with `<img>` tags pointing to your new images.

Example:
```html
<img src="/images/brands/elfbar.png" alt="Elf Bar" class="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
```

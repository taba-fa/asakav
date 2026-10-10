/* Project map polish only — loaded after the original script.js. */
document.addEventListener('DOMContentLoaded', () => {
  const mapLand = document.getElementById('iran-map-land');
  const terrainClip = document.getElementById('iran-map-terrain-clip');
  const markerNodes = Array.from(document.querySelectorAll('#map-project-markers .map-project-point'));
  const nextButton = document.getElementById('project-next');
  const svgNS = 'http://www.w3.org/2000/svg';

  // Clip the terrain colors to the dynamically drawn Iran outline.
  if (mapLand && terrainClip) {
    terrainClip.setAttribute('d', mapLand.getAttribute('d') || '');
  }

  if (!markerNodes.length) return;

  // Replace the original circular markers with compact map pins, preserving the
  // parent SVG groups and their click / keyboard listeners from script.js.
  markerNodes.forEach(node => {
    const labelText = node.querySelector('.map-project-label')?.textContent?.trim() || '';
    node.replaceChildren();

    const make = (tag, attrs, textContent) => {
      const element = document.createElementNS(svgNS, tag);
      Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
      if (textContent != null) element.textContent = textContent;
      return element;
    };

    const pinPath = 'M0 0 C-3.3 -4.6 -11.4 -12.1 -11.4 -20.1 A11.4 11.4 0 1 1 11.4 -20.1 C11.4 -12.1 3.3 -4.6 0 0 Z';
    node.append(
      make('path', { class: 'map-pin-shadow', d: pinPath }),
      make('path', { class: 'map-pin-shape', d: pinPath }),
      make('circle', { class: 'map-pin-center', cx: '0', cy: '-20', r: '4.1' }),
      make('text', { class: 'map-project-label', x: '0', y: '14', 'text-anchor': 'middle' }, labelText)
    );
  });

  const getActiveIndex = () => {
    const active = markerNodes.findIndex(node => node.classList.contains('active'));
    return active >= 0 ? active : 0;
  };

  // The button cycles to another project but no longer advertises an index or
  // uses the old "next project" wording.
  if (nextButton) {
    nextButton.addEventListener('click', event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      const nextIndex = (getActiveIndex() + 1) % markerNodes.length;
      markerNodes[nextIndex].dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
    }, true);
  }
});

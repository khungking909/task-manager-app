import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: `
    <div style="display: flex; align-items: center; gap: 12px" id="yen_project">
      <img src="./logo.jpg" alt="${window['STORYBOOK_APP_NAME']}" height="48px" />
      <div>
        <div class="app-name" style="display: none;">${window['STORYBOOK_APP_NAME']}</div>
        <div class="app-version" style="font-size: 0.65em; color: #888; display: none;">
          <span>
            ${window['STORYBOOK_APP_VERSION']}
          </span>
        </div>
      </div>
    </div>
  `,
});

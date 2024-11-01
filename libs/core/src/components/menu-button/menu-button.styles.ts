import { css } from 'lit'

const style = css`
  @layer tokens, a11y, core, variants, sizes, sets, disabled;

  @layer tokens {
    :host {
      --_gap: 8px;

      --_padding-inline: var(--gds-space-m);
      --_padding-block: var(--gds-space-xs);

      --_color-bg: transparent;
      --_color-text: var(--gds-sys-color-primary-text);
      --_color-border: transparent;

      --_color-outline-alpha: 60%;
      --_color-outline: var(--gds-sys-color-border-stroke);

      --_font-size: 1rem;
      --_font-weight: 400;
      --_line-height: 1.25;

      display: inline-block;
      isolation: isolate;
      max-width: 100%;
      height: 100%;
    }
  }

  @layer core {
    .button {
      align-items: center;

      background-color: var(--_color-bg);

      border-color: var(--_color-border);
      border-style: none;
      border-bottom-style: solid;
      border-bottom-width: 2px;

      box-sizing: border-box;
      color: var(--_color-text);
      color-scheme: dark light;
      cursor: pointer;

      display: inline-flex;
      gap: var(--_gap);
      height: 100%;

      inline-size: 100%;
      justify-content: space-between;
      justify-items: center;
      outline-color: transparent;
      outline-offset: 2px;
      outline-style: solid;
      outline-width: 2px;
      padding-block: var(--_padding-block);
      padding-inline: var(--_padding-inline);
      position: relative;
      font-family: inherit;
      font-size: var(--_font-size);
      font-weight: var(--_font-weight);
      line-height: var(--_line-height);

      &:focus-visible {
        outline-color: color-mix(
          in srgb,
          var(--_color-outline),
          transparent var(--_color-outline-alpha)
        );
        border-radius: 2px;
        overflow: visible;
      }

      &:hover,
      &.selected:hover,
      &:active {
        --_color-bg: var(--gds-sys-color-base200);
        --_color-border: var(--gds-sys-color-base600);
      }

      &.selected {
        --_color-bg: var(--gds-sys-color-base100);
        --_color-border: var(--gds-sys-color-base700);
      }

      slot:not([name]) {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .compact {
      display: flex;
      flex-direction: column;
      --_padding-inline: var(--gds-space-s);
      --_gap: 1px;
      font-size: 0.875rem;
      height: 56px;
      justify-content: center;

      & > slot[name] {
        order: 0;
      }
      & > slot:not([name]) {
        order: 1;
      }
    }

    a {
      text-decoration: none;
    }
  }

  @layer disabled {
    :disabled {
      --_color-bg: var(--gds-sys-color-container-container-disabled);
      border-color: var(--_color-bg);
      color: var(--gds-sys-color-content-content-disabled);
      pointer-events: none;
    }
  }
`
export default style

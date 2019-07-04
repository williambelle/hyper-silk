'use strict';

const backgroundColor = '#fff';
const foregroundColor = '#000';
const cursorColor = '#000';
const borderColor = '#e1e4e8';
const tabColor = '#e6dfcb';
const headerColor = '#000';

const colors = [
  backgroundColor,
  '#C51E14', // red
  '#1DC121', // green
  '#C7C329', // yellow
  '#0A2FC4', // blue
  '#C839C5', // violet
  '#20C5C6', // cyan
  '#C7C7C7', // light gray
  '#686868', // medium gray
  '#FD6F6B', // red
  '#000000', // green
  '#FFFA72', // yellow
  '#6A76FB', // blue
  '#FD7CFC', // violet
  '#68FDFE', // cyan
  '#FFFFFF', // white
  foregroundColor
];

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      * {
        -webkit-font-feature-settings: "liga" on, "calt" on, "dlig" on !important;
        text-rendering: optimizeLegibility !important;
      }
      .hyperterm_main {
        border: transparent !important;
      }
      .cursor-node {
        width: .325rem !important;
      }
      .tabs_list {
        border-color: transparent !important;
      }
      .tab_tab {
        border: transparent !important;
        color: ${foregroundColor} !important;
        background-color: ${tabColor};
      }
      .tabs_title {
        color: ${foregroundColor} !important;
      }
      .tab_tab.tab_active:before {
        border-bottom: transparent !important;
      }
      .tab_tab.tab_active {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
        border-bottom: none !important;
        font-weight: bold;
      }
      .tabs_nav {
        background-color: ${tabColor} !important;
      }
      .tabs_borderShim {
        border: transparent;
      }
      .splitpane_divider {
        background-color: ${tabColor} !important;
      }
      .header_shape
      {
        color: ${headerColor};
      }
      .header_appTitle
      {
        color: ${headerColor};
      }
    `
  });
};

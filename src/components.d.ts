/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  RouterHistory,
} from '@stencil/router';

export namespace Components {
  interface NfyButton {
    'color': 'default' | 'primary' | 'secondary' | undefined;
    'type': 'button' | 'submit' | undefined;
    'variant': 'text' | 'outlined' | 'contained' | undefined;
  }
  interface NfyContainer {}
  interface NfyFileCard {
    'darkMode': boolean;
    'file': any;
  }
  interface NfyFiles {
    'darkMode': boolean;
  }
  interface NfyHeader {
    'darkMode': boolean;
    'nav': boolean;
  }
  interface NfyHome {
    'alert': boolean;
    'darkMode': boolean;
  }
  interface NfyLogin {
    'history': RouterHistory;
  }
  interface NfyNotesList {
    'darkMode': boolean;
    'notes': any[];
  }
  interface NfyRegister {
    'history': RouterHistory;
  }
  interface NfyRoot {}
  interface NfyTextfield {
    'label': string;
    'name': string;
    'type': 'text' | 'password' | 'email' | undefined;
    'value': string;
  }
  interface NfyTypography {
    'variant': 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | undefined;
  }
}

declare global {


  interface HTMLNfyButtonElement extends Components.NfyButton, HTMLStencilElement {}
  var HTMLNfyButtonElement: {
    prototype: HTMLNfyButtonElement;
    new (): HTMLNfyButtonElement;
  };

  interface HTMLNfyContainerElement extends Components.NfyContainer, HTMLStencilElement {}
  var HTMLNfyContainerElement: {
    prototype: HTMLNfyContainerElement;
    new (): HTMLNfyContainerElement;
  };

  interface HTMLNfyFileCardElement extends Components.NfyFileCard, HTMLStencilElement {}
  var HTMLNfyFileCardElement: {
    prototype: HTMLNfyFileCardElement;
    new (): HTMLNfyFileCardElement;
  };

  interface HTMLNfyFilesElement extends Components.NfyFiles, HTMLStencilElement {}
  var HTMLNfyFilesElement: {
    prototype: HTMLNfyFilesElement;
    new (): HTMLNfyFilesElement;
  };

  interface HTMLNfyHeaderElement extends Components.NfyHeader, HTMLStencilElement {}
  var HTMLNfyHeaderElement: {
    prototype: HTMLNfyHeaderElement;
    new (): HTMLNfyHeaderElement;
  };

  interface HTMLNfyHomeElement extends Components.NfyHome, HTMLStencilElement {}
  var HTMLNfyHomeElement: {
    prototype: HTMLNfyHomeElement;
    new (): HTMLNfyHomeElement;
  };

  interface HTMLNfyLoginElement extends Components.NfyLogin, HTMLStencilElement {}
  var HTMLNfyLoginElement: {
    prototype: HTMLNfyLoginElement;
    new (): HTMLNfyLoginElement;
  };

  interface HTMLNfyNotesListElement extends Components.NfyNotesList, HTMLStencilElement {}
  var HTMLNfyNotesListElement: {
    prototype: HTMLNfyNotesListElement;
    new (): HTMLNfyNotesListElement;
  };

  interface HTMLNfyRegisterElement extends Components.NfyRegister, HTMLStencilElement {}
  var HTMLNfyRegisterElement: {
    prototype: HTMLNfyRegisterElement;
    new (): HTMLNfyRegisterElement;
  };

  interface HTMLNfyRootElement extends Components.NfyRoot, HTMLStencilElement {}
  var HTMLNfyRootElement: {
    prototype: HTMLNfyRootElement;
    new (): HTMLNfyRootElement;
  };

  interface HTMLNfyTextfieldElement extends Components.NfyTextfield, HTMLStencilElement {}
  var HTMLNfyTextfieldElement: {
    prototype: HTMLNfyTextfieldElement;
    new (): HTMLNfyTextfieldElement;
  };

  interface HTMLNfyTypographyElement extends Components.NfyTypography, HTMLStencilElement {}
  var HTMLNfyTypographyElement: {
    prototype: HTMLNfyTypographyElement;
    new (): HTMLNfyTypographyElement;
  };
  interface HTMLElementTagNameMap {
    'nfy-button': HTMLNfyButtonElement;
    'nfy-container': HTMLNfyContainerElement;
    'nfy-file-card': HTMLNfyFileCardElement;
    'nfy-files': HTMLNfyFilesElement;
    'nfy-header': HTMLNfyHeaderElement;
    'nfy-home': HTMLNfyHomeElement;
    'nfy-login': HTMLNfyLoginElement;
    'nfy-notes-list': HTMLNfyNotesListElement;
    'nfy-register': HTMLNfyRegisterElement;
    'nfy-root': HTMLNfyRootElement;
    'nfy-textfield': HTMLNfyTextfieldElement;
    'nfy-typography': HTMLNfyTypographyElement;
  }
}

declare namespace LocalJSX {
  interface NfyButton {
    'color'?: 'default' | 'primary' | 'secondary' | undefined;
    'type'?: 'button' | 'submit' | undefined;
    'variant'?: 'text' | 'outlined' | 'contained' | undefined;
  }
  interface NfyContainer {}
  interface NfyFileCard {
    'darkMode'?: boolean;
    'file'?: any;
    'onDeleteFile'?: (event: CustomEvent<any>) => void;
  }
  interface NfyFiles {
    'darkMode'?: boolean;
  }
  interface NfyHeader {
    'darkMode'?: boolean;
    'nav'?: boolean;
    'onLoggedOut'?: (event: CustomEvent<any>) => void;
    'onToggleDarkMode'?: (event: CustomEvent<any>) => void;
  }
  interface NfyHome {
    'alert'?: boolean;
    'darkMode'?: boolean;
  }
  interface NfyLogin {
    'history'?: RouterHistory;
    'onLoggedIn'?: (event: CustomEvent<any>) => void;
  }
  interface NfyNotesList {
    'darkMode'?: boolean;
    'notes'?: any[];
    'onDeleteNote'?: (event: CustomEvent<any>) => void;
    'onUpdateNote'?: (event: CustomEvent<any>) => void;
  }
  interface NfyRegister {
    'history'?: RouterHistory;
    'onLoggedIn'?: (event: CustomEvent<any>) => void;
  }
  interface NfyRoot {}
  interface NfyTextfield {
    'label'?: string;
    'name'?: string;
    'onHandleInput'?: (event: CustomEvent<any>) => void;
    'type'?: 'text' | 'password' | 'email' | undefined;
    'value'?: string;
  }
  interface NfyTypography {
    'variant'?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | undefined;
  }

  interface IntrinsicElements {
    'nfy-button': NfyButton;
    'nfy-container': NfyContainer;
    'nfy-file-card': NfyFileCard;
    'nfy-files': NfyFiles;
    'nfy-header': NfyHeader;
    'nfy-home': NfyHome;
    'nfy-login': NfyLogin;
    'nfy-notes-list': NfyNotesList;
    'nfy-register': NfyRegister;
    'nfy-root': NfyRoot;
    'nfy-textfield': NfyTextfield;
    'nfy-typography': NfyTypography;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'nfy-button': LocalJSX.NfyButton & JSXBase.HTMLAttributes<HTMLNfyButtonElement>;
      'nfy-container': LocalJSX.NfyContainer & JSXBase.HTMLAttributes<HTMLNfyContainerElement>;
      'nfy-file-card': LocalJSX.NfyFileCard & JSXBase.HTMLAttributes<HTMLNfyFileCardElement>;
      'nfy-files': LocalJSX.NfyFiles & JSXBase.HTMLAttributes<HTMLNfyFilesElement>;
      'nfy-header': LocalJSX.NfyHeader & JSXBase.HTMLAttributes<HTMLNfyHeaderElement>;
      'nfy-home': LocalJSX.NfyHome & JSXBase.HTMLAttributes<HTMLNfyHomeElement>;
      'nfy-login': LocalJSX.NfyLogin & JSXBase.HTMLAttributes<HTMLNfyLoginElement>;
      'nfy-notes-list': LocalJSX.NfyNotesList & JSXBase.HTMLAttributes<HTMLNfyNotesListElement>;
      'nfy-register': LocalJSX.NfyRegister & JSXBase.HTMLAttributes<HTMLNfyRegisterElement>;
      'nfy-root': LocalJSX.NfyRoot & JSXBase.HTMLAttributes<HTMLNfyRootElement>;
      'nfy-textfield': LocalJSX.NfyTextfield & JSXBase.HTMLAttributes<HTMLNfyTextfieldElement>;
      'nfy-typography': LocalJSX.NfyTypography & JSXBase.HTMLAttributes<HTMLNfyTypographyElement>;
    }
  }
}



import { createColorPalette, FASTDesignSystemProvider, parseColorString, FASTButton } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";
import {
  defineDesignSystemProvider,
  designSystemProperty,
  DesignSystemProviderTemplate as template
} from "@microsoft/fast-foundation";


@defineDesignSystemProvider({
  name: "my-design-system-provider",
  template,
  styles: css`
    :host {
      display: inline-block;
    }
  `
})
export class MyDesignSystemProvider extends FASTDesignSystemProvider {
  @designSystemProperty({default: createColorPalette(parseColorString("#FF0000"))})
  neutralPalette: any;
}

FASTButton;
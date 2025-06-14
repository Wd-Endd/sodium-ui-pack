import { FontType, UI } from "jsonui-scripting";

export class Common {
    static globalText = UI.label({
        size: ["default", 10],
        font_type: FontType.Default,
        max_size: ["100%", 10],
    })
}
import { Types, UI } from "jsonui-scripting";

export class CommonToggles {
    static toggleTemplate = UI.panel({
        "$toggle_view_binding_name|default": "this_toggle",

        "$unchecked_control|default": "common.empty_panel",
        "$checked_control|default": "common.empty_panel",
        "$unchecked_hover_control|default": "common.empty_panel",
        "$checked_hover_control|default": "common.empty_panel",
        "$unchecked_locked_control|default": "common.empty_panel",
        "$unchecked_locked_hover_control|default": "common.empty_panel",
        "$checked_locked_control|default": "common.empty_panel",
        "$checked_locked_hover_control|default": "common.empty_panel",
    }).addChild(UI.extend<Types.Toggle, string>("common.toggle", {
    }), {}, "$toggle_view_binding_name")
}
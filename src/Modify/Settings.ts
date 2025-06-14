import { BindingType, UI, Vanilla } from "jsonui-scripting";
import { SodiumOptions } from "../SodiumOptions";

Vanilla.settingsCommon.dynamicDialogScreen({
    "$screen_content": UI.panel()
        .addChild(UI.extend("settings_common.settings_content")
            .addBindings({
                binding_type: BindingType.View,
                source_control_name: "video_button_toggle",
                source_property_name: "(not #toggle_state)",
                target_property_name: "#visible",
            })
        )
        .addChild(SodiumOptions.mainPanel
            .addBindings({
                binding_type: BindingType.View,
                source_control_name: "video_button_toggle",
                source_property_name: "#toggle_state",
                target_property_name: "#visible",
            })
        )
        .getPath(),
})
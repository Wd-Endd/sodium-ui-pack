import { BindingType, Orientation, Types, UI } from "asajs"


export class SodiumSections {
    static sectionList: string[] = [];
    static baseSection(bind: string, ui: UI<Types.StackPanel>) {
        ui.setProperties({
            orientation: Orientation.Vertical,
            size: ["100%","100%c"],
        }).addBindings({
            binding_type: BindingType.View,
            source_control_name: bind,
            source_property_name: "#toggle_state",
            target_property_name: "#visible",
        });
        this.sectionList.push(ui.getPath());
        return ui;
    }

    static general = this.baseSection("sodium_general_tab", UI.stackPanel()
        .addChild(UI.panel({
            size: ["100%", 40],
        }).addChild(UI.extend("common.dirt_background", {
            tiled: true,
            tiled_scale: [2, 2],
        })))
    )
    static quality = this.baseSection("sodium_quality_tab", UI.stackPanel()
    .addChild(UI.panel({
            size: ["100%", 500],
        }).addChild(UI.extend("common.dirt_background", {
            tiled: true,
            tiled_scale: [2, 2],
        })))
    );

    static sodiumOptionContent = (() => {
        const ui = UI.panel({
            size: ["100%", "100%c"],
        });
        this.sectionList.forEach(value => {
            ui.addChild(value);
        });
        return ui;
    })();
}

// console.log(SodiumSections.sodiumOptionContent);
